/** @1 - Generics*/
class MyMap<T> {
    private list: { [key: string]: T } = {};
    setItem(key: string, value: T) {
        this.list[key] = value;
    }
    getItem(key: string): T {
        return this.list[key];
    }
    clearMap() {
        this.list = {};
    }
    printMap() {
        for (let key in this.list) {
            console.log(`${key}: ${this.list[key]}`);
        }
    }
}
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
numberMap.clearMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "John");
stringMap.setItem('age', "30");
stringMap.printMap();
stringMap.clearMap();



/** @2 - Interfaces*/
interface Personality {
    firstName: string;
    lastName?: string;
    hobbies?: string[];
    greet(lastName: string): void;
}

let person: Personality;

function greet(person: Personality): void {
    console.log(`Hello, ${person.firstName}`);
}

function changeName(person: Personality): void {
    person.firstName = 'Anna';
}

function createPerson(firstName: string, hobbies: string[]): Personality {
    return {
        firstName,
        hobbies,
        greet(lastName: string): void {
            console.log(`Hi, I am ${this.firstName} ${lastName}`);
        }
    }
}

person = createPerson('John', ['Cooking', 'Sports']);
greet(person);
changeName(person);
greet(person);
person.greet('Anything');

class Person implements Personality {
    firstName: string = '';
    lastName: string = '';
    greet(lastName: string): void {
        console.log(`Hi, I am ${this.firstName} ${lastName}`);
    }
}

const myPerson = new Person();
myPerson.firstName = "Doe";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);