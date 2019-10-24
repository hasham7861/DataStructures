export default class Queue {
    data?: string[];

    enqueue(item: string): void {
        if (this.isEmtpy)
            this.data = [];
        this.data!.push(item);
    }

    dequeue(): string {
        if (this.isEmtpy)
            return "Queue is empty";
        return this.data!.shift()!
    }

    get peek(): string {
        // Peek front of the array
        if (this.isEmtpy)
            return "Queue is empty";
        return this.data![0];
    }

    private get isEmtpy(): boolean {
        return this.data == undefined || this.data.length == 0;
    }
}

