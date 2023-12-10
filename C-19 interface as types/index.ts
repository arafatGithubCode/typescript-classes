interface IUSER {
  id: number;
  userName: string;
  age: number;
}
let users: IUSER[] = [];

let user1: IUSER = {
  id: 1,
  userName: "Arafat",
  age: 21,
};

let user2: IUSER = {
  id: 2,
  userName: "MOn",
  age: 28,
};

users.push(user1);
users.push(user2);

const printUserInfo = (user: IUSER) => {
  console.log(
    `User name: ${user.userName}, user id: ${user.id}, user age ${user.age}`
  );
};

users.forEach((user) => printUserInfo(user));
