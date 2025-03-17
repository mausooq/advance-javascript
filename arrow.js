const person = {
    name: "Alice",
    regularFunction: function () {
        console.log("Regular Function:", this.name);
    },
    arrowFunction: () => {
        console.log("Arrow Function:", this.name);
    }
};

person.regularFunction(); 
person.arrowFunction(); 

