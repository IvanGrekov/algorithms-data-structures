import array from './array';

let l = 0;
function linearSearch(array: number[], value: number): number {
    for (let i = 0; i < array.length; i++) {
        l += 1;

        if (array[i] === value) {
            return i;
        };
    }

    return -1;
}

let b = 0;
function binarySearch(array: number[], value: number): number {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        b += 1;

        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = array[midIndex];

        if (value === midValue) {
            return midIndex;
        }

        if (value < midValue) {
            endIndex = midIndex - 1;
        } else {
            startIndex = midIndex + 1;
        }
    }

    return -1;
}

console.log(linearSearch(array, 820427), { l });
console.log(binarySearch(array, 820427), { b });
