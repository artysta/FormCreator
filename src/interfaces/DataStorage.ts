export interface DataStorage {
    saveDocument(values: any): string;
    loadDocument(documentId: string): any;
    getDocuments(): string[];
}