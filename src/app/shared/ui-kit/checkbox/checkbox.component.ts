import { Component, input, InputSignal, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ICheckbox } from "../../interfaces/forms.interface";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "app-checkbox",
  imports: [FormsModule, ReactiveFormsModule, NgStyle, NgClass],
  templateUrl: "./checkbox.component.html",
  styleUrl: "./checkbox.component.scss",
})
export class CheckboxComponent implements OnInit {
  public form: InputSignal<FormGroup> = input.required();
  public elementData: InputSignal<ICheckbox> = input.required();
  public groupName: InputSignal<number> = input.required();
  public control: FormControl = null;

  ngOnInit(): void {
    const group = this.form().get(this.groupName().toString()) as FormGroup;
    this.control = group.get(this.elementData().modelName) as FormControl;
  }

  onToggleAllClick(value: boolean): void {
    this.elementData().value = !value;
    const group = this.form().get(this.groupName().toString()) as FormGroup;

    for (const field in group.controls) {
      const control = group.get(field);
      control.setValue(this.elementData().value);
    }
  }
}
