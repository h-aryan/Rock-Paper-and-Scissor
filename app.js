let playerScore = 0;
let computerScore = 0;
const player = document.querySelector(".plscore");
const computer = document.querySelector(".compScore");
const result = document.querySelector(".res");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const playAgain = document.querySelector(".play-again");
const button = document.querySelector(".play-again");

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissor.addEventListener("click", () => play("scissor"));
playAgain.addEventListener("click", () => reset);

function play(playerSelect){
    if(playerScore >= 3 || computerScore >=3){
        return;
    }
    let computerSelect = comp();
    if((playerSelect == "rock" && computerSelect == "paper") || 
    (playerSelect == "paper" && computerSelect == "scissor") ||
    (playerSelect == "scissor" && computerSelect == "rock")){
        computerScore++;
        computer.textContent = computerScore;
        result.textContent = `You played ${playerSelect} and Computer played ${computerSelect}. You Lost!`;
    }

    else if(playerSelect != computerSelect){
        playerScore++;
        player.textContent = playerScore;
        result.textContent = `You played ${playerSelect} and Computer played ${computerSelect}. You Win!`;
    }

    else{
        result.textContent = `You played ${playerSelect} and Computer played ${computerSelect}. It's a Tie`;
    }

    if (playerScore === 3 || computerScore === 3) {
        if (playerScore > computerScore) {
            result.textContent = "You won the Match!";
        } else {
            result.textContent = "You lost the Match!";
        }
        checkGame();
    }
}

function comp(){
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    player.textContent = playerScore;
    computer.textContent = computerScore;
    result.textContent="";
    button.style.display = "none";
}

function checkGame(){
    if(playerScore === 3 || computerScore === 3) {
        button.style.display = "flex";
    }
}
