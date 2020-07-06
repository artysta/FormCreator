import { LocStorage } from "./LocStorage";

export class FormList {
    forms: any[];

    constructor() {
        this.forms = new Array();
    }

    /**
     * Load all forms from the local storage and save these to the array.
     */
    getFormList(): void {
        let storage: LocStorage = new LocStorage();
        let formJSONs: string[] = storage.getForms();

        formJSONs.forEach(formID => {
            let currentForm: any = storage.loadForm(formID);
            this.forms.push(currentForm);
        });
    }

    /**
     * @param formID  ID of form that should be removed using LocStorage class.
     */
    removeForm(formID: string): void {
        let storage: LocStorage = new LocStorage();
        storage.removeForm(formID);

        // Reload page after removing form.
        window.location.reload();
    }

    /**
     * @param formID  ID of document that should be returned.
     * @returns  Document (JSON)
     */
    getForm(formID: string): object {
        let storage: LocStorage = new LocStorage();
        let document = storage.loadDocument(formID);

        return document;
    }

    /**
     * @returns  Table (HTMLElement) that contains all forms.
     */
    render(): HTMLElement {
        let table = document.createElement("table");

        // Iterate through all forms.
        this.forms.forEach(currentForm => {
            // Iterate through JSON (single document) data.
            for (let i = 0; i < currentForm.length - 1; i++) {
                let tr = document.createElement("tr");
                let tdKey = document.createElement("td");
                let tdValue = document.createElement("td");
        
                tdKey.innerHTML = "Type: " + currentForm[i].name;
                tdValue.innerHTML = "Label value: " + currentForm[i].lblElement.value;

                tr.appendChild(tdKey);
                tr.appendChild(tdValue);
                table.appendChild(tr);
            }

            let tr = document.createElement("tr");
            let tdId = document.createElement("td");
            let tdFill = document.createElement("td");
            let btnFill = document.createElement("button");

            let currentFormId = currentForm[currentForm.length - 1].id;

            tdId.innerHTML = "ID: " + currentFormId;

            btnFill.innerHTML = ("Fill this form");

            btnFill.addEventListener("click", event => {
                window.location.href = " new-document.html?id=" + currentFormId;
            });

            let tdRemove = document.createElement("td");
            let btnRemove = document.createElement("button");

            btnRemove.innerHTML = ("Remove this form");

            btnRemove.addEventListener("click", event => {
                this.removeForm(currentFormId);
            });

            tdRemove.appendChild(btnRemove);
            tdFill.appendChild(btnFill);

            tr.appendChild(tdId);
            tr.appendChild(tdFill);
            tr.appendChild(tdRemove);

            table.appendChild(tr);
        });

        return table;
    }
}