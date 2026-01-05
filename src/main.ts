import { mat4, vec3, vec4 } from 'gl-matrix';
// @ts-ignore
import shaderCode from './shaders.wgsl';
// @ts-ignore
import grassImageSrc from './assets/custom_texture.jpg';
import { fbm } from './noise';
import { SimpleRenderer } from './renderer';
import { Spider } from './spider';
import { PlayerModel } from './player';
import { Logger } from './logger';
import { ParticleSystem } from './particles';
import { PickupSystem } from './pickups';

const canvas = document.getElementById('gfx-main') as HTMLCanvasElement;
Logger.log('Canvas element:', canvas);
console.log('Canvas initial size:', canvas.width, 'x', canvas.height);

const adapter = await navigator.gpu.requestAdapter();
console.log('WebGPU Adapter:', adapter);
if (!adapter) throw new Error('WebGPU not supported.');

const device = await adapter.requestDevice();
console.log('WebGPU Device:', device);

const context = canvas.getContext('webgpu');
console.log('WebGPU Context:', context);

const format = navigator.gpu.getPreferredCanvasFormat();
console.log('Preferred format:', format);

// Shadow Map Constants
const SHADOW_SIZE = 2048;

// Global ID counter for instances
let nextId = 0;

context?.configure({ device, format, alphaMode: 'opaque' });
console.log('Context configured');

// --- Texture Loading ---
// --- Texture Loading ---
// @ts-ignore
import dirtImageSrc from './assets/dirt.jpg';
// @ts-ignore
import newGrassImageSrc from './assets/grass_side.jpg';
// @ts-ignore
import grassTopImageSrc from './assets/grass_top.png';
// @ts-ignore
import tntImageSrc from './assets/tnt.png';
// @ts-ignore


// --- Texture Loading ---
async function loadAndResizeBitmap(src: string, width: number, height: number) {
    const img = new Image();
    img.src = src;
    await new Promise(resolve => img.onload = resolve);

    // Resize via Canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2d context');

    ctx.drawImage(img, 0, 0, width, height);
    return await createImageBitmap(canvas);
}

const TEXTURE_SIZE = 256;
console.log('Loading textures...');
console.log('Grass texture source:', grassImageSrc);
console.log('Dirt texture source:', dirtImageSrc);

const [imgCobble, imgDirt, imgNewGrass, imgGrassTop, imgTNT] = await Promise.all([
    loadAndResizeBitmap(grassImageSrc, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(dirtImageSrc, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(newGrassImageSrc, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(grassTopImageSrc, TEXTURE_SIZE, TEXTURE_SIZE),
    loadAndResizeBitmap(tntImageSrc, TEXTURE_SIZE, TEXTURE_SIZE),
]);
console.log('Textures loaded successfully!');

const texture = device.createTexture({
    size: [TEXTURE_SIZE, TEXTURE_SIZE, 5], // Layer count 5 (removed torch)
    format: 'rgba8unorm',
    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
});

device.queue.copyExternalImageToTexture(
    { source: imgCobble },
    { texture: texture, origin: { z: 0 } },
    [TEXTURE_SIZE, TEXTURE_SIZE]
);
device.queue.copyExternalImageToTexture(
    { source: imgDirt },
    { texture: texture, origin: { z: 1 } },
    [TEXTURE_SIZE, TEXTURE_SIZE]
);
device.queue.copyExternalImageToTexture(
    { source: imgNewGrass },
    { texture: texture, origin: { z: 2 } },
    [TEXTURE_SIZE, TEXTURE_SIZE]
);
device.queue.copyExternalImageToTexture(
    { source: imgGrassTop },
    { texture: texture, origin: { z: 3 } },
    [TEXTURE_SIZE, TEXTURE_SIZE]
);
device.queue.copyExternalImageToTexture(
    { source: imgTNT },
    { texture: texture, origin: { z: 4 } },
    [TEXTURE_SIZE, TEXTURE_SIZE]
);

const sampler = device.createSampler({
    magFilter: 'nearest',
    minFilter: 'nearest',
});

const shadowSampler = device.createSampler({
    compare: 'less',
    magFilter: 'linear',
    minFilter: 'linear',
});

const shadowDepthTexture = device.createTexture({
    size: [SHADOW_SIZE, SHADOW_SIZE],
    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
    format: 'depth32float',
});

// --- Entities ---
// Systems are now instantiated after CHUNK constants (line ~207)

interface ActiveTNT {
    position: vec3;
    scale: vec3;
    scaleDir: number;
    timer: number;
}
const activeTNTs: ActiveTNT[] = [];

let isRiding = false;

// --- Vertex Data (Pos + UV) ---
// 36 vertices (6 faces * 2 tris * 3 verts)
// X, Y, Z, U, V, NX, NY, NZ
const cubeVertices = new Float32Array([
    // Front (z=1)
    0, 0, 1, 0, 1, 0, 0, 1,
    1, 0, 1, 1, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 0, 1,
    0, 0, 1, 0, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 0, 1,
    0, 1, 1, 0, 0, 0, 0, 1,
    // Back (z=0)
    0, 0, 0, 1, 1, 0, 0, -1,
    0, 1, 0, 1, 0, 0, 0, -1,
    1, 1, 0, 0, 0, 0, 0, -1,
    0, 0, 0, 1, 1, 0, 0, -1,
    1, 1, 0, 0, 0, 0, 0, -1,
    1, 0, 0, 0, 1, 0, 0, -1,
    // Top (y=1)
    0, 1, 0, 0, 0, 0, 1, 0,
    0, 1, 1, 0, 1, 0, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 0,
    0, 1, 0, 0, 0, 0, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 0,
    1, 1, 0, 1, 0, 0, 1, 0,
    // Bottom (y=0)
    0, 0, 0, 0, 1, 0, -1, 0,
    1, 0, 0, 1, 1, 0, -1, 0,
    1, 0, 1, 1, 0, 0, -1, 0,
    0, 0, 0, 0, 1, 0, -1, 0,
    1, 0, 1, 1, 0, 0, -1, 0,
    0, 0, 1, 0, 0, 0, -1, 0,
    // Right (x=1)
    1, 0, 0, 1, 1, 1, 0, 0,
    1, 1, 0, 1, 0, 1, 0, 0,
    1, 1, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 1, 1, 0, 0,
    1, 1, 1, 0, 0, 1, 0, 0,
    1, 0, 1, 0, 1, 1, 0, 0,
    // Left (x=0)
    0, 0, 0, 0, 1, -1, 0, 0,
    0, 0, 1, 1, 1, -1, 0, 0,
    0, 1, 1, 1, 0, -1, 0, 0,
    0, 0, 0, 0, 1, -1, 0, 0,
    0, 1, 1, 1, 0, -1, 0, 0,
    0, 1, 0, 0, 0, -1, 0, 0,
]);

const vertexBuffer = device.createBuffer({
    size: cubeVertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
device.queue.writeBuffer(vertexBuffer, 0, cubeVertices);

// --- Chunk System ---
// Chunk Size: 16x16
// Height limit for grid: 256 (0 to 255). Logic Y offset: +64 (so -64 to 191)
const CHUNK_SIZE = 16;
const CHUNK_HEIGHT = 256;
const Y_OFFSET = 64;
const RENDER_DISTANCE = 14;

// Systems
const particleSystem = new ParticleSystem();
const pickupSystem = new PickupSystem();
const spider = new Spider();
const playerModel = new PlayerModel(); // Instantiate Player Model
const simpleRenderer = new SimpleRenderer(device, format);

// Values for Grid Logic
// 0 = Air
// 1 = Stone (Tex 0)
// 2 = Dirt (Tex 1)
// 3 = Grass Side (Tex 2)
// 4 = Grass Top (Tex 3) - Logic uses 3 for Grass Block.
// 5 = TNT (Tex 4)

type BlockInstance = { pos: Float32Array, type: number };
type ChunkData = {
    grid: Uint8Array; // Size 16x16x256. Index: x + z*16 + (y+OFFSET)*256
    visible: BlockInstance[]; // Pre-calculated visible instances
};

const chunks = new Map<string, ChunkData>();
const chunkCache = new Map<string, ChunkData>();

// Helper to get grid index
function getGridIndex(x: number, y: number, z: number) {
    x = Math.floor(x);
    y = Math.floor(y);
    z = Math.floor(z);
    if (x < 0 || x >= CHUNK_SIZE || z < 0 || z >= CHUNK_SIZE) return -1;
    const yIdx = y + Y_OFFSET;
    if (yIdx < 0 || yIdx >= CHUNK_HEIGHT) return -1;
    return x + z * CHUNK_SIZE + yIdx * (CHUNK_SIZE * CHUNK_SIZE);
}

// Global Instance List (Flat)
let allInstances: BlockInstance[] = [];

// Removed blockMap (Deprecated)



function getOrGenerateChunk(cx: number, cz: number) {
    const key = `${cx},${cz}`;
    if (chunkCache.has(key)) {
        if (!chunks.has(key)) {
            chunks.set(key, chunkCache.get(key)!);
        }
        return;
    }

    const grid = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE * CHUNK_HEIGHT);
    const visible: BlockInstance[] = [];

    // 1. Generate Terrain (Populate GRID)
    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
            const wx = cx * CHUNK_SIZE + x;
            const wz = cz * CHUNK_SIZE + z;

            // Terrain Noise
            const scale = 0.05;
            const hRaw = fbm(wx * scale, wz * scale, 3);
            const terrainHeight = Math.floor(hRaw * 20 + 20); // Doubled Amplitude

            for (let y = -30; y <= terrainHeight; y++) {
                let type = 1; // Stone
                if (y === terrainHeight) type = 3; // Grass
                else if (y >= terrainHeight - 7) type = 2; // Dirt

                const idx = getGridIndex(x, y, z);
                if (idx !== -1) {
                    grid[idx] = type;
                }
            }
        }
    }

    // 2. Compute Visibility (Local Mesh)
    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
            const wx = cx * CHUNK_SIZE + x;
            const wz = cz * CHUNK_SIZE + z;

            // Scan bounds -Y_OFFSET to (CHUNK_HEIGHT - Y_OFFSET - 1)
            const minY = -Y_OFFSET;
            const maxY = CHUNK_HEIGHT - Y_OFFSET - 1;
            for (let y = minY; y <= maxY; y++) {
                const idx = getGridIndex(x, y, z);
                if (idx === -1) continue;
                const type = grid[idx];
                if (type === 0) continue;

                // Check neighbors in GRID
                let exposed = false;

                const isSolid = (nx: number, ny: number, nz: number) => {
                    const nIdx = getGridIndex(nx, ny, nz);
                    if (nIdx === -1) return false; // Out of bounds -> Assume exposed
                    return grid[nIdx] !== 0;
                };

                if (!isSolid(x + 1, y, z)) exposed = true;
                else if (!isSolid(x - 1, y, z)) exposed = true;
                else if (!isSolid(x, y + 1, z)) exposed = true;
                else if (!isSolid(x, y - 1, z)) exposed = true;
                else if (!isSolid(x, y, z + 1)) exposed = true;
                else if (!isSolid(x, y, z - 1)) exposed = true;

                if (exposed) {
                    visible.push({
                        pos: new Float32Array([wx, y, wz]),
                        type: type - 1
                    });
                }
            }
        }
    }

    const chunkData = { grid, visible };
    chunkCache.set(key, chunkData);
    chunks.set(key, chunkData);
}

