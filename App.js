const logos = document.querySelectorAll('.logo');

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
        alert()
    }
})
}

registrationForm.onsubmit = HandleSumbit