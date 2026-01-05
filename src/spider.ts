
import { vec3, quat, mat4, vec4 } from 'gl-matrix';
import { solveIK } from './ik';
import { SimpleRenderer } from './renderer';

// Constants (Scaled down by ~20% from previous giant size)
const LEG_COUNT = 8;
const BODY_HEIGHT = 3.2;     // 4.0 * 0.8
const STEP_DISTANCE = 3.2;   // 4.0 * 0.8
const STEP_HEIGHT = 1.6;     // 2.0 * 0.8
const STEP_SPEED = 4.0;      // Keep speed multiplier (visually faster stride)

// Leg Dimensions (Scaled 0.8)
const COXA_LEN = 0.8;
const FEMUR_LEN = 2.4;
const TIBIA_LEN = 3.6;

export class Spider {
    position: vec3 = vec3.fromValues(0, 10, 0);
    velocity: vec3 = vec3.create();
    rotation: quat = quat.create();
    yaw: number = 0;

    // Leg State
    legTargets: vec3[] = []; // Current world position of feet
    legStart: vec3[] = [];   // Where foot sort of started (for lerp)
    legNext: vec3[] = [];    // Where foot is going
    legProgress: number[] = []; // 0 to 1
    legMoving: boolean[] = [];

    // Physics
    gravity: number = 20.0;

    constructor() {
        // Init legs
        for (let i = 0; i < LEG_COUNT; i++) {
            this.legTargets.push(vec3.fromValues(0, 0, 0));
            this.legStart.push(vec3.fromValues(0, 0, 0));
            this.legNext.push(vec3.fromValues(0, 0, 0));
            this.legProgress.push(0);
            this.legMoving.push(false);
        }
    }

    // Calculate ideal foot position based on current body + layout
    getIdealFootPos(index: number, currentPos: vec3, currentYaw: number): vec3 {
        const row = Math.floor(index / 2); // 0 to 3 (Front to Back)
        const side = index % 2 === 0 ? 1 : -1; // 1 = Left (+X), -1 = Right (-X)

        // Layout (Local to Center)
        // Scaled values (0.8x)
        // Z local: Forward/Back
        // X local: Left/Right (Reach)

        // Z Spacing: Front legs in front of head, more spacing between all legs
        // Front legs should be in front of the thorax, back legs behind
        const zVals = [4.5, 1.5, -1.5, -4.0];

        // Reach: Much wider to prevent collisions, especially middle legs
        // Front and back slightly narrower, middle legs extended for spider appearance
        const xDist = [4.0, 5.5, 5.5, 4.0];

        const lx = side * xDist[row];
        const lz = zVals[row];

        // Rotate local to world aligned with body
        // CRITICAL FIX: Ensure rotation is applied to the offset correctly
        const q = quat.create();
        quat.fromEuler(q, 0, currentYaw * 180 / Math.PI, 0);

        const offset = vec3.fromValues(lx, 0, lz);
        vec3.transformQuat(offset, offset, q);

        // Ideal ground plane
        const final = vec3.create();
        vec3.add(final, currentPos, offset);
        final[1] -= BODY_HEIGHT;
        return final;
    }

    update(dt: number, keys: { [key: string]: boolean }, terrainFn: (p: vec3) => number | null) {
        // Controls
        const speed = 5.0; // Scaled down slightly from 6.0
        const rotSpeed = 1.5;

        let move = 0;
        let turn = 0;

        if (keys['KeyW']) move += 1;
        if (keys['KeyS']) move -= 1;
        if (keys['KeyA']) turn += 1;
        if (keys['KeyD']) turn -= 1;

        this.yaw += turn * rotSpeed * dt;

        const forward = vec3.fromValues(Math.sin(this.yaw), 0, Math.cos(this.yaw));
        vec3.scaleAndAdd(this.velocity, vec3.create(), forward, move * speed);

        // Update Position
        vec3.scaleAndAdd(this.position, this.position, this.velocity, dt);

        // Damp
        vec3.scale(this.velocity, this.velocity, 0.0); // Full damp

        // Leg Logic (Gait)
        let movingCount = 0;
        for (let i = 0; i < LEG_COUNT; i++) {
            if (this.legMoving[i]) movingCount++;
        }

        for (let i = 0; i < LEG_COUNT; i++) {
            const ideal = this.getIdealFootPos(i, this.position, this.yaw);

            // Raycast terrain for ideal
            const groundY = terrainFn(ideal);
            if (groundY !== null) {
                ideal[1] = groundY + 1.0;
            } else {
                ideal[1] = 0; // Fallback
            }

            const dist = vec3.distance(this.legTargets[i], ideal);

            // Trigger Step
            // If distance is too far, or if the leg is "behind" the ideal position too much relative to movement
            if (!this.legMoving[i] && dist > STEP_DISTANCE) {
                // Allow max 4 legs moving, but try to keep stable pairs
                if (movingCount < 4) {
                    this.legMoving[i] = true;
                    this.legProgress[i] = 0;
                    vec3.copy(this.legStart[i], this.legTargets[i]);
                    vec3.copy(this.legNext[i], ideal);
                    movingCount++;
                }
            }

            // Animate Step
            if (this.legMoving[i]) {
                this.legProgress[i] += dt * STEP_SPEED;
                if (this.legProgress[i] >= 1.0) {
                    this.legProgress[i] = 1.0;
                    this.legMoving[i] = false;
                    vec3.copy(this.legTargets[i], this.legNext[i]);
                } else {
                    const t = this.legProgress[i];
                    // Lerp X/Z
                    vec3.lerp(this.legTargets[i], this.legStart[i], this.legNext[i], t);
                    // Arc Y (Parabola)
                    const h = Math.max(0, Math.sin(t * Math.PI)) * STEP_HEIGHT;
                    // Using current Y target base
                    const baseHeight = (1 - t) * this.legStart[i][1] + t * this.legNext[i][1];
                    this.legTargets[i][1] = baseHeight + h;
                }
            }
        }

        // Body Height Adjustment (Average of legs)
        let avgY = 0;
        for (let p of this.legTargets) avgY += p[1];
        avgY /= LEG_COUNT;

        // Smooth body Y
        const targetBodyY = avgY + BODY_HEIGHT;
        this.position[1] = this.position[1] * 0.9 + targetBodyY * 0.1;

        // Update Rotation Quaternion
        quat.fromEuler(this.rotation, 0, this.yaw * 180 / Math.PI, 0);
    }

