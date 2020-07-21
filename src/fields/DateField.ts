import { Field } from "../interfaces/Field";
import { FieldType } from "../enums/FieldType";
import { LabelField } from "./LabelField";

export class DateField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    dateElement: HTMLInputElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Date;
        this.dateElement = <HTMLInputElement> document.createElement('input');
        this.dateElement.name = this.name;
        this.lblElement = new LabelField("label", lblValue);
    }
    
    render(): HTMLElement {
        return this.dateElement;
    }

    getValue() {
        return this.dateElement.value;
    }
}