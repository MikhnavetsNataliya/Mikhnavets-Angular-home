/** @ES6 */


/** @exercise 1 - arrow function */
let double = value => value * 2;
console.log(double(10));

/**@exercise 2 - arrow function & template literals */
let greet = name => {
    if (name === undefined) {
        name = 'Alex';
    }
    console.log(`Hello, ${name}`);
};
let greet = (name = 'Alex') => {console.log(`Hello, ${name}`)};
greet();
greet('Anna');

/** @exercise 3 - static method Reflect.apply() */
let numbers = [-3, 33, 38, 5];
console.log(Reflect.apply(Math.min, undefined, numbers));

/** @exercise 4 - spread-оператор */
let newArray = [55, 20];
newArray = [...newArray, ...numbers];
console.log(newArray);

/**@exercise 5 - деструкторизация массива */
const testResult = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResult;
console.log(result1, result2, result3);

/** @exercise 5 - деструкторизация объекта */
let scientist = {firstName: 'Will', experience: 12};
const {firstName, experience} = scientist;


/** @type */

interface BankAccount {
    money: number;
    deposit: (value: number) => void;
}

interface Myself {
    name: string;
    bankAccount: BankAccount,
    hobbies: string[];
}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};

let myself: Myself = {
    name: 'Alex',
    bankAccount: bankAccount,
    hobbies:["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);


/** @classes */

/** @Exercise 1 */

class Car {
    public name: string;
    public acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk(): void {
        console.log('Tooooooooooooooooot!');
    }

    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

/** @Exercise 2 */

class BaseObject {
    width: number = 0;
    length: number = 0;

    constructor( width: number, length: number) {
        this.width = width;
        this.length = length;
    }

    public calcSize(): number{
        return this.width * this.length;
    }
}

const rectangle = new BaseObject(5, 4);
console.log(rectangle.calcSize());


/** @Exercise 3 */

class Person {
    firstName: string;

    constructor(name: string) {
        this.firstName = name;
    }

    set _firstName(value: string) {
        if (value.length > 3) {
            this.firstName = value
        }
        else {
            this.firstName = "";
        }
    }

    get _firstName() {
        return this.firstName;
    }
}

const person1 = new Person("John");
console.log(person1.firstName);
person1._firstName = 'John';
console.log(person1.firstName);

const person2 = new Person("Doe");
console.log(person2.firstName);
person2._firstName = 'Doe';
console.log(person2.firstName);
