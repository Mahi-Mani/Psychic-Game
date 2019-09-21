var wins=0;
var losses=0;
var guessLeft=9;
var userGuessArr=[];
var userInput;
//var compGuessArr=[];
var str = "abcdefghijklmnopqrstuvwxyz";
var result='';
displayWins();
displayLoss();
displayGuessLeft();
userEnterValue();
//computer guess
var computerGuess = str[Math.floor(Math.random() * str.length)];
//compGuessArr.push(computerGuess);
console.log("Computer array:"+computerGuess);
function displayWins() {
    document.getElementById("wins").innerHTML = wins;
}
function displayLoss() {
    document.getElementById("losses").innerHTML = losses;
}
function displayGuessLeft() {
    document.getElementById("guessLeft").innerHTML = guessLeft;
}

//user enters character
function userEnterValue(){
var input = document.getElementById("input");
document.onkeydown = function(event) {
    userGuess=event.key;
    if(userGuessArr.includes(userGuess)){
        alert("Already guessed ! Try different character !");
        userInput = "";
    }
    else if(str.includes(userGuess)){
    userGuessArr.push(userGuess);
    userInput = userGuessArr.join(" , ");
    document.getElementById("userInput").innerHTML = userInput;
    console.log("join: "+userInput);
    console.log("User array : " + userGuessArr);
    }
    else{
        alert("Not an appropriate key !");   
        userInput = ""; 
    }
    play(userGuess);
}
}

function play(userGuess)
{
if(userGuess == computerGuess){
    wins  = wins + 1;
    populateWins(wins);
    reset();
    console.log("wins");
}
else if(guessLeft==1){
    losses = losses + 1;
    populateLosses(losses);
    reset();
}
else{
    if(userInput != ""){
    guessLeft = guessLeft - 1;
    displayGuessLeft();
    }
}
}

function populateWins(wins){
    document.getElementById("wins").innerHTML = wins;
}
function populateLosses(losses){
    document.getElementById("losses").innerHTML = losses;
}
function reset(){
    userGuessArr = [];
    guessLeft = 9;
    computerGuess = str[Math.floor(Math.random() * str.length)];
    console.log("Computer array after reset:"+computerGuess);
    displayWins();
    displayLoss();
    displayGuessLeft();
    document.getElementById("userInput").innerHTML = userGuessArr;


}


