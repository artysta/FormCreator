import { Field } from './Field';
import { LocStorage } from './LocStorage';

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

    save(): void {
        var valuesObj = this.getValues();

        console.log("Save btn clicked");
        
        for (let key in valuesObj) {
            console.log("Key= " + key + ", value= " + valuesObj[key]);
        }
     
        let storage: LocStorage = new LocStorage();
        storage.saveDocument(valuesObj);
    }

    render(): void {
        this.fields.forEach(element => {
            this.formContainer.appendChild(element.lblElement.render());
            this.formContainer.appendChild(element.render());
        });

        let btnSave = document.createElement("button");
        btnSave.innerHTML = "Save this document";
        btnSave.addEventListener("click", event => {
            this.save()
            window.location.href = "index.html";
        });

        let btnBack = document.createElement("button");
        btnBack.innerHTML = "Go back";
        btnBack.addEventListener("click", event => {
            window.location.href = "index.html";
        });

        this.formContainer.appendChild(btnSave);
        this.formContainer.appendChild(btnBack);
    }

    getValues(): any {
        let json: any = {};

        // Add key-values to JSON object.
        this.fields.forEach(element => {
            json[element.lblElement.getValue()] = element.getValue();
        });

        return json;
    }

}