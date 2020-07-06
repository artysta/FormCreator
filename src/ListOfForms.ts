import './styles/styles.scss';
import { FormList } from "./FormList";

let formList: FormList = new FormList();
formList.getFormList();

if (formList.forms.length < 1)
    document.getElementById("header").innerHTML = "There are no forms! You can <a href='new-form.html'>add new one.</a>";

document.getElementById("list").appendChild(formList.render());