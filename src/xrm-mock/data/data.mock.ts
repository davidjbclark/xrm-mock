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
      return new XrmPromiseMock(new Promise(async (resolve) => resolve(this.refreshDelegate != null ? await this.refreshDelegate(save) : undefined)));
    }
  
    public save(saveOptions?: Xrm.SaveOptions): XrmPromiseMock<undefined> {
      return new XrmPromiseMock(new Promise(async (resolve) => resolve(this.saveDelegate != null ? await this.saveDelegate(saveOptions) : undefined)));
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
  
  export interface DataMockRefreshDelegate{
    (save: boolean): XrmPromiseMock<undefined>;
  }
  
  export interface DataMockSaveDelegate{
    (saveOptions?: Xrm.SaveOptions): XrmPromiseMock<undefined>;
  }
  
  export interface DataMockDataStateDelegate{
    (): boolean;
  }
