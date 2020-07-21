import { FieldType } from "../enums/FieldType"
import { LabelField } from "../fields/LabelField";

export interface Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    render(): HTMLElement;
    getValue(): any;
}