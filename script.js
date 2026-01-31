let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgConatiner = document.querySelector("#msg-conatiner");
const userScored = document.querySelector("#user-score");
const compScored = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    // Generate computer choice
    let options = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random()*3)
    // *3 = u will get 0-2 random number
    // ex: *10 = u will get 0-9
    //Math.random gives float value with 0.2555, only zero
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "rgb(3, 3, 35)";
};




const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice==="paper" ? false : true;
        }

        else if(userChoice==="paper")
        {
            userWin = compChoice==="scissors" ? false : true;
        }

        else if(userChoice==="scissors")
        {
            userWin = compChoice==="rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
        
        
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
            msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScored.innerText = userScore;
        }
        else{
            msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
            compScore++;
            compScored.innerText = compScore;
        }
};



