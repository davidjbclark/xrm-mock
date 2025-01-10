/// <reference types="xrm" />
export class LoadEventArgumentsMock implements Xrm.Events.LoadEventArguments {
  // protected saveMode: XrmEnum.SaveMode; //
  protected defaultPrevented: boolean;
  public preventOnError: boolean;
  public formDataLoadState: XrmEnum.FormDataLoadState;

  constructor(components: ILoadEventArgumentsComponents) {
    this.defaultPrevented = components.defaultPrevented;
    this.preventOnError = components.preventOnError;
    this.formDataLoadState = components.formDataLoadState;
  }

  public getDataLoadState(): XrmEnum.FormDataLoadState {
    return this.formDataLoadState;
  }
}

export default interface ILoadEventArgumentsComponents {
  defaultPrevented: boolean;
  preventOnError: boolean;
  formDataLoadState: XrmEnum.FormDataLoadState;
}