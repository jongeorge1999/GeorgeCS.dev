import { vec3 } from 'gl-matrix';

// Simple 2-Bone IK Solver (Analytic)
// Thigh -> Knee -> Foot
// Returns the positions of the Knee and the Adjusted Foot (if unreachable)
export function solveIK(
    root: vec3,
    target: vec3,
    len1: number,
    len2: number,
    poleDir: vec3 // Direction the knee should point
): { knee: vec3, foot: vec3 } {

    // 1. Vector from Root to Target
    const axis = vec3.create();
    vec3.subtract(axis, target, root);
    const dist = vec3.length(axis);

    // 2. Clamp target if out of reach
    const maxLen = len1 + len2;
    const finalFoot = vec3.clone(target);

    if (dist >= maxLen) {
        // Fully extended
        vec3.normalize(axis, axis);
        vec3.scaleAndAdd(finalFoot, root, axis, maxLen);

        const knee = vec3.create();
        vec3.scaleAndAdd(knee, root, axis, len1);
        return { knee, foot: finalFoot };
    }

    // 3. Law of Cosines to find knee angle
    // dist^2 = len1^2 + len2^2 - 2*len1*len2*cos(knee_angle) -> This is internal angle
    // We need the layout in 3D.

    // Analytic solution in 2D plane formed by Root, Target, and Pole

    // Alpha: Angle at Root (Thigh)
    // Cos Alpha = (len1^2 + dist^2 - len2^2) / (2 * len1 * dist)
    const cosAlpha = (len1 * len1 + dist * dist - len2 * len2) / (2 * len1 * dist);
    // Clamp for safety
    const clampedCosAlpha = Math.max(-1, Math.min(1, cosAlpha));
    const alpha = Math.acos(clampedCosAlpha);

    // 4. Construct the Coordinate System
    // Z-axis: Vector to Target (normalized)
    const zAxis = vec3.clone(axis);
    vec3.normalize(zAxis, zAxis);

    // X-axis: Perpendicular to Z and Pole (Knee bending direction)
    const xAxis = vec3.create();
    vec3.cross(xAxis, zAxis, poleDir);
    if (vec3.length(xAxis) < 0.001) {
        // Pole is parallel to axis, pick generic up
        vec3.cross(xAxis, zAxis, vec3.fromValues(0, 1, 0));
    }
    vec3.normalize(xAxis, xAxis);

    // Y-axis: Up vector in the plane
    const yAxis = vec3.create();
    vec3.cross(yAxis, xAxis, zAxis);
    vec3.normalize(yAxis, yAxis);

    // 5. Calculate Knee Position
    // Rotate vector (len1, 0, 0) by alpha in the plane?
    // In our basis:
    // Root is (0,0)
    // Target is (dist, 0) along Z
    // Knee is at distance len1, rotated by alpha away from Z towards Y

    // Knee Local:
    // z = len1 * cos(alpha)
    // y = len1 * sin(alpha)

    const kneeZ = len1 * clampedCosAlpha;
    const kneeY = len1 * Math.sin(alpha);

    const knee = vec3.clone(root);
    vec3.scaleAndAdd(knee, knee, zAxis, kneeZ);
    vec3.scaleAndAdd(knee, knee, yAxis, kneeY);

    return { knee, foot: finalFoot };
}
