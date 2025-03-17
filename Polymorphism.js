class Animal {
    #makeSound() {
        console.log("Some generic animal sound 🐾");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow! ");
    }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.makeSound(); 
myCat.makeSound();

const myAnimal = new Animal();
myAnimal.makeSound();