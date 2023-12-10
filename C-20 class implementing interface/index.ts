interface IUserFormatter {
  formateUser: () => string;
}

class User implements IUserFormatter {
  constructor(private fullName: string, private age: number) {}
  formateUser = () => {
    return `User name: ${this.fullName}, Age: ${this.age}`;
  };
}
let user1 = new User("Arafat Hossain", 21);
console.log(user1.formateUser());
