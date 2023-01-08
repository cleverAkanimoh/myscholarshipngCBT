import displayAlert from "./DisplayAlert.js";

const inputFields = document.querySelectorAll('.form-div input')
console.log(inputFields);

export default function HandleSumbit(e) {
    inputFields.forEach(field => {
        if (field.value === "") {
            e.preventDefault();
            displayAlert('please ensure all input fields are filled')
        }
    })
}