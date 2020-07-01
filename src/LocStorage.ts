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
     * @param documentId  ID of document that should be loaded.
     * @returns  JSON that consists of 
     */
    loadDocument(documentId: string): object {
        return JSON.parse(localStorage.getItem(documentId));
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