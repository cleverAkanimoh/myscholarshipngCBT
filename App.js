import Countries from "./modules/Countries.js";
import Weekdays from "./modules/Weekdays.js";
import NavFixed from "./modules/NavFixed.js";
import HandleSubmit from "./modules/HandleSubmit.js";
import WordCount from "./modules/WordCount.js";

const logos = document.querySelectorAll('.logo');
const textarea = document.getElementById('essay');
const registrationForm = document.getElementById('registration-form')
const holding = document.getElementById('holding')

function modulesLoad(){
    // window.onscroll = NavFixed;
    registrationForm.onsubmit = HandleSubmit;
    textarea.oninput = WordCount;
    Countries.forEach(country => {
        console.log(country.name);
        const countrySelect = document.getElementById('country');
        countrySelect.innerHTML = `<option value="select">select nationality</option>
        <option value="${country.name}">${country.name}</option>`
    });
}
window.addEventListener('DOMContentLoaded', modulesLoad)

// logo refresh event
logos.forEach(logo => logo.onclick = () => window.location.reload())

// nationality select


// countdown