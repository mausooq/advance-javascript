// const fetchUser = (isTrue) => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             if(isTrue) {
//                 resolve({name: "John", age: 25});
//             } else {
//                 reject("User not found");
//             }
//         }
//         , 2000);
//     })
// }

// fetchUser(true).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));



const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
    });
};

const fetchOrders = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Order 1", "Order 2"]), 1000);
    });
};

// Chaining Promises
fetchUser()
    .then((user) => {
        console.log("User:", user);
        return fetchOrders(user.id);
    })
    .then((orders) => console.log("Orders:", orders))
    .catch((error) => console.error(error));
