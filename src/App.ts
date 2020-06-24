import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
import { Form } from "./Form";
import { Field } from "./Field";
import { CheckboxField } from "./CheckboxField";

let hello: string = "Hello World!</br>";
document.body.innerHTML = hello;

let inputName: InputField = new InputField("input", "Name:");
let inputCity: InputField = new InputField("input", "City:");
let selectLanguages: SelectField = new SelectField("select", "Favorite language:", ["Java", "Python", "C#", "TypeScript"]);
let checkBox: CheckboxField = new CheckboxField("checkbox", "Do you like e-learning?");

let array: Array<Field> = [inputName, inputCity, selectLanguages, checkBox];

let form: Form = new Form("body", array);

form.render();