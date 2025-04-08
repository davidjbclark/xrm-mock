export class PageMock implements Xrm.FormContext {
    public context: Xrm.GlobalContext;
    public data: Xrm.Data;
    public ui: Xrm.Ui;

    constructor(context: Xrm.GlobalContext, formContext: Xrm.FormContext) {
        this.context = context;
        this.data = formContext.data;
        this.ui = formContext.ui;
    }

    public getAttribute<T extends Xrm.Attributes.Attribute>(attributeNameOrIndex: number | string): T | null;
    public getAttribute<T extends Xrm.Attributes.Attribute>(delegateFunction?: Xrm.Collection.MatchingDelegate<T>): T[];

    public getAttribute<T extends Xrm.Attributes.Attribute>(param?: number | string |
        Xrm.Collection.MatchingDelegate<T>): T | Xrm.Attributes.Attribute[] {
        if (!arguments.length) {
            return this.data.entity.attributes.get();
        } else if (param && typeof param === "string") {
            return this.data.entity.attributes.get<T>(param);
        } else if (typeof param === "number") {
            return this.data.entity.attributes.get(param) as T;
        } else if (typeof param === "function") {
            return this.data.entity.attributes.get(param as Xrm.Collection.MatchingDelegate<T>) as T[];
        }
        throw new Error(`Collection.Get called with unknown parameter type: ${typeof param}`);
    }

    public getControl<T extends Xrm.Controls.Control>(controlNameOrIndex: string | number): T | null;
    public getControl<T extends Xrm.Controls.Control>(delegateFunction?: Xrm.Collection.MatchingDelegate<Xrm.Controls.Control>): T[];

    public getControl<T extends Xrm.Controls.Control>(param?: number | string |
        Xrm.Collection.MatchingDelegate<T>): T | T[] {
        if (!arguments.length || param === undefined || param === null) {
            return this.ui.controls.get() as T[];
        } else if (typeof param === "string") {
            return this.ui.controls.get<T>(param);
        } else if (typeof param === "number") {
            return this.ui.controls.get(param) as T;
        } else if (typeof param === "function") {
            return this.ui.controls.get(param as Xrm.Collection.MatchingDelegate<T>) as T[];
        }
        throw new Error(`Collection.Get called with unknown parameter type: ${typeof param}`);
    }
}
