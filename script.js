let userScore = 0
let computerScore = 0
let user = document.querySelector("#you-score")
let computer = document.querySelector("#computer-score")
let msg = document.querySelector(".status")

const genCompChoice = ()=>{
  const options = ["rock", "paper", "scissors"]
  const index = Math.floor(Math.random()*3)
  return options[index]
}
const play = ((userChoice)=>{
  const computerChoice = genCompChoice()
  console.log("User choice is : ",userChoice)
  console.log("Computer choice is :", computerChoice)
  document.getElementById(computerChoice).classList.add('comp')
  if(userChoice === computerChoice){
    msg.innerHTML = "Game was drawn"
    console.log("Game was drawn")
  }
  else if ((userChoice == "rock" && computerChoice == "scissors") ||
             (userChoice == "paper" && computerChoice == "rock") ||
             (userChoice == "scissors" && computerChoice == "paper")) {
    userScore++;
    user.innerHTML = userScore;
    computer.innerHTML = computerScore;
    msg.innerHTML = "You win!";
    console.log("You win!");
  }
  else{
    computerScore++
    user.innerHTML = ( userScore)
    computer.innerHTML=(computerScore)
    console.log("Computer won")
    msg.innerHTML = "You loose!"
  }
  console.log("User score is: ",userScore)
  console.log("Computer score is: ",computerScore)
  
  setTimeout(() => {
    document.getElementById(computerChoice).classList.remove('comp');
  }, 1000) // 1 second delay, adjust as needed

})

let choices = document.querySelectorAll(".choice")
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{

    const userChoice = choice.getAttribute("id")
    play(userChoice)

  })
})
console.log(userChoice+'')