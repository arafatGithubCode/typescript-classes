let userInfo: () => void;
userInfo = () => {
  console.log("I'm 21");
};

let userInfo1: () => void;
userInfo1 = () => {};

let userInfo2: () => string;
userInfo = () => {
  return "I'm string";
};

let userInfo3: (userName: string) => void;
userInfo3 = (userName: string) => {
  console.log("Who are U?");
};
userInfo3("Arafat");

let digit: (x: number) => void;
digit = (y: number) => {
  console.log(`Value of y is ${y}`);
};
digit(4);

let userInfo4: (userName: string, age: number) => string;
userInfo4 = (name: string, age: number) => {
  return `User name: ${name}, Age: ${age}`;
};
console.log(userInfo4("Arafat", 21));
