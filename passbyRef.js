function sum(arr1, arr2) {
  arr1[0] = 100;
  arr2[0] = 200;
  const num1 = arr1[0];
  const num2 = arr2[0];
  const result = num1 + num2;
  return result;
}

let first = [1, 2, 3];
let second = [4, 5, 6];
console.log('Before calling the function', first, second);
const result = sum(first,second);
console.log('Sum :', result)
console.log('After calling the function', first, second);
