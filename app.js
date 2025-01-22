const button = document.querySelector("#btns");
button.addEventListener("click", (event) => playRound(getComputerChoice, event));


function getComputerChoice(){
    let number = Math.floor(Math.random() * 10);
    if (number === 0){
         number += Math.floor(Math.random() * 10);
    }

    return "Rock";

    if (number <= 3) {
        return "Rock";
    } else if (number >=7) {
        return "Scissors";
    } else{
        return "Paper";
    }   
}

let humanScore = 0;
let computerScore = 0;
let totalGame = 0;

function playRound(computerChoice, event){

            const humanChoice = event.target;
            const human = humanChoice.id.toUpperCase();
            const computer = computerChoice().toUpperCase();


            switch (human) {
                case "ROCK":
                    if (computer === "SCISSORS") {
                        element.textContent =`You Win! ${human} beats ${computer}`;
                        humanScore += 1;
                    } else if (computer === "PAPER"){
                        element.textContent =`You Lose! ${computer} beats ${human}`;
                        computerScore += 1;
                    } else {
                        element.textContent =`It's a draw between ${human} & ${computer}!`;
    
                    }
                    break;
                
                case "PAPER":
                    if (computer === "ROCK") {
                        element.textContent =`You Win! ${human} beats ${computer}`;
                        humanScore += 1;
                    } else if (computer === "SCISSORS"){
                        element.textContent =`You Lose! ${computer} beats ${human}`;
                        computerScore += 1;
                    } else {
                        element.textContent =`It's a draw between ${human} & ${computer}!`;
                    }
                    break;
                
                case "SCISSORS":
                    if (computer === "PAPER") {
                        element.textContent =`You Win! ${human} beats ${computer}`;
                        humanScore += 1;
                    } else if (computer === "ROCK"){
                        element.textContent =`You Lose! ${computer} beats ${human}`;
                        computerScore += 1;
                    } else {
                        element.textContent =`It's a draw between ${human} & ${computer}!`;
                    }
                    break;
            
                default:
                    break;
            }
            score.textContent = "Human score is: " + humanScore + " & Computer score is: " + computerScore ;
            totalGame += 1;

            if (totalGame == 5) {

                if (humanScore === computerScore) {
                    gameScore.textContent = "It's a draw! Well-played!"
                } else if (humanScore > computerScore) {
                    gameScore.textContent = "HUMAN WINS!";
                } else {
                    gameScore.textContent = "COMPUTER WINS!";
                }

                reset.textContent = "Reset";
                results.appendChild(reset);

                reset.addEventListener("click", () => {
                    humanScore = 0;
                    computerScore = 0;
                    totalGame = 0;
                    element.textContent ="";
                    score.textContent ="";
                    gameScore.textContent="";
                    results.removeChild(reset);
                });   
            }
        }      
        


const results = document.querySelector(".results");
const element = document.createElement("p");
results.appendChild(element);
const score = document.createElement("p");
results.appendChild(score);
const gameScore = document.createElement("p");
results.appendChild(gameScore);
const reset = document.createElement("button");




    
    