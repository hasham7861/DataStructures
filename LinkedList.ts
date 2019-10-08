export class Node {
    data: string;
    next?: Node;
    constructor(data: string, next?: Node) {
        this.data = data;
        this.next = next;
    }
}
export class LinkedList {

    head?: Node;

    constructor(node: Node) {
        this.head = node;
    }

    find(data: string): boolean {
        // return true if node is found

        // Linkedlist is empty
        if (!this.head)
            return false;
        // if data is found at head
        else if (this.head.data == data)
            return true;

        let curr = this.head;
        while (curr) {
            if (curr.data == data) {
                return true;
            }
            curr = curr.next!;
        }
        return false;
    }

    insert(data: string): void {
        // add node to end of list

        let curr = this.head;
        while (curr) {
            if (curr.next == undefined) {
                curr.next = new Node(data);
                break;
            }
            curr = curr.next;
        }
        return;
    }

    delete(data: string): LinkedList | undefined {
        // 3 cases, first node, middle node, or last node

        if (this.head == undefined)
            return;
        // If data is found at head
        else if (this.head.data == data) {
            this.head = this.head.next;
            return;
        }

        // data is found in between nodes or last node
        let curr = this.head;
        while (curr) {
            if (curr.next && curr.next.data == data) {
                break;
            }
            curr = curr.next!;
        }

        // If node can be found
        if (curr != undefined) {
            // If candiate node is in the middle of two nodes, or last node
            let newNextNode = curr.next ? curr.next.next : curr.next;
            curr.next = newNextNode;
        }

    }

    printAll() {
        let curr = this.head;
        let linkedListStr = "Head:";
        while (curr && curr.next) {
            linkedListStr += curr.data + "->";
            curr = curr.next;
        }
        linkedListStr += curr!.data;

        console.log(linkedListStr);


    }


}