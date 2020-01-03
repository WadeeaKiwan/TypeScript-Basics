var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Jane User';
document.body.textContent = greeter(user);
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = new Student('Jane', 'M.', 'User');
document.body.textContent = greeter2(user2);
