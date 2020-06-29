import {Field} from './Field';

export class Form {
    fields: Field[];
    formContainer: HTMLElement;

    /**
     * @param containerId  Id of element in which the form should be placed.
     * @param fields  The array of elements that the form should consist of.
     */
    constructor(containerId: string, fields: Field[]) {
        this.formContainer = document.getElementById(containerId);
        this.fields = fields;
    }

    render(): void {
        this.fields.forEach(element => {
            this.formContainer.appendChild(element.lblElement.render());
            this.formContainer.appendChild(element.render());
        });
    }

    getValues(): any {
        let array: any[] = new Array();
        
        this.fields.forEach(element => {
            array.push(element.lblElement.getValue() + ": " + element.getValue());
        });

        return array;
    }

}