export function radians(deg: number): number {
    return deg/360*Math.PI*2
}

export function easeInQuad(x: number): number {
    return x * x;
}

export type Vec = [number, number, number];