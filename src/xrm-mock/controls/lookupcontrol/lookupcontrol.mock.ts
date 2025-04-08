import { LookupAttributeMock } from "../../attributes/lookupattribute/lookupattribute.mock";
import {
    IAttStandardControlComponents,
    IStandardControlComponents,
    StandardControlMock,
} from "../standardcontrol/standardcontrol.mock";

export class LookupControlMock extends StandardControlMock<LookupControlMock,
    LookupAttributeMock, Xrm.LookupValue[]>
    implements Xrm.Controls.LookupControl {

    private static defaultComponents(components: ILookupControlComponents): ILookupControlComponents {
        components.controlType = "lookup";
        return components;
    }

    public entityTypes: string[];
    public filters: ILookupFilter[];
    public onLookupTagHandlers: Xrm.Events.LookupTagClickHandler[];
    public preSearchHandlers: Xrm.Events.ContextSensitiveHandler[];
    public views: ILookupView[];

    constructor(components: ILookupControlComponents) {
        super(LookupControlMock.defaultComponents(components));
        this.entityTypes = components.entityTypes || [];
        this.filters = components.filters || [];
        this.onLookupTagHandlers = components.onLookupTagHandlers || [];
        this.preSearchHandlers = components.preSearchHandlers || [];
        this.views = components.views || [];

        if (this.views && this.views.length > 1) {
            const defaultViews = this.views.filter((v) => v.isDefault).length;

            if (defaultViews > 1) {
                throw new Error("Lookup Control cannot have more than one default view.");
            } else if (defaultViews === 0) {
                this.views[0].isDefault = true;
            }
        }
    }

    public addOnLookupTagClick(handler: Xrm.Events.LookupTagClickHandler): void {
        this.onLookupTagHandlers.push(handler);
    }

    public addPreSearch(handler: Xrm.Events.ContextSensitiveHandler): void {
        this.preSearchHandlers.push(handler);
    }

    public addCustomFilter(filter: string, entityLogicalName?: string): void {
        this.filters.push({ filter, entityLogicalName });
    }

    public addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string,
                         layoutXml: string, isDefault: boolean): void {
        if (isDefault && this.views.filter((v) => v.isDefault).length > 0) {
            throw new Error("Lookup Control cannot have more than one default view.");
        }

        this.views.push({
            entityName,
            fetchXml,
            isDefault,
            layoutXml,
            viewDisplayName,
            viewId,
        });
    }

    public fireOnLookupTagClick(context: Xrm.Events.LookupTagClickEventContext): void {
        for (const handler of this.onLookupTagHandlers) {
            handler(context);
        }
    }

    public firePreSearch(context: Xrm.Events.EventContext): void {
        for (const handler of this.preSearchHandlers) {
            handler(context);
        }
    }

    public getDefaultView(): string {
        for (const view of this.views) {
            if (view.isDefault) {
                return view.viewId;
            }
        }

        throw new Error("No default view was found!");
    }

    public getEntityTypes(): string[] {
        return this.entityTypes;
    }

    public setEntityTypes(entityLogicalNames: string[]): void {
        this.entityTypes = entityLogicalNames;
    }

    public removeOnLookupTagClick(handler: Xrm.Events.LookupTagClickHandler): void {
        let index = this.onLookupTagHandlers.indexOf(handler)
        while (index >= 0) {
            this.onLookupTagHandlers.splice(index, 1);
            index = this.onLookupTagHandlers.indexOf(handler)
        }
    }

    public removePreSearch(handler: Xrm.Events.ContextSensitiveHandler): void {
        let index = this.preSearchHandlers.indexOf(handler);
        while (index >= 0) {
            this.preSearchHandlers.splice(index, 1);
            index = this.preSearchHandlers.indexOf(handler);
        }
    }

    public setDefaultView(viewGuid: string): void {
        for (const view of this.views) {
            view.isDefault = view.viewId === viewGuid;
        }
    }
}

export interface ILookupControlComponents
    extends IStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]>,
    IAttLookupControlComponents {
    name: string;
}

export interface IAttLookupControlComponents
    extends IAttStandardControlComponents<LookupControlMock, LookupAttributeMock, Xrm.LookupValue[]> {
    entityTypes?: string[];
    filters?: ILookupFilter[];
    views?: ILookupView[];
    onLookupTagHandlers?: Xrm.Events.ContextSensitiveHandler[];
    preSearchHandlers?: Xrm.Events.ContextSensitiveHandler[];
}

export interface ILookupFilter {
    filter: string;
    entityLogicalName?: string;
}

export interface ILookupView {
    viewId: string;
    entityName: string;
    viewDisplayName: string;
    fetchXml: string;
    layoutXml: string;
    isDefault: boolean;
}
