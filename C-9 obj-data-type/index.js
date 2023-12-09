var user = {
    userName: "Arafat",
    userId: 38,
};
var user1;
user1 = {
    userName: "Arafat",
    userId: 38,
};
var student;
student = {
    course: "MIS",
    phone: 8954,
};
var user2;
user2 = {
    userName: "Arafat",
    userId: 38,
    userEmail: "arafat@gmail.com",
};
var users;
users = [
    { name: "Arafat", roll: 38 },
    { name: "Anis", roll: 1 },
];
var data;
data = [];
data.push(student);
data.push(users);
// console.log(data);
var product1;
product1 = { name: "Apple", price: 30 };
var product2;
product2 = { name: "laptop", price: 222 };
var products;
products = [];
products.push(product1);
products.push(product2);
// console.log(products);
// for (const key in products) {
//   console.log(products[key]);
// }
for (var key in products) {
    console.log(products[key]["name"]);
}
