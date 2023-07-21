import LinkedList from '../linked-list/intro';

export default class Stack {
    private linkedList = new LinkedList();

    public push(value: number | string): void {
        this.linkedList.prepend(value);
    }

    public pop(): void {
        this.linkedList.remove(0);
    }

    public peek(): number | string | null {
        return this.linkedList.head?.value ?? null;
    }

    public isEmpty(): boolean {
        return !this.linkedList.head;
    }

    serialize() {
        return this.linkedList.serialize();
    }
}

class ArrayStack {
    private array: Array<number | string> = [];

    constructor(private maxSize: number) {}

    public isFull(): boolean {
        return this.array.length === this.maxSize;
    }

    public push(value: number | string): void {
        if (this.isFull()) {
            console.error('Stack is full');
        } else {
            this.array.push(value);
        }
    }

    public pop(): void {
        this.array.pop();
    }

    public peek(): number | string | null {
        return this.array.at(-1) ?? null;
    }

    public isEmpty(): boolean {
        return this.array.length === 0;
    }
}

// const stack = new ArrayStack(3);

// console.log(stack);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.pop();
// console.log(stack.peek());
// stack.pop();
// console.log(stack.peek());
// console.log(stack.isEmpty());
// stack.pop();
// console.log(stack.peek());
// console.log(stack.isEmpty());