class ArrayMethods {
    // Linear complexity
    // O(1) + O(n) + O(n) + O(n) + O(n) + O(1) = 4n + 2
    // O(n) - no matter how big the array is, the complexity will be the same
    public static find<T>(element: T, array: T[]): T | null {
        for (
            let i = 0; // O(1)
            i < array.length; // O(n)
            i++ // O(n)
        ) {
            const currentElement = array[i]; // O(n)

            if (
                currentElement === element // O(n)
            ) {
                return currentElement;  // O(1)
            }
        }

        return null; // O(1)
    }

    // Quadratic complexity
    // 1 + 1 + 1 + n + n + n + n^2 + n^2 + n^2 = 3 + 3n + 3n^2
    // O(n^2) - the complexity is quadratic
    public static combine<T>(array: T[]): string[] {
        const result: string[] = []; // O(1)

        for (
            let i = 0; // O(1)
            i < array.length; // O(n)
            i++ // O(n)
        ) {
            for (
                let j = 0; // O(n)
                j < array.length;  // O(n^2) 
                j++  // O(n^2)
            ) {
                const combinedElenents = `${array[i]} - ${array[j]}`;  // O(n^2)
                result.push(combinedElenents);  // O(n^2)
            }
        }

        return result; // O(1)
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(ArrayMethods.find(5, array));
// console.log(ArrayMethods.find(1, array));
// console.log(ArrayMethods.find(10, array));

console.log(ArrayMethods.combine(array));
console.log(ArrayMethods.combine(array).length);