import { Field } from "./Field";
import { FieldType } from "./FieldType";
import { LabelField } from "./LabelField";

export class CheckboxField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    element: HTMLInputElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Checkbox;
        this.element = <HTMLInputElement> document.createElement('input');
        this.element.type = "checkbox";
        this.element.name = this.name;
        this.lblElement = new LabelField("label", lblValue);
    }
    
    render(): HTMLElement {
        return this.element;
    }

    getValue() {
        return this.element.value;
    }
}