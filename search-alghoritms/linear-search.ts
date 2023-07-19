// 820426 exist
// 820423 not exist

import array from './array';

let a = 0;

function linearSearch(array: number[], value: number): number {
    for (let i = 0; i < array.length; i++) {
        a += 1;

        if (array[i] === value) {
            return i;
        };
    }

    return -1;
}

// console.time('linearSearch - exist');
// console.log(linearSearch(array, 820426), { a });
// console.timeEnd('linearSearch - exist');

console.time('linearSearch - not exist');
console.log(linearSearch(array, 820423), { a });
console.timeEnd('linearSearch - not exist');

// console.log(array[518506]);
console.log(array.length);
