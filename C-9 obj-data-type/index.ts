const user = {
  userName: "Arafat",
  userId: 38,
};

let user1: {
  userName: string;
  userId: number;
};

user1 = {
  userName: "Arafat",
  userId: 38,
};

let student: {
  course: string;
  phone: number;
  email?: string;
};

student = {
  course: "MIS",
  phone: 8954,
};

let user2: object;

user2 = {
  userName: "Arafat",
  userId: 38,
  userEmail: "arafat@gmail.com",
};

let users: object[];

users = [
  { name: "Arafat", roll: 38 },
  { name: "Anis", roll: 1 },
];

let data: object[];
data = [];
data.push(student);
data.push(users);

// console.log(data);

let product1: { name: string; price: number };
product1 = { name: "Apple", price: 30 };

let product2: { name: string; price: number };
product2 = { name: "laptop", price: 222 };

let products: object[];
products = [];
products.push(product1);
products.push(product2);

// console.log(products);

// for (const key in products) {
//   console.log(products[key]);
// }

for (const key in products) {
  console.log(products[key]["name"]);
}
