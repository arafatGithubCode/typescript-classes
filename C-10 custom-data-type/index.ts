type User = { userName: string; userId: number };

let users: User[];
users = [];

let user1: User;
user1 = { userName: "Arafat", userId: 38 };
users.push(user1);

let user2: User;
user2 = { userName: "MOn", userId: 23 };
users.push(user2);

let user3: User;
user3 = { userName: "Anis", userId: 22 };
users.push(user3);

// console.log(users);

type requestType = "GET" | "POST";
let getRequest: requestType;

getRequest = "GET";
getRequest = "POST";

const requestHandler = (methodType: requestType) => {
  console.log(methodType);
};
requestHandler("GET");
