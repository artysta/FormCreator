import { LocStorage } from "./LocStorage";

export class DocumentList {
    documents: any[];

    constructor() {
        this.documents = new Array();
    }

    /**
     * Load all documents from the local storage and save these to the array.
     */
    getDocumentList(): void {
        let storage: LocStorage = new LocStorage();
        let documentJSONs: string[] = storage.getDocuments();

        documentJSONs.forEach(documentID => {
            let currentDoc: any = storage.loadDocument(documentID);
            
            // Add documentID to current document JSON.
            currentDoc["Document ID:"] = documentID;
            
            this.documents.push(currentDoc);
        });
    }

    /**
     * @param documentID  ID of document that should be removed using LocStorage class.
     */
    removeDocument(documentID: string): void {
        let storage: LocStorage = new LocStorage();
        storage.removeDocument(documentID);

        // Reload page after removing form.
        window.location.reload();
    }

    /**
     * @param documentID  ID of document that should be returned.
     * @returns  Document (JSON)
     */
    getDocument(documentID: string): object {
        let storage: LocStorage = new LocStorage();
        let document = storage.loadDocument(documentID);

        return document;
    }

    /**
     * @returns  Table (HTMLElement) that contains all documents.
     */
    render(): HTMLElement {
        let table = document.createElement("table");

        // Iterate through all documents.
        this.documents.forEach(currentDoc => {
            // Iterate through JSON (single document) data.
            for (let key in currentDoc) {
                console.log(key + " " + currentDoc[key]);

                let tr = document.createElement("tr");
                let tdKey = document.createElement("td");
                let tdValue = document.createElement("td");
        
                tdKey.innerHTML = key;
                tdValue.innerHTML = currentDoc[key];

                tr.appendChild(tdKey);
                tr.appendChild(tdValue);
                table.appendChild(tr);
            }

            // Add label and button so document can be edited 
            let tr = document.createElement("tr");
            let tdEdit = document.createElement("td");
            let btnEdit = document.createElement("button");

            btnEdit.innerHTML = ("Edit this document");

            btnEdit.addEventListener("click", event => {
                window.location.href = "edit-document.html?id=" + currentDoc["Document ID:"];
            });

            tdEdit.appendChild(btnEdit);
            tr.appendChild(tdEdit);

            // Add label and button so document can be removed. 
            let tdRemove = document.createElement("td");
            let btnRemove = document.createElement("button");

            btnRemove.innerHTML = ("Remove this document");

            btnRemove.addEventListener("click", event => {
                this.removeDocument(currentDoc["Document ID:"]);
            });

            tdRemove.appendChild(btnRemove);
            tr.appendChild(tdRemove);
            table.appendChild(tr);
        });

        return table;
    }
}