function updateChunks(playerPos: vec3) {
    const pCx = Math.floor(playerPos[0] / CHUNK_SIZE);
    const pCz = Math.floor(playerPos[2] / CHUNK_SIZE);

    const neededKeys = new Set<string>();
    let changed = false;

    for (let x = -RENDER_DISTANCE; x <= RENDER_DISTANCE; x++) {
        for (let z = -RENDER_DISTANCE; z <= RENDER_DISTANCE; z++) {
            neededKeys.add(`${pCx + x},${pCz + z}`);
        }
    }

    for (const key of chunks.keys()) {
        if (!neededKeys.has(key)) {
            chunks.delete(key);
            chunkCache.delete(key); // Fix Memory Leak
            changed = true;
        }
    }

    let addedCount = 0;
    for (const key of neededKeys) {
        if (!chunks.has(key)) {
            const [cx, cz] = key.split(',').map(Number);
            getOrGenerateChunk(cx, cz);
            changed = true;
            addedCount++;
            if (addedCount >= 1) break;
        }
    }

    if (changed) {
        rebuildWorld();
    }
}

// User-placed blocks buffer? 
// For simplicity, we can just mix them into the current chunk logic or keep a separate list.
// If we want "Infinite" generation, user blocks should ideally be stored in the chunk data.
// For this demo: We will just NOT support saving user blocks to disk/persistence.
// But we need to make sure user placed blocks are kept if they are in range.
// Actually, `generateChunk` is called freshly. If we unload a chunk, user changes are lost.
// To fix this: `chunks` map should be the source of truth. We only Generate if `!chunks.has(key)`.
// But we just deleted keys in the loop above. 
// Fix: Don't delete from `chunks` map immediately if we want memory persistence (but then memory grows).
// Infinite usually implies unloading. 
// Let's assume for this MVP: Unloading = Reset. 
// Or better: Use a separate `userChanges` map? Too complex.
// Let's stick to: Unload = Lost. (User didn't ask for save/load).

// --- Optimized Rebuild & Memory Management ---
const maxInstances = 2000000;
const instanceBuffer = device.createBuffer({
    size: maxInstances * 16, // vec3 + f32 = 16 bytes
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
const stagingBuffer = new Float32Array(maxInstances * 4); // Persistent Buffer

// --- Frustum Class ---
class Frustum {
    planes: vec4[];
    constructor() {
        this.planes = [vec4.create(), vec4.create(), vec4.create(), vec4.create(), vec4.create(), vec4.create()];
    }
    update(m: mat4) {
        const p = this.planes;
        // Right
        vec4.set(p[0], m[3] - m[0], m[7] - m[4], m[11] - m[8], m[15] - m[12]);
        // Left
        vec4.set(p[1], m[3] + m[0], m[7] + m[4], m[11] + m[8], m[15] + m[12]);
        // Bottom
        vec4.set(p[2], m[3] + m[1], m[7] + m[5], m[11] + m[9], m[15] + m[13]);
        // Top
        vec4.set(p[3], m[3] - m[1], m[7] - m[5], m[11] - m[9], m[15] - m[13]);
        // Far (z <= w -> w - z >= 0)
        vec4.set(p[4], m[3] - m[2], m[7] - m[6], m[11] - m[10], m[15] - m[14]);
        // Near (z >= 0 -> z >= 0) -- WebGPU 0..1 clip space
        vec4.set(p[5], m[2], m[6], m[10], m[14]);
    }
    intersectsBox(min: vec3, max: vec3) {
        for (let i = 0; i < 6; i++) {
            const p = this.planes[i];
            const px = p[0] > 0 ? max[0] : min[0];
            const py = p[1] > 0 ? max[1] : min[1];
            const pz = p[2] > 0 ? max[2] : min[2];
            if (p[0] * px + p[1] * py + p[2] * pz + p[3] < 0) return false;
        }
        return true;
    }
}
const frustum = new Frustum();

let lastCullPos = vec3.create(); // Track camera pos for culling
let lastCullYaw = 0;
let currentInstanceCount = 0; // GLOBAL SCOPE

// Optimization: Reusable temp vectors for frustum check
const tempChunkMin = vec3.create();
const tempChunkMax = vec3.create();

function rebuildWorld(force = false) {
    if (!force) {
        // Throttle: Only rebuild if camera moved > 4 blocks or rotated > 0.1 rad
        const distSq = vec3.sqrDist(cameraPosition, lastCullPos);
        const rotDiff = Math.abs(cameraYaw - lastCullYaw);

        if (distSq < 16.0 && rotDiff < 0.1) {
            return; // Skip update
        }
    }

    // Update Cache
    vec3.copy(lastCullPos, cameraPosition);
    lastCullYaw = cameraYaw;

    // Update Frustum
    frustum.update(viewProjectionMatrix);

    let instanceCount = 0;

    // Direct Loop with fast write
    for (const [key, chunk] of chunks) {
        const [cx, cz] = key.split(',').map(Number);

        // Chunk AABB - Optimized to avoid GC
        vec3.set(tempChunkMin, cx * CHUNK_SIZE, -Y_OFFSET, cz * CHUNK_SIZE);
        vec3.set(tempChunkMax, (cx + 1) * CHUNK_SIZE, CHUNK_HEIGHT - Y_OFFSET, (cz + 1) * CHUNK_SIZE);

        if (frustum.intersectsBox(tempChunkMin, tempChunkMax)) {
            const visible = chunk.visible;
            const len = visible.length;

            // Safety check against maxInstances
            if (instanceCount + len > maxInstances) {
                break; // simple truncation
            }

            for (let i = 0; i < len; i++) {
                const block = visible[i];
                const offset = instanceCount * 4;
                stagingBuffer[offset] = block.pos[0];
                stagingBuffer[offset + 1] = block.pos[1];
                stagingBuffer[offset + 2] = block.pos[2];
                stagingBuffer[offset + 3] = block.type;
                instanceCount++;
            }
        }
    }

    // Write ONLY the used portion to GPU
    device.queue.writeBuffer(instanceBuffer, 0, stagingBuffer, 0, instanceCount * 4);

    currentInstanceCount = instanceCount;
    // console.log('rebuildWorld: instanceCount', instanceCount, 'Chunks:', chunks.size);
    if (instanceCount === 0 && chunks.size > 0) {
        console.warn('rebuildWorld: Chunks exist but 0 instances. Frustum issue?');
        // Debug Frustum
        // console.log('Cam:', cameraPosition, 'Min:', chunks.values().next().value?.min);
    }
}

function updateInstanceBuffer() {
    // Legacy wrapper if needed, but rebuildWorld handles it now.
}
// Initial update called in rebuildWorld
// Initialize world generation after buffers are ready



// --- Pipeline ---
const pipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({ code: shaderCode }),
        entryPoint: 'main_vs',
        buffers: [
            // Vertex Attributes
            {
                arrayStride: 8 * 4,
                attributes: [
                    { shaderLocation: 0, offset: 0, format: 'float32x3' },
                    { shaderLocation: 1, offset: 3 * 4, format: 'float32x2' },
                    { shaderLocation: 2, offset: 5 * 4, format: 'float32x3' }, // Normal
                ]
            },
            // Instance Attributes
            {
                arrayStride: 4 * 4, // vec3 pos + f32 type
                stepMode: 'instance',
                attributes: [
                    { shaderLocation: 3, offset: 0, format: 'float32x3' }, // instancePosition
                    { shaderLocation: 4, offset: 3 * 4, format: 'float32' } // textureIndex
                ]
            }
        ]
    },
    fragment: {
        module: device.createShaderModule({ code: shaderCode }),
        entryPoint: 'main_fs',
        targets: [{ format }]
    },
    primitive: { topology: 'triangle-list', cullMode: 'back' },
    depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth24plus',
    }
});

const shadowPipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({ code: shaderCode }),
        entryPoint: 'shadow_vs',
        buffers: [
            {
                arrayStride: 8 * 4,
                attributes: [
                    { shaderLocation: 0, offset: 0, format: 'float32x3' },
                    { shaderLocation: 1, offset: 3 * 4, format: 'float32x2' },
                    { shaderLocation: 2, offset: 5 * 4, format: 'float32x3' },
                ]
            },
            {
                arrayStride: 4 * 4,
                stepMode: 'instance',
                attributes: [
                    { shaderLocation: 3, offset: 0, format: 'float32x3' },
                    { shaderLocation: 4, offset: 3 * 4, format: 'float32' }
                ]
            }
        ]
    },
    primitive: { topology: 'triangle-list', cullMode: 'back' },
    depthStencil: {
        depthWriteEnabled: true,
        depthCompare: 'less',
        format: 'depth32float',
    }
});

// --- Uniforms ---
// Increased to 560 to match shader requirements (and added safety padding)
const uniformBufferSize = 560; // Was 544
const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});

const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
        { binding: 0, resource: { buffer: uniformBuffer } },
        { binding: 1, resource: sampler },
        { binding: 2, resource: texture.createView({ dimension: '2d-array' }) },
        { binding: 3, resource: shadowSampler },
        { binding: 4, resource: shadowDepthTexture.createView() },
    ]
});


// Re-correction: bind group layout for shadow pass.
// shadow_vs only accesses 'uniforms'. 
// So entries should be just binding 0.
const shadowBindGroupReal = device.createBindGroup({
    layout: shadowPipeline.getBindGroupLayout(0),
    entries: [
        { binding: 0, resource: { buffer: uniformBuffer } }
    ]
});

// --- Camera & Resize ---
const projectionMatrix = mat4.create();
const viewMatrix = mat4.create();
const modelViewProjectionMatrix = mat4.create(); // unused in new shader logic generally, but can keep structure
const viewProjectionMatrix = mat4.create();

let depthTexture: GPUTexture;

function resize() {
    // Resize based on displayed size (CSS)
    const rect = canvas.getBoundingClientRect();
    let displayWidth = Math.floor(rect.width * devicePixelRatio);
    let displayHeight = Math.floor(rect.height * devicePixelRatio);

    // Force even
    if (displayWidth % 2 !== 0) displayWidth--;
    if (displayHeight % 2 !== 0) displayHeight--;

    console.log('Resize called:', displayWidth, 'x', displayHeight, 'devicePixelRatio:', devicePixelRatio);

    // Check if canvas matches
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        console.log('Canvas resized to:', canvas.width, 'x', canvas.height);

        // Update projection with new aspect ratio (WebGPU ZO strict)
        mat4.perspectiveZO(projectionMatrix, (2 * Math.PI) / 5, canvas.width / canvas.height, 0.1, 100.0);
        console.log('[DEBUG] Resize Proj:', [projectionMatrix[0], projectionMatrix[5], projectionMatrix[10], projectionMatrix[15]]);
    }

    // Always recreate depth texture if size changed OR if it doesn't exist
    // Check texture size match
    if (!depthTexture || depthTexture.width !== canvas.width || depthTexture.height !== canvas.height) {
        if (depthTexture) depthTexture.destroy();
        depthTexture = device.createTexture({
            size: [canvas.width, canvas.height],
            format: 'depth24plus',
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
        });
    }
}
window.addEventListener('resize', resize);
resize();


// --- Controls ---
// CRITICAL: Separate player position from camera position
// playerPosition = actual player location (used for physics, collision, chunk loading)
// cameraPosition = calculated camera position (used for rendering view matrix)
const playerPosition = vec3.fromValues(0, 2, 5);
const cameraPosition = vec3.create(); // Calculated from playerPosition in 3rd person
let cameraYaw = Math.PI;
let cameraPitch = -0.3;
// Tuned for Seconds
const cameraSpeed = 4.0;
const mouseSensitivity = 0.002;
// Physics
let verticalVelocity = 0;
const gravity = 20.0;
const jumpForce = 8.5; // Tuned for >1m jump
let isGrounded = false;
const playerHeight = 1.6; // Visual Body Height (Eyes are at +1.8 from feet roughly)
const playerRadius = 0.3; // Half-width
let cameraZoom = 6.0; // Distance for 3rd Person
const eyeLevel = 1.8; // Camera height above feet for First Person


