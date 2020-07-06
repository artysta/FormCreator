import './styles/styles.scss';
import { FormCreator } from "./FormCreator";

let creator = new FormCreator();

let div = document.getElementById("form-container");

div.appendChild(creator.render());