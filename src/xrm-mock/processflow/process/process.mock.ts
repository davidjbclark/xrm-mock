export class ProcessMock implements Xrm.ProcessFlow.Process {
  public id: string;
  public name: string;
  public stages: Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
  public status: Xrm.ProcessFlow.ProcessStatus;
  public rendered: boolean;

  constructor(components: IProcessComponents) {
      this.id = components.id;
      this.name = components.name;
      this.stages = components.stages;
      this.status = components.status;
      this.rendered = components.rendered;
  }

  getStatus(): Xrm.ProcessFlow.ProcessStatus {
    return this.status;
  }

  public getId(): string {
      return this.id;
  }

  public getName(): string {
      return this.name;
  }

  public getStages(): Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage> {
      return this.stages;
  }

  public isRendered(): boolean {
      return this.rendered;
  }
}

export interface IProcessComponents {
  id?: string;
  name?: string;
  stages?: Xrm.Collection.ItemCollection<Xrm.ProcessFlow.Stage>;
  status?: Xrm.ProcessFlow.ProcessStatus;
  rendered?: boolean;
}
