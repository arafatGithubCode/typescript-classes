"use strict";
// import { displayStudentInfo, langs, productDesc as pDesc } from "./Student";
Object.defineProperty(exports, "__esModule", { value: true });
// displayStudentInfo();
// console.log(langs);
// pDesc();
//import whole Student.ts file as stdInfo
var stdInfo = require("./Student");
var class_1 = require("./class");
stdInfo.displayStudentInfo();
console.log(stdInfo.age);
var user1 = new class_1.User("Arafat", 21);
user1.display();
