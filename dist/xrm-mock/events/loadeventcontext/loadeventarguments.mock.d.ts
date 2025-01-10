/// <reference types="xrm" />
export declare class LoadEventArgumentsMock implements Xrm.Events.LoadEventArguments {
    protected defaultPrevented: boolean;
    preventOnError: boolean;
    formDataLoadState: XrmEnum.FormDataLoadState;
    constructor(components: ILoadEventArgumentsComponents);
    getDataLoadState(): XrmEnum.FormDataLoadState;
}
export default interface ILoadEventArgumentsComponents {
    defaultPrevented: boolean;
    preventOnError: boolean;
    formDataLoadState: XrmEnum.FormDataLoadState;
}
