"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hashtable = /** @class */ (function () {
    function Hashtable() {
        this.list = [];
        this.size = 100;
    }
    Hashtable.prototype.calculateHash = function (key) {
        //calculates hash
        // if number convert it to string;
        var sumHash = 0;
        for (var i = 0; i < key.length; i++) {
            sumHash += key.charCodeAt(i);
        }
        return sumHash;
    };
    Hashtable.prototype.calculateIndex = function (hash) {
        return hash % this.size;
    };
    Hashtable.prototype.put = function (key, value) {
        var hash = this.calculateHash(key);
        var index = this.calculateIndex(hash);
        // check if there are any entries at the index. i.e is there a BST
        // if (typeof this.list[index] == "undefined")
        //     this.list[index] = new BST([]);
        // else {
        //     this.list[index].insertValue(this.list[index], value);
        // }
    };
    Hashtable.prototype.getValue = function (key) {
        var hash = this.calculateHash(key);
        var index = this.calculateIndex(hash);
        console.log(typeof this.list[index]);
        //  if(typeof(this.list[index]) === "BST"){
        //     this.list[index].printTree(this.list[index]);
        //  }
    };
    Hashtable.prototype.containsKey = function (key) {
    };
    Hashtable.prototype.isEmpty = function () {
        this.list === [];
    };
    return Hashtable;
}());
var h1 = new Hashtable();
h1.put("apple", "69");
h1.getValue("apple");
