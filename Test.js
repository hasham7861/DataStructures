"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Stack from './Stack';
// import { Tree, BTNode } from './Tree';
var BST_1 = __importDefault(require("./BST"));
// import { BTNode } from './Tree';
// import { Tree } from './Tree';
//---Stack
// let s1: Stack = new Stack();
// s1.push(2);
// console.log(s1.pop());
//---Tree
// var {Tree} = require('./Tree');
// var {BST} = require('./BST');
//--- Binary Tree
// let T1 = new Tree("4", undefined, new BTNode("3"), new BTNode("5"));
// T1.printTree(T1.root);
// Tree is right skewed
var tBST = new BST_1.default('D');
tBST = tBST.insertValue(tBST, 'F');
tBST = tBST.insertValue(tBST, 'G');
tBST = tBST.insertValue(tBST, 'H');
tBST = tBST.insertValue(tBST, 'I');
tBST.printTree(tBST);
// Balance the tBST tree
// let isBalanced = tBST.balanceTree(tBST);
