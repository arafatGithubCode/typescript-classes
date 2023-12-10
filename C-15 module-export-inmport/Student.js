"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDesc = exports.langs = exports.displayStudentInfo = exports.age = exports.studentName = void 0;
exports.studentName = "Arafat";
exports.age = 21;
var displayStudentInfo = function () {
    console.log("Student name ".concat(exports.studentName, "; age: ").concat(exports.age));
};
exports.displayStudentInfo = displayStudentInfo;
exports.langs = ["Bangla", "English"];
var productDesc = function () {
    console.log("I'm product description");
};
exports.productDesc = productDesc;