// Returns the integer Y level of the highest block hit, or null if no collision
function checkCollision(pos: vec3): number | null {
    const minX = Math.floor(pos[0] - playerRadius);
    const maxX = Math.floor(pos[0] + playerRadius);
    const minZ = Math.floor(pos[2] - playerRadius);
    const maxZ = Math.floor(pos[2] + playerRadius);

    const minY = Math.floor(pos[1] - playerHeight);
    const maxY = Math.floor(pos[1]);

    let hitY: number | null = null;

    // Iterate relevant blocks
    for (let x = minX; x <= maxX; x++) {
        for (let z = minZ; z <= maxZ; z++) {
            for (let y = minY; y <= maxY; y++) {
                const cx = Math.floor(x / CHUNK_SIZE);
                const cz = Math.floor(z / CHUNK_SIZE);
                const chunk = chunks.get(`${cx},${cz}`);

                if (chunk) {
                    const lx = x - cx * CHUNK_SIZE;
                    const lz = z - cz * CHUNK_SIZE;
                    const idx = getGridIndex(lx, y, lz);
                    if (idx !== -1 && chunk.grid[idx] !== 0) {
                        // Hit!
                        if (hitY === null || y > hitY) {
                            hitY = y;
                        }
                    }
                }
            }
        }
    }
    return hitY;
}

// --- Inventory & Hotbar ---
// Slots 0-8 (Keys 1-9)
// Inventory Mapping: Slot Index -> Texture Type
// Default: Slot 0 = Cobble (0), Slot 1 = Dirt (1), Slot 2 = Grass (2), Slot 3 = TNT (4)
const inventory = [0, 1, 2, 4, 0, 0, 0, 0, 0];
// Initial Counts: 64 Cobble, 10 Dirt, 10 Grass, 100 TNT
const inventoryCounts = [64, 10, 10, 100, 0, 0, 0, 0, 0];
// Pad to 36 is done below in UI setup
let selectedSlot = 0;

// Create UI
const gameContainer = document.getElementById('game-container');
if (!gameContainer) throw new Error("Game container not found");

const hotbarContainer = document.createElement('div');
hotbarContainer.style.position = 'absolute';
hotbarContainer.style.bottom = '10px';
hotbarContainer.style.left = '50%';
hotbarContainer.style.transform = 'translateX(-50%)';
hotbarContainer.style.display = 'flex';
hotbarContainer.style.gap = '4px';
hotbarContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
hotbarContainer.style.padding = '4px';
hotbarContainer.style.borderRadius = '4px';
// Disable drag/semantics
hotbarContainer.style.userSelect = 'none';
hotbarContainer.style.userSelect = 'none';
gameContainer.appendChild(hotbarContainer);

// Crosshair
const crosshair = document.createElement('div');
crosshair.style.position = 'absolute';
crosshair.style.top = '50%';
crosshair.style.left = '50%';
crosshair.style.width = '20px';
crosshair.style.height = '20px';
crosshair.style.transform = 'translate(-50%, -50%)';
crosshair.style.pointerEvents = 'none'; // Click through
// Draw simple cross
crosshair.innerHTML = `
<div style="position:absolute; left:9px; top:0; width:2px; height:20px; background:rgba(255,255,255,0.8);"></div>
<div style="position:absolute; left:0; top:9px; width:20px; height:2px; background:rgba(255,255,255,0.8);"></div>
`;
gameContainer.appendChild(crosshair);

const slots: { div: HTMLElement, count: HTMLElement }[] = [];
for (let i = 0; i < 9; i++) {
    const slot = document.createElement('div');
    slot.style.width = '40px';
    slot.style.height = '40px';
    slot.style.border = '2px solid gray';
    slot.style.backgroundColor = '#333';
    slot.style.position = 'relative'; // For absolute positioning of count
    slot.style.display = 'flex';
    slot.style.alignItems = 'center';
    slot.style.justifyContent = 'center';
    slot.style.color = 'white';
    slot.style.fontFamily = 'monospace';
    // slot.innerText = i < 2 ? (i === 0 ? 'C' : 'D') : ''; 

    // Icon
    const icon = document.createElement('div');
    icon.style.width = '20px';
    icon.style.height = '20px';
    const type = inventory[i];
    if (type === 0) icon.style.backgroundColor = '#888'; // Stone
    else if (type === 1) icon.style.backgroundColor = '#855'; // Dirt
    else if (type === 2) icon.style.backgroundColor = '#484'; // Grass
    else if (type === 4) icon.style.backgroundColor = '#F00'; // TNT
    else icon.style.backgroundColor = '#888';
    slot.appendChild(icon);

    // Count
    const countSpan = document.createElement('div');
    countSpan.style.position = 'absolute';
    countSpan.style.bottom = '2px';
    countSpan.style.right = '2px';
    countSpan.style.fontSize = '12px';
    countSpan.style.fontWeight = 'bold';
    countSpan.style.textShadow = '1px 1px 0 #000';
    countSpan.innerText = inventoryCounts[i].toString();
    slot.appendChild(countSpan);

    slots.push({ div: slot, count: countSpan });
    hotbarContainer.appendChild(slot);
}

// --- Expanded Inventory Logic ---
// 4 Rows of 9. Row 0 is Hotbar. Rows 1-3 are Main Inventory.
const TOTAL_SLOTS = 36;
// Pad inventory to 36
while (inventory.length < TOTAL_SLOTS) inventory.push(0);
while (inventoryCounts.length < TOTAL_SLOTS) inventoryCounts.push(0);

// Inventory UI Overlay
const inventoryOverlay = document.createElement('div');
inventoryOverlay.style.position = 'absolute';
inventoryOverlay.style.top = '50%';
inventoryOverlay.style.left = '50%';
inventoryOverlay.style.transform = 'translate(-50%, -50%)';
inventoryOverlay.style.width = '400px';
inventoryOverlay.style.height = '300px';
inventoryOverlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
inventoryOverlay.style.display = 'none'; // Hidden by default
inventoryOverlay.style.flexWrap = 'wrap';
inventoryOverlay.style.gap = '4px';
inventoryOverlay.style.padding = '10px';
inventoryOverlay.style.borderRadius = '8px';
inventoryOverlay.style.zIndex = '100';
inventoryOverlay.style.border = '2px solid #555';
gameContainer.appendChild(inventoryOverlay);

const invSlots: { div: HTMLElement, count: HTMLElement, icon: HTMLElement, index: number }[] = [];
let swapSourceIndex = -1;
let draggedItem: { type: number, count: number, sourceIndex: number } | null = null;

function createInventorySlots() {
    inventoryOverlay.innerHTML = '';
    invSlots.length = 0;

    // Create 36 slots
    for (let i = 0; i < TOTAL_SLOTS; i++) {
        const slot = document.createElement('div');
        slot.style.width = '40px';
        slot.style.height = '40px';
        slot.style.border = '2px solid gray';
        slot.style.backgroundColor = '#333';
        slot.style.position = 'relative';
        slot.style.display = 'flex';
        slot.style.alignItems = 'center';
        slot.style.justifyContent = 'center';
        slot.style.color = 'white';
        slot.style.fontFamily = 'monospace';
        slot.style.cursor = 'pointer';

        // Event: Drag Start
        slot.addEventListener('mousedown', (ev) => {
            if (inventoryCounts[i] === 0) return; // Nothing to drag

            draggedItem = {
                type: inventory[i],
                count: inventoryCounts[i],
                sourceIndex: i
            };

            // Visual feedback
            slot.style.opacity = '0.5';
            ev.preventDefault();
        });

        // Event: Swap
        slot.addEventListener('click', () => {
            if (swapSourceIndex === -1) {
                // Select
                swapSourceIndex = i;
                slot.style.borderColor = 'yellow';
            } else {
                // Swap
                const src = swapSourceIndex;
                const dst = i;

                // Swap Type
                const tempType = inventory[src];
                inventory[src] = inventory[dst];
                inventory[dst] = tempType;

                // Swap Count
                const tempCount = inventoryCounts[src];
                inventoryCounts[src] = inventoryCounts[dst];
                inventoryCounts[dst] = tempCount;

                swapSourceIndex = -1;
                updateInventoryUI();
                updateHotbarUI();
            }
        });

        // Icon
        const icon = document.createElement('div');
        icon.style.width = '20px';
        icon.style.height = '20px';
        slot.appendChild(icon);

        // Count
        const countSpan = document.createElement('div');
        countSpan.style.position = 'absolute';
        countSpan.style.bottom = '2px';
        countSpan.style.right = '2px';
        countSpan.style.fontSize = '12px';
        countSpan.style.fontWeight = 'bold';
        countSpan.style.textShadow = '1px 1px 0 #000';
        slot.appendChild(countSpan);

        invSlots.push({ div: slot, count: countSpan, icon: icon, index: i });
        inventoryOverlay.appendChild(slot);
    }
}

// Drag-and-drop handlers
inventoryOverlay.addEventListener('mousemove', (e) => {
    if (!draggedItem) return;

    // Find slot under cursor
    const target = document.elementFromPoint(e.clientX, e.clientY);
    if (!target) return;

    // Highlight drop target
    invSlots.forEach(s => {
        if (s.div.contains(target as Node) && s.index !== draggedItem!.sourceIndex) {
            s.div.style.borderColor = 'yellow';
        } else if (s.index !== draggedItem!.sourceIndex) {
            s.div.style.borderColor = (s.index < 9) ? '#aaa' : '#555';
        }
    });
});

inventoryOverlay.addEventListener('mouseup', (e) => {
    if (!draggedItem) return;

    // Find target slot
    const target = document.elementFromPoint(e.clientX, e.clientY);
    const targetSlot = invSlots.find(s => s.div.contains(target as Node));

    if (targetSlot && targetSlot.index !== draggedItem.sourceIndex) {
        // Swap items
        const src = draggedItem.sourceIndex;
        const dst = targetSlot.index;

        const tempType = inventory[src];
        inventory[src] = inventory[dst];
        inventory[dst] = tempType;

        const tempCount = inventoryCounts[src];
        inventoryCounts[src] = inventoryCounts[dst];
        inventoryCounts[dst] = tempCount;
    }

    // Reset drag state
    draggedItem = null;
    updateInventoryUI();
    updateHotbarUI();
});

createInventorySlots();

function updateInventoryUI() {
    for (let i = 0; i < TOTAL_SLOTS; i++) {
        const slot = invSlots[i];
        const type = inventory[i];
        const count = inventoryCounts[i];

        // Update Icon with actual texture representation
        const icon = slot.icon;
        if (type === 0) icon.style.backgroundColor = '#666'; // Stone
        else if (type === 1) icon.style.backgroundColor = '#855'; // Dirt  
        else if (type === 2) {
            // Grass - show green top
            icon.style.background = 'linear-gradient(to bottom, #4a4 0%, #4a4 60%, #855 60%, #855 100%)';
        }
        else if (type === 4) icon.style.backgroundColor = '#c22'; // TNT
        else icon.style.backgroundColor = 'transparent';

        // Update Count
        slot.count.innerText = count > 0 ? count.toString() : '';

        // Reset opacity and border
        slot.div.style.opacity = (draggedItem && draggedItem.sourceIndex === i) ? '0.5' : '1.0';
        slot.div.style.borderColor = (i < 9) ? '#aaa' : '#555';
    }
}

function toggleInventory() {
    if (inventoryOverlay.style.display === 'none') {
        inventoryOverlay.style.display = 'flex';
        document.exitPointerLock(); // Free mouse
        updateInventoryUI();
    } else {
        inventoryOverlay.style.display = 'none';
        canvas.requestPointerLock(); // Lock mouse
        swapSourceIndex = -1; // Cancel swap
    }
}

