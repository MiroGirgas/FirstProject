/* User choice
Comuputer choice
Porovnanie User vs. Comuputer
Zobrazit vysledky

ULOHA = Hodit to na GITHUB*/

function getUserChoice (userInput){  
userInput = userInput.toLowerCase()  
if ((userInput ==="rock") || (userInput ==="scissor") || (userInput ==="paper")){
return userInput 
}
else throw new Error('Neocakavana hodnota');  // generates an error object with the message of Required
}

//console.log (getUserChoice("rock"))
//----------------------------------------------------------------------------------------------------------------
function getComputerChoice (){
  let random = getRandomInt(3)
  if (random === 0){
    return 'rock'
  }
  else if (random === 1){
    return 'scissor'
  }
  else if (random === 2){
    return 'paper'
  } 
 
}
//console.log (getComputerChoice())
//----------------------------------------------
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//----------------------------------------------
function determineWinner (userChoice, computerChoice){
console.log ('User vybral: ', userChoice)
console.log ('PC vybral: ', computerChoice)
if (userChoice === computerChoice){
  return 'tie'
}
if (((userChoice === 'rock') && (computerChoice === 'scissor'))|| ((userChoice === 'scissor') && (computerChoice === 'paper'))||((userChoice === 'paper') && (computerChoice === 'rock'))){
  return 'User Won'
}
else {
  return 'PC Won'
}
} 

console.log (determineWinner(getUserChoice('scissor'), getComputerChoice()))
//---------------------------------------------------------