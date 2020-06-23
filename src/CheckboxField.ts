import { Field } from "./Field";
import { FieldType } from "./FieldType";
import { LabelField } from "./LabelField";

export class CheckboxField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    checkboxElement: HTMLInputElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Checkbox;
        this.checkboxElement = <HTMLInputElement> document.createElement('input');
        this.checkboxElement.type = "checkbox";
        this.checkboxElement.name = this.name;
        this.lblElement = new LabelField("label", lblValue);
    }
    
    render(): HTMLElement {
        return this.checkboxElement;
    }

    getValue() {
        return this.checkboxElement.value;
    }
}