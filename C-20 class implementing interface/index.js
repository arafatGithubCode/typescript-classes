var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formateUser = function () {
            return "User name: ".concat(_this.fullName, ", Age: ").concat(_this.age);
        };
    }
    return User;
}());
var user1 = new User("Arafat Hossain", 21);
console.log(user1.formateUser());
