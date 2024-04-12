const minNum = 1;
const maxNum = 1000;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;
let playAgain = false

while (running) {
    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`));
    if (isNaN(guess)) {
        alert("Please enter a vaild number");
    }
    else if (guess < minNum || guess > maxNum) {
        alert(`Please enter a vaild number between ${minNum} and ${maxNum}`);
    }
    else {
        attempts++;
        if (guess < answer) {
            alert("Higher!");
        }
        else if (guess > answer) {
            alert("Lower!");
        }
        else {
            alert(`Congrats! You correctly guessed the number ${answer} in ${attempts} attempts.`)
            running = false
            playAgain = window.prompt("Would you like to play again? (Leave empty for no)")
            if (playAgain) {
                attempts = 0
                answer = answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                running = true
            }
        }
    }

}