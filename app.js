function getComputerChoice(){
    let number = Math.floor(Math.random() * 10);
    if (number === 0){
         number += Math.floor(Math.random() * 10);
    }

    if (number <= 3) {
        return "Rock";
    } else if (number >=7) {
        return "Scissors";
    } else{
        return "Paper";
    }   
}


function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?").toUpperCase();

    if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS"){
        return choice;
    } else {
        alert("Please enter a valid choice");
    }
}

 


function playGame(){
    let totalGame = 0;     
    let humanScore = 0;
    let computerScore = 0;

    function playRound(human, computer){
        switch (human) {
            case "ROCK":
                if (computer === "SCISSORS") {
                    console.log(`You Win! ${human} beats ${computer}`);
                    humanScore += 1;
                } else if (computer === "PAPER"){
                    console.log(`You Lose! ${computer} beats ${human}`);
                    computerScore += 1;
                } else {
                    console.log(`It's a draw between ${human} & ${computer}!`);

                }
                break;
            
            case "PAPER":
                if (computer === "ROCK") {
                    console.log(`You Win! ${human} beats ${computer}`);
                    humanScore += 1;
                } else if (computer === "SCISSORS"){
                    console.log(`You Lose! ${computer} beats ${human}`);
                    computerScore += 1;
                } else {
                    console.log(`It's a draw between ${human} & ${computer}!`);
                }
                break;
            
            case "SCISSORS":
                if (computer === "PAPER") {
                    console.log(`You Win! ${human} beats ${computer}`);
                    humanScore += 1;
                } else if (computer === "ROCK"){
                    console.log(`You Lose! ${computer} beats ${human}`);
                    computerScore += 1;
                } else {
                    console.log(`It's a draw between ${human} & ${computer}!`);
                }
                break;
        
            default:
                break;
        }
    }

    while (totalGame<5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice().toUpperCase();  
        playRound(humanSelection, computerSelection);
        totalGame += 1;
    }
    
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
    
}

playGame();