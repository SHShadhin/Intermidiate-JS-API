function multiply(a, b) {
   a = a - 5;
   b = b - 10;

  console.log(a, b);
  const result = a * b;
  return result;
}

let x = 10;
let y = 20;
console.log('Before calling', x, y);
const result = multiply(x, y);
console.log(result)
console.log('after calling', x, y);






let arr = [10, 20, 30, 60, 70];

const [first, second, third,, fifth] = arr;
console.log(first, second, third, fifth);
 