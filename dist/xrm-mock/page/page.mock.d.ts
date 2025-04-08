/// <reference types="xrm" />
export declare class PageMock implements Xrm.FormContext {
    context: Xrm.GlobalContext;
    data: Xrm.Data;
    ui: Xrm.Ui;
    constructor(context: Xrm.GlobalContext, formContext: Xrm.FormContext);
    getAttribute<T extends Xrm.Attributes.Attribute>(attributeNameOrIndex: number | string): T | null;
    getAttribute<T extends Xrm.Attributes.Attribute>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];
    getControl<T extends Xrm.Controls.Control>(controlNameOrIndex: string | number): T | null;
    getControl<T extends Xrm.Controls.Control>(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Controls.Control>): T[];
}
