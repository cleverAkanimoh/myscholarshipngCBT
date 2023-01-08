const logos = document.querySelectorAll('.logo');
const alert = document.querySelector('.alert');

function displayAlert(txt) {
    alert.textContent = txt;
    setTimeout(() => {
        alert.classList.add("alert-display")
    })
}

// logo refresh event
logos.forEach(logo => logo.onclick = () =>  window.location.reload())

// handling form submission

const registrationForm = document.getElementById('registration-form')
const inputFields = document.querySelectorAll('.form-div input')
console.log(inputFields);

function HandleSumbit(e) {
inputFields.forEach(field => {
    if (field.value === "") {
        e.preventDefault();
        displayAlert('please ensure all input fields are filled')
    }
})
}

registrationForm.onsubmit = HandleSumbit