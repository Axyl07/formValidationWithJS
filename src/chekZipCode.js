export default function checkZipCode() {
  const constraints = {
    USA: [
      "^(U-)?\\d{5}$",
      "US postal codes must have exactly 5 digits: e.g. U-75012 or 75012",
    ],
    India: [
      "^(I-)?\\d{6}$",
      "Indian postal codes must have exactly 6 digits: e.g. I-75012 or 750125",
    ],
    Japan: [
      "^(J-)?\\d{7}$",
      "Japanese postal codes must have exactly 7 digits: e.g. J-75012 or 7500012",
    ],
  };
    const country = document.getElementById('country').value;
    const zipCode = document.querySelector('#zipCode');
    const zipError = document.querySelector('#zipError');
    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);
    if (constraint.test(zipCode.value)) {
        zipCode.setCustomValidity("");
        zipError.textContent = ""
    } else {
        zipCode.setCustomValidity(constraints[country][1]);
        zipError.textContent = constraints[country][1];
    }
}
