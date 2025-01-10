export class LoadEventContextMock implements Xrm.Events.LoadEventContext {
  public context: Xrm.GlobalContext;
  public depth: number;
  public eventSource?: Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
  public eventArgs?: Xrm.Events.LoadEventArguments;
  public formContext: Xrm.FormContext;
  public sharedVariables: { [index: string]: any };

  constructor(components: IEventContextComponents) {
    this.context = components.context;
    this.depth = components.depth === undefined || components.depth === null ? 1 : components.depth;
    this.eventSource = components.eventSource;
    this.formContext = components.formContext;
    this.sharedVariables = components.sharedVariables ?? {};
    this.eventArgs = components.eventArgs ?? undefined;
  }

  public getContext(): Xrm.GlobalContext {
    return this.context;
  }

  public getDepth(): number {
    return this.depth;
  }

  public setDepth(depth: number): void {
    this.depth = depth;
  }

  public getEventSource(): Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity {
    if (this.eventSource) {
      return this.eventSource;
    }
    throw new Error('no event source given');
  }

  public getFormContext(): Xrm.FormContext {
    return this.formContext;
  }

  public getSharedVariable<T>(key: string): T {
    return this.sharedVariables[key];
  }

  public setSharedVariable<T>(key: string, value: T): void {
    this.sharedVariables[key] = value;
  }

  public getEventArgs(): Xrm.Events.LoadEventArguments {
    return this.eventArgs!;
  }
}

export default interface IEventContextComponents {
  context: Xrm.GlobalContext;
  depth?: number;
  eventSource?: Xrm.Attributes.Attribute | Xrm.Controls.Control | Xrm.Entity;
  eventArgs: Xrm.Events.LoadEventArguments;
  formContext: Xrm.FormContext;
  sharedVariables?: { [index: string]: any };
}