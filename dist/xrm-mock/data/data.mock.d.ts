/// <reference types="xrm" />
import { ItemCollectionMock } from '../collection/itemcollection/itemcollection.mock';
import { XrmPromiseMock } from '../async/xrmpromise/xrmpromise.mock';
export declare class DataMock implements Xrm.Data {
    attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    entity: Xrm.Entity;
    process: Xrm.ProcessFlow.ProcessManager;
    loadEventHandlers: Xrm.Events.DataLoadEventHandler[];
    refreshDelegate?: DataMockRefreshDelegate;
    saveDelegate?: DataMockSaveDelegate;
    isValidDelegate?: DataMockDataStateDelegate;
    getIsDirtyDelegate?: DataMockDataStateDelegate;
    constructor(entity: Xrm.Entity, process?: Xrm.ProcessFlow.ProcessManager);
    refresh(save: boolean): XrmPromiseMock<undefined>;
    save(saveOptions?: Xrm.SaveOptions): XrmPromiseMock<undefined>;
    isValid(): boolean;
    getIsDirty(): boolean;
    addOnLoad(handler: Xrm.Events.DataLoadEventHandler): void;
    removeOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void;
}
type DataMockRefreshDelegate = (save: boolean) => XrmPromiseMock<undefined>;
type DataMockSaveDelegate = (saveOptions?: Xrm.SaveOptions) => XrmPromiseMock<undefined>;
type DataMockDataStateDelegate = () => boolean;
export {};
