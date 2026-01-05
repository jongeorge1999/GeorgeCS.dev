// Simple 2D Noise Implementation
// Based on a simple value noise or perlin approximation

export function frac(x: number) { return x - Math.floor(x); }
export function mix(a: number, b: number, t: number) { return a + (b - a) * t; }

// Hash function
export function hash(x: number, y: number): number {
    let a = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return a - Math.floor(a);
}

// 2D Noise
export function noise(x: number, y: number): number {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = frac(x);
    const fy = frac(y);

    // Smoothstep interpolation
    const tx = fx * fx * (3.0 - 2.0 * fx);
    const ty = fy * fy * (3.0 - 2.0 * fy);

    const a = hash(ix, iy);
    const b = hash(ix + 1, iy);
    const c = hash(ix, iy + 1);
    const d = hash(ix + 1, iy + 1);

    return mix(mix(a, b, tx), mix(c, d, tx), ty);
}

// FBM (Fractal Brownian Motion) for better terrain
export function fbm(x: number, y: number, octaves: number): number {
    let value = 0;
    let amplitude = 0.5;
    let frequency = 1.0;

    for (let i = 0; i < octaves; i++) {
        value += noise(x * frequency, y * frequency) * amplitude;
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}
