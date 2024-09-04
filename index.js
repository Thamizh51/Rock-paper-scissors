//game starting

     let playerValue = prompt("Enter your choice");

//getting player choice

if(playerValue){

//here formatting the player choice and checking the player choice 

     let playerChoice = playerValue.trim().toLowerCase();
    
//creating the computer choice

if(playerChoice==="paper" || playerChoice ==="rock" || playerChoice==="scissor"){

     let  ComputerValue = Math.floor(Math.random()*3);
     let computerChoice = ComputerValue===1 ? "rock" : ComputerValue===2?"paper" : "scissor";

//determining the result

if(computerChoice){
     const result = computerChoice===playerChoice ? 'Tie Game' : computerChoice==="paper" && playerChoice==="rock" ?  " computer Wins" : computerChoice==="scissor" && playerChoice==="paper" ?  "Computer Wins" :computerChoice==="rock" && playerChoice==="scissor" ?"Computer Wins" : "Player Wins";

//play again option

     const replay=confirm(result);

 if(replay){
    
     let playagain= confirm("Are you want to play again");
     playagain ? location.reload(playerChoice) : alert("Byeee");

}else{
    alert("Ok see you next time");
}
}
}else{
    alert("you entered the wrong value");
}
}else{
    alert("Maybe Next time");
}
