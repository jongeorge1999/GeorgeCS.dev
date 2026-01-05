import { vec3, vec4 } from 'gl-matrix';
import { SimpleRenderer } from './renderer';

class Particle {
    position: vec3 = vec3.create();
    velocity: vec3 = vec3.create();
    color: vec4 = vec4.create();
    life: number = 0;
    maxLife: number = 0;
    size: number = 0.2;
    active: boolean = false;
}

export class ParticleSystem {
    private particles: Particle[] = [];
    private maxParticles = 1000;

    constructor() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(new Particle());
        }
    }

    emit(pos: vec3, count: number, colorBase: vec4, speed: number = 5.0) {
        let spawned = 0;
        for (let p of this.particles) {
            if (!p.active) {
                p.active = true;
                vec3.copy(p.position, pos);

                // Random Velocity
                const rx = (Math.random() - 0.5) * 2;
                const ry = (Math.random() - 0.5) * 2;
                const rz = (Math.random() - 0.5) * 2;
                vec3.set(p.velocity, rx, ry, rz);
                vec3.normalize(p.velocity, p.velocity);
                vec3.scale(p.velocity, p.velocity, Math.random() * speed);

                // Color variation
                vec4.copy(p.color, colorBase);
                p.color[0] += (Math.random() - 0.5) * 0.1;
                p.color[1] += (Math.random() - 0.5) * 0.1;
                p.color[2] += (Math.random() - 0.5) * 0.1;

                p.maxLife = 1.0 + Math.random();
                p.life = p.maxLife;
                p.size = 0.1 + Math.random() * 0.2;

                spawned++;
                if (spawned >= count) break;
            }
        }
    }

    update(dt: number) {
        for (let p of this.particles) {
            if (p.active) {
                p.life -= dt;
                if (p.life <= 0) {
                    p.active = false;
                    continue;
                }

                // Gravity
                p.velocity[1] -= 9.8 * dt;

                // Move
                vec3.scaleAndAdd(p.position, p.position, p.velocity, dt);

                // Floor check (simple)
                // if(p.position[1] < -60) p.active = false;
            }
        }
    }

    draw(device: GPUDevice, passEncoder: GPURenderPassEncoder, renderer: SimpleRenderer) {
        // Use a temp quat for no rotation
        const q = [0, 0, 0, 1] as unknown as any; // quat.create()
        const s = vec3.create();

        for (let p of this.particles) {
            if (p.active) {
                vec3.set(s, p.size, p.size, p.size);
                // Alpha fade
                p.color[3] = p.life / p.maxLife;
                renderer.drawCube(device, passEncoder, p.position, q, s, p.color);
            }
        }
    }
}
