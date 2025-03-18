// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); 

// const users = [
//     { name: "Alice", active: true },
//     { name: "Bob", active: false },
//     { name: "Charlie", active: true }
// ];

// const activeUsers = users.filter(user => user.active);

// console.log(activeUsers);



const comments = [
    "This is an amazing product!",
    "This is absolute garbage!",
    "I love this, it's fantastic!",
    "This is trash, I hate it!"
];

const forbiddenWords = ["garbage", "trash", "hate"];

const cleanComments = comments.filter(comment => 
    !forbiddenWords.some(word => comment.toLowerCase().includes(word))
);

console.log(cleanComments);