function updateHotbarUI() {
    for (let i = 0; i < 9; i++) {
        const type = inventory[i];

        const slotDiv = slots[i].div;
        const icon = slotDiv.firstElementChild as HTMLElement;

        // Match inventory UI styling
        if (type === 0) icon.style.backgroundColor = '#666';
        else if (type === 1) icon.style.backgroundColor = '#855';
        else if (type === 2) {
            icon.style.background = 'linear-gradient(to bottom, #4a4 0%, #4a4 60%, #855 60%, #855 100%)';
        }
        else if (type === 4) icon.style.backgroundColor = '#c22';
        else icon.style.backgroundColor = 'transparent';

        slots[i].count.innerText = inventoryCounts[i].toString();

        if (i === selectedSlot) {
            slots[i].div.style.borderColor = 'white';
            slots[i].div.style.transform = 'scale(1.1)';
        } else {
            slots[i].div.style.borderColor = 'gray';
            slots[i].div.style.transform = 'scale(1.0)';
        }
    }
}
updateHotbarUI();

const keys: { [key: string]: boolean } = {};

window.addEventListener('keydown', (e) => {
    // Strict Input Blocking:
    // If Game Active: Block WASD/Space/Arrows/I/F/Numbers from scrolling/typing context.
    // If Game Paused: Allow EVERYTHING (default browser behavior).

    if (!isGameActive) return; // Allow typing/scrolling if paused

    if (e.code === 'Space' || e.code.startsWith('Arrow') || e.code === 'KeyW' || e.code === 'KeyS' || e.code === 'KeyA' || e.code === 'KeyD') {
        e.preventDefault();
    }

    // Toggle Inventory (I) - Only if active
    if (e.code === 'KeyI') {
        toggleInventory();
    }

    // Hotkeys/Actions only if active
    keys[e.code] = true;

    // Exit Inventory (Escape)
    if (e.code === 'Escape' && inventoryOverlay.style.display === 'flex') {
        toggleInventory();
    }

    // Hotkey 1-9
    if (e.code === 'KeyE') {
        const dist = vec3.distance(cameraPosition, spider.position);
        if (isRiding) {
            isRiding = false;
            // Dismount near spider position
        } else if (dist < 5.0) {
            isRiding = true;
        }
    }

    // Explosion (F)
    if (e.code === 'KeyF') {
        if (currentHit && currentHit.index !== -1) {
            // Unused -1 index in current implementation, but currentHit implies valid block
        }
        // Actually, check currentHit
        if (currentHit) {
            const px = Math.round(currentHit.point[0]);
            const py = Math.round(currentHit.point[1]);
            const pz = Math.round(currentHit.point[2]);

            const cx = Math.floor(px / CHUNK_SIZE);
            const cz = Math.floor(pz / CHUNK_SIZE);
            const key = `${cx},${cz}`;

            const chunk = chunks.get(key);
            if (chunk) {
                const lx = px - cx * CHUNK_SIZE;
                const lz = pz - cz * CHUNK_SIZE;
                const idx = getGridIndex(lx, py, lz);

                // Check if TNT
                if (idx !== -1 && chunk.grid[idx] === 5) {
                    // EXPLODE
                    Logger.log('BOOM!');
                    const radius = 3;
                    const minX = px - radius; const maxX = px + radius;
                    const minY = py - radius; const maxY = py + radius;
                    const minZ = pz - radius; const maxZ = pz + radius;

                    // Helper to rebuild single chunk mesh
                    const rebuildChunkMesh = (chunk: ChunkData, cx: number, cz: number) => {
                        chunk.visible = [];
                        for (let x = 0; x < CHUNK_SIZE; x++) {
                            for (let z = 0; z < CHUNK_SIZE; z++) {
                                const wx = cx * CHUNK_SIZE + x;
                                const wz = cz * CHUNK_SIZE + z;
                                // Fast scan
                                for (let y = -30; y <= 30; y++) {
                                    const idx = getGridIndex(x, y, z);
                                    if (idx === -1) continue;
                                    const type = chunk.grid[idx];
                                    if (type === 0) continue;

                                    let exposed = false;
                                    const isSolid = (nx: number, ny: number, nz: number) => {
                                        const nIdx = getGridIndex(nx, ny, nz);
                                        if (nIdx === -1) return false;
                                        return chunk.grid[nIdx] !== 0; // Not 0 means solid
                                        // Wait, air is 0. 
                                    };

                                    if (!isSolid(x + 1, y, z)) exposed = true;
                                    else if (!isSolid(x - 1, y, z)) exposed = true;
                                    else if (!isSolid(x, y + 1, z)) exposed = true;
                                    else if (!isSolid(x, y - 1, z)) exposed = true;
                                    else if (!isSolid(x, y, z + 1)) exposed = true;
                                    else if (!isSolid(x, y, z - 1)) exposed = true;

                                    if (exposed) {
                                        chunk.visible.push({
                                            pos: new Float32Array([wx, y, wz]),
                                            type: type - 1
                                        });
                                    }
                                }
                            }
                        }
                    };

                    const chunksToUpdate = new Set<string>();

                    for (let x = minX; x <= maxX; x++) {
                        for (let y = minY; y <= maxY; y++) {
                            for (let z = minZ; z <= maxZ; z++) {
                                const dx = x - px; const dy = y - py; const dz = z - pz;
                                if (dx * dx + dy * dy + dz * dz <= radius * radius) {
                                    // Destroy
                                    const tCx = Math.floor(x / CHUNK_SIZE);
                                    const tCz = Math.floor(z / CHUNK_SIZE);
                                    const tKey = `${tCx},${tCz}`;
                                    const tChunk = chunks.get(tKey);

                                    if (tChunk) {
                                        const tLx = x - tCx * CHUNK_SIZE;
                                        const tLz = z - tCz * CHUNK_SIZE;
                                        const tIdx = getGridIndex(tLx, y, tLz);
                                        if (tIdx !== -1) {
                                            tChunk.grid[tIdx] = 0; // Air
                                            chunksToUpdate.add(tKey);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // Rebuild Chunks
                    for (const cKey of chunksToUpdate) {
                        const [ccx, ccz] = cKey.split(',').map(Number);
                        rebuildChunkMesh(chunks.get(cKey)!, ccx, ccz);
                    }
                    rebuildWorld();
                }
            }
        }
    }
    if (e.key >= '1' && e.key <= '9') {
        selectedSlot = parseInt(e.key) - 1;
        updateHotbarUI();
    }
});

// Mouse Wheel
window.addEventListener('wheel', (e) => {
    if (!isGameActive) return; // Strict Isolation: Allow scroll if paused

    e.preventDefault(); // Block page scroll if active

    if (isRiding) {
        // Zoom Camera
        cameraZoom += e.deltaY * 0.01;
        // Allow greater zoom when riding spider for better view
        const maxZoom = 40.0;
        cameraZoom = Math.max(2.0, Math.min(maxZoom, cameraZoom));
    } else {
        // Inventory Scroll
        if (e.deltaY > 0) {
            selectedSlot = (selectedSlot + 1) % 9;
        } else {
            selectedSlot = (selectedSlot - 1 + 9) % 9;
        }
        updateHotbarUI();
    }
}, { passive: false }); // REQUIRED for preventDefault to work on wheel events

window.addEventListener('keyup', (e) => { keys[e.code] = false; });
canvas.addEventListener('click', () => { canvas.requestPointerLock(); });

document.addEventListener('mousemove', (e) => {
    if (document.pointerLockElement === canvas) {
        cameraYaw -= e.movementX * mouseSensitivity;

        // Invert Pitch if 3rd Person On-Foot
        // Note: isThirdPersonOnFoot is local to frame(), so we check DOM element directly here.
        // Or better, check the global checkbox reference.
        // chkThirdPerson is global.

        let pitchDelta = e.movementY * mouseSensitivity;
        if (chkThirdPerson && chkThirdPerson.checked && !isRiding) {
            // Invert for "Mouse Down = Look Down" feel in 3rd person
            // Current: Pitch- = Up. Pitch+ = Down.
            // Mouse Down (Pos Y). We want Pitch+ (Down).
            // Originally: cameraPitch -= delta. (Pos Y -> Pitch- -> Up).
            // New: cameraPitch += delta. (Pos Y -> Pitch+ -> Down).
            // So we just flip delta sign? 
            // Logic: cameraPitch -= (flipped_delta). 
            // If we want +=, then flipped_delta must be negative of original.

            pitchDelta = -pitchDelta;
        }

        cameraPitch -= pitchDelta;
        cameraPitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, cameraPitch));
    }
});

// --- Raycasting ---
function getCameraForward() {
    const forward = vec3.create();
    forward[0] = Math.cos(cameraPitch) * Math.sin(cameraYaw);
    forward[1] = Math.sin(cameraPitch);
    forward[2] = Math.cos(cameraPitch) * Math.cos(cameraYaw);
    vec3.normalize(forward, forward);
    return forward;
}

// Ray vs AABB
function intersectRayAABB(origin: vec3, dir: vec3, boxMin: vec3, boxMax: vec3): number | null {
    let tmin = (boxMin[0] - origin[0]) / dir[0];
    let tmax = (boxMax[0] - origin[0]) / dir[0];
    if (tmin > tmax) [tmin, tmax] = [tmax, tmin];

    let tymin = (boxMin[1] - origin[1]) / dir[1];
    let tymax = (boxMax[1] - origin[1]) / dir[1];
    if (tymin > tymax) [tymin, tymax] = [tymax, tymin];

    if ((tmin > tymax) || (tymin > tmax)) return null;
    if (tymin > tmin) tmin = tymin;
    if (tymax < tmax) tmax = tymax;

    let tzmin = (boxMin[2] - origin[2]) / dir[2];
    let tzmax = (boxMax[2] - origin[2]) / dir[2];
    if (tzmin > tzmax) [tzmin, tzmax] = [tzmax, tzmin];

    if ((tmin > tzmax) || (tzmin > tmax)) return null;
    if (tzmin > tmin) tmin = tzmin;
    if (tzmax < tmax) tmax = tzmax;

    if (tmax < 0) return null; // Behind
    // If tmin < 0 (inside block), return tmax? Or 0? Let's return tmin if valid (positive), else 0 if inside?
    // Actually standard implementation handles start inside.
    return tmin >= 0 ? tmin : tmax;
}


// --- Outline Renderer ---
// New shader for THICK BLACK LINES (Cage Effect)
const outlineShaderCode = `
struct Uniforms {
    modelViewProjectionMatrix : mat4x4<f32>,
    viewProjectionMatrix : mat4x4<f32>,
}
struct OutlineUniforms {
    position : vec4<f32>, 
}
@group(0) @binding(0) var<uniform> globalUniforms : Uniforms;
@group(0) @binding(1) var<uniform> outlineUniforms : OutlineUniforms;

struct VertexOutput {
    @builtin(position) Position : vec4<f32>,
    @location(0) uv : vec2<f32>,
}

@vertex
fn main_vs(@location(0) position : vec3<f32>, @location(1) uv : vec2<f32>) -> VertexOutput {
    var output : VertexOutput;
    // Move to block position
    let worldPos = position + outlineUniforms.position.xyz; 
    output.Position = globalUniforms.viewProjectionMatrix * vec4<f32>(worldPos, 1.0);
    output.uv = uv;
    return output;
}

@fragment
fn main_fs(input: VertexOutput) -> @location(0) vec4<f32> {
    // Thick black lines based on UV edge distance
    let thickness = 0.05; // 5% border thickness
    // Check if close to any edge
    let nearEdgeX = input.uv.x < thickness || input.uv.x > (1.0 - thickness);
    let nearEdgeY = input.uv.y < thickness || input.uv.y > (1.0 - thickness);
    
    if (nearEdgeX || nearEdgeY) {
        return vec4<f32>(0.0, 0.0, 0.0, 1.0); // Solid Black
    }
    
    discard; // Transparent center
    return vec4<f32>(0.0, 0.0, 0.0, 0.0);
}
`;

const outlineUniformBuffer = device.createBuffer({
    size: 16, // vec4
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
});

const outlinePipeline = device.createRenderPipeline({
    layout: 'auto',
    vertex: {
        module: device.createShaderModule({ code: outlineShaderCode }),
        entryPoint: 'main_vs',
        buffers: [{
            arrayStride: 8 * 4, // Match main vertex buffer stride (Pos+UV+Norm)
            attributes: [
                { shaderLocation: 0, offset: 0, format: 'float32x3' }, // Pos
                { shaderLocation: 1, offset: 12, format: 'float32x2' } // UV
            ]
        }]
    },
    fragment: {
        module: device.createShaderModule({ code: outlineShaderCode }),
        entryPoint: 'main_fs',
        targets: [{
            format: format,
            blend: {
                color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' },
                alpha: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' }
            }
        }]
    },
    primitive: { topology: 'triangle-list', cullMode: 'back' },
    depthStencil: {
        depthWriteEnabled: true, // Write depth so lines occlude properly? Or false to see through?
        // User wants "clearly visible". If depthWrite is true, lines behind won't show.
        // But lines are on the face.
        // Let's keep depthCompare less (standard).
        depthCompare: 'less',
        format: 'depth24plus',
        // Bias to ensure lines draw ON TOP of the block
        depthBias: -1000,
        depthBiasSlopeScale: -2.0
    }
});

const outlineBindGroup = device.createBindGroup({
    layout: outlinePipeline.getBindGroupLayout(0),
    entries: [
        { binding: 0, resource: { buffer: uniformBuffer } },
        { binding: 1, resource: { buffer: outlineUniformBuffer } }
    ]
});

// State for raycast
let currentHit: { index: number, point: vec3, key: string, empty: vec3 | null } | null = null;
// ... (raycast logic unchanged) ...


function raycast() {
    const forward = getCameraForward();

    let x = Math.floor(cameraPosition[0]);
    let y = Math.floor(cameraPosition[1]);
    let z = Math.floor(cameraPosition[2]);

    const stepX = Math.sign(forward[0]);
    const stepY = Math.sign(forward[1]);
    const stepZ = Math.sign(forward[2]);

    const tDeltaX = stepX !== 0 ? 1 / Math.abs(forward[0]) : Infinity;
    const tDeltaY = stepY !== 0 ? 1 / Math.abs(forward[1]) : Infinity;
    const tDeltaZ = stepZ !== 0 ? 1 / Math.abs(forward[2]) : Infinity;

    let tMaxX = (stepX > 0 ? Math.floor(cameraPosition[0]) + 1 - cameraPosition[0] : cameraPosition[0] - Math.floor(cameraPosition[0])) * tDeltaX;
    let tMaxY = (stepY > 0 ? Math.floor(cameraPosition[1]) + 1 - cameraPosition[1] : cameraPosition[1] - Math.floor(cameraPosition[1])) * tDeltaY;
    let tMaxZ = (stepZ > 0 ? Math.floor(cameraPosition[2]) + 1 - cameraPosition[2] : cameraPosition[2] - Math.floor(cameraPosition[2])) * tDeltaZ;

    let lastX = x, lastY = y, lastZ = z;

    const range = 8;
    for (let i = 0; i < range * 2; i++) {
        const cx = Math.floor(x / CHUNK_SIZE);
        const cz = Math.floor(z / CHUNK_SIZE);
        const chunk = chunks.get(`${cx},${cz}`);

        let hit = false;
        if (chunk) {
            const lx = x - cx * CHUNK_SIZE;
            const lz = z - cz * CHUNK_SIZE;
            const idx = getGridIndex(lx, y, lz);
            if (idx !== -1 && chunk.grid[idx] !== 0) {
                hit = true;
            }
        } else {
            // Out of loaded chunks? Treat as air.
        }

        if (hit) {
            return {
                index: -1,
                point: vec3.fromValues(x, y, z),
                key: `${x},${y},${z}`, // Legacy key usage? Or unused.
                empty: vec3.fromValues(lastX, lastY, lastZ)
            };
        }

        lastX = x;
        lastY = y;
        lastZ = z;

        if (tMaxX < tMaxY) {
            if (tMaxX < tMaxZ) {
                x += stepX;
                tMaxX += tDeltaX;
            } else {
                z += stepZ;
                tMaxZ += tDeltaZ;
            }
        } else {
            if (tMaxY < tMaxZ) {
                y += stepY;
                tMaxY += tDeltaY;
            } else {
                z += stepZ;
                tMaxZ += tDeltaZ;
            }
        }
    }
    return null;
}

// Helper function to set a block and update its chunk
function setBlock(x: number, y: number, z: number, type: number) {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const key = `${cx},${cz}`;

    const chunk = chunks.get(key);
    if (chunk) {
        const lx = x - cx * CHUNK_SIZE;
        const lz = z - cz * CHUNK_SIZE;
        const idx = getGridIndex(lx, y, lz);

        if (idx !== -1) {
            chunk.grid[idx] = type;
            rebuildChunkMesh(chunk, cx, cz);
        }
    }
}

// Helper to rebuild single chunk mesh
const rebuildChunkMesh = (chunk: ChunkData, cx: number, cz: number) => {
    chunk.visible = [];
    for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
            const wx = cx * CHUNK_SIZE + x;
            const wz = cz * CHUNK_SIZE + z;
            // Full scan for correct culling
            const minY = -Y_OFFSET;
            const maxY = CHUNK_HEIGHT - Y_OFFSET - 1;
            for (let y = minY; y <= maxY; y++) {
                const idx = getGridIndex(x, y, z);
                if (idx === -1) continue;
                const type = chunk.grid[idx];
                if (type === 0) continue;

                let exposed = false;
                const isSolid = (nx: number, ny: number, nz: number) => {
                    const nIdx = getGridIndex(nx, ny, nz);
                    if (nIdx === -1) return false;
                    return chunk.grid[nIdx] !== 0;
                };

                if (!isSolid(x + 1, y, z)) exposed = true;
                else if (!isSolid(x - 1, y, z)) exposed = true;
                else if (!isSolid(x, y + 1, z)) exposed = true;
                else if (!isSolid(x, y - 1, z)) exposed = true;
                else if (!isSolid(x, y, z + 1)) exposed = true;
                else if (!isSolid(x, y, z - 1)) exposed = true;

                if (exposed) {
                    chunk.visible.push({
                        pos: new Float32Array([wx, y, wz]),
                        type: type - 1
                    });
                }
            }
        }
    }
};

window.addEventListener('mousedown', (e) => {
    if (document.pointerLockElement !== canvas) return;
    if (!currentHit) return;

    if (e.button === 0) { // Mine (Left Click)
        const px = Math.round(currentHit.point[0]);
        const py = Math.round(currentHit.point[1]);
        const pz = Math.round(currentHit.point[2]);

        const cx = Math.floor(px / CHUNK_SIZE);
        const cz = Math.floor(pz / CHUNK_SIZE);
        const key = `${cx},${cz}`;

        const chunk = chunks.get(key);
        if (chunk) {
            const lx = px - cx * CHUNK_SIZE;
            const lz = pz - cz * CHUNK_SIZE;
            const idx = getGridIndex(lx, py, lz);
            if (idx !== -1 && chunk.grid[idx] !== 0) {
                const oldType = chunk.grid[idx];

                // Map block types to item types (what gets dropped)
                // Grid type 1 (stone) -> Item type 0 (cobblestone texture)
                // Grid type 2 (dirt) -> Item type 1 (dirt texture)
                // Grid type 3 (grass) -> Item type 2 (grass texture)
                // Grid type 5 (TNT) -> Item type 4 (TNT texture)
                let itemType = oldType - 1; // Default mapping
                if (oldType === 1) itemType = 0; // Stone -> Cobblestone

                setBlock(px, py, pz, 0); // Set to Air

                rebuildWorld(true); // Force update to remove block instantly

                // Spawn Pickup at exact mined position (not surface)
                const pPos = vec3.fromValues(px + 0.5, py + 0.5, pz + 0.5);
                pickupSystem.spawn(pPos, itemType);

                updateHotbarUI();
                updateInventoryUI(); // Update full inventory too
            }
        }
    } else if (e.button === 2) { // Place (Right Click)
        if (inventoryCounts[selectedSlot] > 0 && currentHit.empty) {
            const nx = currentHit.empty[0];
            const ny = currentHit.empty[1];
            const nz = currentHit.empty[2];

            const dx = nx - cameraPosition[0];
            const dy = ny - cameraPosition[1];
            const dz = nz - cameraPosition[2];

            if (dx * dx + dy * dy + dz * dz > 1.0) {
                const cx = Math.floor(nx / CHUNK_SIZE);
                const cz = Math.floor(nz / CHUNK_SIZE);
                const key = `${cx},${cz}`;

                let chunk = chunks.get(key);
                if (!chunk) {
                    // Optionally create new chunk data if needed
                }

                if (chunk) {
                    const lx = nx - cx * CHUNK_SIZE;
                    const lz = nz - cz * CHUNK_SIZE;
                    const idx = getGridIndex(lx, ny, lz);

                    if (idx !== -1 && chunk.grid[idx] === 0) {
                        setBlock(nx, ny, nz, inventory[selectedSlot] + 1);
                        if (inventoryCounts[selectedSlot] !== Infinity) {
                            inventoryCounts[selectedSlot]--;
                            if (inventoryCounts[selectedSlot] <= 0) {
                                inventory[selectedSlot] = 0; // Clear slot (set to air block type)
                                inventoryCounts[selectedSlot] = 0;
                            }
                            updateInventoryUI();
                        }
                        rebuildWorld(true); // Force update to show block instantly
                        updateHotbarUI();
                    }
                }
            }
        }
    }
});

// --- UI ---
// gameContainer defined above

const fpsDiv = document.createElement('div');
fpsDiv.style.position = 'absolute';
fpsDiv.style.top = '10px';
fpsDiv.style.left = '10px';
fpsDiv.style.color = 'white';
fpsDiv.style.fontFamily = 'monospace';
fpsDiv.style.fontSize = '16px';
fpsDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
fpsDiv.style.padding = '4px';
fpsDiv.style.pointerEvents = 'none'; // Don't block mouse
gameContainer.appendChild(fpsDiv);

// --- Mount Button ---
const mountBtn = document.createElement('button');
mountBtn.innerText = "Mount Spider";
mountBtn.style.position = 'absolute';
mountBtn.style.top = '10px';
mountBtn.style.right = '10px';
mountBtn.style.padding = '8px 16px';
mountBtn.style.backgroundColor = '#4CAF50';
mountBtn.style.color = 'white';
mountBtn.style.border = 'none';
mountBtn.style.borderRadius = '4px';
mountBtn.style.cursor = 'pointer';
mountBtn.style.fontWeight = 'bold';
mountBtn.style.zIndex = '1000'; // Ensure it's above everything
mountBtn.onclick = () => {
    isRiding = true;
    isGameActive = true; // Ensure game is active so controls work
    // Teleport to spider to ensure visual snap
    vec3.copy(playerPosition, spider.position);
    playerPosition[1] += 3.0; // Above spider
    // Also likely need to set focus/pointer lock if not active?
    // canvas.requestPointerLock(); // Optional, might annoy if strict
};
gameContainer.appendChild(mountBtn);

// --- Menu Logic ---
const menu = document.getElementById('main-menu');
const startBtn = document.getElementById('start-btn') as HTMLButtonElement | null;
let isGameActive = false;

if (startBtn && menu) {
    startBtn.addEventListener('click', () => {
        if (!isWorldLoaded) {
            // Start Loading Process
            // Don't activate game yet, just enable loading loop
            isLoading = true;
            startBtn.innerText = "Loading World...";
            startBtn.disabled = true;
            canvas.style.cursor = 'progress';
            return;
        }

        // Resume Game
        // Force start immediately, don't wait for pointer lock event (which might fail)
        isGameActive = true;
        menu.style.display = 'none';
        canvas.requestPointerLock().catch(err => {
            console.warn("Pointer lock failed or suppressed:", err);
            // Fallback: Game is active, but mouse might wander.
        });
    });

    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === canvas) {
            isGameActive = true;
            menu.style.display = 'none';
        } else {
            // Only pause if we explicitly lost lock (user pressed Esc).
            // But if we never HAD lock, this might not fire?
            // If it fires with null, we pause.
            // This is acceptable behavior for Esc.
            isGameActive = false;
            menu.style.display = 'flex';

            // Update Button Text based on state
            if (startBtn) {
                startBtn.innerText = "Resume Game";
                startBtn.disabled = false;
            }
        }
    });
}

