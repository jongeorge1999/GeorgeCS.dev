import { vec3, vec4, quat } from 'gl-matrix';
import { SimpleRenderer } from './renderer';

interface Pickup {
    position: vec3;
    velocity: vec3;
    type: number; // Block type (0=Cobble, 1=Dirt, etc.)
    rotation: vec3; // Euler angles
    timer: number; // Lifespan or bounce timer
}

export class PickupSystem {
    pickups: Pickup[] = [];

    // Physics Config
    private gravity = 20.0;
    private bounceY = 0.5;
    private collectionRadius = 1.5;

    spawn(position: vec3, type: number) {
        // Random velocity spread
        const vel = vec3.fromValues(
            (Math.random() - 0.5) * 4.0,
            4.0 + Math.random() * 2.0, // Upward pop
            (Math.random() - 0.5) * 4.0
        );

        this.pickups.push({
            position: vec3.clone(position),
            velocity: vel,
            type: type,
            rotation: vec3.fromValues(Math.random() * Math.PI, Math.random() * Math.PI, 0),
            timer: 0
        });
    }

    update(dt: number, playerPos: vec3, inventory: number[], inventoryCounts: number[], getTerrainHeight: (pos: vec3) => number | null) {
        // Reverse loop for removal
        for (let i = this.pickups.length - 1; i >= 0; i--) {
            const p = this.pickups[i];

            // 1. Physics
            p.velocity[1] -= this.gravity * dt;

            // Move
            vec3.scaleAndAdd(p.position, p.position, p.velocity, dt);

            // Friction/Damping
            p.velocity[0] *= 0.95;
            p.velocity[2] *= 0.95;

            // Rotation
            p.rotation[1] += 2.0 * dt;

            // Collision with Ground
            // groundY returns the Y coordinate of the topmost solid block
            // The top surface is at groundY + 1.0
            const groundY = getTerrainHeight(p.position);
            if (groundY !== null) {
                const surfaceY = groundY + 1.0;
                if (p.position[1] < surfaceY + 0.125) { // 0.125 = half of pickup size (0.25)
                    p.position[1] = surfaceY + 0.125;
                    p.velocity[1] *= -0.5; // Bounce
                    if (Math.abs(p.velocity[1]) < 1.0) p.velocity[1] = 0;
                }
            }

            // 2. Collection
            const dist = vec3.distance(p.position, playerPos);
            // Magnet effect if close
            if (dist < 5.0) {
                const dir = vec3.create();
                vec3.subtract(dir, playerPos, p.position);
                vec3.normalize(dir, dir);
                const magnetStrength = (5.0 - dist) * 10.0;
                vec3.scaleAndAdd(p.velocity, p.velocity, dir, magnetStrength * dt);
            }

            if (dist < this.collectionRadius) {
                // Collect!
                this.addToInventory(p.type, inventory, inventoryCounts);
                this.pickups.splice(i, 1);
            }
        }
    }

    addToInventory(type: number, inventory: number[], counts: number[]) {
        // 1. Check for existing stack
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i] === type && counts[i] < 64) {
                counts[i]++;
                return;
            }
        }
        // 2. Empty slot
        for (let i = 0; i < inventory.length; i++) {
            if (counts[i] === 0) {
                inventory[i] = type;
                counts[i] = 1;
                return;
            }
        }
        // Full? discard.
    }

    draw(device: GPUDevice, passEncoder: GPURenderPassEncoder, renderer: SimpleRenderer) {
        const scale = vec3.fromValues(0.25, 0.25, 0.25);

        for (const p of this.pickups) {
            let color = vec4.fromValues(0.5, 0.5, 0.5, 1);
            // Match exact block textures from 3D world
            if (p.type === 0) color = vec4.fromValues(0.53, 0.53, 0.53, 1); // Stone (cobblestone gray)
            else if (p.type === 1) color = vec4.fromValues(0.55, 0.35, 0.25, 1); // Dirt (brown)
            else if (p.type === 2) color = vec4.fromValues(0.45, 0.7, 0.3, 1); // Grass (bright green)
            else if (p.type === 4) color = vec4.fromValues(0.9, 0.15, 0.15, 1); // TNT (bright red)


            renderer.drawCubeEuler(device, passEncoder, p.position, p.rotation, scale, color);
        }
    }
}
