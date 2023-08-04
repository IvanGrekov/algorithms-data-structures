import HashMap from '../hash-map/index';

class HashSet {
    private map: HashMap = new HashMap();

    has(value: string | number): boolean {
        return this.map.get(value) === true;
    }

    add(value: string | number): void {
        if (this.has(value)) {
            console.warn('Such element already exists');
            
            return;
        }

        this.map.set(value, true);
    }

    remove(value: string | number): boolean {
        if (this.has(value)) {
            this.map.delete(value);
            
            return true;
        }

        return false;
    }

    clear(): void {
        this.map.clear();
    }

    values(): Array<string> {
        return this.map.keys();
    }
}

const set = new HashSet();

set.add(1);
set.add(1);
set.add(2);
set.add(3);
set.add(3);
set.remove(3);
console.log(set.values());
set.clear();
console.log(set.values());
