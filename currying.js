// const add = (a) => (b) => (c) => a + b + c;

// console.log(add(2)(3)(4)); // 9
// console.log(add(5)(10)(15)); // 30


const multiply = (x) => (y) => x * y;

const double = multiply(2); 
const triple = multiply(3);

console.log(double(5)); 
console.log(triple(5)); 
