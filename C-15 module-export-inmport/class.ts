export class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display() {
    console.log(`User name: ${this.userName}, age: ${this.age}`);
  }
}
