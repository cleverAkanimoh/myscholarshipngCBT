import Countries from "./modules/Countries.js";
// import Weekdays from "./modules/Weekdays.js";
// import NavFixed from "./modules/NavFixed.js";
import HandleSumbit from "./modules/HandleSubmit.js";

const logos = document.querySelectorAll('.logo');


// window.onscroll = NavFixed;

// logo refresh event
logos.forEach(logo => logo.onclick = () => window.location.reload())


// handling form submission
const registrationForm = document.getElementById('registration-form')
registrationForm.onsubmit = HandleSumbit;

// nationality select

Countries.forEach(country => {
    console.log(country.name);
    const countrySelect = document.getElementById('country');
    countrySelect.innerHTML = `<option value="select">select nationality</option>
    <option value="${country.name}">${country.name}</option>`
});

// textarea

textarea.oninput = WordCount;

// countdown