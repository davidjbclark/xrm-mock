"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollectionMock = void 0;
var ItemCollectionMock = /** @class */ (function () {
    function ItemCollectionMock(itemCollection) {
        this.itemCollection = itemCollection || [];
    }
    ItemCollectionMock.prototype.forEach = function (delegate) {
        this.itemCollection.map(delegate);
    };
    ItemCollectionMock.prototype.get = function (param) {
        if (param === undefined || param === null) {
            return this.itemCollection;
        }
        else if (typeof param === "string") {
            var attribute = void 0;
            for (var _i = 0, _a = this.itemCollection; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.getName !== undefined && item.getName() === param) {
                    attribute = item;
                    break;
                }
                else if (item.getId !== undefined && item.getId() === param) {
                    attribute = item;
                    break;
                }
            }
            return attribute || null;
        }
        else if (typeof param === "number") {
            return this.itemCollection[param] || null;
        }
        else {
            return this.itemCollection.filter(param);
        }
    };
    ItemCollectionMock.prototype.getLength = function () {
        return this.itemCollection.length;
    };
    ItemCollectionMock.prototype.push = function (item) {
        this.itemCollection.push(item);
    };
    return ItemCollectionMock;
}());
exports.ItemCollectionMock = ItemCollectionMock;
//# sourceMappingURL=itemcollection.mock.js.map