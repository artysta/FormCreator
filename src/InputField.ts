import { Field } from "./src/Field";
import { FieldType } from "./FieldType";

export class InputField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: HTMLLabelElement;
    lblValue: string;
    inputElement: HTMLInputElement;
    
    constructor(name: string, type: FieldType, lblValue: string){
        this.name = name;
        this.type = type;
        this.inputElement = <HTMLInputElement> document.createElement('input');
        this.inputElement.name = this.name;
        this.lblElement = <HTMLLabelElement> document.createElement('label');
        this.lblElement.innerHTML = lblValue;
        this.lblElement.htmlFor = name;
        this.lblValue = lblValue;
    }
    
    render(): HTMLElement {
        return this.inputElement;
    }

    getValue() {
        return this.inputElement.value;
    }
}