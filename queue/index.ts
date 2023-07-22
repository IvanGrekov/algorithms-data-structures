import LinkedList from "./doubly-linked-list";

class Queue {
    private list: LinkedList;

    constructor() {
        this.list = new LinkedList();
    }

    public enqueue(value: any): void {
        this.list.append(value);
    }

    public dequeue(): any {
        return this.list.deleteHead();
    }

    public clear(): void {
        this.list.clear();
    }

    public isEmpty(): boolean {
        return this.list.getHead() === null;
    }

    public peek(): any {
        return this.list.getHead()?.value ?? null;
    }

    public getQueue(): any[] {
        return this.list.toArray();
    }
}

class QueueArray {
    private list: any[];

    constructor(private length: number) {
        this.list = [];
    }

    public enqueue(value: any): void {
        if (this.list.length < this.length) {
            this.list.push(value);
        } else {
            throw new Error('Queue overflow');
        }
    }

    public dequeue(): any {
        return this.list.shift();
    }

    public clear(): void {
        this.list = [];
    }

    public isEmpty(): boolean {
        return this.list.length === 0;
    }

    public isFull(): boolean {
        return this.list.length === this.length;
    }

    public peek(): any {
        return this.list[0] ?? null;
    }

    public getQueue(): any[] {
        return this.list;
    }
}

const queue = new QueueArray(2);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.getQueue());
