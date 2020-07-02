import './styles/styles.scss';
import { Router } from "./Router";
import { DocumentList } from "./DocumentList";

let documentID: string = Router.getParam("id");

let header = document.getElementById("header");

header.innerHTML = "You are editing a document with ID: " + documentID;

let list: DocumentList = new DocumentList();
let documentToEdit: any = list.getDocument(documentID);
let table = document.createElement("table");

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

let div = document.getElementById("document-div");

div.appendChild(table);