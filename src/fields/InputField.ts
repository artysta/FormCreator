import { Field } from "../interfaces/Field";
import { FieldType } from "../enums/FieldType";
import { LabelField } from "./LabelField";

export class InputField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    inputElement: HTMLInputElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Text;
        this.inputElement = <HTMLInputElement> document.createElement('input');
        this.inputElement.classList.add("form-control");
        this.inputElement.name = this.name;
        this.lblElement = new LabelField("label", lblValue);
    }
    
    render(): HTMLElement {
        return this.inputElement;
    }

    getValue() {
        return this.inputElement.value;
    }
}