export default class BST {

    private _key: string;
    private _value?: string;
    private _left?: BST;
    private _right?: BST;

    constructor(key: string, value?: string) {
        this._key = key;
        this._value = value;
        this._left = undefined;
        this._right = undefined;

    }
    // Self balance the tree somehow
    insertValue(tree?: BST, key?: string, value?: string): BST | undefined {
        if (!tree)
            return new BST(key!, value);
        else if (tree._key < key!)
            tree._right = this.insertValue(tree._right, key, value);
        else if (tree._key >= key!)
            tree._left = this.insertValue(tree._left, key, value);

        return tree;
    }

    findTree(key: string, tree?: BST): BST | undefined {
        // if tree is empty, then return nothing
        if (!tree)
            return;
        else if (tree.key == key) {
            return tree;
        }
        else if (tree.key < key) {
            return this.findTree(key, tree.right);
        }
        else if (tree.key > key) {
            return this.findTree(key, tree.left);
        }
    }

    printTree(tree: BST) {

        // Printing tree in pre-order traversal / breath traversal
        if (tree == undefined)
            return;
        else if (tree._key == undefined)
            return;

        console.log(tree._key);
        // Traverse through left and right subtree   
        this.printTree(tree._left!);
        this.printTree(tree._right!);

    }

    public get left(): BST {
        return this._left!
    }

    public get right(): BST {
        return this._right!
    }

    public get key(): string {
        return this._key!
    }

    public get value(): string {
        return this._value!
    }

}

