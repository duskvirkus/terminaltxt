export declare class Loop {
    /**
     * Initialization function defined by user.
     */
    init: Function;
    /**
     * Update function defined by user.
     */
    update: Function;
    /**
     * Keeps track of current frame rate.
     */
    protected currentFrameRate: number;
    /**
     * Last time that update was called.
     */
    protected lastUpdateTime: number;
    /**
     * Keeps track of whether the loop is running. Use [[running]] method to set. Defaults to true if update is defined in constructor. Otherwise false.
     */
    protected loopRunning: boolean;
    /**
     * The target time between update being called. Milliseconds.
     */
    protected targetLoopTime: number;
    /**
     * @param init
     */
    constructor(init: Function);
    /**
     * @param init
     * @param update
     */
    constructor(init: Function, update: Function);
    /**
     * @returns [[currentFrameRate]]
     */
    frameRate(): number;
    /**
     * Use to set a target frame rate.
     *
     * @param targetFrameRate
     * @returns [[currentFrameRate]]
     */
    frameRate(targetFrameRate: number): number;
    /**
     * Sets the [[loopRunning]] variable and restarts loop if it was stopped.
     *
     * @param loopRunning
     */
    running(loopRunning: boolean): void;
    /**
     * Used to set [[update]] function if not set in the constructor.
     *
     * @param update
     */
    setUpdate(update: Function): void;
    /**
     * Internal method that runs [[update]] and starts the next loop.
     */
    protected loop(): void;
    /**
     * Internal method to run [[init]] and start the update loop.
     */
    protected runInit(): void;
    /**
     * Internal method that deals with timing the [[loop]] method.
     */
    protected runLoop(): void;
}
