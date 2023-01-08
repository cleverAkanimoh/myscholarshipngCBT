const logos = document.querySelectorAll('.logo');
const alert = document.querySelector('.alert');
const nav = document.querySelector('nav');
const textarea = document.getElementById('essay');
const wordCountDisplay = document.getElementById('count');
const hearAbout = document.getElementById('information');

function NavFixed() {
    const height = nav.clientHeight;
    const scrollHeight = nav.getBoundingClientRect().top

    if (scrollHeight === 0) {
        nav.classList.remove("nav-fixed")
    } else {
        nav.classList.add("nav-fixed")
    }
}
window.onscroll = NavFixed;

function displayAlert(txt) {
    alert.textContent = txt;
    alert.classList.add("alert-display")
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove("alert-display")
    }, 7000)
}

// logo refresh event
logos.forEach(logo => logo.onclick = () => window.location.reload())

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
registrationForm.onsubmit = HandleSumbit;

function WordCount() {
    let textareaValue = textarea.value.trim().split(" ");
    let wordLength = textareaValue.length;
    let wordLengthDiff = 150 - textareaValue.length;
    wordCountDisplay.innerHTML = `you have ${wordLengthDiff} ${wordLength === 1 ? 'word' : "words"} left`;
    if (wordLengthDiff === 0) {
        textarea.disabled = true;
        hearAbout.focus();
    } else if (wordLength < 10) {
        textarea.focus()
        wordCountDisplay.textContent = 'Please enter atleast 10 words';
    } else if (textareaValue[0] == "") {
        wordCountDisplay.textContent = "";
        wordLength = 0;
    }
    console.log(textareaValue[0]);
}
textarea.oninput = WordCount;