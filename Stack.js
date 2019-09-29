"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack() {
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elems[_i] = arguments[_i];
        }
        return _super.apply(this, elems) || this;
    }
    Stack.prototype.pop = function () {
        if (this.length === 0)
            throw new Error('Nothing to pop!');
        _super.prototype.pop.call(this);
    };
    Stack.prototype.peek = function () {
        if (this.length === 0)
            throw new Error('Stack is empty!');
        return this[this.length - 1];
    };
    return Stack;
}(Array));
exports.default = Stack;
