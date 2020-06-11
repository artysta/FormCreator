import { InputField } from "./InputField";

let hello: string = "Hello World!</br>";
document.body.innerHTML = hello;

let field: InputField = new InputField("input", "Name:");
document.body.appendChild(field.lblElement.render());
document.body.appendChild(field.render());