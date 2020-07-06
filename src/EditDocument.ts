import './styles/styles.scss';
import { Router } from "./Router";
import { DocumentList } from "./DocumentList";
import { FormCreator } from "./FormCreator";
import { Form } from "./Form";

let documentID: string = "document-" + Router.getParam("id");
let header = document.getElementById("header");

header.innerHTML = "#TODO</br></br> You are editing a document with ID: " + documentID;

let list: DocumentList = new DocumentList();
let documentToEdit: any = list.getDocument(documentID);
let table = document.createElement("table");

/*
for (let key in documentToEdit) {
    console.log(key + " " + documentToEdit[key]);

    let tr = document.createElement("tr");
    let tdKey = document.createElement("td");
    let tdValue = document.createElement("td");

    tdKey.innerHTML = key;
    tdValue.innerHTML = documentToEdit[key];

    tr.appendChild(tdKey);
    tr.appendChild(tdValue);
    table.appendChild(tr);
}
*/

let div = document.getElementById("document-div");

div.appendChild(table);

let creator: FormCreator = new FormCreator();
let form: Form = creator.newForm(documentToEdit.formID);
let container = document.getElementById("form-container");

container.appendChild(form.render());