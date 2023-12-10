var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(userName, userId, age, country, married) {
        this.userName = userName;
        this.userId = userId;
        this.age = age;
        this.country = country;
        this.married = married;
    }
    User.prototype.display = function () {
        console.log("User name: ".concat(this.userName, ", User id: ").concat(this.userId, ", Age: ").concat(this.age, ", Country: ").concat(this.country, ", Married: ").concat(this.married));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, //public member can be inheritance
    userId, //protected member can be inheritance
    age, //read only member can be inheritance
    country, married, courseName) {
        var _this = _super.call(this, userName, userId, age, country, married) || this;
        _this.courseName = courseName;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Student name: ".concat(this.userName, ", User id: ").concat(this.userId, ", Age: ").concat(this.age, ", Country: ").concat(this.country, ", Married: (private), Course name: ").concat(this.courseName));
    };
    Student.prototype.setCourseName = function (courseName) {
        this.courseName = courseName;
    };
    Student.prototype.getCourseName = function () {
        return this.courseName;
    };
    return Student;
}(User));
var user1 = new User("Anis", 22, 31, "Bangladesh", true);
var student1 = new Student("Tamim", 22, 44, "England", false, "MIS");
user1.userName = "Arafat"; //public member can be access & modify
student1.userName = "Mon"; //public member can be access & modify
// user1.userId = "can't" //protected member can't be access & modify
console.log(user1.age); //read only member can access but not modify
// user1.married //private can't inheritance, access, modify
student1.setCourseName("AIS"); //private member modify by setCourse method
console.log(student1.getCourseName()); //private member access by  method
// console.log(student1);
// user1.display();
// student1.display();
// Encapsulation helps us to manage the visibility of class members. 4 Access modifiers: public, private, protected, readonly
