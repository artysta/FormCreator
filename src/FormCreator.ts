import { Field } from "./interfaces/Field";
import { InputField } from "./fields/InputField";
import { CheckboxField } from "./fields/CheckboxField";
import { TextAreaField } from "./fields/TextAreaField";
import { EmailField } from "./fields/EmailField";
import { DateField } from "./fields/DateField";
import { SelectField } from "./fields/SelectField";
import { LocStorage } from "./LocStorage";
import { Form } from "./Form";

export class FormCreator {
    fields: Field[];
    selectOptions: string[]

    constructor() {
        this.fields = new Array();
        this.selectOptions = new Array();
    }

    newForm(formID: string): Form {
        let storage: LocStorage = new LocStorage();
        let json: any = storage.loadForm(formID);
 
        for (let i = 0; i < json.length - 1; i++) {
            let type: string = json[i].name;

            switch (type) {
                case "input":
                    this.fields.push(new InputField(type, json[i].lblElement.value));
                    break;
                case "checkbox":
                    this.fields.push(new CheckboxField(type, json[i].lblElement.value));
                    break;
                case "textarea":
                    this.fields.push(new TextAreaField(type, json[i].lblElement.value));
                    break;
                case "date":
                    this.fields.push(new DateField(type, json[i].lblElement.value));
                    break;
                case "email":
                    this.fields.push(new EmailField(type, json[i].lblElement.value));
                    break;
                case "select":
                    this.fields.push(new SelectField(type, json[i].lblElement.value, json[i].options));
                    break;
                default:
                    break;
            }
        }

        return new Form(formID, this.fields); 
    }

    saveForm() {
        let storage: LocStorage = new LocStorage();
        storage.saveForm(this.fields);
    }

    render(): HTMLElement {
        let table = document.createElement("table");
        let tr = document.createElement("tr");
        let tdLblValue = document.createElement("td");
        let tdSelect = document.createElement("td");

        let input = document.createElement("input");
        input.placeholder = "Label value..." ;

        tdLblValue.appendChild(input);

        tr.appendChild(tdLblValue);

        // Create select and options.
        let select = document.createElement("select");

        let optInput = document.createElement("option");
        optInput.innerHTML = "Input";
        select.appendChild(optInput);

        let optSelect = document.createElement("option");
        optSelect.innerHTML = "Select";
        select.appendChild(optSelect);

        let optCheckbox = document.createElement("option");
        optCheckbox.innerHTML = "Checkbox";
        select.appendChild(optCheckbox);
        
        let optTextArea = document.createElement("option");
        optTextArea.innerHTML = "TextArea";
        select.appendChild(optTextArea);
        
        let optEmail = document.createElement("option");
        optEmail.innerHTML = "Email";
        select.appendChild(optEmail);

        let optDate = document.createElement("option");
        optDate.innerHTML = "Date";
        select.appendChild(optDate);

        // Show values input if the "Select" value is selected.
        select.addEventListener("click", event => {
            if (select.value == "Select") {
                tdSelectValues.style.display = "block";
            } else {
                tdSelectValues.style.display = "none";
            }
        })

        tdSelect.appendChild(select);

        let tdBtnAdd = document.createElement("td");
        let btnAdd = document.createElement("button");
        btnAdd.innerHTML = "Add";
        
        btnAdd.addEventListener("click", event => {
            this.selectOptions = inputValues.value.split(",");

            let tr = document.createElement("tr");
            let tdLbl = document.createElement("td");
            let tdElement = document.createElement("td");

            tdLbl.innerHTML = "Label value: " + input.value;
            tdElement.innerHTML = "Field type: " + select.value;

            let type: string = select.value;

            switch (type) {
                case "Input":
                    this.fields.push(new InputField(select.value.toLowerCase(), input.value));
                    break;
                case "Checkbox":
                    this.fields.push(new CheckboxField(select.value.toLowerCase(), input.value));
                    break;
                case "TextArea":
                    this.fields.push(new TextAreaField(select.value.toLowerCase(), input.value));
                    break;
                case "Email":
                    this.fields.push(new EmailField(select.value.toLowerCase(), input.value));
                    break;
                case "Date":
                    this.fields.push(new DateField(select.value.toLowerCase(), input.value));
                    break;
                case "Select":
                    this.fields.push(new SelectField(select.value.toLowerCase(), input.value, this.selectOptions));
                    break;
                default:
                    break;
            }

            tr.appendChild(tdLbl);
            tr.appendChild(tdElement);

            table.appendChild(tr);
        });

        tdBtnAdd.appendChild(btnAdd);

        let tdBtnSave = document.createElement("td");
        let btnSave = document.createElement("button");

        btnSave.innerHTML = "Save";
        btnSave.addEventListener("click", event => {
            this.saveForm();
            alert("Form saved!");
            window.location.href = "index.html";
        });
        tdBtnSave.appendChild(btnSave);

        let inputValues = document.createElement("input");
        let tdSelectValues = document.createElement("td");
        inputValues.placeholder = "Option 1, option 2...";
        tdSelectValues.style.display = "none";
        tdSelectValues.appendChild(inputValues);

        tr.appendChild(tdSelect);
        tr.appendChild(tdBtnAdd);
        tr.appendChild(tdBtnSave);
        tr.appendChild(tdSelectValues);
        
        table.appendChild(tr);
        return table;
    }

}