const textBox = document.getElementById("textBox");
const convertToF = document.getElementById("convertToF");
const convertToC = document.getElementById("convertToC");
const result = document.getElementById("result");
let temp;

function convert() {
    if (convertToF.checked) {
        start_temp = Number(textBox.value);
        result_temp = (start_temp * (9/5)) + 32;
        result.textContent = `${start_temp}°C is ${result_temp.toFixed(2)}°F`
    }
    else if (convertToC.checked){
        start_temp = Number(textBox.value);
        result_temp = (start_temp -32) * (5/9);
        result.textContent = `${start_temp}°F is ${result_temp.toFixed(2)}°C`
    }
    else {
        result.textContent = "Please select a unit";
    }
}