export default function hashFunction(key: string, size: number): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i) * 31 ** (key.length - i - 1);
    }

    return hash % size;
}
