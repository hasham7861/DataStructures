import BST from './BST';

class Hashtable {
    list = [];
    size = 100;

    calculateHash(key: string) {
        //calculates hash

        // if number convert it to string;
        let sumHash = 0;
        for (var i = 0; i < key.length; i++) {
            sumHash += key.charCodeAt(i);
        }

        return sumHash;
    }

    calculateIndex(hash: number) {
        return hash % this.size;
    }

    put(key: string, value: string) {
        let hash = this.calculateHash(key);
        let index = this.calculateIndex(hash);

        // check if there are any entries at the index. i.e is there a BST
        // if (typeof this.list[index] == "undefined")
        //     this.list[index] = new BST([]);
        // else {
        //     this.list[index].insertValue(this.list[index], value);
        // }

    }

    getValue(key: string) {
        let hash = this.calculateHash(key);
        let index = this.calculateIndex(hash);
        console.log(typeof this.list[index]);

        //  if(typeof(this.list[index]) === "BST"){
        //     this.list[index].printTree(this.list[index]);

        //  }

    }

    containsKey(key: string) {

    }

    isEmpty() {
        this.list === [];
    }



}


let h1 = new Hashtable();
h1.put("apple", "69");
h1.getValue("apple");



