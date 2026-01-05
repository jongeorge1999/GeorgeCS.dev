import { mat4, vec3, vec4, quat } from 'gl-matrix';
// @ts-ignore
import shaderCode from './shaders.wgsl';

export class SimpleRenderer {
    device: GPUDevice;
    pipeline: GPURenderPipeline;
    vertexBuffer: GPUBuffer;
    uniformBuffer: GPUBuffer;
    bindGroup: GPUBindGroup;

    // Temp matrices to avoid GC
    private modelMatrix = mat4.create();
    private viewProjectionMatrix = mat4.create();

    // Temp Float32Array to avoid GC
    private uniformData = new Float32Array(36); // 16 + 16 + 4
    private tempQuat = quat.create();

    private currentOffset = 0;
    private maxDraws = 256;
    private uniformStride = 256;

    constructor(device: GPUDevice, format: GPUTextureFormat) {
        this.device = device;

        // 1. Explicit Bind Group Layout (Required for Dynamic Offsets)
        const bindGroupLayout = device.createBindGroupLayout({
            entries: [{
                binding: 0,
                visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                buffer: {
                    type: 'uniform',
                    hasDynamicOffset: true,
                    minBindingSize: 256
                }
            }]
        });

        // 2. Pipeline
        this.pipeline = device.createRenderPipeline({
            layout: device.createPipelineLayout({
                bindGroupLayouts: [bindGroupLayout]
            }),
            vertex: {
                module: device.createShaderModule({ code: shaderCode }),
                entryPoint: 'entity_vs',
                buffers: [{
                    arrayStride: 12, // vec3 pos
                    attributes: [{ shaderLocation: 0, offset: 0, format: 'float32x3' }]
                }]
            },
            fragment: {
                module: device.createShaderModule({ code: shaderCode }),
                entryPoint: 'entity_fs',
                targets: [{
                    format: format,
                    blend: {
                        color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' },
                        alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' }
                    }
                }]
            },
            primitive: { topology: 'triangle-list', cullMode: 'back' },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: 'less',
                format: 'depth24plus',
            }
        });

        // 3. Vertex Buffer
        const vertices = new Float32Array([
            // Front
            -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5,
            -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5,
            // Back
            -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
            // Top
            -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5,
            // Bottom
            -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
            -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5,
            // Right
            0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
            0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5,
            // Left
            -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
            -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5,
        ]);

        this.vertexBuffer = device.createBuffer({
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        });
        device.queue.writeBuffer(this.vertexBuffer, 0, vertices);

        // 4. Uniform Buffer (Large)
        // 256 bytes per entity * 256 entities max = 64KB
        this.uniformBuffer = device.createBuffer({
            size: this.uniformStride * this.maxDraws,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        // 5. BindGroup (Window: 256 bytes)
        this.bindGroup = device.createBindGroup({
            layout: bindGroupLayout,
            entries: [{
                binding: 0,
                resource: {
                    buffer: this.uniformBuffer,
                    offset: 0,
                    size: 256 // The size of ONE window
                }
            }]
        });
    }

    startFrame(passEncoder: GPURenderPassEncoder, viewProjectionMatrix: mat4) {
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0, this.vertexBuffer);

        // Cache VP
        mat4.copy(this.viewProjectionMatrix, viewProjectionMatrix);

        // Reset Offset
        this.currentOffset = 0;
    }

    drawCube(device: GPUDevice, passEncoder: GPURenderPassEncoder,
        position: vec3, rotation: quat, scale: vec3, color: vec4) {

        if (this.currentOffset >= this.maxDraws) {
            console.warn("Max entity draws exceeded");
            return;
        }

        // Update Uniforms
        mat4.fromRotationTranslationScale(this.modelMatrix, rotation, position, scale);

        // Reuse persistent Float32Array
        this.uniformData.set(this.viewProjectionMatrix, 0);
        this.uniformData.set(this.modelMatrix, 16);
        this.uniformData.set(color, 32);

        // Write to current slot
        const byteOffset = this.currentOffset * this.uniformStride;
        device.queue.writeBuffer(this.uniformBuffer, byteOffset, this.uniformData);

        // Bind with Dynamic Offset
        passEncoder.setBindGroup(0, this.bindGroup, [byteOffset]);

        passEncoder.draw(36, 1);

        this.currentOffset++;
    }

    // Helper for simple Euler rotation
    drawCubeEuler(device: GPUDevice, passEncoder: GPURenderPassEncoder,
        position: vec3, rotEuler: vec3, scale: vec3, color: vec4) {
        // Reuse tempQuat
        quat.fromEuler(this.tempQuat, rotEuler[0] * 180 / Math.PI, rotEuler[1] * 180 / Math.PI, rotEuler[2] * 180 / Math.PI);
        this.drawCube(device, passEncoder, position, this.tempQuat, scale, color);
    }
}
