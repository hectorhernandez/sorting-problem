import { Injectable } from "@angular/core";
import { take, map } from "rxjs/operators";
import { interval, Observable } from "rxjs";
import { Person } from "./models/person.interface";

@Injectable({
  providedIn: "root"
})
export class AppService {
  // example array
  private arrTimeout = 1000;
  private arr: Person[] = [
    new Person({ firstName: "Liam", lastName: "Smith", age: 71 }),
    new Person({ firstName: "Noah", lastName: "Johnson", age: 32 }),
    new Person({ firstName: "Oliver", lastName: "Williams", age: 79 }),
    new Person({ firstName: "William", lastName: "Brown", age: 27 }),
    new Person({ firstName: "Elijah", lastName: "Jones", age: 64 }),
    new Person({ firstName: "James", lastName: "Garcia", age: 50 }),
    new Person({ firstName: "Benjamin", lastName: "Miller", age: 73 }),
    new Person({ firstName: "Lucas", lastName: "Davis", age: 50 }),
    new Person({ firstName: "Mason", lastName: "Rodriguez", age: 33 }),
    new Person({ firstName: "Ethan", lastName: "Martinez", age: 15 }),
    new Person({ firstName: "Alexander", lastName: "Hernandez", age: 37 }),
    new Person({ firstName: "Henry", lastName: "Lopez", age: 57 }),
    new Person({ firstName: "Jacob", lastName: "Gonzales", age: 69 }),
    new Person({ firstName: "Michael", lastName: "Wilson", age: 28 }),
    new Person({ firstName: "Daniel", lastName: "Anderson", age: 60 }),
    new Person({ firstName: "Logan", lastName: "Thomas", age: 51 }),
    new Person({ firstName: "Jackson", lastName: "Taylor", age: 33 }),
    new Person({ firstName: "Sebastian", lastName: "Moore", age: 25 }),
    new Person({ firstName: "Jack", lastName: "Jackson", age: 65 }),
    new Person({ firstName: "Aiden", lastName: "Martin", age: 57 }),
    new Person({ firstName: "Owen", lastName: "Lee", age: 70 }),
    new Person({ firstName: "Samuel", lastName: "Perez", age: 26 }),
    new Person({ firstName: "Matthew", lastName: "Thompson", age: 7 }),
    new Person({ firstName: "Joseph", lastName: "White", age: 62 }),
    new Person({ firstName: "Levi", lastName: "Harris", age: 54 }),
    new Person({ firstName: "Mateo", lastName: "Sanchez", age: 48 }),
    new Person({ firstName: "David", lastName: "Clark", age: 38 }),
    new Person({ firstName: "John", lastName: "Ramirez", age: 39 }),
    new Person({ firstName: "Wyatt", lastName: "Lewis", age: 11 }),
    new Person({ firstName: "Carter", lastName: "Robinson", age: 32 }),
    new Person({ firstName: "Julian", lastName: "Walker", age: 44 }),
    new Person({ firstName: "Luke", lastName: "Young", age: 7 }),
    new Person({ firstName: "Grayson", lastName: "Allen", age: 29 }),
    new Person({ firstName: "Isaac", lastName: "King", age: 15 }),
    new Person({ firstName: "Jayden", lastName: "Wright", age: 34 }),
    new Person({ firstName: "Theodore", lastName: "Scott", age: 44 }),
    new Person({ firstName: "Gabriel", lastName: "Torres", age: 17 }),
    new Person({ firstName: "Anthony", lastName: "Nguyen", age: 11 }),
    new Person({ firstName: "Dylan", lastName: "Hill", age: 33 }),
    new Person({ firstName: "Leo", lastName: "Flores", age: 39 }),
    new Person({ firstName: "Lincoln", lastName: "Green", age: 59 }),
    new Person({ firstName: "Jaxon", lastName: "Adams", age: 64 }),
    new Person({ firstName: "Asher", lastName: "Nelson", age: 61 }),
    new Person({ firstName: "Christopher", lastName: "Baker", age: 60 }),
    new Person({ firstName: "Josiah", lastName: "Hall", age: 68 }),
    new Person({ firstName: "Andrew", lastName: "Rivera", age: 41 }),
    new Person({ firstName: "Thomas", lastName: "Campbell", age: 25 }),
    new Person({ firstName: "Joshua", lastName: "Mitchell", age: 41 }),
    new Person({ firstName: "Ezra", lastName: "Carter", age: 49 }),
    new Person({ firstName: "Hudson", lastName: "Roberts", age: 31 })
  ];

  public arr$: Observable<Person[]> = interval(this.arrTimeout).pipe(
    take(this.arr.length + 1),
    map(i => this.arr.slice(0, i))
  );

  constructor() {}
}
