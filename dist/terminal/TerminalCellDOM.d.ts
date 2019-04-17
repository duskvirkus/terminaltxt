import { TerminalDOM } from "./TerminalDOM";
export declare class TerminalCellDOM extends TerminalDOM {
    /**
     * Span elements that hold characters.
     */
    cells: HTMLSpanElement[];
    /**
     * Height of instance.
     */
    height: number;
    /**
     * Width of instance.
     */
    width: number;
    /**
     * @param width
     * @param height
     * @param container
     */
    constructor(width: number, height: number, container?: HTMLDivElement);
    /**
     * Get index of cell in cells array based on column and row values.
     *
     * @param column
     * @param row
     * @returns index
     */
    index(column: number, row: number): number;
    /**
     * Will set single cell innerHTML to a string based on cell index.
     *
     * @param value
     * @param index
     */
    setCellValue(value: string, index: number): void;
    /**
     * Will set single cell innerHTML to a string based on cell column and row.
     *
     * @param value
     * @param column
     * @param row
     */
    setCellValue(value: string, column: number, row: number): void;
    /**
     * Initializes cells as empty span elements with line breaks.
     */
    protected initCells(): void;
}
