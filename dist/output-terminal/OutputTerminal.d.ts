import { TerminalConfig } from '../config/TerminalConfig';
import { DOMLineController } from '../dom-controller/DOMLineController';
/**
 * Terminal for taking in Text input commands from user.
 *
 * Notes:
 * - If config.height is passed -1 no cropping will happen.
 */
export declare class OutputTerminal {
    /**
     * Height of OutputTerminal.
     */
    protected height: number;
    /**
     * [[DOMLineControl]] for this OutputTerminal.
     */
    protected lineController: DOMLineController;
    /**
     * Record of the number of lines to check for [[overwrite]].
     */
    protected linesToCheck: number;
    /**
     * Width of OutputTerminal. -1 is unrestricted width.
     */
    protected width: number;
    /**
     * @param config
     * @param initialText The first line displayed, won't work if larger than width.
     */
    constructor(config?: TerminalConfig, initialText?: string);
    /**
     * @returns [[height]]
     */
    getHeight(): number;
    /**
     * @returns [[width]]
     */
    getWidth(): number;
    /**
     * Adds a line break. Helpful when using [[write]].
     */
    newLine(): void;
    /**
     * Will overwrite last text if the first character matches. Otherwise it will [[writeln]]. Is marginally slower than [[writeln]].
     *
     * @param text
     */
    overwrite(text: string): void;
    /**
     * Resets [[linesToCheck]] to 0.
     */
    resetLinesToCheck(): void;
    /**
     * Writes to current line on output terminal if space. If there is not enough space on the current line it will roll over to the next.
     *
     * @param text
     */
    write(text: string): void;
    /**
     * Will write a line to the OutputTerminal.
     *
     * @param text
     */
    writeln(text: string): void;
}
