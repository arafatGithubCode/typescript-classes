// let userNames: string[];
let userNames: Array<string>;

userNames = ["Rimon", "Arafat", "MOn"];

userNames.sort();
userNames.push("Babu");
userNames.pop();

console.log(userNames);

let multipleType: (string | number | boolean)[];

multipleType = ["string", 12, true];