// --- Auto-Pause Intersection Observer ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Game scrolled out of view -> Pause


            if (isGameActive && isWorldLoaded) {
                document.exitPointerLock();
                isGameActive = false;
                if (menu) menu.style.display = 'flex'; // Show menu
            }
        }
    });
}, { threshold: 0.1 }); // Pause if < 10% visible
observer.observe(gameContainer);
const chkShadows = document.getElementById('chk-shadows') as HTMLInputElement;
const chkLockTime = document.getElementById('chk-lock-time') as HTMLInputElement;
const chkThirdPerson = document.getElementById('chk-third-person') as HTMLInputElement;
if (chkThirdPerson) {
    chkThirdPerson.disabled = false;
    // Update label text safer way (Text Node sibling)
    if (chkThirdPerson.nextSibling) {
        chkThirdPerson.nextSibling.textContent = " On-Foot Third Person";
        // Fix Gray Color (was set in inline style)
        if (chkThirdPerson.parentElement) {
            chkThirdPerson.parentElement.style.color = 'white'; // Match parent #main-menu color
            chkThirdPerson.parentElement.style.cursor = 'pointer';
        }
    }
}

// --- Spawn Logic (Correctly Placed) ---
function getSurfaceHeight(x: number, z: number): number {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const chunk = chunks.get(`${cx},${cz}`);
    if (!chunk) return 0;

    const lx = Math.floor(x - cx * CHUNK_SIZE);
    const lz = Math.floor(z - cz * CHUNK_SIZE);

    // Scan down from reasonable height
    for (let y = 100; y >= -30; y--) {
        const idx = getGridIndex(lx, y, lz);
        if (idx !== -1 && chunk.grid[idx] !== 0) {
            return y;
        }
    }
    return 0;
}

