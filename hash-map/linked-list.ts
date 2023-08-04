class Node {
    constructor(
        public key: string,
        public value: any,
        public next: Node | null = null,
        public prev: Node | null = null,
    ) {}
}

class LinkedList {
    private head: Node | null;
    private tail: Node | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public append(key: Node['key'], value: Node['value']): void {
        const node = new Node(key, value);

        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    public prepend(key: Node['key'], value: Node['value']): void {
        const node = new Node(key, value);

        if (this.head) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    public clear(): void {
        this.head = null;
        this.tail = null;
    }

    public delete(key: any): Node | null {
        let node = this.head;

        while (node) {
            if (node.key === key) {
                break;
            }

            node = node.next;
        }

        if (!node) {
            return null;
        }

        const isHead = node === this.head;
        const isTail = node === this.tail;

        if (isHead && isTail) {
            this.clear();
        } else if (isHead) {
            this.head = node.next;

            if (this.head) {
                this.head.prev = null;
            }
        } else if (isTail) {
            this.tail = node.prev;

            if (this.tail) {
                this.tail.next = null;
            }
        } else {
            const prevNode = node.prev;
            const nextNode = node.next;

            if (prevNode) {
                prevNode.next = nextNode;
            }

            if (nextNode) {
                nextNode.prev = prevNode;
            }
        }

        return node;
    }

    public deleteHead(): Node | null {
        if (!this.head) {
            return null;
        }

        const key = this.getHead()?.key;

        return this.delete(key);
    }

    public find(key: Node['key']): Node | null {
        let node = this.head;

        while (node) {
            if (node.key === key) {
                break;
            }

            node = node.next;
        }

        return node;
    }

    public findByIndex(index: number): Node | null {
        let node = this.head;
        let i = 0;

        while (node) {
            if (i === index) {
                break;
            }

            node = node.next;
            i++;
        }

        return node;
    }

    public getHead(): Node | null {
        return this.head;
    }

    public getTail(): Node | null {
        return this.tail;
    }

    public size(): number {
        let currentNode = this.head;
        let size = 0;

        while (currentNode) {
            size++;
            currentNode = currentNode.next;
        }

        return size;
    }

    public serialize(): any[] {
        const array: any[] = [];

        let currentNode = this.head;

        while (currentNode) {
            array.push({ key: currentNode.key, value: currentNode.value });
            currentNode = currentNode.next;
        }

        return array;
    }

    public keys(): string[] {
        const array: string[] = [];

        let currentNode = this.head;

        while (currentNode) {
            array.push(currentNode.key);
            currentNode = currentNode.next;
        }

        return array;
    }
}

export default LinkedList;
