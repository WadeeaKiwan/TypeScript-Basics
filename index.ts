export {};
let message = 'Hello World';

message = 'Welcome Back';

console.log(message);

// tsc <ts filename> --watch

// Variable Declarations
let sum;
const title = 'Typescript';

// Variable Types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Wadeea';

let sentence: string = `My name is ${name}
I'm a beginner in Typescript`;

console.log(sentence);

let strLength = (sentence as string).length;
// Or: let strLength = (<string>sentence).length;
console.log(strLength);

total.toLocaleString();

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let array1: number[] = [1, 2, 3];
let array2: Array<number> = [1, 2, 3];
let array3: (number | boolean)[] = [1, 2, true];
let array4: boolean[][] = [[true, false]];

// The order, type and length matters
let person1: [string, number] = ['Chris', 22];

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

enum Color2 {
  Red = 5,
  Green,
  Blue,
}

let c2: Color2 = Color2.Green;
console.log(c2);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Wadeea';

// With any, Typescript doesn't throw an error, but with unknown it does
// let myVariable: any = 10;
let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && 'name' in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

// (myVariable as string).toUpperCase();

// Type intellisense
let a;
a = 10;
a = true;

// Type is not specified explicitly but implicitly it is specified during initialization
let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

// Functions
// ? the question mark after the name of the parameter specifies that it's optional
function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

add(5, 10);
add(5);

function add2(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}
add2(5, 10);
add2(5);

// interfaces
function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};

fullName(p);

// We can use the interface as a type to call in multiple functions
interface Person {
  firstName: string;
  lastName?: string; // it can be optional
}

function fullName2(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

fullName2(p);

// Class & Access Modifiers
class Employee {
  public employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee('Wadeea');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager('Bruce');

if (m1 instanceof Employee) {
  m1.delegateWork();
  m1.greet();
  console.log(m1.employeeName);
}

/*
 * Classes are public by default

 * With private modifier, it cannot be accessed outside the class

 * protected modifier, can be accessed only to a derived class (with extends)
 */

//  Return types
// It doesn't return a value, it calls only another function
function voidExample(): void {
  add(1, 2);
}

// Never reaches the end of the function
function neverExample(): never {
  throw Error;
}
