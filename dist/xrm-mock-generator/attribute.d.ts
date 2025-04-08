/// <reference types="xrm" />
import * as XrmMock from "../xrm-mock/index";
export declare type BooleanControlComponent = XrmMock.IAttBooleanControlComponents | XrmMock.IAttBooleanControlComponents[];
export declare type DateControlComponent = XrmMock.IAttDateControlComponents | XrmMock.IAttDateControlComponents[];
export declare type LookupControlComponent = XrmMock.IAttLookupControlComponents | XrmMock.IAttLookupControlComponents[];
export declare type NumberControlComponent = XrmMock.IAttNumberControlComponents | XrmMock.IAttNumberControlComponents[];
export declare type OptionSetControlComponent = XrmMock.IAttOptionSetControlComponents | XrmMock.IAttOptionSetControlComponents[];
export declare type StringControlComponent = XrmMock.IAttStringControlComponents | XrmMock.IAttStringControlComponents[];
export default class Attribute {
    private Control;
    createBoolean(attComponents: XrmMock.IBooleanAttributeComponents, controlComponents?: BooleanControlComponent): XrmMock.BooleanAttributeMock;
    createBoolean(name: string, value?: boolean): XrmMock.BooleanAttributeMock;
    createDate(attComponents: XrmMock.IDateAttributeComponents, controlComponents?: DateControlComponent): XrmMock.DateAttributeMock;
    createDate(name: string, value?: Date): XrmMock.DateAttributeMock;
    createLookup(attComponents: XrmMock.ILookupAttributeComponents, controlComponents?: LookupControlComponent): XrmMock.LookupAttributeMock;
    createLookup(name: string, lookup?: Xrm.LookupValue | Xrm.LookupValue[]): XrmMock.LookupAttributeMock;
    createNumber(attComponents: XrmMock.INumberAttributeComponents, controlComponents?: NumberControlComponent): XrmMock.NumberAttributeMock;
    createNumber(name: string, value?: number): XrmMock.NumberAttributeMock;
    createOptionSet(attComponents: XrmMock.IOptionSetAttributeComponents, controlComponents?: OptionSetControlComponent): XrmMock.OptionSetAttributeMock;
    createOptionSet(name: string, value?: string | number, options?: Xrm.OptionSetValue[]): XrmMock.OptionSetAttributeMock;
    createString(attComponents: XrmMock.IStringAttributeComponents, controlComponents?: StringControlComponent): XrmMock.StringAttributeMock;
    createString(name: string, value?: string): XrmMock.StringAttributeMock;
    private createOptionSetFromParameters;
    private createOptionSetFromComponents;
    private createStringFromParameters;
    private createAttribute;
    private addAttribute;
    /**
     * Creates the given attribute, as well as the controls for the attribute defined by the components
     * @param attribute The newly created attribute to be added to the page colleciton of attributes
     * @param controls Array of Control Components to create controls for the given attribute
     * @param controlCreateFunction the name of the Control function to call to create the correct type of control
     */
    private associateAttribute;
    private defaultName;
    private arrayify;
}
