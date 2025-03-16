import { Component, inject, input, InputSignal, OnInit } from "@angular/core";
import {
  IButton,
  ICheckbox,
  IFormSegment,
  IInput,
  ISelect,
  IValidationError,
  TElementType,
} from "../../interfaces/forms.interface";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { InputComponent } from "../../ui-kit/input/input.component";
import { NgClass, NgStyle } from "@angular/common";
import { Router } from "@angular/router";
import { CheckboxComponent } from "../../ui-kit/checkbox/checkbox.component";
import { SelectComponent } from "../../ui-kit/select/select.component";
import { InputAsFormArrayComponent } from "../../ui-kit/input-as-form-array/input-as-form-array.component";

@Component({
  selector: "app-form-generator",
  imports: [
    ReactiveFormsModule,
    InputComponent,
    NgClass,
    NgStyle,
    CheckboxComponent,
    SelectComponent,
    InputAsFormArrayComponent,
  ],
  templateUrl: "./form-generator.component.html",
  styleUrl: "./form-generator.component.scss",
})
export class FormGeneratorComponent implements OnInit {
  private router: Router = inject(Router);
  private fb: FormBuilder = inject(FormBuilder);
  public formSegment: InputSignal<IFormSegment> = input.required();

  public form: FormGroup = null;

  ngOnInit(): void {
    this.form = this.fb.group({});

    this.formSegment().rows.forEach((row, index) => {
      this.form.addControl(index.toString(), this.fb.group({}));

      row.children.forEach(element => {
        const control = this.setControl(element);

        if ("errors" in element) {
          const validators = this.getValidators(element.errors);
          control.setValidators(validators);
        }

        (this.form.controls[index.toString()] as FormGroup).addControl(element.modelName, control);
      });
    });
  }

  setControl(element: TElementType): FormControl<string> | FormArray<FormControl<string>> | FormControl<boolean> {
    let control;

    if (this.isInput(element)) {
      if (element.typeOfControl === "asArray") {
        control = this.fb.array([this.fb.control("")]);
      } else {
        control = this.fb.control("");
      }
    } else if (this.isCheckbox(element)) {
      control = this.fb.control(false);
    } else if (this.isSelect(element)) {
      control = this.fb.control(element.defaultOption ? element.defaultOption.value : "");
    }

    return control;
  }

  getValidators(errors: IValidationError[]): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    errors.forEach(error => {
      if (error.type === "required") {
        validators.push(Validators.required);
      } else if (error.type === "maxlength") {
        validators.push(Validators.maxLength(error.validatorValue as number));
      }
    });

    return validators;
  }

  onConfirmClick(button: IButton): void {
    if (button.name === "Confirm") {
      if (this.form.valid) {
        const data: { [key: string]: any } = {};

        Object.values(this.form.getRawValue()).forEach(value => {
          Object.entries(value).forEach(entry => {
            data[entry[0]] = entry[1];
          });
        });

        console.log(data);
        alert(button.dbAction);
      } else {
        Object.entries(this.form.controls).forEach(control => {
          if (control[1] instanceof FormControl) {
            control[1].markAsDirty();
          }

          if (control[1] instanceof FormGroup || control[1] instanceof FormArray) {
            Object.entries(control[1].controls).forEach(nestedControl => {
              nestedControl[1].markAsDirty();
            });
          }
        });
      }
    } else if (button.name === "Cancel") {
      this.router.navigate(["/"]);
    }
  }

  isInput(element: TElementType): element is IInput {
    return element.componentType === "input";
  }

  isCheckbox(element: TElementType): element is ICheckbox {
    return element.componentType === "checkbox";
  }

  isSelect(element: TElementType): element is ISelect {
    return element.componentType === "select";
  }
}
