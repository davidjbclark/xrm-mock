/// <reference types="xrm" />
export declare class XrmPromiseMock<T> implements Xrm.Async.PromiseLike<T> {
    private promise;
    constructor(promise: Promise<T>);
    then<U>(onFulfilled?: (value: T) => U | Xrm.Async.PromiseLike<U>, onRejected?: (reason: any) => void | U | Xrm.Async.PromiseLike<void | U>): Xrm.Async.PromiseLike<U>;
    fail<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
    always<U>(alwaysCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
    catch<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
    finally<U>(finallyCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U>;
    /**
     * Creates a PromiseLike<T> that is resolved with the given value or the result of calling the given function, after a timeout.
     * @param value value or function that returns a value to resolve the PromiseLike<T> with.
     * @param timeout The time to wait before resolving the PromiseLike<T> with the value (in milliseconds). Defaults to 1.
     * @returns PromiseLike<T> for the given value
     */
    static delay<T>(value: T | (() => T), timeout?: number): Xrm.Async.PromiseLike<T>;
    /**
     * Creates a PromiseLike<void> that is resolved after a timeout.
     * @param action The action to perform after the timeout.
     * @param timeout The time to wait before calling the action, and resolving the PromiseLike<void>. Defaults to 1.
     * @returns PromiseLike<void>
     */
    static delayVoid(action?: () => void, timeout?: number): Xrm.Async.PromiseLike<void>;
}
