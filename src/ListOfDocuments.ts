import './styles/styles.scss';
import { DocumentList } from "./DocumentList";

let documentList: DocumentList = new DocumentList();
documentList.getDocumentList();

if (documentList.documents.length < 1)
    document.getElementById("header").innerHTML = "There are no documents, but you can <a href='form-list.html'>fill existing form</a>.";

document.getElementById("list").appendChild(documentList.render());
