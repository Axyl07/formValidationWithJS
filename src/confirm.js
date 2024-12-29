export default function confirm() {
    const passwordInput = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm');
    const confirmError = document.querySelector('#confirmError');
    if (confirmPassword.value!=passwordInput.value) {
        passwordInput.setCustomValidity("Passwords Don't match");
        confirmError.textContent = "Passwords Don't match";
    } else {
        passwordInput.setCustomValidity("");
        confirmError.textContent = "";
    }
}