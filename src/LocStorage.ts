import { DataStorage } from "./DataStorage"

export class LocStorage implements DataStorage {
    saveDocument(values: any): string {
        let timestamp: string = Date.now().toString();
        let jsonString: string = JSON.stringify(values);

        localStorage.setItem(timestamp, jsonString);

        return timestamp;
        // throw new Error("Method not implemented.");
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

        for (let i = 0; i < localStorage.length; i++)
            documentIDs.push(localStorage.key(i));

        return documentIDs;
    }
}   