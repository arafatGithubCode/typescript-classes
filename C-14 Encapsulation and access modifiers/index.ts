class User {
  public userName: string;
  protected userId: number;
  readonly age: number;
  country: string; //default public
  private married: boolean; // private only available this class scope

  constructor(
    userName: string,
    userId: number,
    age: number,
    country: string,
    married: boolean
  ) {
    this.userName = userName;
    this.userId = userId;
    this.age = age;
    this.country = country;
    this.married = married;
  }

  display() {
    console.log(
      `User name: ${this.userName}, User id: ${this.userId}, Age: ${this.age}, Country: ${this.country}, Married: ${this.married}`
    );
  }
}

class Student extends User {
  private courseName: string;

  constructor(
    userName: string, //public member can be inheritance
    userId: number, //protected member can be inheritance
    age: number, //read only member can be inheritance
    country: string,
    married: boolean,
    courseName: string
  ) {
    super(userName, userId, age, country, married);
    this.courseName = courseName;
  }

  display() {
    console.log(
      `Student name: ${this.userName}, User id: ${this.userId}, Age: ${this.age}, Country: ${this.country}, Married: (private), Course name: ${this.courseName}`
    );
  }

  setCourseName(courseName: string): void {
    this.courseName = courseName;
  }

  getCourseName(): string {
    return this.courseName;
  }
}

let user1 = new User("Anis", 22, 31, "Bangladesh", true);
let student1 = new Student("Tamim", 22, 44, "England", false, "MIS");

user1.userName = "Arafat"; //public member can be access & modify
student1.userName = "Mon"; //public member can be access & modify
// user1.userId = "can't" //protected member can't be access & modify
console.log(user1.age); //read only member can access but not modify
// user1.married //private can't inheritance, access, modify

student1.setCourseName("AIS"); //private member modify by setCourse method
console.log(student1.getCourseName()); //private member access by  method

// console.log(student1);
// user1.display();
// student1.display();

// Encapsulation helps us to manage the visibility of class members. 4 Access modifiers: public, private, protected, readonly
