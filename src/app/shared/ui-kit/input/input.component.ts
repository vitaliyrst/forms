import { Component, input, InputSignal, OnInit } from "@angular/core";
import { IInput } from "../../interfaces/forms.interface";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "app-input",
  imports: [ReactiveFormsModule, NgClass, NgStyle],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
})
export class InputComponent implements OnInit {
  public form: InputSignal<FormGroup> = input.required();
  public elementData: InputSignal<IInput> = input.required();
  public groupName: InputSignal<number> = input.required();
  public control: FormControl = null;

  ngOnInit(): void {
    const group = this.form().get(this.groupName().toString()) as FormGroup;
    this.control = group.get(this.elementData().modelName) as FormControl;
  }
}
