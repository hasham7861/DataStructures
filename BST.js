"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BST = /** @class */ (function () {
    function BST(key, value) {
        this._key = key;
        this._value = value;
        this._left = undefined;
        this._right = undefined;
    }
    // Self balance the tree somehow
    BST.prototype.insertValue = function (tree, key, value) {
        if (!tree)
            return new BST(key, value);
        else if (tree._key < key)
            tree._right = this.insertValue(tree._right, key, value);
        else if (tree._key > key)
            tree._left = this.insertValue(tree._left, key, value);
        return tree;
    };
    BST.prototype.printTree = function (tree) {
        // Printing tree in pre-order traversal / breath traversal
        if (tree == undefined)
            return;
        else if (tree._key == undefined)
            return;
        console.log(tree._key);
        // Traverse through left and right subtree   
        this.printTree(tree._left);
        this.printTree(tree._right);
    };
    Object.defineProperty(BST.prototype, "left", {
        get: function () {
            return this._left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BST.prototype, "right", {
        get: function () {
            return this._right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BST.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    return BST;
}());
exports.default = BST;
