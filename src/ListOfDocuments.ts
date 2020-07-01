import { DocumentList } from "./DocumentList";

let documentList: DocumentList = new DocumentList();

// Temporary solution to avoid error while parsing JSONs from localStorage.
localStorage.removeItem("loglevel:webpack-dev-server");

documentList.getDocumentList();
document.getElementById("list").appendChild(documentList.render());