// const printUserInfo = (userId: string | number | boolean | object) :void => {
//     console.log(userId)
// }

// printUserInfo("12")
// printUserInfo(12)
// printUserInfo(true)
// printUserInfo({id: "12"})

//with generic

// const printUserInfo = <X>(userId: X): void => {
//X is generic name, name could be anything like ARAfat
//   console.log(`ID: ${userId}`);
// };

// printUserInfo("12");
// printUserInfo(12);
// printUserInfo(true);
// printUserInfo({ id: "12" });

//multiple generic
const printUserInfo = <X, Y>(userId: X, age: Y): void => {
  console.log(`ID: ${userId}`);
};

printUserInfo("12", 21);
printUserInfo({ id: 38 }, "Arafat");
printUserInfo(38, true);
