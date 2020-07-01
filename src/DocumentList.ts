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
     * @returns  Table (HTMLElement) that contains all documents.
     */
    render(): HTMLElement {
        let table = document.createElement("table");

        this.documents.forEach(currentDoc => {
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
        });

        

        return table;
    }
}