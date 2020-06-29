import { FieldType } from "./FieldType";

export class LabelField {
    name: string;
    type: FieldType;
    value: any;
    lblElement: HTMLLabelElement;
    
    constructor(name: string, lblValue: string){
        this.name = name;
        this.type = FieldType.Text;
        this.lblElement = <HTMLLabelElement> document.createElement('label');
        this.lblElement.innerHTML = lblValue;
        this.value = lblValue;
        this.lblElement.htmlFor = name;
    }
    
    render(): HTMLElement {
        return this.lblElement;
    }

    getValue() {
        return this.value;
    }
}