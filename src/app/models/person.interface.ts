interface PersonInterface {
  firstName: string;
  lastName: string;
  age: number;
}

export class Person implements PersonInterface {
  firstName: string;
  lastName: string;
  age: number;

  constructor(person?: PersonInterface) {
    this.firstName = person?.firstName;
    this.lastName = person?.lastName;
    this.age = person?.age;
  }
}
