import * as XrmMock from "../xrm-mock/index";
export declare type CreateMethods = "createBoolean" | "createDate" | "createLookup" | "createNumber" | "createOptionSet" | "createString";
export default class Control {
    createBoolean(components: XrmMock.IBooleanControlComponents): XrmMock.BooleanControlMock;
    createBoolean(attribute: XrmMock.BooleanAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.BooleanControlMock;
    createDate(components: XrmMock.IDateControlComponents): XrmMock.DateControlMock;
    createDate(attribute: XrmMock.DateAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.DateControlMock;
    createGrid(components: XrmMock.IGridControlComponents): XrmMock.GridControlMock;
    createGrid(name?: string, visible?: boolean, label?: string): XrmMock.GridControlMock;
    createLookup(components: XrmMock.ILookupControlComponents): XrmMock.LookupControlMock;
    createLookup(attribute: XrmMock.LookupAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.LookupControlMock;
    createNumber(components: XrmMock.INumberControlComponents): XrmMock.NumberControlMock;
    createNumber(attribute: XrmMock.NumberAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.NumberControlMock;
    createOptionSet(components: XrmMock.IOptionSetControlComponents): XrmMock.OptionSetControlMock;
    createOptionSet(attribute: XrmMock.OptionSetAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.OptionSetControlMock;
    createString(components: XrmMock.IStringControlComponents): XrmMock.StringControlMock;
    createString(attribute: XrmMock.StringAttributeMock, name?: string, visible?: boolean, disabled?: boolean, label?: string): XrmMock.StringControlMock;
    private addControl;
    private createStandardComponent;
}
