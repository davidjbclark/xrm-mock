"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEventArgumentsMock = void 0;
/// <reference types="xrm" />
var LoadEventArgumentsMock = /** @class */ (function () {
    function LoadEventArgumentsMock(components) {
        this.defaultPrevented = components.defaultPrevented;
        this.preventOnError = components.preventOnError;
        this.formDataLoadState = components.formDataLoadState;
    }
    LoadEventArgumentsMock.prototype.getDataLoadState = function () {
        return this.formDataLoadState;
    };
    return LoadEventArgumentsMock;
}());
exports.LoadEventArgumentsMock = LoadEventArgumentsMock;
//# sourceMappingURL=loadeventarguments.mock.js.map