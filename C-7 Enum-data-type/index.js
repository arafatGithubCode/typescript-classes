//enum -> store constant, duplicate value in not allowed
//3 enum types: numeric, string, hetergenous
//numeric enum
var requestTypeNum1;
(function (requestTypeNum1) {
    requestTypeNum1[requestTypeNum1["readData"] = 0] = "readData";
    requestTypeNum1[requestTypeNum1["saveData"] = 1] = "saveData";
    requestTypeNum1[requestTypeNum1["deleteData"] = 2] = "deleteData";
})(requestTypeNum1 || (requestTypeNum1 = {}));
var requestTypeNum2;
(function (requestTypeNum2) {
    requestTypeNum2[requestTypeNum2["readData"] = 1] = "readData";
    requestTypeNum2[requestTypeNum2["saveData"] = 5] = "saveData";
    requestTypeNum2[requestTypeNum2["deleteData"] = 6] = "deleteData";
})(requestTypeNum2 || (requestTypeNum2 = {}));
// console.log(requestTypeNum2);
// console.log(requestTypeNum2.saveData);
// console.log(requestTypeNum2["saveData"]);
//string enum
var stringEnum1;
(function (stringEnum1) {
    stringEnum1["readData"] = "READ_DATA";
    stringEnum1["saveData"] = "SAVE_DATA";
    stringEnum1["deleteData"] = "DELETE_DATA";
})(stringEnum1 || (stringEnum1 = {}));
// console.log(stringEnum1);
// console.log(stringEnum1.deleteData);
// console.log(stringEnum1["deleteData"]);
//hetergenous enum
var bothEnum;
(function (bothEnum) {
    bothEnum[bothEnum["test"] = 0] = "test";
    bothEnum[bothEnum["num"] = 5] = "num";
    bothEnum[bothEnum["num2"] = 6] = "num2";
    bothEnum["readData"] = "I'm read data";
    bothEnum[bothEnum["id"] = 38] = "id";
})(bothEnum || (bothEnum = {}));
console.log(bothEnum);
console.log(bothEnum.id);
console.log(bothEnum["id"]);
