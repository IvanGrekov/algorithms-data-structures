import Stack from './index';

// const validateBrackets = (str: string): boolean => {
//     const stack = new Stack();

//     for (const symbol of str) {
//         if (symbol === '(') {
//             stack.push(symbol);

//             continue;
//         }

//         const lastSymbol = stack.peek();

//         if (lastSymbol === '(') {
//             stack.pop();
//         } else {
//             stack.push(symbol);
//         }
//     }

//     return stack.isEmpty();
// };

// console.log(validateBrackets('('));
// console.log(validateBrackets('()'));
// console.log(validateBrackets('(())((()))'));

function removeOuterParentheses(string: string) {
  const stack = new Stack();
  let level = -1;

  for (const symbol of string) {
    const isOpenBracket = symbol === '(';

    if (isOpenBracket) {
        level++;
    } else {
        level--;
    }

    if (level > 0 ) {
        stack.push(symbol);
    }

    if (level === 0 && !isOpenBracket) {
        stack.push(symbol);
    }
  }

  return stack.serialize().join('');
}

console.log(removeOuterParentheses('((()))()(())'));

