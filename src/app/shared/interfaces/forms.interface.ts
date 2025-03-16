export type TCSSClasses = string[];
export type TCSSStyles = { [key: string]: string };
export type TElementType = IInput | ICheckbox | ISelect;

export interface IInput {
  componentType: string;
  type: string;
  typeOfControl: "asControl" | "asArray";
  modelName: string;
  placeholder: string;
  buttons?: IButton[];
  cssClasses?: TCSSClasses;
  cssStyles?: TCSSStyles;
  errors?: IValidationError[];
}

export interface ICheckbox {
  componentType: string;
  modelName?: string;
  placeholder: string;
  action?: string;
  value?: boolean;
  cssClasses?: TCSSClasses;
  cssStyles?: TCSSStyles;
}

export interface ISelect {
  componentType: string;
  modelName: string;
  placeholder: string;
  defaultOption?: { name: string; value: string };
  options: Array<{ name: string; value: string }>;
  cssClasses?: TCSSClasses;
  cssStyles?: TCSSStyles;
  errors?: IValidationError[];
}

export interface IValidationError {
  type: string;
  text: string;
  validatorValue?: number | string;
}

export interface IButton {
  name: string;
  dbAction?: string;
  type: string;
  cssClasses?: TCSSClasses;
  cssStyles?: TCSSStyles;
}

export interface IFormSegment {
  componentType: string;
  name: string;
  buttons: IButton[];
  cssClasses: TCSSClasses;
  cssStyles: TCSSStyles;
  rows: Array<{
    label: string;
    required?: boolean;
    subtext?: string;
    cssClasses?: TCSSClasses;
    cssStyles?: TCSSStyles;
    children: Array<TElementType>;
  }>;
}
