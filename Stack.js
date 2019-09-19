var Stack = class Stack extends Array {
    constructor(...elems){
        super(...elems)
    }

    pop(){
        if(this.length === 0) 
            throw new Error('Nothing to pop!');
        super.pop()
    }

    peek(){
        if(this.length === 0) 
            throw new Error('Stack is empty!');
        return this[this.length-1];
    }
}

module.exports.Stack;
