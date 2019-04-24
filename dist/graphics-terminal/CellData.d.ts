/**
 * Used to keep track of the data behind a [[GraphicsTerminal]].
 */
export declare class CellData {
    /**
     * Array of booleans to keep track of what data has been changed since last update.
     */
    protected changed: boolean[];
    /**
     * Array of numbers that map to a characters in a [[CharacterSet]]
     */
    protected data: number[];
    /**
     * Height of data.
     */
    protected height: number;
    /**
     * Width of data.
     */
    protected width: number;
    /**
     * @param width
     * @param height
     */
    constructor(width: number, height: number);
    /**
     * Set changed to false based on index.
     *
     * @param index
     */
    doneChange(index: number): void;
    /**
     * Get the value of a single cell.
     *
     * @param index
     */
    getCell(index: number): number;
    /**
     * @returns [[height]]
     */
    getHeight(): number;
    /**
     * @returns [[width]]
     */
    getWidth(): number;
    /**
     * See if single cell value has been changed.
     *
     * @param index
     */
    hasBeenChanged(index: number): boolean;
    /**
     * Get index of cell based on column and row values.
     *
     * @param column
     * @param row
     */
    index(column: number, row: number): number;
    /**
     * @returns number of cells in data
     */
    numberOfCells(): number;
    /**
     * Set the value of a single cell.
     *
     * @param value
     * @param index
     */
    setCell(value: number, index: number): void;
    /**
     * Initializes changed with true.
     */
    protected initChanged(): void;
    /**
     * Will create a new array for data based on width and height, full of 0s.
     */
    protected initData(): void;
}
