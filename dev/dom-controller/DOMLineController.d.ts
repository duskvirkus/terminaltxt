import { DOMController } from './DOMController';
/**
 * Creates and has methods to update a Terminal DOM that contains lines.
 */
export declare class DOMLineController extends DOMController {
    /**
     * Span elements that hold the lines.
     */
    lines: HTMLSpanElement[];
    /**
     * Maximum number of lines displayed, if -1 no cut off.
     */
    maxLines: number;
    /**
     * @param maxLines defaults to -1
     * @param container
     */
    constructor(maxLines?: number, container?: HTMLDivElement);
    /**
     * Adds a new line. If no text is specified it defaults to ''.
     *
     * @param lineText
     */
    addLine(lineText?: string): void;
    /**
     * Will append text to the current line.
     *
     * @param lineText
     */
    appendCurrentLine(lineText: string): void;
    /**
     * Removes the first line from the DOM and [[lines]] array.
     */
    removeFirstLine(): void;
    /**
     * Will override the any text of the current line with the text passed to this.
     *
     * @param lineText
     */
    setCurrentLine(lineText: string): void;
    /**
     * Checks to see if changes will result in an overflow.
     */
    protected checkForOverflow(): void;
    /**
     * Removes the first child of the [[display]] element.
     * @param toRemove
     */
    protected removeFirstChild(toRemove: number): void;
}
