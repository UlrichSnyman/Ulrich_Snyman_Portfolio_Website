
// Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!
// How can you combine line 2 and 3 into one line
// Expand the program to do this in a while loop, only exiting when the guess was correct
// While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.
// When you are done make the secret number random




//Button Click Event
document.getElementById("btnGuess").addEventListener("click", clickFunction); 

function clickFunction() {
    // Generate a random number between 1 and 20 (inclusive)
    const secret = Math.floor(Math.random() * 20) + 1;
    let guess = parseInt(prompt("Please guess the secret number (1-20)"));

    // Keep asking for guesses until the correct number is guessed
    while (guess !== secret) {
        //Validation
        if (guess === NaN || guess === "" || guess < 1 || guess > 20 || guess === null) {
            alert("Please enter a valid number.");
            
        } else if (guess < secret) {
            alert("Incorrect, too low.");
        } else if (guess > secret) {
            alert("Incorrect, too high.");
        }
        guess = parseInt(prompt("Please guess the secret number (1-20)"));
    }

    alert("Correct Guess!");
};
