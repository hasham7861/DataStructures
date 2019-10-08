import { Node, LinkedList } from "./LinkedList";
// import Stack from './Stack';
// import { Tree, BTNode } from './Tree';
// import BST from './BST';
// import { BTNode } from './Tree';
// import { Tree } from './Tree';
// import HashTable from './HashTable';


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

//--- Binary Search Tree - BST
// let tBST = new BST('D');
// tBST = tBST.insert(tBST, 'F')!;
// tBST = tBST.insert(tBST, 'G')!;
// tBST = tBST.insert(tBST, 'H')!;
// tBST = tBST.insert(tBST, 'I')!;
// tBST.printTree(tBST);


//--- Hashtable
// let h1 = new HashTable();
// h1.put("Hasham", "991498453");
// h1.put("hHasam", "99153");
// console.log(h1.getValue("Hasham"));


// -- LinkedList
let ll = new LinkedList(new Node("Hasham"));
ll.insert("potato");
// console.log(ll.find("potato"));
// ll.delete("Hasham")!;
// console.log(ll.find("Hasham"));
// console.log(ll.find("potato"));

ll.printAll();









