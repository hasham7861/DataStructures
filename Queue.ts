export default class Queue {
    data?: string[];

    enqueue(item: string): void {
        if (this.isEmtpy)
            this.data = [];
        this.data!.push(item);
    }

    dequeue(item: string): string {
        if (this.isEmtpy)
            return "Queue is empty";

        let indexOfItem = this.data!.indexOf(item);
        if (indexOfItem != -1)
            return this.data!.splice(indexOfItem, 1)[0];
        else
            return "item can't be found";
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

