
import { vec3, mat4, vec4, quat } from 'gl-matrix';
import { SimpleRenderer } from './renderer';

export class PlayerModel {
    // Body Parts (Relative to player origin)
    // Simple Steve:
    // Head: 8x8x8
    // Body: 8x12x4
    // Arms: 4x12x4
    // Legs: 4x12x4

    // Using simple boxes. 
    // Scale factor: 1 unit = 1 meter approx. 
    // Player height ~1.8m. 
    // Head ~0.25m, Body ~0.75m, Legs ~0.75m.

    draw(device: GPUDevice, passEncoder: GPURenderPassEncoder, renderer: SimpleRenderer, position: vec3, yaw: number, pitch: number, isMoving: boolean, time: number, isRiding: boolean = false) {
        // Colors
        const skinColor = vec4.fromValues(0.9, 0.7, 0.6, 1.0);
        const shirtColor = vec4.fromValues(0.2, 0.6, 0.8, 1.0); // Cyan shirt
        const pantsColor = vec4.fromValues(0.2, 0.2, 0.6, 1.0); // Blue pants

        const qId = [0, 0, 0, 1] as unknown as any; // Identity Quaternion (we'll do rotations manually via positions/matrices if needed, or just pass qId if we pre-calc world pos)

        // Helper to transform local part to world
        // But SimpleRenderer takes world Position and Scale. Rotation is limited (AABB).
        // Wait, SimpleRenderer `drawCube` takes `position`, `rotation` (quat), `scale`.
        // So we can rotate parts!

        // Player Quaternion (Yaw)
        const qPlayer = quat.create();
        quat.fromEuler(qPlayer, 0, yaw * (180 / Math.PI), 0); // yaw in radians to degrees? gl-matrix uses degrees? 
        // Wait, gl-matrix fromEuler usually takes degrees. `yaw` is radians in main.ts? 
        // In main.ts: `cameraYaw += e.movementX * mouseSensitivity;`. It's radians.
        // So convert to degrees.

        // Actually, let's check SimpleRenderer. It takes a stored rotation?
        // Renderer signature: `drawCube(device, passEncoder, pos, rot, scale, color)`
        // `rot` is a quaternion.

        // Animation
        const walkSpeed = 10.0;
        const swing = isMoving ? Math.sin(time * walkSpeed) * 0.5 : 0;

        // --- HEAD ---
        // 0.25 size
        const headPosLocal = vec3.fromValues(0, 1.5, 0); // 1.5m off ground
        const headPosWorld = vec3.create();
        vec3.transformQuat(headPosWorld, headPosLocal, qPlayer);
        vec3.add(headPosWorld, headPosWorld, position);

        // Head Rotation (Yaw + Pitch)
        const qHead = quat.create();
        quat.fromEuler(qHead, pitch * (180 / Math.PI), yaw * (180 / Math.PI), 0);
        // Pitch is X, Yaw is Y.

        renderer.drawCube(device, passEncoder, headPosWorld, qHead, vec3.fromValues(0.5, 0.5, 0.5), skinColor);


        // --- BODY ---
        const bodyPosLocal = vec3.fromValues(0, 0.9, 0);
        const bodyPosWorld = vec3.create();
        vec3.transformQuat(bodyPosWorld, bodyPosLocal, qPlayer);
        vec3.add(bodyPosWorld, bodyPosWorld, position);

        renderer.drawCube(device, passEncoder, bodyPosWorld, qPlayer, vec3.fromValues(0.5, 0.7, 0.25), shirtColor);


        // --- RIGHT ARM ---
        const rArmLoc = vec3.fromValues(0.5, 0.9, 0);
        const rArmWorld = vec3.create();

        // Swing
        const qRArm = quat.create();
        quat.fromEuler(qRArm, swing * (180 / Math.PI), yaw * (180 / Math.PI), 0);

        vec3.transformQuat(rArmWorld, rArmLoc, qPlayer); // Start at shoulder
        vec3.add(rArmWorld, rArmWorld, position);

        renderer.drawCube(device, passEncoder, rArmWorld, qRArm, vec3.fromValues(0.2, 0.7, 0.2), skinColor);

        // --- LEFT ARM ---
        const lArmLoc = vec3.fromValues(-0.5, 0.9, 0);
        const lArmWorld = vec3.create();

        const qLArm = quat.create();
        quat.fromEuler(qLArm, -swing * (180 / Math.PI), yaw * (180 / Math.PI), 0); // Opposite swing

        vec3.transformQuat(lArmWorld, lArmLoc, qPlayer);
        vec3.add(lArmWorld, lArmWorld, position);

        renderer.drawCube(device, passEncoder, lArmWorld, qLArm, vec3.fromValues(0.2, 0.7, 0.2), skinColor);


        if (isRiding) {
            // Sitting Pose
            // Rotate legs forward 80 degrees
            // Pitch is X.
            // But we also need to respect Yaw (Player Rotation).
            // So we want: Rotate by Yaw First (Y), then Pitch (X).
            // gl-matrix fromEuler order is usually X, Y, Z or Z, Y, X. Defaults to ZYX usually?
            // Let's manually construct:
            // Leg should be forward relative to body.

            // Right Leg
            const rLegLoc = vec3.fromValues(0.15, 0.5, 0.4); // Higher and forward
            const rLegWorld = vec3.create();

            // Sitting rotation: -80 deg X (local)
            const qSit = quat.create();
            quat.fromEuler(qSit, -80, 0, 0);

            const qLegFinal = quat.create();
            quat.multiply(qLegFinal, qPlayer, qSit); // Apply Player Yaw, then Sit Pitch

            vec3.transformQuat(rLegWorld, rLegLoc, qPlayer);
            vec3.add(rLegWorld, rLegWorld, position);

            renderer.drawCube(device, passEncoder, rLegWorld, qLegFinal, vec3.fromValues(0.2, 0.6, 0.2), pantsColor);

            // Left Leg
            const lLegLoc = vec3.fromValues(-0.15, 0.5, 0.4);
            const lLegWorld = vec3.create();

            vec3.transformQuat(lLegWorld, lLegLoc, qPlayer);
            vec3.add(lLegWorld, lLegWorld, position);

            renderer.drawCube(device, passEncoder, lLegWorld, qLegFinal, vec3.fromValues(0.2, 0.6, 0.2), pantsColor);

        } else {
            // Walking / Standing Pose (Existing)
            // --- RIGHT LEG ---
            const rLegLoc = vec3.fromValues(0.15, 0.3, 0); // Center of leg
            const rLegWorld = vec3.create();

            const qRLeg = quat.create();
            quat.fromEuler(qRLeg, -swing * (180 / Math.PI), yaw * (180 / Math.PI), 0); // Opposite to Right Arm

            vec3.transformQuat(rLegWorld, rLegLoc, qPlayer);
            vec3.add(rLegWorld, rLegWorld, position);

            renderer.drawCube(device, passEncoder, rLegWorld, qRLeg, vec3.fromValues(0.2, 0.6, 0.2), pantsColor);

            // --- LEFT LEG ---
            const lLegLoc = vec3.fromValues(-0.15, 0.3, 0);
            const lLegWorld = vec3.create();

            const qLLeg = quat.create();
            quat.fromEuler(qLLeg, swing * (180 / Math.PI), yaw * (180 / Math.PI), 0);

            vec3.transformQuat(lLegWorld, lLegLoc, qPlayer);
            vec3.add(lLegWorld, lLegWorld, position);

            renderer.drawCube(device, passEncoder, lLegWorld, qLLeg, vec3.fromValues(0.2, 0.6, 0.2), pantsColor);
        }
    }
}
