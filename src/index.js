import checkZipCode from "./chekZipCode";


window.onload = () => {
    document.getElementById("country").onchange = checkZipCode;
    document.getElementById("zipCode").oninput = checkZipCode;
  };
  

const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
// const country = document.querySelector('#country');
// const zipCode = document.querySelector('#zipCode');
// const password = document.querySelector('#password');
// const confirm = document.querySelector('#confirm');
// const submitButton = document.querySelector('#submit');


email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
    
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showError();
    // prevent form submission
    event.preventDefault();
  }
});

const showError = function () {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  }  if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address. yahoo";
  } else  if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}