import { FieldType } from "./FieldType"
import { LabelField } from "./LabelField";

export interface Field {
    name: string;
    type: FieldType;
    value: any;
    lblElement: LabelField;
    lblValue: string;
    render(): HTMLElement;
    getValue(): any;
}