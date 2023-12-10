// import { displayStudentInfo, langs, productDesc as pDesc } from "./Student";

// displayStudentInfo();
// console.log(langs);
// pDesc();

//import whole Student.ts file as stdInfo

import * as stdInfo from "./Student";
import { User } from "./class";

stdInfo.displayStudentInfo();
console.log(stdInfo.age);

let user1 = new User("Arafat", 21);
user1.display();
