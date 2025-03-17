// Primitive Data Types
let username = "JohnDoe"; 
let age = 25; 
let isLoggedIn = true; 
let accountBalance = null; 
let userRank; 

// Non-Primitive Data Types
let user = { name: "John Doe", age: 25, premium: false }; // Object

console.log(typeof username); 
console.log(typeof age); 
console.log(typeof user); 


user.age = 26; 
console.log(user.age); 

// Primitive variables (immutable)
let newUsername = username;
newUsername = "JaneDoe";
console.log(username); 
