import { Field } from './interfaces/Field';
import { LocStorage } from './LocStorage';

export class Form {
    fields: Field[];
    formContainer: HTMLElement;
    formID: string;

    /**
     * @param fields  The array of elements that the form should consist of.
     */

    constructor(formID: string, fields: Field[]) {
        //this.formContainer = document.getElementById(containerId);
        this.formID = formID;
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

    render(): HTMLElement {
        let table = document.createElement("table");
        // Table row for every label-element.
        this.fields.forEach(element => {
            let tr = document.createElement("tr");
            let tdLbl = document.createElement("td");
            let tdElement = document.createElement("td");

            tdLbl.appendChild(element.lblElement.render());
            tdElement.appendChild(element.render());
            tr.appendChild(tdLbl);
            tr.appendChild(tdElement);
            table.appendChild(tr);
        });

        let btnSave = document.createElement("button");
        btnSave.innerHTML = "Save this document";

        btnSave.classList.add("btn");
        btnSave.classList.add("btn-success");
        
        btnSave.addEventListener("click", event => {
            this.save()
            window.location.href = "index.html";
        });

        let btnBack = document.createElement("button");
        btnBack.innerHTML = "Go back";

        btnBack.classList.add("btn");
        btnBack.classList.add("btn-danger");

        btnBack.addEventListener("click", event => {
            window.location.href = "index.html";
        });

        // Table row for buttons.
        let tr = document.createElement("tr");
        let tdSave = document.createElement("td");
        let tdBack = document.createElement("td");

        tdSave.appendChild(btnSave);
        tdBack.appendChild(btnBack);

        tr.appendChild(tdSave);
        tr.appendChild(tdBack);

        table.appendChild(tr);

        return table;
    }

    getValues(): any {
        let json: any = {};

        // Add key-values to JSON object.
        this.fields.forEach(element => {
            json[element.lblElement.getValue()] = element.getValue();
        });

        json["formID"] = this.formID;

        return json;
    }

}