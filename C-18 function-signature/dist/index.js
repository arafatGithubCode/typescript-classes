"use strict";
let userInfo;
userInfo = () => {
    console.log("I'm 21");
};
let userInfo1;
userInfo1 = () => { };
let userInfo2;
userInfo = () => {
    return "I'm string";
};
let userInfo3;
userInfo3 = (userName) => {
    console.log("Who are U?");
};
userInfo3("Arafat");
let digit;
digit = (y) => {
    console.log(`Value of y is ${y}`);
};
digit(4);
let userInfo4;
userInfo4 = (name, age) => {
    return `User name: ${name}, Age: ${age}`;
};
console.log(userInfo4("Arafat", 21));
