/// <reference types="xrm" />
export declare class ProcessMock implements Xrm.ProcessFlow.Process {
    id: string;
    name: string;
    stages: Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
    status: Xrm.ProcessFlow.ProcessStatus;
    rendered: boolean;
    constructor(components: IProcessComponents);
    getStatus(): Xrm.ProcessFlow.ProcessStatus;
    getId(): string;
    getName(): string;
    getStages(): Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
    isRendered(): boolean;
}
export interface IProcessComponents {
    id?: string;
    name?: string;
    stages?: Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
    status?: Xrm.ProcessFlow.ProcessStatus;
    rendered?: boolean;
}
