//built-in data type: number, string, boolean, null, undefind, void
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 38;
firstName = "Arafat";
lastName = " Hossain";
isActivated = true;
fullName = firstName.concat(lastName);
//If func has no parameter, type = void
var display = function () {
    console.log("I'm display");
};
display();
// console.log(fullName.split(" "));
// console.log(fullName.split(""));
console.log(fullName.toLocaleLowerCase());
