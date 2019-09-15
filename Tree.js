var BTNode = class BTNode {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

var Tree = class Tree extends BTNode{
    printTree(tree, leftLevel = 0, rightLevel = 0, leftTree = false){
        // Printing tree in pre-order traversal / breath traversal
        if(tree === null)
            return
        else if (tree.data !== null){
            let level = 0;
            // Choose the correct subtree level
            if(leftTree)
                level = leftLevel;
            else
                level = rightLevel;

            console.log("Level:" + level + " Value:" +tree.data);
            
            // Traverse through left and right subtree
            this.printTree(tree.left,++leftLevel,rightLevel, true);
            this.printTree(tree.right,++rightLevel,rightLevel, false);
            
        }
    }
    insertValue(tree, value){
        // creating a tree if doesn't exist
        if(!tree || !tree.data ){
            tree = new Tree(value);
        }
        else if (tree.left === null){
            tree.left = new BTNode(value);
        }
        else{
            this.insertValue(tree.left,value);
        }

        return tree;
    }
}
module.exports = {
  BTNode,
  Tree   
}

