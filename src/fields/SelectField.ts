import { Field } from "../interfaces/Field";
import { FieldType } from "../enums/FieldType";
import { LabelField } from "./LabelField";

export class SelectField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    element: HTMLSelectElement;
    options: string[]
    
    constructor(name: string, lblValue: string, options: string[]){
        this.name = name;
        this.type = FieldType.Select;
        this.element = <HTMLSelectElement> document.createElement('select');
        this.element.name = this.name;
        this.options = options;

        // Add all options to select element.
        options.forEach(o => {
            const option = document.createElement('option');
            option.value = o;
            option.text = o;
            this.element.add(option);
        });

        this.lblElement = new LabelField("label", lblValue);
    }
    
    render(): HTMLElement {
        return this.element;
    }

    getValue() {
        return this.element.value;
    }
}