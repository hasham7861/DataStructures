// import Stack from './Stack';
// import { Tree, BTNode } from './Tree';
// import BST from './BST';
// import { BTNode } from './Tree';
// import { Tree } from './Tree';
import HashTable from './HashTable';

console.log("\n-----Test Output-----");

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
// let tBST = new BST('D');
// tBST = tBST.insertValue(tBST, 'F')!;
// tBST = tBST.insertValue(tBST, 'G')!;
// tBST = tBST.insertValue(tBST, 'H')!;
// tBST = tBST.insertValue(tBST, 'I')!;

// tBST.printTree(tBST);

// Balance the tBST tree
// let isBalanced = tBST.balanceTree(tBST);



// Hashtable
let h1 = new HashTable();
console.log(h1.isEmpty);
h1.put("Hasham", "991498453");
h1.put("hHasam", "99153");
console.log(h1.isEmpty);
console.log(h1.getValue("hHasam"));









