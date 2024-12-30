import './index.css'
import checkZipCode from "./chekZipCode";
import checkPassword from "./checkPassword";

// window.onload = () => {
//     document.getElementById("country").onchange = checkZipCode;
//     document.getElementById("zipCode").oninput = checkZipCode;
//   };
  
// window.onload = () => {
//     document.getElementById("password").oninput = checkPassword;
// }
// window.onload = () => {
//     document.getElementById("confirm").oninput = confirmCheck;
// }
const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
// const country = document.querySelector('#country');
const zipCode = document.querySelector('#zipCode');
const zipError = document.querySelector('#zipError');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');
const confirmInput = document.querySelector('#confirm');
const confirmError = document.querySelector('#confirmError');
// const submitButton = document.querySelector('#submit');


email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showEmailError();
  }
});


const showEmailError = function () {
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

zipCode.addEventListener('input', () => {
  checkZipCode();
  if (zipCode.validity.valid) {
    zipError.textContent = ""
  } else {
    showZipError();
  }
})

function showZipError() {
  if (zipCode.validity.valueMissing) {
    zipError.textContent = "Enter zipcode please"
  }
}
password.addEventListener('input', () => {
  checkPassword();
  if (password.validity.valid) {
    passwordError.textContent = ""
  } else showPasswordError();
})

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password is mandatory";
  }
}

confirmInput.addEventListener('input', () => {
  if (confirmInput.validity.valid) {
    confirmError.textContent = "";
  }
  if (confirmInput.value === password.value) {
    confirmError.textContent = "Passwords Match"
  } else {
    confirmError.textContent = "Passwords Don't match"
    showEmptyConfirmError();
  }
 
})
function showEmptyConfirmError() {
  if (confirmInput.validity.valueMissing) {
    confirmError.textContent = "Please Enter the same password";
  }
}
form.addEventListener("submit", (event) => {
  console.log('work')
  if (!confirmInput.validity.valid) {
    showEmptyConfirmError();
    event.preventDefault();
  }
  if (!password.validity.valid) {
    showPasswordError();
    event.preventDefault();
  }  
  if (!zipCode.validity.valid) {
      showZipError();
      event.preventDefault();
    }
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showEmailError();
    // prevent form submission
    event.preventDefault();
  }
});