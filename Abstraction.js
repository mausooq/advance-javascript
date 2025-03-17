class Car {
    #engineStatus = false; // Private field

    start() {
        this.#checkBattery();
        this.#engineStatus = true;
        console.log("Car started");
    }

    #checkBattery() { // Private method (hidden from users)
        console.log("Checking battery... ✅");
    }
}

const myCar = new Car();
myCar.start(); // ✅
// myCar.#checkBattery(); 
