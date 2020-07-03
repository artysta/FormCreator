import { DataStorage } from "./DataStorage"

export class LocStorage implements DataStorage {
    saveDocument(values: any): string {
        let timestamp: string = Date.now().toString();
        let key = "document-" + timestamp;

        // Add ID to the document.
        values["Document ID:"] = timestamp;

        let jsonString: string = JSON.stringify(values);
        localStorage.setItem(key, jsonString);

        return timestamp;
    }

    /**
     * @param documentID  ID of document that should be loaded from local storage.
     * @returns  JSON that consists of 
     */
    loadDocument(documentID: string): object {
        return JSON.parse(localStorage.getItem(documentID));
    }

    /**
     * @param documentID  ID of document that should be removed from local storage.
     */
    removeDocument(documentID: string): void {
        localStorage.removeItem(documentID);
    }

    /**
     * @returns  List that consists of all document IDs from local storage.
     */
    getDocuments(): string[] {
        let documentIDs: string[] = new Array();

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
        
            // Push only keys that starts with "document".
            if (key.startsWith("document")) {
                documentIDs.push(localStorage.key(i));
            }                                                        
        }
        
        return documentIDs;
    }
}   