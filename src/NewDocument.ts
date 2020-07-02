import './styles/styles.scss';
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { CheckboxField } from "./CheckboxField";
import { Field } from "./Field";
import { Form } from "./Form";

console.log("Hello - New document!");

let inputName: InputField = new InputField("input", "Name:");
let inputCity: InputField = new InputField("input", "City:");
let selectLanguages: SelectField = new SelectField("select", "Favorite language:", ["Java", "Python", "C#", "TypeScript"]);
let checkBox: CheckboxField = new CheckboxField("checkbox", "Do you like e-learning?");

let array: Array<Field> = [inputName, inputCity, selectLanguages, checkBox];

let form: Form = new Form("form-container", array);

form.render();