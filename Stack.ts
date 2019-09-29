export default class Stack extends Array {
    constructor(...elems: any[]) {
        super(...elems)
    }

    pop(): void {
        if (this.length === 0)
            throw new Error('Nothing to pop!');
        super.pop()
    }

    peek(): number {
        if (this.length === 0)
            throw new Error('Stack is empty!');
        return this[this.length - 1];
    }
}

