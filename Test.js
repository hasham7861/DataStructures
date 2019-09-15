var {BTNode, Tree} = require('./Tree');

let T1 = new Tree(4,new BTNode(1),new BTNode(3));
T1 = T1.insertValue(T1,2);
T1.printTree(T1);

