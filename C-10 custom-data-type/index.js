var users;
users = [];
var user1;
user1 = { userName: "Arafat", userId: 38 };
users.push(user1);
var user2;
user2 = { userName: "MOn", userId: 23 };
users.push(user2);
var user3;
user3 = { userName: "Anis", userId: 22 };
users.push(user3);
var getRequest;
getRequest = "GET";
getRequest = "POST";
var requestHandler = function (methodType) {
    console.log(methodType);
};
requestHandler("GET");