function attemptSpawnPlayer(): boolean {
    updateChunks(vec3.fromValues(0, 0, 0));
    const playerY = getSurfaceHeight(0, 0);

    // If chunk not generated (0) or too low (< -50), fail
    // getSurfaceHeight returns 0 if chunk missing.
    // We want to be sure it's a real block.
    // Let's modify getSurfaceHeight slightly in logic or just check if it's 0.
    // NOTE: 0 is distinct from "ground at 0". 
    // Wait, getSurfaceHeight returns 0 if missing. 
    // And loop returns 0 if nothing found.
    // Real ground is usually > 5. 
    // Let's assume ground must be > 0 to be valid for spawn.

    if (playerY <= 0) return false;

    // Found valid ground! Update UI and Spawn.
    const spiderGroundY = playerY; // Simplify for now, spider spawns near player

    // Spawn spider nearby but randomized
    const angle = Math.random() * Math.PI * 2;
    const dist = 5 + Math.random() * 5; // 5 to 10 blocks away
    const sx = Math.cos(angle) * dist;
    const sz = Math.sin(angle) * dist;

    // Ensure spider chunk
    const spCx = Math.floor(sx / CHUNK_SIZE);
    const spCz = Math.floor(sz / CHUNK_SIZE);
    getOrGenerateChunk(spCx, spCz);

    // Re-check spider height
    let maxY = -100;
    for (let ox = -1; ox <= 1; ox++) {
        for (let oz = -1; oz <= 1; oz++) {
            const y = getSurfaceHeight(sx + ox, sz + oz);
            if (y > maxY) maxY = y;
        }
    }
    const realSpiderY = maxY > -50 ? maxY : playerY; // Fallback

    cameraPosition[0] = 0;
    cameraPosition[1] = playerY + 5;
    cameraPosition[2] = 0;
    verticalVelocity = 0;
    isRiding = false;


    spider.position[0] = sx;
    spider.position[1] = realSpiderY + 5;
    spider.position[2] = sz;
    spider.velocity = vec3.create();

    // Re-init legs?
    for (let i = 0; i < spider.legTargets.length; i++) {
        const ideal = spider.getIdealFootPos(i, spider.position, spider.yaw);
        const gy = getSurfaceHeight(ideal[0], ideal[2]);
        ideal[1] = (gy || realSpiderY) + 1.0;
        vec3.copy(spider.legTargets[i], ideal);
        vec3.copy(spider.legStart[i], ideal);
        vec3.copy(spider.legNext[i], ideal);
        spider.legMoving[i] = false;
        spider.legProgress[i] = 1.0;
    }
    Logger.log(`Spawned! Player Y: ${playerY}`);
    return true;
}

// Initial State
let isWorldLoaded = false;
let isLoading = false;
// Don't spawn immediately. Wait for user or load loop.

// --- Loop ---
let lastTime = performance.now();
let frames = 0;
let lastFpsTime = lastTime;
let frameCount = 0;

// Hoisted Render Variables
const globalSky = vec3.create();
const globalLightColor = vec3.create();
const globalAmbientColor = vec3.create();
const globalLightViewMatrix = mat4.create();

