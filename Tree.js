"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BTNode = /** @class */ (function () {
    function BTNode(key, value, left, right) {
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return BTNode;
}());
exports.BTNode = BTNode;
var Tree = /** @class */ (function () {
    function Tree(key, value, left, right) {
        this.root = new BTNode(key, value, left, right);
    }
    Tree.prototype.printTree = function (tree) {
        // Printing tree in pre-order traversal / breath traversal
        if (tree == undefined)
            return;
        else if (typeof tree.key == undefined)
            return;
        else if (typeof tree.key != undefined) {
            console.log(tree.key);
            // Traverse through left and right subtree   
            if (tree.left !== undefined)
                this.printTree(tree.left);
            if (tree.right !== undefined)
                this.printTree(tree.right);
        }
    };
    return Tree;
}());
exports.Tree = Tree;
