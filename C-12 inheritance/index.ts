class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`User name: ${this.userName}, User age: ${this.age}`);
  }
}

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `User name: ${this.userName}, User age: ${this.age}, ID: ${this.studentId}`
    );
  }
}

let student1 = new Student("Arafat", 21, 8899);
student1.display();

let user1 = new User("Tamim", 33);
user1.display();
