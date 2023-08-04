import LinkedList from './linked-list';
import hashFunction from './hashFunction';

export default class HashMap {
    private cells: Array<LinkedList>;
    private fullness: number;
    private threshold: number;

    constructor(private size: number = 16) {
        this.cells = new Array(size);
        this.fullness = 0;
        this.threshold = 0.75;
    }

    private getStringifiedKey(key: string | number): string {
        if (typeof key === 'string') {
            return key;
        } else {
            return key.toString();
        }
    }

    public set(key: string | number, value: any): void {
        const stringifiedKey = this.getStringifiedKey(key);
        const hash = hashFunction(stringifiedKey, this.size);

        if (!this.cells[hash]) {
            this.cells[hash] = new LinkedList();
            this.fullness++;
        }

        this.cells[hash].append(stringifiedKey, value);

        if (this.fullness / this.size >= this.threshold) {
            this.resize(this.size * 2);
        }
    }

    public get(key: string | number): any | null {
        const stringifiedKey = this.getStringifiedKey(key);
        const hash = hashFunction(stringifiedKey, this.size);

        if (!this.cells[hash]) {
            return null;
        }

        const node = this.cells[hash].find(stringifiedKey);

        return node?.value;
    }

    public getByIndex(index: number): LinkedList | null {
        if (index < 0 || index >= this.size) {
            return null;
        }

        return this.cells[index];
    }

    public delete(key: string | number): any | null {
        const stringifiedKey = this.getStringifiedKey(key);
        const hash = hashFunction(stringifiedKey, this.size);

        if (!this.cells[hash]) {
            return null;
        }

        let node = this.cells[hash].delete(stringifiedKey);

        if (!this.cells[hash].getHead()) {
            this.fullness--;
        }

        return node;
    }

    public clear(): void {
        this.cells = new Array(this.size);
        this.fullness = 0;
    }

    public serialize(): Array<any[]> {
        const result: Array<any[]> = [];

        for (let i = 0; i < this.cells.length; i++) {
            const cellData = this.cells[i]?.serialize();
            result.push(cellData);
        }

        return result;
    }

    public transfer(oldCells: Array<LinkedList>) {
        for (let i = 0; i < oldCells.length; i++) {
            const cellData = oldCells[i]?.serialize();

            if (cellData) {
                for (let j = 0; j < cellData.length; j++) {
                    const { key, value } = cellData[j];
                    this.set(key, value);
                }
            }
        }
    }

    public resize(newSize: number): void {
        const oldCells = this.cells;
        this.cells = new Array(newSize);
        this.size = newSize;
        this.fullness = 0;
        this.transfer(oldCells);
    }

    public getFullness(): number {
        return this.fullness;
    }

    public keys(): string[] {
        const result: string[] = [];

        for (let i = 0; i < this.cells.length; i++) {
            result.push(...(this.cells[i]?.keys() || []));
        }

        return result;
    }
}

const map = new HashMap(2);

// map.set('Marcus', 16);
// console.log(map.serialize());
// console.log('------------------');
// map.set('Mao', 18);
// map.set('Sasha', 20);
// console.log(map.serialize());
// map.set('Alex', 22);
// map.set('Sergey', 24);
// map.set('Ivan', 26);
// map.set('Igor', 28);
// console.log('------------------');
// console.log(map.serialize());
// map.set('Vladimir', 30);
// map.set('Sofia', 32);
// map.set('Maria', 34);
// map.set('Daria', 36);
// map.set('Dmitry', 38);

// console.log(map.getByIndex(3));
// console.log(map.getFullness());
// console.log(map.delete('Marcus'));
// console.log(map.getFullness());
// console.log(map.getByIndex(3));
// console.log(map.get('Marcus'));
// console.log(map.get('Vladimir'));
// console.log(map.get('Sasha'));
// console.log(map.get('Sasha'));
// console.log(map.get('Vladimir'));
// console.log(map.delete('Sasha'));
// console.log('------------------');
// console.log(map.serialize());
// console.log(map.get('Sasha'));
// console.log(map.get('Vladimir'));
