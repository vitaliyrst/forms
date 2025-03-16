import { Component, input, InputSignal, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IInput } from "../../interfaces/forms.interface";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "app-input-as-form-array",
  imports: [ReactiveFormsModule, NgClass, NgStyle],
  templateUrl: "./input-as-form-array.component.html",
  styleUrl: "./input-as-form-array.component.scss",
})
export class InputAsFormArrayComponent implements OnInit {
  public form: InputSignal<FormGroup> = input.required();
  public elementData: InputSignal<IInput> = input.required();
  public groupName: InputSignal<number> = input.required();
  public formArray: FormArray = null;

  ngOnInit(): void {
    const group = this.form().get(this.groupName().toString()) as FormGroup;
    this.formArray = group.get(this.elementData().modelName) as FormArray;
  }

  isFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

  onAddClick(): void {
    this.formArray.push(new FormControl(""));
  }

  onRemoveClick(index: number): void {
    this.formArray.removeAt(index);
  }
}
