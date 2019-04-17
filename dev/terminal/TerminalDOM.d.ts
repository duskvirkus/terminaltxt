/**
 * Keeps track of Terminal's DOM elements and is used for updating them.
 */
export declare class TerminalDOM {
    /**
     * Keeps track of number of ids that have been created.
     */
    static idCounter: number;
    /**
     * Code / Monospace, should be the direct child of the pre tag.
     */
    code: HTMLElement;
    /**
     * The main DOM wrapper for all DOM elements.
     * Nothing from the terminal should be outside of this element.
     */
    container: HTMLDivElement;
    /**
     * Span that contains the final display text of the terminal.
     */
    display: HTMLSpanElement;
    /**
     * ID number for this instance of the TerminalDOM.
     */
    idNumber: number;
    /**
     * Preformatted Text, should be the direct child of the container.
     */
    pre: HTMLPreElement;
    /**
     * @param container
     */
    constructor(container?: HTMLDivElement);
    /**
     * Creates an empty container div and appends it to the body.
     *
     * @returns created container
     */
    static defaultContainer(): HTMLDivElement;
    /**
     * Get an incremented id number for new TerminalDOM.
     *
     * @returns new idNumber
     */
    static getID(): number;
    /**
     * Clears text and children from inside display span.
     */
    clear(): void;
    /**
     * Adds HTML classes to DOM elements in TerminalDOM.
     */
    protected setClasses(): void;
    /**
     * Uses idNumber property to set HTML id traits for each of the DOM elements.
     */
    protected setIDs(): void;
}
