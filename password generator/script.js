let passwordLength = Number(prompt("Enter password length:"));

while (isNaN(passwordLength) || passwordLength < 1 || passwordLength % 1 !== 0) {
    passwordLength = Number(prompt("Please enter a valid password length (positive whole number):"));
}

let includeLowercase = confirm("Include lowercase letters? (yes/no)");
let includeUppercase = confirm("Include uppercase letters? (yes/no)");
let includeNumbers = confirm("Include numbers? (yes/no)");
let includeSymbols = confirm("Include symbols? (yes/no)");

if (includeLowercase === true || includeUppercase === true || includeNumbers === true || includeSymbols === true) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "~`!@#$%^&*()_-+=}]{[|\:;'<,>.?/"
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase === true ? lowercaseChars : "";
    allowedChars += includeUppercase === true ? uppercaseChars : "";
    allowedChars += includeNumbers === true ? numberChars : "";
    allowedChars += includeSymbols === true ? symbolChars : "";

    if (allowedChars.length === 0) {
        alert("At least one set of characters must be selected.");
    } 
    
    else {
        for (let i = 0; i < passwordLength; i++) {
            const randIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randIndex];
        }

        alert(`Generated password: ${password}`);
    }
} 

else {
    alert("At least one set of characters must be selected.");
}
