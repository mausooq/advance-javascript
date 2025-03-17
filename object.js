//  Creating & Modifying Objects

const user = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
};

user.country = "USA";

user.age = 31;

delete user.email;

console.log(user);

// Checking Object Properties
console.log("name" in user); 
console.log(user.hasOwnProperty("email"));

//  Object Methods (Keys, Values, Entries)

console.log(Object.keys(user));   
console.log(Object.values(user));
console.log(Object.entries(user)); 

// Iterating Over Objects
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}


Object.entries(user).forEach(([key, value]) => console.log(`${key}: ${value}`));


//  Cloning & Merging Objects

// // Shallow Copy
const userCopy1 = Object.assign({}, user);
const userCopy2 = { ...user };

console.log(userCopy1, userCopy2);

// // Merging Objects
const additionalInfo = { role: "Admin", active: true };
const mergedUser = { ...user, ...additionalInfo };
console.log(mergedUser);


// Object.freeze() - Prevents modification
const frozenUser = Object.freeze({ id: 1, name: "Alice" });
// frozenUser.name = "Bob"; 

// // Object.seal() - Allows modification but prevents adding/removing properties
const sealedUser = Object.seal({ id: 2, name: "Charlie" });
sealedUser.name = "Charlie Brown"; 
//  sealedUser.age = 25; 

console.log(sealedUser);


const person = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName()); 



//  Convert Object to JSON

const jsonString = JSON.stringify(user);
console.log(jsonString);

// Convert JSON back to Object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
