"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World';
message = 'Welcome Back';
console.log(message);
// tsc <ts filename> --watch
// Variable Declarations
var sum;
var title = 'Typescript';
// Variable Types
var isBeginner = true;
var total = 0;
var name = 'Wadeea';
var sentence = "My name is " + name + "\nI'm a beginner in Typescript";
console.log(sentence);
var strLength = sentence.length;
// Or: let strLength = (<string>sentence).length;
console.log(strLength);
total.toLocaleString();
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var array3 = [1, 2, true];
var array4 = [[true, false]];
// The order, type and length matters
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 6] = "Green";
    Color2[Color2["Blue"] = 7] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
console.log(c2);
var randomValue = 10;
randomValue = true;
randomValue = 'Wadeea';
// With any, Typescript doesn't throw an error, but with unknown it does
// let myVariable: any = 10;
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
// Type intellisense
var a;
a = 10;
a = true;
// Type is not specified explicitly but implicitly it is specified during initialization
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
// Functions
// ? the question mark after the name of the parameter specifies that it's optional
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10);
add2(5);
// interfaces
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName2(p);
// Class & Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Wadeea');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
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
function voidExample() {
    add(1, 2);
}
// Never reaches the end of the function
function neverExample() {
    throw Error;
}
