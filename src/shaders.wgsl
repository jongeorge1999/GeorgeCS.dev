struct Uniforms {
    modelViewProjectionMatrix : mat4x4<f32>,
    viewProjectionMatrix : mat4x4<f32>,
    lightViewProjectionMatrix : mat4x4<f32>, 
    lightDir : vec4<f32>,
    lightColor : vec4<f32>,
    ambientColor : vec4<f32>,
    skyColor : vec4<f32>,
    cameraPosition : vec4<f32>,
    numTorches : u32,
    _padding : vec3<u32>, // Padding for alignment
    torchPositions : array<vec4<f32>, 16>, // Max 16 torches
}

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(0) @binding(1) var mySampler: sampler;
@group(0) @binding(2) var myTexture: texture_2d_array<f32>;
@group(0) @binding(3) var shadowSampler: sampler_comparison; 
@group(0) @binding(4) var shadowMap: texture_depth_2d;

struct VertexInput {
    @location(0) position : vec3<f32>,
    @location(1) uv : vec2<f32>,
    @location(2) normal : vec3<f32>, 
}

struct InstanceInput {
    @location(3) instancePosition : vec3<f32>,
    @location(4) textureIndex : f32, 
}

struct VertexOutput {
    @builtin(position) Position : vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) @interpolate(flat) textureIndex : u32,
    @location(2) shadowPos : vec3<f32>,
    @location(3) normal : vec3<f32>, 
    @location(4) worldPos : vec3<f32>,
}

@vertex
fn main_vs(input : VertexInput, instance : InstanceInput) -> VertexOutput {
    var output : VertexOutput;
    let worldPosition = input.position + instance.instancePosition;
    output.Position = uniforms.viewProjectionMatrix * vec4<f32>(worldPosition, 1.0);
    output.uv = input.uv;
    output.textureIndex = u32(instance.textureIndex);
    
    // Shadow Coord
    let posFromLight = uniforms.lightViewProjectionMatrix * vec4<f32>(worldPosition, 1.0);
    output.shadowPos = posFromLight.xyz / posFromLight.w;
    
    // Pass precise normal
    output.normal = input.normal; 
    
    // Pass world position for fog
    output.worldPos = worldPosition;
    
    return output;
}

@fragment
fn main_fs(input: VertexOutput) -> @location(0) vec4<f32> {
    // Grass Top Logic
    var finalIndex = input.textureIndex;
    if (finalIndex == 2u && input.normal.y > 0.9) {
        finalIndex = 3u;
    }

    let texColor = textureSample(myTexture, mySampler, input.uv, finalIndex);
    
    // Shadow Calculation (must stay in uniform control flow)
    let shadowUV = vec2<f32>(
        input.shadowPos.x * 0.5 + 0.5,
        -input.shadowPos.y * 0.5 + 0.5
    );
    
    // Bias to prevent acne
    let currentDepth = input.shadowPos.z - 0.003;
    
    let shadowSample = textureSampleCompare(shadowMap, shadowSampler, shadowUV, currentDepth);
    
    var visibility = 1.0;
    if (shadowUV.x >= 0.0 && shadowUV.x <= 1.0 && shadowUV.y >= 0.0 && shadowUV.y <= 1.0 && input.shadowPos.z >= 0.0 && input.shadowPos.z <= 1.0) {
        visibility = shadowSample;
    }
    
    // Dynamic Lighting
    let lightDir = normalize(uniforms.lightDir.xyz);
    let N = normalize(input.normal);
    let diff = max(dot(N, lightDir), 0.0);
    
    // Combine Ambient + Diffuse * Shadow * LightColor
    let ambient = uniforms.ambientColor.rgb;
    let diffuse = uniforms.lightColor.rgb * diff * visibility;
    
    let lighting = ambient + diffuse;
    
    // Torch Point Lights
    var torchLight = vec3<f32>(0.0, 0.0, 0.0);
    for (var i = 0u; i < uniforms.numTorches; i++) {
        let torchPos = uniforms.torchPositions[i].xyz;
        let toLight = torchPos - input.worldPos;
        let dist = length(toLight);
        
        // Attenuation (light fades with distance)
        let maxDist = 12.0; // Torch light radius
        if (dist < maxDist) {
            var attenuation = 1.0 - (dist / maxDist);
            attenuation = attenuation * attenuation; // Squared falloff for more realistic drop-off
            
            let torchColor = vec3<f32>(1.0, 0.7, 0.4); // Warm orange torch light
            torchLight += torchColor * attenuation;
        }
    }
    
    // Emissive Torch Rendering (after shadow calc, skip lighting and fog)
    if (finalIndex == 5u) {
        return vec4<f32>(texColor.rgb, texColor.a);
    }
    
    // Distance Fog
    let camDist = distance(input.worldPos, uniforms.cameraPosition.xyz);
    let fogStart = 140.0; // Start fading fog (within 224 block render distance)
    let fogEnd = 200.0;   // Full fog
    let fogFactor = clamp((camDist - fogStart) / (fogEnd - fogStart), 0.0, 1.0);
    
    let finalColor = mix(texColor.rgb * (lighting + torchLight), uniforms.skyColor.rgb, fogFactor);
    
    return vec4<f32>(finalColor, texColor.a);
}

@vertex
fn shadow_vs(input : VertexInput, instance : InstanceInput) -> @builtin(position) vec4<f32> {
    let worldPosition = input.position + instance.instancePosition;
    return uniforms.lightViewProjectionMatrix * vec4<f32>(worldPosition, 1.0);
}

// --- Entity Renderer (Spider/Player) ---

struct EntityUniforms {
    viewProjectionMatrix : mat4x4<f32>,
    modelMatrix : mat4x4<f32>,
    color : vec4<f32>,
}

@group(0) @binding(0) var<uniform> entityUniforms : EntityUniforms;

struct EntityVertexInput {
    @location(0) position : vec3<f32>,
    // No UV/Normal needed for flat colored cubes
}

struct EntityVertexOutput {
    @builtin(position) Position : vec4<f32>,
    @location(0) color : vec4<f32>,
}

@vertex
fn entity_vs(input : EntityVertexInput) -> EntityVertexOutput {
    var output : EntityVertexOutput;
    let worldPos = entityUniforms.modelMatrix * vec4<f32>(input.position, 1.0);
    output.Position = entityUniforms.viewProjectionMatrix * worldPos;
    
    // Simple directional lighting simulation based on normal?
    // For a cube, we can infer normal from model matrix if we passed it, but let's just use constant color
    // Or simpler: generic lighting.
    // Let's stick to flat color for now, maybe slight tint based on Y?
    output.color = entityUniforms.color;
    return output;
}

@fragment
fn entity_fs(input: EntityVertexOutput) -> @location(0) vec4<f32> {
    return input.color;
}
