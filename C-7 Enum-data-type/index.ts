//enum -> store constant, duplicate value in not allowed
//3 enum types: numeric, string, hetergenous

//numeric enum
enum requestTypeNum1 {
  readData, //default index v
  saveData,
  deleteData,
}
enum requestTypeNum2 {
  readData = 1,
  saveData = 5,
  deleteData,
}
// console.log(requestTypeNum2);
// console.log(requestTypeNum2.saveData);
// console.log(requestTypeNum2["saveData"]);

//string enum
enum stringEnum1 {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  deleteData = "DELETE_DATA",
}
// console.log(stringEnum1);
// console.log(stringEnum1.deleteData);
// console.log(stringEnum1["deleteData"]);

//hetergenous enum
enum bothEnum {
  test,
  num = 5,
  num2,
  readData = "I'm read data",
  id = 38,
}

console.log(bothEnum);
console.log(bothEnum.id);
console.log(bothEnum["id"]);
