"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("User name: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
exports.User = User;
