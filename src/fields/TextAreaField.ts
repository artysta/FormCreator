import { Field } from "../interfaces/Field";
import { FieldType } from "../enums/FieldType";
import { LabelField } from "./LabelField";

export class TextAreaField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    element: HTMLTextAreaElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Multiline;
        this.element = <HTMLTextAreaElement> document.createElement('textarea');
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