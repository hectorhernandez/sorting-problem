import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AppService } from "./app.service";
import { Person } from "./models/person.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class AppComponent {
  title = "FT Sorting Problem";

  arr$: Observable<Person[]>;

  constructor(service: AppService) {
  }
}
