// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 


// ===========================================================================================================
var inquirer = require("inquirer");
// set starting health values
var userHealth = 70;
var compHealth = 15;

// basic game play
function gamePlay() {

    inquirer
        .prompt([{
            type: "list",
            message: "Try to stay alive! Guess a number!",
            name: "userguess",
            choices: ["1", "2", "3", "4", "5"]
        }])
        .then(function (inquireResponse) {

            // store userguess as a variable
            var userguess = inquireResponse.userguess;

            // pick random computer guess between 1 and 5
            compGuess = Math.floor(Math.random() * (5 - 1) + 1);
            console.log("");
            console.log("Zombie rolled " + compGuess);

            // random damage
            var damage = Math.floor(Math.random() * (5 - 1) + 1);

            // compare userguess and computer guess
            if (userguess == compGuess) {
                // subtract damage from computer health
                compHealth = compHealth - damage;
                console.log("You hit the zombie with " + damage + " damage");

            } else {
                // subtract random damage from user health

                userHealth = userHealth - damage;
                console.log("Oh no! The Zombie slashed you with " + damage + " damage.");

            }
            console.log("You have " + userHealth + " health left. The Zombie has " + compHealth + " health left.")
            console.log("");
            console.log("==================================================");
            isStillAlive();
        })


}

function isStillAlive() {
    // check to see if user health is greater than 0, is yes then run game play
    if (userHealth > 0 && compHealth > 0) {
        gamePlay()

    } else if (compHealth < 1) {
        // user wins
        console.log("Way to go Zombie slayer!!! You win!!")

    } else if (userHealth < 1) {
        // user loses
        console.log("Oh no!! A zombie ate your brains! Game Over!")
    }
}
gamePlay();