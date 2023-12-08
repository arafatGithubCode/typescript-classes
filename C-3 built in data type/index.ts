//built-in data type: number, string, boolean, null, undefind, void

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 38;
firstName = "Arafat";
lastName = " Hossain";
isActivated = true;
fullName = firstName.concat(lastName);

//If func has no parameter, type = void
const display = (): void => {
  console.log("I'm display");
};
display();

// console.log(fullName.split(" "));
// console.log(fullName.split(""));
console.log(fullName.toLocaleLowerCase());
