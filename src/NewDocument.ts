import './styles/styles.scss';
import { Form } from "./Form";
import { FormCreator } from "./FormCreator";
import { Router } from "./Router";

let creator: FormCreator = new FormCreator();
let formID: string = Router.getParam("id");
let form: Form = creator.newForm(formID);
let container = document.getElementById("form-container");

container.appendChild(form.render());