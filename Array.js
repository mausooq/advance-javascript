const arr = [1, 2, 3];
console.log(arr);
// length
console.log(arr.length); 

// Array Operations & Methods

arr.push(4);
console.log(arr);   

arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(1,1,1.5,2);
console.log(arr);


console.log(arr.slice(0,3));


// Searching in Arrays

arr1 = ["apple", "banana", "cherry","banana"];
console.log(arr1.indexOf("banana"));

console.log(arr1.lastIndexOf("banana"));

console.log(arr1.includes("banana"));

console.log(arr.find( x => x > 2));

console.log(arr1.findIndex( x => x === 'cherry'));


// Iterating Over Arrays

arr.forEach( x => console.log(x));

const map = arr.map(x => x * 2);
console.log(map);


const filter = map.filter(x => x > 2);
console.log(filter);

const reduce = arr.reduce((acc, x) => acc + x, 0);
console.log(reduce);


// sorting and reversing
const arr2 = [100,2,99,33,1,0];
console.log(arr2.sort((a,b) => a - b));
console.log(arr2.reverse());

// join and split
str = arr.join(', ');
console.log(str.split(', '));












