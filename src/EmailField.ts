import { Field } from "./Field";
import { FieldType } from "./FieldType";
import { LabelField } from "./LabelField";

export class EmailField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    element: HTMLInputElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Email;
        this.element = <HTMLInputElement> document.createElement('input');
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