    draw(device: GPUDevice, passEncoder: GPURenderPassEncoder, renderer: SimpleRenderer, isRiding: boolean) {
        // Body Colors
        const colBody = vec4.fromValues(0.1, 0.1, 0.1, 1.0); // Black/Grey
        const colLeg = vec4.fromValues(0.2, 0.05, 0.05, 1.0); // Dark Red
        const colJoint = vec4.fromValues(0.5, 0.0, 0.0, 1.0); // Red

        // 1. Draw Body
        // Thorax (Cephalothorax) - Scaled 0.8
        // Original: 3.0, 2.5, 4.0 -> Scaled: 2.4, 2.0, 3.2
        renderer.drawCubeEuler(device, passEncoder, this.position,
            vec3.fromValues(0, this.yaw, 0),
            vec3.fromValues(2.4, 2.0, 3.2),
            colBody
        );

        // Abdomen (Behind)
        const abdPos = vec3.create();
        const backward = vec3.fromValues(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
        vec3.scaleAndAdd(abdPos, this.position, backward, 3.2); // Offset scaled (was 4.0)

        // Tilt slightly
        // We'll construct a rotation matrix/quat for the abdomen
        const abdRot = vec3.fromValues(0.2, this.yaw, 0); // 0.2 rad tilt X, + yaw Y

        renderer.drawCubeEuler(device, passEncoder, abdPos,
            abdRot,
            vec3.fromValues(4.0, 3.2, 4.8), // Scaled 0.8 (was 5.0, 4.0, 6.0)
            colBody
        );

        // 2. Draw Legs
        for (let i = 0; i < LEG_COUNT; i++) {
            const side = i % 2 === 0 ? 1 : -1;
            const row = Math.floor(i / 2);

            // Body Attachment Points (Relative to Body Center)
            // Scaled 0.8
            // Z offsets (local)
            const zOff = [1.2, 0.4, -0.4, -1.2][row];
            const xOff = side * 1.2; // Width is 2.4, so 1.2 is edge

            const attachLocal = vec3.fromValues(xOff, 0, zOff);
            vec3.transformQuat(attachLocal, attachLocal, this.rotation);
            const attachWorld = vec3.create();
            vec3.add(attachWorld, this.position, attachLocal);

            // Coxa Endpoint (The hip joint)
            // Points outwards
            const coxaDirLocal = vec3.fromValues(side, -0.2, 0); // Slight down angle
            const coxaDir = vec3.create();
            vec3.transformQuat(coxaDir, coxaDirLocal, this.rotation);
            vec3.normalize(coxaDir, coxaDir);

            const coxaEnd = vec3.create();
            vec3.scaleAndAdd(coxaEnd, attachWorld, coxaDir, COXA_LEN);

            // Draw Coxa
            this.drawLimb(device, passEncoder, renderer, attachWorld, coxaEnd, 0.48, colBody); // Thinner

            // Target Foot
            const foot = this.legTargets[i];

            // IK Solve from CoxaEnd to Foot
            // Knees generally point UP
            const pole = vec3.fromValues(0, 1, 0);

            const sol = solveIK(coxaEnd, foot, FEMUR_LEN, TIBIA_LEN, pole);
            const knee = sol.knee;

            // Draw Femur (Coxa -> Knee)
            this.drawLimb(device, passEncoder, renderer, coxaEnd, knee, 0.4, colLeg);

            // Draw Tibia (Knee -> Foot)
            this.drawLimb(device, passEncoder, renderer, knee, foot, 0.28, colLeg);

            // Knee Joint
            renderer.drawCubeEuler(device, passEncoder, knee, vec3.create(), vec3.fromValues(0.56, 0.56, 0.56), colJoint);
        }

        // 3. Draw Rider (Removed - Handled by PlayerModel)
    }

    drawLimb(device: GPUDevice, passEncoder: GPURenderPassEncoder, renderer: SimpleRenderer,
        start: vec3, end: vec3, thickness: number, color: vec4) {

        const center = vec3.create();
        vec3.lerp(center, start, end, 0.5);

        const len = vec3.distance(start, end);

        const dir = vec3.create();
        vec3.subtract(dir, end, start);
        vec3.normalize(dir, dir);

        // Rotation Quat: From Up (0,1,0) to Dir
        const q = quat.create();
        const up = vec3.fromValues(0, 1, 0);

        // Handle parallel case
        if (Math.abs(vec3.dot(dir, up)) > 0.99) {
            // Just use identity or flip
            if (dir[1] < 0) quat.fromEuler(q, 180, 0, 0);
        } else {
            quat.rotationTo(q, up, dir);
        }

        renderer.drawCube(device, passEncoder, center, q, vec3.fromValues(thickness, len, thickness), color);
    }
}
