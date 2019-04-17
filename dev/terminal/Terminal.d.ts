import { CharacterSet } from '../characterset/CharacterSet';
import { TerminalDOM } from './TerminalDOM';
/**
 * Contains framework between the CommandTerminal and GraphicsTerminal.
 */
export declare abstract class Terminal {
    /**
     * [[CharacterSet]] associated with this Terminal.
     */
    protected characterSet: CharacterSet;
    /**
     * [[TerminalDOM]] associated with this Terminal.
     */
    protected domController: TerminalDOM;
    constructor(domController: TerminalDOM, characterSet: CharacterSet);
    /**
     * @returns [[characterSet]]
     */
    getCharacterSet(): CharacterSet;
}
