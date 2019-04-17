import { CharacterSet } from '../characterset/CharacterSet';
import { Terminal } from './Terminal';
import { TerminalCellData } from './TerminalCellData';
import { TerminalConfig } from './TerminalConfig';
/**
 * Graphical Terminal for text art rendering.
 */
export declare class GraphicsTerminal extends Terminal {
    /**
     * Cell data for this instance of GraphicsTerminal. see [[TerminalCellData]]
     */
    protected cellData: TerminalCellData;
    /**
     * Height of graphics terminal.
     */
    protected height: number;
    /**
     * Width of graphics terminal.
     */
    protected width: number;
    /**
     * @param config [[TerminalConfig]]
     */
    constructor(config?: TerminalConfig, characterSet?: CharacterSet);
    /**
     * @returns [[height]]
     */
    getHeight(): number;
    /**
     * @returns [[width]]
     */
    getWidth(): number;
    /**
     * Set cell with character string containing a character. If string has multiple characters only the first one will be used.
     *
     * @param character
     * @param column
     * @param row
     */
    setCell(character: string, column: number, row: number): void;
    /**
     * Set cell with index into [[CharacterSet]].
     *
     * @param index
     * @param column
     * @param row
     */
    setCell(index: number, column: number, row: number): void;
    /**
     * Will update dom graphics based on [[TerminalCellData]].
     */
    update(): void;
}
