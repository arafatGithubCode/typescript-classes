let userId: number | string | boolean;

userId = "Arafat";
userId = 123;
userId = true;

console.log(userId);

const userInfo = (userId: number | string | boolean) => {
  console.log(userId);
};

userInfo(12);
userInfo("Anis");
userInfo(false);
