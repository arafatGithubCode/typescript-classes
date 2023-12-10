var users = [];
var user1 = {
    id: 1,
    userName: "Arafat",
    age: 21,
};
var user2 = {
    id: 2,
    userName: "MOn",
    age: 28,
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("User name: ".concat(user.userName, ", user id: ").concat(user.id, ", user age ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
