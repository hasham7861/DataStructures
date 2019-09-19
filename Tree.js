class BTNode{
    constructor(item,left,right){
        this.data = item;
        this.left = left;
        this.right = right;
    }
}

var Tree = class Tree{
  
    constructor(item, left = null ,right = null) {
        this.root = new BTNode(item,left,right);   
    }
  
    printTree(tree){

        // Printing tree in pre-order traversal / breath traversal
        if (tree === null)
            return;
        else if (tree.root.data !== undefined){
        
            console.log(tree.root.data);
            // Traverse through left and right subtree      
            this.printTree(tree.root.left);
            this.printTree(tree.root.right);

        }
    }
}
module.exports = {
  Tree,
  BTNode
}

