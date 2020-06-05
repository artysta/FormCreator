import { FieldType } from "./FieldType"

export interface Field {
    name: string;
    label: HTMLLabelElement;
    type: FieldType;
    value: any;
    render(): HTMLElement;
}