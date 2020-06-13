import { Field } from "./Field";
import { FieldType } from "./FieldType";
import { LabelField } from "./LabelField";

export class TextAreaField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    textAreaElement: HTMLTextAreaElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Text;
        this.textAreaElement = <HTMLTextAreaElement> document.createElement('textarea');
        this.textAreaElement.name = this.name;
        this.lblElement = new LabelField("label", lblValue);
    }
    
    render(): HTMLElement {
        return this.textAreaElement;
    }

    getValue() {
        return this.textAreaElement.value;
    }
}