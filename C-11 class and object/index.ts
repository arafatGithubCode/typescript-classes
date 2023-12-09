class User {
  //properties, methods, constructors
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`User name: ${this.userName}, User age: ${this.age}`);
  }
}

//class obj
//user1 -> name: "Arafat", age: 21
//user2 -> name: "Iqra", age: 17
let user1 = new User("Arafat", 21);
user1.display();

let user2 = new User("Mon", 21);
user2.display();

class Product {
  title: string;
  price: number;
  constructor(x: string, y: number) {
    this.title = x;
    this.price = y;
  }
  productView() {
    console.log(`Product' tile: ${this.title}, Product'price: ${this.price}`);
  }
}

let product1 = new Product("Apple", 20);
product1.productView();
