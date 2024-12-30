
export default function checkPassword() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
    const passwordInput = document.querySelector('#password');
    const passwordError = document.querySelector('#passwordError');
    
    if (passwordRegex.test(passwordInput.value)) {
        passwordInput.setCustomValidity("");
        passwordError.textContent = "";
    } else {
        passwordInput.setCustomValidity("A minimum length of 8 characters, at least one number, one lowercase letter, one uppercase letter, and one special character are required for the password");
        passwordError.textContent = "A minimum length of 8 characters, at least one number, one lowercase letter, one uppercase letter, and one special character are required for the password";
    }
}