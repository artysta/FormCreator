import { Field } from "./Field";
import { FieldType } from "./FieldType";
import { LabelField } from "./LabelField";

export class EmailField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    emailElement: HTMLInputElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Email;
        this.emailElement = <HTMLInputElement> document.createElement('input');
        this.emailElement.name = this.name;
        this.lblElement = new LabelField("label", lblValue);
    }
    
    render(): HTMLElement {
        return this.emailElement;
    }

    getValue() {
        return this.emailElement.value;
    }
}