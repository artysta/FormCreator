import { Field } from "./Field";
import { FieldType } from "./FieldType";
import { LabelField } from "./LabelField";

export class SelectField implements Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    selectElement: HTMLSelectElement;
    
    constructor(name: string, lblValue: string,  ...options: string[]){
        this.name = name;
        this.type = FieldType.Text;
        this.selectElement = <HTMLSelectElement> document.createElement('select');
        this.selectElement.name = this.name;

        // Add all options to select element.
        options.forEach(o => {
            const option = document.createElement('option');
            option.value = o;
            option.text = o;
            this.selectElement.add(option);
        });

        this.lblElement = new LabelField("label", lblValue);
    }
    
    render(): HTMLElement {
        return this.selectElement;
    }

    getValue() {
        return this.selectElement.value;
    }
}