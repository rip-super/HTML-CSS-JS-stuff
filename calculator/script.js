const display = document.getElementById("display")
let answer;
displayLength = 0

function appendToDisplay(input) {
    if (displayLength <= 10) {
        if (display.value == "Error") {
            display.value = ""
            display.value += input
        }
        else {
            display.value += input;
        }
        displayLength++
    }
}
    

function clearDisplay() {
    display.value = "";
    displayLength = 0
}

function calculate() {
    try {
        answer = eval(display.value);
        if (answer === Infinity || answer === -Infinity || isNaN(answer)) {
            display.value = "Error"
        }
        else {
            display.value = answer
        }
    }
    catch (error) {
        display.value = "Error";
    }
}