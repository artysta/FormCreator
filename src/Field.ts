import { FieldType } from "./FieldType"

export interface Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: HTMLLabelElement;
    lblValue: string;
    render(): HTMLElement;
    getValue(): any;
}