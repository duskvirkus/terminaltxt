import { InputTracker } from '../input/InputTracker';
import { OutputTerminal } from '../output-terminal/OutputTerminal';
import { Command } from './Command';
import { CommandArguments } from './CommandArguments';
/**
 * Used to track input and check against registered commands.
 */
export declare class CommandTracker {
    /**
     * Keeps track of partially done command from user.
     */
    current: string;
    /**
     * History of commands entered.
     */
    history: string[];
    /**
     * The max number of commands recored by [[history]]. Defaults to 100. -1 will disable the limit.
     */
    historyMax: number;
    /**
     * List of regestered commands. Add [[Command]] by using [[registerCommand]].
     */
    protected commands: Command[];
    /**
     * Keeps track of last command loaded using history.
     */
    protected historyCounter: number;
    /**
     * Input tracker for user keyboard input.
     */
    protected input: InputTracker;
    /**
     * [[OutputTerminal]] that is used to display the current state of input and output.
     */
    protected output: OutputTerminal;
    /**
     * @param outputTerminal
     */
    constructor(outputTerminal?: OutputTerminal);
    /**
     * Return the index of CommandArguments in an array. Tool to assist in looking for arguments in [[Command]]s.
     *
     * @param arg
     * @param args
     * @returns index of arg in args
     */
    static indexOfCommandArgument(arg: string, args: CommandArguments[]): number;
    /**
     * Bulk version of [[indexOfCommandArgument]].
     *
     * @param argsToLookFor
     * @param args
     * @returns indexes of argsToLookFor in args
     */
    static indexOfCommandArguments(argsToLookFor: string[], args: CommandArguments[]): number[];
    /**
     * Function run when 'Enter' is pressed. Will handle whatever command is in current, report unknown command, and reset for the next command.
     *
     * @param key
     */
    finalizeCurrent(key: string): void;
    /**
     * Default help command that lists [[commands]] and allows for \'--lookup\' to get more information about specific commands.
     *
     * @param output
     * @param args
     * @return exit code
     */
    helpCommand(output: OutputTerminal, args: CommandArguments[]): number;
    /**
     * Will add [[Command]] to [[commands]].
     *
     * @param command
     */
    registerCommand(command: Command): void;
    /**
     * Updates the current line in [[output]].
     */
    update(): void;
    /**
     * Will add the key from [[input]] to [[current]].
     *
     * @param key
     */
    protected addToCurrent(key: string): void;
    /**
     * Adds a command to the history and trims history if longer than [[historyMax]]. Will reset [[historyCounter]].
     *
     * @param command
     */
    protected addToHistory(command: string): void;
    /**
     * Will remove the last character in [[current]].
     *
     * @param key
     */
    protected backspaceCurrent(key: string): void;
    /**
     * Decrements [[historyCounter]] and queries [[history]] then puts that in [[current]].
     *
     * @param key
     */
    protected historyBack(key: string): void;
    /**
     * Increments [[historyCounter]] and queries [[history]] then puts that in [[current]].
     *
     * @param key
     */
    protected historyForwards(key: string): void;
    /**
     * Helper method to parse arguments in command.
     *
     * @param commandInput
     */
    protected parseArguments(commandInput: string[]): CommandArguments[];
    /**
     * Sets up methods with keys in [[input]].
     */
    protected setupInput(): void;
}