function frame() {
    const now = performance.now();
    let dt = (now - lastTime) / 1000;
    lastTime = now;

    // Defined at top of frame for scope visibility
    const isThirdPersonOnFoot = (chkThirdPerson && chkThirdPerson.checked);

    if (frameCount === 0) {
        // console.log('First frame rendering! Canvas size:', canvas.width, 'x', canvas.height);
        // console.log('Instance count:', allInstances.length);
    }
    frameCount++;

    if (isLoading) {
        // Attempt to spawn
        if (attemptSpawnPlayer()) {
            isWorldLoaded = true;
            isLoading = false;
            isGameActive = true; // Auto-start once loaded
            canvas.requestPointerLock();
            canvas.style.cursor = 'default';
            if (startBtn) {
                startBtn.innerText = "Resume Game";
                startBtn.disabled = false;
            }
            menu.style.display = 'none';
        } else {
            // Still loading... force chunk updates for 0,0
            updateChunks(vec3.fromValues(0, 0, 0));
            // Maybe animate loading text?
        }
    }

    if (isGameActive && isWorldLoaded) {
        // Calculate player's chunk and update if needed
        // Done every 0.1s or so? Or every frame?
        // Every frame is safer for "infinite" but might be slow.
        // Optimization: Check dist moved.
        updateChunks(playerPosition); // Use PLAYER position for chunk loading, not camera!

        // Clamp dt to avoid physics explosions (e.g. max 0.1s)
        dt = Math.min(dt, 0.1);

        // FPS
        // FPS
        frames++;
        if (now - lastFpsTime >= 1000) {
            fpsDiv.innerText = `FPS: ${frames} | Instances: ${currentInstanceCount}`;
            frames = 0;
            lastFpsTime = now;
        }





        // Terrain Function for Spider
        const getTerrainHeight = (pos: vec3): number | null => {
            const ix = Math.floor(pos[0]);
            const iz = Math.floor(pos[2]);
            // Check vertical column
            for (let y = Math.floor(pos[1] + 2); y >= Math.floor(pos[1] - 5); y--) {
                const cx = Math.floor(ix / CHUNK_SIZE);
                const cz = Math.floor(iz / CHUNK_SIZE);
                const chunk = chunks.get(`${cx},${cz}`);
                if (chunk) {
                    const lx = ix - cx * CHUNK_SIZE;
                    const lz = iz - cz * CHUNK_SIZE;
                    const idx = getGridIndex(lx, y, lz);
                    if (idx !== -1 && chunk.grid[idx] !== 0) {
                        return y;
                    }
                }
            }
            return null;
        };

        // Update Spider
        // If riding, pass keys. Else pass empty.
        const spiderInput = isRiding ? keys : {};
        spider.update(dt, spiderInput, getTerrainHeight);

        // Update Particles
        particleSystem.update(dt);

        // Update Pickups - Scan downward from item position for realistic gravity
        pickupSystem.update(dt, playerPosition, inventory, inventoryCounts, (pos: vec3) => {
            // Scan downward from item's current position for realistic gravity
            const cx = Math.floor(pos[0] / CHUNK_SIZE);
            const cz = Math.floor(pos[2] / CHUNK_SIZE);
            const chunk = chunks.get(`${cx},${cz}`);
            if (!chunk) return null;

            const lx = Math.floor(pos[0] - cx * CHUNK_SIZE);
            const lz = Math.floor(pos[2] - cz * CHUNK_SIZE);

            // Scan DOWN from item's current Y position
            const startY = Math.floor(pos[1]);
            for (let y = startY; y >= -Y_OFFSET; y--) {
                const idx = getGridIndex(lx, y, lz);
                if (idx !== -1 && chunk.grid[idx] !== 0) {
                    return y; // Return Y of topmost solid block below item
                }
            }
            return null; // No ground found
        });

        // Update Active TNT
        for (let i = activeTNTs.length - 1; i >= 0; i--) {
            const tnt = activeTNTs[i];
            tnt.timer -= dt;

            // Pulse Scale
            const pulseSpeed = 10.0 + (3.0 - tnt.timer) * 5.0; // Faster as it gets closer
            const scaleAmt = 1.0 + Math.sin(performance.now() / 100 * pulseSpeed) * 0.1;
            vec3.set(tnt.scale, scaleAmt, scaleAmt, scaleAmt);

            if (tnt.timer <= 0) {
                // EXPLODE
                activeTNTs.splice(i, 1);

                const px = Math.round(tnt.position[0]);
                const py = Math.round(tnt.position[1]);
                const pz = Math.round(tnt.position[2]);

                Logger.log('BOOM! (Particles)');
                // Spawn Particles
                particleSystem.emit(tnt.position, 100, vec4.fromValues(1, 0.5, 0, 1), 8.0); // Orange Fire
                particleSystem.emit(tnt.position, 50, vec4.fromValues(0.2, 0.2, 0.2, 1), 4.0); // Smoke

                const radius = 3;
                const minX = px - radius; const maxX = px + radius;
                const minY = py - radius; const maxY = py + radius;
                const minZ = pz - radius; const maxZ = pz + radius;

                const chunksToUpdate = new Set<string>();

                for (let x = minX; x <= maxX; x++) {
                    for (let y = minY; y <= maxY; y++) {
                        for (let z = minZ; z <= maxZ; z++) {
                            const dx = x - px; const dy = y - py; const dz = z - pz;
                            if (dx * dx + dy * dy + dz * dz <= radius * radius) {
                                // Destroy
                                const tCx = Math.floor(x / CHUNK_SIZE);
                                const tCz = Math.floor(z / CHUNK_SIZE);
                                const tKey = `${tCx},${tCz}`;
                                const tChunk = chunks.get(tKey);

                                if (tChunk) {
                                    const tLx = x - tCx * CHUNK_SIZE;
                                    const tLz = z - tCz * CHUNK_SIZE;
                                    const tIdx = getGridIndex(tLx, y, tLz);
                                    if (tIdx !== -1) {
                                        tChunk.grid[tIdx] = 0; // Air
                                        chunksToUpdate.add(tKey);
                                    }
                                }
                            }
                        }
                    }
                }

                // Rebuild Chunks
                for (const cKey of chunksToUpdate) {
                    const [ccx, ccz] = cKey.split(',').map(Number);
                    rebuildChunkMesh(chunks.get(cKey)!, ccx, ccz);
                }
                rebuildWorld();
            }
        }


        if (isRiding) {
            // When riding spider: player position = spider position
            vec3.copy(playerPosition, spider.position);
            playerPosition[1] += 1.5; // Player sits on spider

            // 3rd Person Orbit Camera
            const camDist = cameraZoom;
            const horizontalDist = camDist * Math.cos(cameraPitch);
            const cx = playerPosition[0] - Math.sin(cameraYaw) * horizontalDist;
            const cz = playerPosition[2] - Math.cos(cameraYaw) * horizontalDist;
            const cy = playerPosition[1] - playerHeight + camDist * Math.sin(cameraPitch) + 2.0;
            vec3.set(cameraPosition, cx, cy, cz);
        }

        // --- On-Foot Third Person Logic ---
        // isThirdPersonOnFoot is defined at top of frame
        if (!isRiding && isThirdPersonOnFoot) {
            // Orbit Camera
            const camDist = cameraZoom;
            // Calculate theoretical camera position
            const horizontalDist = camDist * Math.cos(cameraPitch);
            const cx = playerPosition[0] - Math.sin(cameraYaw) * horizontalDist;
            const cz = playerPosition[2] - Math.cos(cameraYaw) * horizontalDist;
            const cy = playerPosition[1] + eyeLevel + camDist * Math.sin(cameraPitch); // Pivot from eye level

            // Raycast for Camera Clipping (Anti-Clip)
            // Cast ray from Player Head -> Camera
            const headPos = vec3.fromValues(playerPosition[0], playerPosition[1] + eyeLevel, playerPosition[2]);
            const camPos = vec3.fromValues(cx, cy, cz);
            const camDir = vec3.create();
            vec3.subtract(camDir, camPos, headPos);
            const maxLen = vec3.length(camDir);
            vec3.normalize(camDir, camDir);

            // Raycast check
            // We can reuse a simplified raycast or walk the ray
            let safeDist = maxLen;
            // Quick ray march
            const steps = 20;
            for (let i = 1; i <= steps; i++) {
                const d = (maxLen * i) / steps;
                const p = vec3.create();
                vec3.scaleAndAdd(p, headPos, camDir, d);
                // Check if inside solid block
                const ix = Math.floor(p[0]);
                const iy = Math.floor(p[1]);
                const iz = Math.floor(p[2]);

                const ccx = Math.floor(ix / CHUNK_SIZE);
                const ccz = Math.floor(iz / CHUNK_SIZE);
                const chunk = chunks.get(`${ccx},${ccz}`);
                if (chunk) {
                    const lx = ix - ccx * CHUNK_SIZE;
                    const lz = iz - ccz * CHUNK_SIZE;
                    const idx = getGridIndex(lx, iy, lz);
                    if (idx !== -1 && chunk.grid[idx] !== 0) {
                        // Hit!
                        safeDist = Math.max(0.5, d - 0.2); // Pull back slightly
                        break;
                    }
                }
            }

            // Set final camera pos
            vec3.scaleAndAdd(cameraPosition, headPos, camDir, safeDist);
        }
        else if (!isRiding && !isThirdPersonOnFoot) {
            // 1st Person Camera (FPS)
            vec3.set(cameraPosition,
                playerPosition[0],
                playerPosition[1] + eyeLevel,
                playerPosition[2]
            );
        }

        // Normal Physics (when not riding)
        if (!isRiding && keys['Space'] && isGrounded) {
            verticalVelocity = jumpForce;
            isGrounded = false;
        }

        // Physics & Collision Resolution

        // 1. Vertical Movement (Y)
        verticalVelocity -= gravity * dt;
        // Terminal velocity check? keeping it simple

        // Apply Y to PLAYER
        playerPosition[1] += verticalVelocity * dt;

        const hitY = checkCollision(playerPosition);
        if (hitY !== null) {
            // Detect if this is just the floor we are standing on
            // Block top is hitY + 1. If feet (pos[1]) are above that, it's floor.

            // FIX: Only treat as floor if it is reasonably close to feet (step height)
            // If it's way above feet, it's a ceiling or header, not a valid floor to snap to.
            // FIX: Step Height Limit to 0.6 prevents wall teleport (steppable)
            // But we need a separate "Landing" check for falling, which should be lenient.

            const distToTop = (hitY + 1.0) - playerPosition[1];

            // Stepping: Strict limit (climbing stairs/slabs)
            const isSteppable = (distToTop <= 0.6 && distToTop >= -0.1);

            // Landing: Lenient limit (falling from height)
            // If falling, we want to snap to ground even if we penetrated deep into it (due to speed).
            // But we don't want to snap to a "Ceiling" far above us.
            // If distToTop is positive (feet below top), we are inside/below the block top.
            // If distToTop is massive (e.g. 5.0), we are way deep? No, distToTop = Top - Feet.
            // If feet = 0, Top = 5. dist = 5. We are below it.
            // So for landing, basically anything where feet <= top.
            const isLandable = (distToTop > -0.1); // Allow slight hover (epsilon), but mainly just "am I below the top?"

            if (verticalVelocity < 0) {
                // Falling/Landing
                if (isLandable) {
                    playerPosition[1] = hitY + 1.0 + 0.01;
                    verticalVelocity = 0;
                    isGrounded = true;
                }
            } else {
                // Moving Up (Jumping)
                // Use strict Steppable check for interruptions? Or Ceiling check?
                // Ceiling Check: Only block if hitY is ABOVE player head
                const playerTop = playerPosition[1] + playerHeight;
                const hitBottom = hitY; // Bottom of block is hitY? No, hitY is "Top of block Y" or "Bottom"? 
                // checkCollision returns Y (integer coordinate).
                // Solid block occupies [y, y+1].
                // So hitY is the `y` index. Bottom is `y`. Top is `y+1`.

                // If we hit a block ABOVE us. Block Y > Player Y + Height.
                // Wait, checkCollision returns the highest block Y at that X,Z?
                // Yes, "Hit!" -> y.

                // If not steppable, treat as wall/ceiling depending on relative pos.
                if (!isSteppable) {
                    // Only stop if it's actually blocking us (Ceiling) OR if it's a Wall we can't step up.
                    // For Jumping: We want to slide UP walls.
                    // So we should ONLY stop if we hit a CEILING.
                    // A wall (side) is handled by X/Z collision. 
                    // Y Collision usually means "I am inside this block".
                    // If I am inside a block that is NOT steppable, and I am moving UP...
                    // It might be a header.

                    // If block Y > player head, it's a ceiling.
                    if (hitY > playerPosition[1] + 1.0) {
                        playerPosition[1] -= verticalVelocity * dt; // Push back
                        verticalVelocity = 0;
                    }
                    // Else: It's a wall we are sliding up? Ignore Y collision (allow slide).
                }
            }
        } else {
            isGrounded = false;
        }

        // Floor "death plane" fallback
        if (playerPosition[1] < -10) {
            playerPosition[0] = 0;
            playerPosition[1] = 5;
            playerPosition[2] = 5;
            verticalVelocity = 0;
        }


        // Camera Logic (for movement direction)
        const forward = getCameraForward();
        // Flatten forward for movement (so you don't fly up/down when looking up/down)
        const moveDirForward = vec3.fromValues(forward[0], 0, forward[2]);
        vec3.normalize(moveDirForward, moveDirForward);

        const right = vec3.create();
        vec3.cross(right, forward, vec3.fromValues(0, 1, 0));
        const moveDirRight = vec3.fromValues(right[0], 0, right[2]);
        vec3.normalize(moveDirRight, moveDirRight);

        // Calculate intended movement
        const moveVec = vec3.create();
        const moveAmount = cameraSpeed * dt;

        if (keys['KeyW']) vec3.scaleAndAdd(moveVec, moveVec, moveDirForward, moveAmount);
        if (keys['KeyS']) vec3.scaleAndAdd(moveVec, moveVec, moveDirForward, -moveAmount);
        if (keys['KeyA']) vec3.scaleAndAdd(moveVec, moveVec, moveDirRight, -moveAmount);
        if (keys['KeyD']) vec3.scaleAndAdd(moveVec, moveVec, moveDirRight, moveAmount);

        // X Axis - move PLAYER
        playerPosition[0] += moveVec[0];
        const hitX = checkCollision(playerPosition);
        if (hitX !== null) {
            // Same logic: If it's just the floor, allow movement.
            // If it's a wall (higher than floor), block.
            if (hitX + 1.0 > playerPosition[1] + 0.05) {
                playerPosition[0] -= moveVec[0];
            }
        }

        // Z Axis - move PLAYER
        playerPosition[2] += moveVec[2];
        const hitZ = checkCollision(playerPosition);
        if (hitZ !== null) {
            if (hitZ + 1.0 > playerPosition[1] + 0.05) {
                playerPosition[2] -= moveVec[2];
            }
        }
    }

    // --- Camera Updates Completed ---

    // CRITICAL FIX: Raycast moved to END of frame, after camera position is final.
    // This ensures highlight exactly matches the crosshair for the current frame.
    currentHit = raycast();

    // Recalculate forward for rendering if needed, though viewMatrix uses targets.
    // Otherwise the selection lags 1 frame behind the crosshair during movement, feeling "off-centered".
    // Raycast was here (line 2141), moved to end of loop (line 2246)
    // currentHit = raycast();
    const forward = getCameraForward();

    const target = vec3.create();

    // --- Target Calculation (For LookAt) ---
    // Camera Position is already set in the block above (with Anti-Clip / Orbit logic)
    // Here we just determine what the camera is LOOKING AT.

    if (isRiding) {
        // Look at spider center when riding
        vec3.copy(target, spider.position);
        target[1] += 1.5; // Look at spider center height
    } else if (isThirdPersonOnFoot) {
        // Look at Player Center (not head)
        vec3.copy(target, playerPosition);
        target[1] += 1.0;
    } else {
        // First Person: Look Forward from Camera Position
        vec3.add(target, cameraPosition, forward);
    }

    mat4.lookAt(viewMatrix, cameraPosition, target, vec3.fromValues(0, 1, 0));

    mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);

    // Update Uniforms
    // Structure: modelViewProjection (64), viewProjection (64)
    // We only strictly need viewProjection for the new shader, but let's just write offsets
    // Shader expects:
    // struct Uniforms {
    //     modelViewProjectionMatrix : mat4x4<f32>, (unused in vertex shader now, but kept for alignment/compat)
    //     viewProjectionMatrix : mat4x4<f32>,
    // }

    // --- Day/Night Cycle ---
    const cycleDuration = 120.0;

    // Check Settings
    let effectiveTime = now / 1000;
    if (chkLockTime && chkLockTime.checked) {
        effectiveTime = 60.0; // Noon (halfway through first cycle roughly?)
        // Or specific constant. Let's say cycle starts at 0 (dawn?). 
        // 120s total. 30s = Noon? 
        // Let's stick to logic below: sin(time / duration * PI * 2)
        // Noon is when sun is high. sin = 1. time = duration / 4 = 30s.
        effectiveTime = 30.0;
    }

    const time = effectiveTime; // Use effective time
    const angle = (time / cycleDuration) * Math.PI * 2;
    const timeOfDay = effectiveTime % cycleDuration;
    const cycleProgress = timeOfDay / cycleDuration;
    const sunAngle = cycleProgress * Math.PI * 2;
    const sunDir = vec3.fromValues(Math.cos(sunAngle), Math.sin(sunAngle), 0.2);
    vec3.normalize(sunDir, sunDir);

    const dayColor = vec3.fromValues(1.0, 0.95, 0.9);
    const sunSetColor = vec3.fromValues(1.0, 0.6, 0.3);
    const nightColor = vec3.fromValues(0.1, 0.1, 0.3);
    const ambDay = vec3.fromValues(0.3, 0.3, 0.4);
    const ambNight = vec3.fromValues(0.05, 0.05, 0.1);

    // Variables (Hoisted)
    const currentSky = globalSky;
    const lightColor = globalLightColor;
    const ambientColor = globalAmbientColor;

    // Sky Constants
    const skyDay = vec3.fromValues(0.5, 0.7, 1.0);
    const skyNight = vec3.fromValues(0.05, 0.05, 0.1);
    const skySunset = vec3.fromValues(1.0, 0.5, 0.2);

    if (sunDir[1] > 0.2) { // Full Day
        vec3.copy(currentSky, skyDay);
        vec3.copy(lightColor, dayColor);
        vec3.copy(ambientColor, ambDay);
    } else if (sunDir[1] < -0.2) { // Full Night
        vec3.copy(currentSky, skyNight);
        vec3.copy(lightColor, nightColor);
        vec3.copy(ambientColor, ambNight);
    } else {
        // Smooth Transition (-0.2 to 0.2)
        const t = (sunDir[1] + 0.2) / 0.4;
        // Ease in/out
        const tSmooth = t * t * (3 - 2 * t);

        vec3.lerp(currentSky, skyNight, skyDay, tSmooth);
        // Add sunset tint around 0.5
        const sunsetStr = 1.0 - Math.abs(tSmooth - 0.5) * 2;
        vec3.lerp(currentSky, currentSky, skySunset, sunsetStr * 0.8);

        vec3.lerp(lightColor, nightColor, dayColor, tSmooth);
        vec3.lerp(ambientColor, ambNight, ambDay, tSmooth);
    }

    // Shadow Camera Logic
    // Follow player
    // Reuse globalLightViewMatrix
    const lightViewMatrix = globalLightViewMatrix;
    const shadowDist = 50;
    const lightCamPos = vec3.fromValues(
        cameraPosition[0] + sunDir[0] * shadowDist,
        cameraPosition[1] + sunDir[1] * shadowDist,
        cameraPosition[2] + sunDir[2] * shadowDist
    );
    mat4.lookAt(lightViewMatrix, lightCamPos, cameraPosition, vec3.fromValues(0, 1, 0));

    const lightProjectionMatrix = mat4.create();
    const orthoSize = 60;
    mat4.ortho(lightProjectionMatrix, -orthoSize, orthoSize, -orthoSize, orthoSize, 1.0, 200);

    const lightViewProjectionMatrix = mat4.create();
    mat4.multiply(lightViewProjectionMatrix, lightProjectionMatrix, lightViewMatrix);

    // Update Uniforms
    const uniformData = new Float32Array(uniformBufferSize / 4);
    // 0-15: MVP (Unused)
    // 16-31: Cam ViewProj
    uniformData.set(viewProjectionMatrix, 16);
    // 32-47: Light ViewProj
    uniformData.set(lightViewProjectionMatrix, 32);
    // 48-51: Light Dir (xyz, pad)
    uniformData.set([sunDir[0], sunDir[1], sunDir[2], 0], 48);
    // 52-55: Light Color
    uniformData.set([lightColor[0], lightColor[1], lightColor[2], 1.0], 52);
    // 56-59: Ambient Color
    uniformData.set([ambientColor[0], ambientColor[1], ambientColor[2], 1.0], 56);
    // 60-63: Sky Color (for fog)
    uniformData.set([currentSky[0], currentSky[1], currentSky[2], 1.0], 60);
    // 64-67: Camera Position
    uniformData.set([cameraPosition[0], cameraPosition[1], cameraPosition[2], 1.0], 64);

    // Torches removed
    uniformData.set([0, 0, 0, 0], 68);

    device.queue.writeBuffer(uniformBuffer, 0, uniformData);

    // Culling Update Trigger
    // Rebuild world if camera moved/rotated significantly?
    // Using internal throttle of 4 blocks distance or 0.1 rad rotation.
    rebuildWorld(false);


    // Draw Sky Sprites (Sun/Moon)
    const skyDist = 80.0;
    const sunPos = vec3.create();
    vec3.scale(sunPos, sunDir, skyDist);
    vec3.add(sunPos, sunPos, cameraPosition);

    const moonPos = vec3.create();
    vec3.scale(moonPos, sunDir, -skyDist); // Opposite to sun
    vec3.add(moonPos, moonPos, cameraPosition);

    const commandEncoder = device.createCommandEncoder();

    // 1. Shadow Pass
    if (!chkShadows || chkShadows.checked) {
        const shadowPass = commandEncoder.beginRenderPass({
            colorAttachments: [],
            depthStencilAttachment: {
                view: shadowDepthTexture.createView(),
                depthClearValue: 1.0,
                depthLoadOp: 'clear',
                depthStoreOp: 'store',
            }
        });
        shadowPass.setPipeline(shadowPipeline);
        shadowPass.setBindGroup(0, shadowBindGroupReal);
        shadowPass.setVertexBuffer(0, vertexBuffer);
        shadowPass.setVertexBuffer(1, instanceBuffer);
        shadowPass.draw(36, Math.min(currentInstanceCount, maxInstances));
        shadowPass.end();
    }

    // 2. Main Pass
    const textureView = context?.getCurrentTexture().createView();
    const renderPassDescriptor: GPURenderPassDescriptor = {
        colorAttachments: [{
            view: textureView!,
            // clearValue: { r: 1.0, g: 0.0, b: 1.0, a: 1.0 },
            clearValue: { r: currentSky[0], g: currentSky[1], b: currentSky[2], a: 1.0 },
            loadOp: 'clear', storeOp: 'store',
        }],
        depthStencilAttachment: {
            view: depthTexture.createView(),
            depthClearValue: 1.0, depthLoadOp: 'clear', depthStoreOp: 'store',
        }
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

    // Draw World (Terrain)
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.setVertexBuffer(0, vertexBuffer);
    passEncoder.setVertexBuffer(1, instanceBuffer);
    passEncoder.draw(36, Math.min(currentInstanceCount, maxInstances));

    // Draw Outline - REMOVED (Duplicate pass, causing visual glitches)
    // We use the Highight Box logic below instead.

    // Draw Entities (Sun/Moon/Spider/Particles/TNT)
    const qId = [0, 0, 0, 1] as unknown as any;

    simpleRenderer.startFrame(passEncoder, viewProjectionMatrix);
    // Sun & Moon
    simpleRenderer.drawCube(device, passEncoder, sunPos, qId, vec3.fromValues(5, 5, 5), vec4.fromValues(1, 1, 0, 1));
    simpleRenderer.drawCube(device, passEncoder, moonPos, qId, vec3.fromValues(4, 4, 4), vec4.fromValues(0.9, 0.9, 1, 1));

    // Spider
    spider.draw(device, passEncoder, simpleRenderer, isRiding);

    // Player Model
    if (isRiding || isThirdPersonOnFoot) {
        // Draw Player
        if (isRiding) {
            // Constant snap to spider back
            vec3.copy(playerPosition, spider.position);
            playerPosition[1] += 0.8; // Sit on back (Lowered from 1.8)
        }

        // Logic fix: When riding, FORCE isMoving to false to stop walking animation
        const isWalkingInput = (keys['KeyW'] || keys['KeyS'] || keys['KeyA'] || keys['KeyD']);
        const shouldAnimateWalk = isRiding ? false : isWalkingInput;

        playerModel.draw(device, passEncoder, simpleRenderer, playerPosition, cameraYaw, cameraPitch, shouldAnimateWalk, performance.now() / 1000, isRiding);
    }

    // Particles
    particleSystem.draw(device, passEncoder, simpleRenderer);

    // TNT
    const whiteColor = vec4.fromValues(10, 10, 10, 1);
    const tntColor = vec4.fromValues(1, 1, 1, 1);
    for (let tnt of activeTNTs) {
        const flash = Math.sin(performance.now() / 50 * (4.0 - tnt.timer)) > 0.5;
        simpleRenderer.drawCube(device, passEncoder, tnt.position, qId, tnt.scale, flash ? whiteColor : tntColor);
    }

    // Draw Pickups
    pickupSystem.draw(device, passEncoder, simpleRenderer);

    // Highlight Box (Outline) - using SimpleRenderer as transparent black box
    if (currentHit) {
        // Slightly larger than block to prevent Z-fighting
        const scale = vec3.fromValues(1.01, 1.01, 1.01);
        const pos = vec3.clone(currentHit.point); // This is usually the center if raycast returns center? 
        // Wait, Raycast.point is the INTERSECTION point or BLOCK center?
        // Raycast usually returns Hit Point. 
        // We need the BLOCK center for the box.
        // currentHit logic in `raycast` usually returns `point` as intersection, but we need the block coordinate.
        // Let's assume for now we need to round `point`? 
        // Checking raycast usage: `const px = Math.round(currentHit.point[0])`.
        // Actually, let's look at `raycast` logic later if needed. 
        // For now, let's assume `currentHit.point` IS the hit point, which might be on the face.
        // We want the block cube center.
        // If `currentHit.point` is the face-hit, we need to floor/round to get block center?
        // Usually raycast returns { point, normal, ... }.
        // Let's check how the old outline worked: `outlineData.set(currentHit.point)`.
        // The shader probably expanded it? 
        // Let's assume `currentHit.point` is the block center for now, or use the `empty` property neighbor?
        // Let's just use `currentHit.point` but assume it needs to be block-aligned?
        // Actually, raycasting usually populates `currentHit` with the `point` of intersection.
        // To highlight the block, we need `floor(point - normal * 0.01) + 0.5`.
        // Let's just try using the point for now.

        // Use a black semi-transparent box
        const outlineColor = vec4.fromValues(0, 0, 0, 0.5);
        // We need to snap to block center.
        // Based on `checkCollision`, blocks are at integer coords.
        // So center is `floor(x)+0.5`.
        // Let's snap it.
        // But `currentHit.point` might be the specific HIT point.
        // The text earlier said `const px = Math.round(currentHit.point[0])`.
        // If we want to highlight the block *containing* the hit (or the block *hit*):
        // Typically: blockPos = floor(hitPos - normal * epsilon).
        // Let's approximate by `Math.round` but 0.5 offset?
        // Standard Minecraft blocks are centered at X.5, Y.5, Z.5? Or X.0?
        // My `makeCube` vertices are 0..1 range. Centered optionally?
        // `cubeVertices` (lines 147+) are 0..1. 
        // So block at integer `(x,y,z)` occupies `[x, x+1]`. Center is `x+0.5`.
        // SimpleRenderer draws centered cubes?
        // `SimpleRenderer` vertices: `-0.5` to `0.5` (Lines 70+ in renderer.ts).
        // So yes, it draws centered at `position`.
        // So we need to pass `floor(hit) + 0.5`.

        const bx = currentHit.point[0] + 0.5;
        const by = currentHit.point[1] + 0.5;
        const bz = currentHit.point[2] + 0.5;

        const boxPos = vec3.fromValues(bx, by, bz);
        simpleRenderer.drawCube(device, passEncoder, boxPos, qId, scale, outlineColor);
    }



    passEncoder.end();

    device.queue.submit([commandEncoder.finish()]);
    requestAnimationFrame(frame);
}

// Update Crosshair to a DOT
crosshair.innerHTML = `
<div style="position:absolute; left:8px; top:8px; width:4px; height:4px; background:rgba(255,255,255,1.0); border-radius:50%; box-shadow: 0 0 2px #000;"></div>
`;

frame();
