import { Indexable } from "../utils/get-index";
import { DOMController } from "./DOMController";
/**
 * Creates and has methods to update a Terminal DOM that contains cells in a grid pattern.
 */
export declare class DOMCellController extends DOMController implements Indexable {
    /**
     * Span elements that hold characters.
     */
    cells: HTMLSpanElement[];
    /**
     * Height of instance.
     */
    protected height: number;
    /**
     * Width of instance.
     */
    protected width: number;
    /**
     * @param width
     * @param height
     * @param container
     */
    constructor(width: number, height: number, container?: HTMLDivElement);
    /**
     * @returns [[height]]
     */
    getHeight(): number;
    /**
     * @returns [[width]]
     */
    getWidth(): number;
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
     * Set the color via css of a cell.
     *
     * @param color
     */
    setColor(index: number, color: string): void;
    /**
     * Initializes cells as empty span elements with line breaks.
     */
    protected initCells(): void;
}
