var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("User name: ".concat(this.userName, ", User age: ").concat(this.age));
    };
    return User;
}());
//class obj
//user1 -> name: "Arafat", age: 21
//user2 -> name: "Iqra", age: 17
var user1 = new User("Arafat", 21);
user1.display();
var user2 = new User("Mon", 21);
user2.display();
var Product = /** @class */ (function () {
    function Product(x, y) {
        this.title = x;
        this.price = y;
    }
    Product.prototype.productView = function () {
        console.log("Product' tile: ".concat(this.title, ", Product'price: ").concat(this.price));
    };
    return Product;
}());
var product1 = new Product("Apple", 20);
product1.productView();
