/**
 * Also see [[cmap]].
 *
 * @param value
 * @param min
 * @param max
 * @return value if between min and max, otherwise returns min if below min or max if above max.
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Also see [[cmap]].
 *
 * @param value
 * @param min1
 * @param max1
 * @param min2
 * @param max2
 * @returns value converted from range 1 to range 2
 */
export declare function map(value: number, min1: number, max1: number, min2: number, max2: number): number;
/**
 * Will clamp value if outside of range 2.
 *
 * Also see [[map]] and [[clamp]].
 *
 * @param value
 * @param min1
 * @param max1
 * @param min2
 * @param max2
 * @returns value converted from range 1 to range 2 and clamps if necessary
 */
export declare function cmap(value: number, min1: number, max1: number, min2: number, max2: number): number;
/**
 * @returns random number between 0 and 1
 */
export declare function random(): number;
/**
 * @param max
 * @returns random number between 0 and max
 */
export declare function random(max: number): number;
/**
 * @param min
 * @param max
 * @returns random number between min and max
 */
export declare function random(min: number, max: number): number;
