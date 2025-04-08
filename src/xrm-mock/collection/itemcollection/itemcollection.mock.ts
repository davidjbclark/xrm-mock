export class ItemCollectionMock<T> implements Xrm.Collection.ItemCollection<T> {
    public itemCollection: T[];

    constructor(itemCollection?: T[]) {
        this.itemCollection = itemCollection || [];
    }

    public forEach(delegate: Xrm.Collection.IterativeDelegate<T>): void {
        this.itemCollection.map(delegate);
    }

    public get(delegate: Xrm.Collection.MatchingDelegate<T>): T[];
    public get(item: number | string): T;
    public get(): T[];
    public get(param?: string | number | Xrm.Collection.MatchingDelegate<T> | T[]): T | T[] {
        if (param === undefined || param === null) {
            return (this.itemCollection as T[]);
        } else if (typeof param === "string") {
            let attribute: T;

            for (const item of this.itemCollection as any) {
                if (item.getName !== undefined && item.getName() === param) {
                    attribute = item;
                    break;
                } else if 
            }

            return attribute || null;
        } else if (typeof param === "number") {
            return this.itemCollection[param] || null;
        } else {
            return this.itemCollection.filter(param as Xrm.Collection.MatchingDelegate<T>);
        }
    }

    public getLength(): number {
        return this.itemCollection.length;
    }

    public push(item: T): void {
        this.itemCollection.push(item);
    }
}
