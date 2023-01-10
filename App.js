import Countries from "./modules/Countries.js";
import Weekdays from "./modules/Weekdays.js";
import Months from "./modules/Months.js";
import NavFixed from "./modules/NavFixed.js";
import HandleSubmit from "./modules/HandleSubmit.js";
import WordCount from "./modules/WordCount.js";
import CreateUserID from "./modules/CreateUserID.js";

const logos = document.querySelectorAll('.logo');
const textarea = document.getElementById('essay');
const registrationForm = document.getElementById('registration-form');


// logo refresh event
logos.forEach(logo => logo.onclick = () => window.location.reload())

function modulesLoad() {
    // window.onscroll = NavFixed;
    registrationForm.onsubmit = HandleSubmit;
    textarea.oninput = WordCount;
    firstName.oninput = CreateUserID;
    getRemainingTime();
    Countries.forEach(country => {
        const countrySelect = document.getElementById('country');
        countrySelect.innerHTML = `<option value="select">select nationality</option>
        <option value="${country.name}">${country.name}</option>`
    });
}
window.addEventListener('DOMContentLoaded', modulesLoad)

// countdown

let d = new Date(2023, 2, 11, 14, 0);
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDay();
const date = d.getDate();
const hour = d.getHours();
const min = d.getMinutes();

holding.textContent = `the computer based test will hold on ${Weekdays[day]}, ${date} ${Months[month]} ${year}, ${hour}:${min}${min > 9 ? "" : "0"}`;

// future time in milliseconds

let futureTime = d.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const timeDiffBtweenNowAndFuture = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60mins
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate  values 
    let daysLeft = Math.floor(timeDiffBtweenNowAndFuture / oneDay);
    let hoursLeft = Math.floor((timeDiffBtweenNowAndFuture % oneDay) / oneHour);
    let minutesLeft = Math.floor((timeDiffBtweenNowAndFuture % oneHour) / oneMinute);
    let secondsLeft = Math.floor((timeDiffBtweenNowAndFuture % oneMinute) / 1000);

    // display values in items 

    countdown.textContent = `the scholarship test will commence in ${daysLeft > 9 ? daysLeft : '0' + daysLeft}${daysLeft ? 'days' : "day"} ${hoursLeft > 9 ? hoursLeft : '0' + hoursLeft}${hoursLeft ? 'hours' : "hour"} ${minutesLeft > 9 ? minutesLeft : '0' + minutesLeft}${minutesLeft ? 'minutes' : "minute"} and ${secondsLeft > 9 ? secondsLeft : '0' + secondsLeft} ${secondsLeft ? 'seconds' : "second"}`;

    if (timeDiffBtweenNowAndFuture < 0) {
        clearInterval(interval);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired`;
        giveaway.textContent = `giveaway ended on ${Weekdays[day]}, ${date} ${Months[month]} ${year}, ${hour}:${min}am`;
    }
};
let interval = setInterval(getRemainingTime, 1000);