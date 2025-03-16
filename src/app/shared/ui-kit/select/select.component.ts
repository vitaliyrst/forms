import { Component, forwardRef, input, InputSignal, OnInit } from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";
import { ISelect } from "../../interfaces/forms.interface";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-select",
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: "./select.component.html",
  styleUrl: "./select.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  public form: InputSignal<FormGroup> = input.required();
  public elementData: InputSignal<ISelect> = input.required();
  public groupName: InputSignal<number> = input.required();
  public control: FormControl = null;
  public selectedValue: string = null;
  public selectedLabel: string = null;
  public isOptionListOpen: boolean = false;

  ngOnInit(): void {
    const group = this.form().get(this.groupName().toString()) as FormGroup;
    this.control = group.get(this.elementData().modelName) as FormControl;
  }

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.selectedValue = value;
    this.selectedLabel = this.elementData().options.find(option => option.value === value)?.name || "";
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleDropdown(): void {
    this.isOptionListOpen = !this.isOptionListOpen;
  }

  selectOption(event: Event, option: { value: any; name: string }): void {
    event.stopPropagation();
    this.selectedValue = option.value;
    this.selectedLabel = option.name;
    this.onChange(option.value);
    this.onTouched();
    this.toggleDropdown();
    this.form().markAsDirty();
  }
}
