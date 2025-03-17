// function first() {
//     console.log("First function executed");
// }

// function second() {
//     console.log("Second function executed");
// }

// first();
// second();
// console.log("End of script");


// console.log("Start");

// setTimeout(() => {
//     console.log("Async Timeout Executed");
// }, 0);

// console.log("End");




// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout (Macrotask)");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise (Microtask)");
// });

// console.log("End");

console.log("Start");

setTimeout(() => console.log("setTimeout (Macrotask)"), 0);

Promise.resolve().then(() => {
    console.log("Promise 1 (Microtask)");
}).then(() => {
    console.log("Promise 2 (Microtask)");
});

console.log("End");

