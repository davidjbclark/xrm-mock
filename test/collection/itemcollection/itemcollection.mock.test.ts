import { ItemCollectionMock } from "../../../src/xrm-mock/collection/itemcollection/itemcollection.mock";

describe("Xrm.Collection.ItemCollection Mock", () => {
    let itemCollection: ItemCollectionMock<number>;
    beforeEach(() => {
        const items = [1, 2, 3];
        itemCollection = new ItemCollectionMock(items);
    });

    it("should exist", () => {
        expect(itemCollection).toBeDefined();
    });

    describe("forEach", () => {
        it("should iterate and double every element", () => {
            expect(itemCollection.get(0)).toBe(1);
            expect(itemCollection.get(1)).toBe(2);
            expect(itemCollection.get(2)).toBe(3);

            itemCollection.forEach((i: any) => {
                itemCollection.itemCollection[i - 1] = i * 2;
            });
            expect(itemCollection.get(0)).toBe(2);
            expect(itemCollection.get(1)).toBe(4);
            expect(itemCollection.get(2)).toBe(6);
        });
    });

    describe("get", () => {
        it("should return 1 at index 0", () => {
            expect(itemCollection.get(0)).toBe(1);
        });

        it("should return matching elements", () => {
            const result = itemCollection.get((n) => n % 2 === 0);
            expect(result.length).toBe(1);
            expect(result[0] === 2);
        });

        it("should return null if not found", () => {
            expect(itemCollection.get(-100)).toBeNull();
        });

        it("should use getId if exists", () => {
            const mockItem = {
                getId: () => "2",
            };
            itemCollection.push(mockItem as any);
            expect(itemCollection.get("2")).toBe(mockItem);
        });

        it("should use getName if exists", () => {
            const mockItem = {
                getName: () => "Test",
            };
            itemCollection.push(mockItem as any);
            expect(itemCollection.get("Test")).toBe(mockItem);
        });
    });

    describe("getLength", () => {
        it("should return 3", () => {
            const length = itemCollection.getLength();
            expect(length).toBe(3);
        });
    });
});
