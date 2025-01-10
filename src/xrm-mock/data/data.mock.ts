import { ItemCollectionMock } from  '../collection/itemcollection/itemcollection.mock';
import { ProcessManagerMock } from '../processflow/processmanager/processmanager.mock';
import { XrmPromiseMock } from '../async/xrmpromise/xrmpromise.mock';

export class DataMock implements Xrm.Data {
    public attributes: ItemCollectionMock<Xrm.Attributes.Attribute>;
    public entity: Xrm.Entity;
    public process: Xrm.ProcessFlow.ProcessManager;
    public loadEventHandlers: Xrm.Events.DataLoadEventHandler[];
    public refreshDelegate?: DataMockRefreshDelegate;
    public saveDelegate?: DataMockSaveDelegate;
    public isValidDelegate?: DataMockDataStateDelegate;
    public getIsDirtyDelegate?: DataMockDataStateDelegate;

    constructor(entity: Xrm.Entity, process?: Xrm.ProcessFlow.ProcessManager) {
        this.attributes = new ItemCollectionMock();
        this.entity = entity;
        this.process = process ? process : new ProcessManagerMock([]);
        this.loadEventHandlers = [];
    }

    public refresh(save: boolean): XrmPromiseMock<undefined> {
        return this.refreshDelegate != null ? this.refreshDelegate(save) : new XrmPromiseMock(new Promise(async (resolve) => resolve(undefined)));
    }

    public save(saveOptions?: Xrm.SaveOptions): XrmPromiseMock<undefined> {
        return this.saveDelegate != null ? this.saveDelegate(saveOptions) : new XrmPromiseMock(new Promise(async (resolve) => resolve(undefined)));
    }

    public isValid(): boolean {
        return this.isValidDelegate != null ? this.isValidDelegate() : true;
    }

    public getIsDirty(): boolean {
        return this.getIsDirtyDelegate != null ? this.getIsDirtyDelegate() : false;
    }

    public addOnLoad(handler: Xrm.Events.DataLoadEventHandler): void {
        this.loadEventHandlers.push(handler);
    }

    public removeOnLoad(handler: Xrm.Events.ContextSensitiveHandler): void {
        const index: number = this.loadEventHandlers.indexOf(handler);
        this.loadEventHandlers.splice(index);
    }
  }

export type DataMockRefreshDelegate = (save: boolean) => XrmPromiseMock<undefined>;

export type DataMockSaveDelegate = (saveOptions?: Xrm.SaveOptions) => XrmPromiseMock<undefined>;

export type DataMockDataStateDelegate = () => boolean;