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
const articleContainer = document.getElementById('container-article');


// logo refresh event
logos.forEach(logo => logo.onclick = () => window.location.reload())

function modulesLoad() {
    // window.onscroll = NavFixed;
    registrationForm.onsubmit = HandleSubmit;
    textarea.oninput = WordCount;
    firstName.oninput = CreateUserID;
    getRemainingTime();
    NationalityDrop()
}
window.addEventListener('DOMContentLoaded', modulesLoad, false);

// nationality

function NationalityDrop() {
    let countrySelect = document.getElementById('country');
    let optionsEl = document.createElement('option');
    Countries.forEach(country => {
        optionsEl.value = `${country.name}`;
        optionsEl.textContent = `${country.name}`;
    });
    countrySelect.appendChild(optionsEl)
    console.log(country);
}

// countdown

let d = new Date(2023, 0, 11, 11, 7);
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDay();
const date = d.getDate();
const hour = d.getHours();
const min = d.getMinutes();

holding.textContent = `the scholarship test will hold on ${Weekdays[day]}, ${date} ${Months[month]} ${year}, ${hour > 9 ? "" : "0"}${hour}:${min > 9 ? "" : "0"}${min}`;

// future time in milliseconds

let futureTime = d.getTime();
let interval = setInterval(getRemainingTime, 1000);
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

    // display values in countdown timer

    countdown.textContent = `registration for the scholarship test ends in ${daysLeft > 9 ? daysLeft : '0' + daysLeft}${daysLeft ? 'days' : "day"} ${hoursLeft > 9 ? hoursLeft : '0' + hoursLeft}${hoursLeft ? 'hours' : "hour"} ${minutesLeft > 9 ? minutesLeft : '0' + minutesLeft}${minutesLeft ? 'minutes' : "minute"} and ${secondsLeft > 9 ? secondsLeft : '0' + secondsLeft} ${secondsLeft ? 'seconds' : "second"}`;

    if (timeDiffBtweenNowAndFuture < 0) {
        testStart()
    }
};

function testStart() {
    const loginFormHtml = `
                <!-- login form -->
    <h2>welcome to our <span>CBT</span> platform</h2>
    <h4 id="holding"></h4>

    <form action="#" id="login-form">
    <div class="form-div" class="span-two">
    <label for="userID" class="label">userID</label>
    <aside id="userID-aside">
        <i class="bi bi-person-vcard"></i>
        <input type="text" id="userID" name="login_userID" placeholder="Enter userID Here..." />
    </aside>
    </div>

    <button class="loginBtn span-two">
        <i class="bi bi-box-arrow-in-up-right"></i>
  </button>
    </form>`;
    
    clearInterval(interval);
    articleContainer.innerHTML = loginFormHtml;
    countdown.textContent = `the scholarship test registration ended on ${Weekdays[day]}, ${date} ${Months[month]} ${year}, ${hour}:${min}${min > 9 ? "" : "0"}`;
    const loginForm = document.getElementById('login-form');
    loginForm.onsubmit = loginHandleSubmit;
    holding.textContent = 'please enter your userID to start your test';
}

function loginHandleSubmit(e) {
    e.preventDefault();
    console.log('working well');
}