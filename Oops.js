class Person{
    constructor(name){
        this.name = name;
        this.age = this.age;
    }
    introduce(){
        console.log(`Hi, I am ${this.name}`);
    }
}

const person = new Person("Alice");
person.introduce();


class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); 
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}

// Creating an instance
const student1 = new Student("Charlie", 20, "10th Grade");

student1.introduce(); 
student1.study(); 
