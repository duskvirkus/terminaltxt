import { KeyAction } from "./KeyAction";
/**
 * Tracks Keyboard Input from User and executes actions that have been added to [[actions]].
 */
export declare class InputTracker {
    /**
     * List of [[KeyAction]] to execute if certain keys have ben pressed.
     */
    protected actions: KeyAction[];
    /**
     * Will log keyboard presses to console to assist with designing.
     */
    protected logKeys: boolean;
    /**
     *
     */
    constructor();
    /**
     * Will add a [[KeyAction]] to [[actions]].
     *
     * @param action
     */
    addAction(action: KeyAction): void;
    /**
     * Sets [[logKeys]].
     *
     * @param logKeys
     */
    setLogKeys(logKeys: boolean): void;
    /**
     * Connected to event listeners and will call [[actions]] if [[KeyAction]].keys show up in an event.
     *
     * @param event
     */
    protected handleKey(event: KeyboardEvent): void;
}
