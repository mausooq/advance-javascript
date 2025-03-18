// const names = ["Alice Johnson", "Bob Smith", "Charlie Brown"];

// const initials = names.map(name => 
//     name.split(" ").map(word => word[0].toUpperCase()).join("")
// );

// console.log(initials);

// const fetchUserData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();

//     const formattedUsers = users.map(user => ({
//         fullName: `${user.name} (${user.username})`,
//         location: `${user.address.city}, ${user.address.zipcode}`,
//         contact: user.email
//     }));

//     console.log(formattedUsers);
// };

// fetchUserData();


const products = ["Laptop", "Phone", "Tablet"];
const prices = [1000, 500, 300];

const productList = products.map((product, index) => ({
    product,
    price: prices[index],
    discount: prices[index] > 500 ? "10% Off" : "5% Off"
}));

console.log(productList);


