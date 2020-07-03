import './styles/styles.scss';
import { DocumentList } from "./DocumentList";

let documentList: DocumentList = new DocumentList();
documentList.getDocumentList();
document.getElementById("list").appendChild(documentList.render());