import BST from './BST';

export default class Hashtable {
    private _list: BST[] = [];
    size = 100;

    private calculateHash(key: string) {
        //calculates hash

        // if number convert it to string;
        let sumHash = 0;
        for (var i = 0; i < key.length; i++) {
            sumHash += key.charCodeAt(i);
        }

        return sumHash;
    }

    private calculateIndex(hash: number) {
        return hash % this.size;
    }

    public put(key: string, value: string) {

        const hash = this.calculateHash(key);
        const index = this.calculateIndex(hash);

        // check if there are any entries at the index. i.e is there a BST
        if (this._list[index] == undefined)
            this._list[index] = new BST(key, value);
        else {
            this._list[index].insertValue(this._list[index], key, value);
        }

    }

    public getValue(key: string) {

        if (this.isEmpty)
            return;

        let hash = this.calculateHash(key);
        let index = this.calculateIndex(hash);

        if (index >= this._list.length || typeof this._list[index] == "undefined")
            return "Can't find key:" + key;

        else { // If there is a BST there, then search for the key within the tree
            return this._list[index].findTree(key, this._list[index]);
        }

    }

    public containsKey(key: string) {

    }

    public get isEmpty(): boolean {
        return this._list.length == 0;

    }

}

