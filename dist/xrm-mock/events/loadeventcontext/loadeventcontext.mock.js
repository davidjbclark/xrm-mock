"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadEventContextMock = void 0;
var LoadEventContextMock = /** @class */ (function () {
    function LoadEventContextMock(components) {
        var _a, _b;
        this.context = components.context;
        this.depth = components.depth === undefined || components.depth === null ? 1 : components.depth;
        this.eventSource = components.eventSource;
        this.formContext = components.formContext;
        this.sharedVariables = (_a = components.sharedVariables) !== null && _a !== void 0 ? _a : {};
        this.eventArgs = (_b = components.eventArgs) !== null && _b !== void 0 ? _b : undefined;
    }
    LoadEventContextMock.prototype.getContext = function () {
        return this.context;
    };
    LoadEventContextMock.prototype.getDepth = function () {
        return this.depth;
    };
    LoadEventContextMock.prototype.setDepth = function (depth) {
        this.depth = depth;
    };
    LoadEventContextMock.prototype.getEventSource = function () {
        if (this.eventSource) {
            return this.eventSource;
        }
        throw new Error('no event source given');
    };
    LoadEventContextMock.prototype.getFormContext = function () {
        return this.formContext;
    };
    LoadEventContextMock.prototype.getSharedVariable = function (key) {
        return this.sharedVariables[key];
    };
    LoadEventContextMock.prototype.setSharedVariable = function (key, value) {
        this.sharedVariables[key] = value;
    };
    LoadEventContextMock.prototype.getEventArgs = function () {
        return this.eventArgs;
    };
    return LoadEventContextMock;
}());
exports.LoadEventContextMock = LoadEventContextMock;
//# sourceMappingURL=loadeventcontext.mock.js.map