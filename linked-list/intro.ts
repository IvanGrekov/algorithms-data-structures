export class Node {
    constructor(public value: number | string, public next: Node | null = null) {}
}

export default class LinkedList {
    public head: Node | null;

    constructor(value?: number | string) {
        if (value) {
            this.head = new Node(value);
        } else {
            this.head = null;
        }
    }

    public prepend(value: number | string): void { 
        this.head = new Node(value, this.head);
    }

    public append(value: number | string): void {
        const node = new Node(value);
        let lastNode: Node | null = this.head;

        if (!lastNode) {
            this.head = node;
            return;
        }

        while (!!lastNode?.next) {
            lastNode = lastNode.next;
        }

        lastNode.next = node;
    }

    public insert(i: number, value: number | string): void {
        if (i === 0) {
            return this.prepend(value);
        }

        const node = new Node(value);
        let j = 1;
        let prevNode: Node | null = this.head;

        while (j <= i && !!prevNode) {
            if (j === i) {
                node.next = prevNode.next;
                prevNode.next = node;
                return;
            }

            if (!prevNode.next && j < i) {
                prevNode.next = node;
                return;
            }

            j++;
            prevNode = prevNode.next;
        }
    }

    public remove(i: number): void {
        if (i === 0) {
            this.head = this.head?.next || null;
            return;
        }

        let j = 1;
        let prevNode: Node | null = this.head;

        while (!!prevNode && j <= i) {
            if (j === i && prevNode.next) {
                const removingNode: Node = prevNode.next;
                prevNode.next = removingNode.next;
            }

            j++;
            prevNode = prevNode?.next;
        }
    }

    public removeByValue(value: number | string): void {
        if (this.head?.value === value) {
            this.head = this.head?.next || null;
            return;
        }

        let prevNode: Node | null = this.head;
        let currentNode: Node | null = this.head?.next || null;

        while (!!prevNode && !!currentNode) {
            if (currentNode.value === value) {
                prevNode.next = currentNode.next;
                break;
            }

            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    public find(value: number | string): Node | null {
        let node: Node | null = this.head;

        while (!!node) {
            if (node.value === value) {
                return node;
            }

            node = node.next;
        }

        return null;
    }

    public findByIndex(i: number): Node | null {
        if (i === 0) {
            return this.head;
        }

        let j = 1;
        let node: Node | null = this.head?.next || null;

        while (!!node) {
            if (j === i) {
                return node;
            }

            j++;
            node = node.next;
        }

        return null;
    }

    public watchValues(): void {
        console.group('nodes');
        let node: Node | null = this.head;
        while (!!node) {
            console.log(node.value);
            node = node.next;
        }
        console.groupEnd();
    }

    public serialize(): Array<number | string> {
        const result: Array<number | string> = [];
        let node = this.head;

        while (node) {
            result.unshift(node.value);
            node = node.next;
        }

        return result;
    }
}

const linkedList = new LinkedList();

// linkedList.prepend(0);
// linkedList.append(2);
// linkedList.insert(10, 3);
// linkedList.insert(0, 3);
// linkedList.insert(1, 3);
// linkedList.remove(0);
// linkedList.removeByValue(0);
// console.log(linkedList.find(0));
// console.log(linkedList.findByIndex(3));

// linkedList.watchValues();
// console.log(JSON.stringify(linkedList, null, 2));
