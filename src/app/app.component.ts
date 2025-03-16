import { Component } from "@angular/core";
import { default as JSONData } from "./../data.json";
import { FormGeneratorComponent } from "./shared/components/form-generator/form-generator.component";

@Component({
  selector: "app-root",
  imports: [FormGeneratorComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public JSONData: any = JSONData;
}
