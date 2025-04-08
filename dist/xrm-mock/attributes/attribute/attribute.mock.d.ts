/// <reference types="xrm" />
import { ItemCollectionMock } from "../../collection/itemcollection/itemcollection.mock";
import { StandardControlMock } from "../../controls/standardcontrol/standardcontrol.mock";
export type AttributeReturnType = boolean | Date | number | Xrm.LookupValue[] | string | null;
export declare class AttributeMock<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TAttribute, TValue>, TValue extends AttributeReturnType> implements Xrm.Attributes.Attribute {
    attributeType: Xrm.Attributes.AttributeType;
    controls: ItemCollectionMock<TControl>;
    isDirty: boolean;
    name: string;
    requiredLevel: Xrm.Attributes.RequirementLevel;
    submitMode: Xrm.SubmitMode;
    value: TValue;
    format: Xrm.Attributes.AttributeFormat;
    eventHandlers: Xrm.Events.ContextSensitiveHandler[];
    constructor(components: IAttributeComponents<TControl, TAttribute, TValue>);
    addOnChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    fireOnChange(): void;
    getAttributeType(): Xrm.Attributes.AttributeType;
    getFormat(): Xrm.Attributes.AttributeFormat;
    getIsDirty(): boolean;
    getName(): string;
    getParent(): Xrm.Entity;
    getRequiredLevel(): Xrm.Attributes.RequirementLevel;
    getSubmitMode(): Xrm.SubmitMode;
    getUserPrivilege(): Xrm.Privilege;
    removeOnChange(handler: Xrm.Events.ContextSensitiveHandler): void;
    setRequiredLevel(requirementLevel: Xrm.Attributes.RequirementLevel): void;
    setSubmitMode(submitMode: Xrm.SubmitMode): void;
    getValue(): TValue;
    setValue(value: TValue): void;
    isValid(): boolean;
    setIsValid(valid: boolean, message: string): void;
}
export interface IAttributeComponents<TControl extends StandardControlMock<TControl, TAttribute, TValue>, TAttribute extends AttributeMock<TControl, TAttribute, TValue>, TValue extends AttributeReturnType> {
    attributeType?: Xrm.Attributes.AttributeType;
    controls?: ItemCollectionMock<TControl>;
    eventHandlers?: Xrm.Events.ContextSensitiveHandler[];
    format?: Xrm.Attributes.AttributeFormat;
    isDirty?: boolean;
    name: string;
    requiredLevel?: Xrm.Attributes.RequirementLevel;
    submitMode?: Xrm.SubmitMode;
    value?: TValue | null;
}
