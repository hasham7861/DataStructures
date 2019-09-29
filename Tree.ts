export class BTNode {

    key: string; value?: string; left?: BTNode; right?: BTNode;

    constructor(key: string, value?: string, left?: BTNode, right?: BTNode) {
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export class Tree {

    root: BTNode;

    constructor(key: string, value?: string, left?: BTNode, right?: BTNode) {
        this.root = new BTNode(key, value, left, right);
    }

    printTree(tree: BTNode) {

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
    }
}
