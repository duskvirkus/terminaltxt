/**
 * Simple vector class with two elements, x and y.
 */
export declare class Vector2 {
    /**
     * First component of the vector.
     */
    x: number;
    /**
     * Second component of the vector.
     */
    y: number;
    /**
     * Defaults x and y as 0 if no values passed.
     *
     * @param x
     * @param y
     */
    constructor(x?: number, y?: number);
    /**
     * @param vector
     * @returns a copy of vector
     */
    static copy(vector: Vector2): Vector2;
    /**
     * Adds another vector element wise.
     *
     * @param other
     */
    add(other: Vector2): void;
    /**
     * Adds element wise, x and y as if they were another vector.
     *
     * @param x
     * @param y
     */
    add(x: number, y: number): void;
    /**
     * @param other
     * @returns The dot product of this and the passed vector.
     */
    dot(other: Vector2): number;
    /**
     * @param x
     * @param y
     * @returns The dot product of this and the passed x and y as if they were another vector.
     */
    dot(x: number, y: number): number;
    /**
     * @returns The magnitude of the vector.
     */
    magnitude(): number;
    /**
     * Will normalize a non zero vector to a magnitude of 1.
     */
    normalize(): void;
    /**
     * Scales vector based on scalar passed. Multiplication if you don't know linear algebra.
     *
     * @param scalar
     */
    scale(scalar: number): void;
    /**
     * Subtracts another vector element wise.
     *
     * @param other
     */
    subtract(other: Vector2): void;
    /**
     * Subtracts element wise, x and y as if they were another vector.
     *
     * @param x
     * @param y
     */
    subtract(x: number, y: number): void;
}
