var {BTNode, Tree} = require('./Tree');

let T1 = new Tree(4,new Tree(3),new Tree(5));
// T1.root.left = new Tree(3);
// T1.root.right = new Tree(5);

T1.printTree(T1);

