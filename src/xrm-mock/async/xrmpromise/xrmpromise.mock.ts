export class XrmPromiseMock<T> implements Xrm.Async.PromiseLike<T> {

    private promise: Promise<T>;
    constructor(promise: Promise<T>) {
        this.promise = promise;
    }
  
  
    public then<U>(onFulfilled?: (value: T) => U | Xrm.Async.PromiseLike<U>,
                   onRejected?: (reason: any) => void | U | Xrm.Async.PromiseLike<void | U>): Xrm.Async.PromiseLike<U> {
        return new XrmPromiseMock<U>(this.promise.then(onFulfilled, onRejected) as Promise<U>);
    }
  
    public fail<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        return new XrmPromiseMock<U>(this.promise.catch(onRejected) as Promise<U>);
    }
  
    public always<U>(alwaysCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        return new XrmPromiseMock<U>(this.promise.finally(alwaysCallback) as unknown as Promise<U>);
    }
  
    public catch<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        return new XrmPromiseMock<U>(this.promise.catch(onRejected) as Promise<U>);
    }
  
    public finally<U>(finallyCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        return new XrmPromiseMock<U>(this.promise.finally(finallyCallback) as unknown as Promise<U>);
    }
  
    /**
     * Creates a PromiseLike<T> that is resolved with the given value or the result of calling the given function, after a timeout.
     * @param value value or function that returns a value to resolve the PromiseLike<T> with.
     * @param timeout The time to wait before resolving the PromiseLike<T> with the value (in milliseconds). Defaults to 1.
     * @returns PromiseLike<T> for the given value
     */
    public static delay<T>(value: T | (() => T), timeout?: number): Xrm.Async.PromiseLike<T> {
        return new XrmPromiseMock<T>(new Promise<T>((resolve) => {
            setTimeout(() => {
                if (typeof value === "function") {
                    value = (value as () => T)();
                }
                resolve(value);
            }, timeout ?? 1);
        }));
    }
  
    /**
     * Creates a PromiseLike<void> that is resolved after a timeout.
     * @param action The action to perform after the timeout.
     * @param timeout The time to wait before calling the action, and resolving the PromiseLike<void>. Defaults to 1.
     * @returns PromiseLike<void>
     */
    public static delayVoid(action?: () => void, timeout?: number): Xrm.Async.PromiseLike<void> {
        return new XrmPromiseMock<void>(new Promise<void>((resolve) => {
            setTimeout(() => {
                if (action) {
                    action();
                }
                resolve();
            }, timeout ?? 1);
        }));
    }
  }
  