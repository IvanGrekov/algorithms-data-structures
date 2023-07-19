import array from './array';

let l = 0;
function linearSearch(array: number[], target: number): number {
    for (let i = 0; i < array.length; i++) {
        l += 1;

        if (array[i] === target) {
            return i;
        };
    }

    return -1;
}

let b = 0;
function binarySearch(array: number[], target: number): number {
    let minIndex = 0;
    let maxIndex = array.length - 1;

    while (minIndex <= maxIndex) {
        b += 1;

        const midIndex = Math.floor((minIndex + maxIndex) / 2);
        const value = array[midIndex];

        if (value === target) {
            return midIndex;
        }

        if (value > target) {
            maxIndex = midIndex - 1;
        } else {
            minIndex = midIndex + 1;
        }
    }

    return -1;
}

let i = 0;
function interpolatonSearch(array: number[], target: number): number {
    let minIndex = 0;
    let maxIndex = array.length - 1;

    while (minIndex <= maxIndex) {
        i += 1;

        const index = Math.floor(
            minIndex
            + (maxIndex - minIndex)
            / (array[maxIndex] - array[minIndex])
            * (target - array[minIndex])
        );
        const value = array[index];

        if (value === target) {
            return index;
        }

        if (value > target) {
            maxIndex = index - 1
        } else {
            minIndex = index + 1;
        }
    }

    return -1;
}

console.log(linearSearch(array, 999999), { l });
console.log(binarySearch(array, 999999), { b });
console.log(interpolatonSearch(array, 999999), { i });
