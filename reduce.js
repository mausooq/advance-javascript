// const numbers = [10, 20, 30, 40];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); 


// const words = ["apple", "banana", "apple", "orange", "banana", "banana"];


// const wordCount = words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0 ) +1 ;
//     return acc;
// },{})

// console.log(wordCount);


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person);
    return acc;
}, {});

console.log(groupedByAge);

