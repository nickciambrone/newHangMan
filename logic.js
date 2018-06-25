//Global variables
$(document).ready(function() {
var winCount=0;
var lossCount=0;
var guessesLeft;
var incorrectGuesses=[];
var guessesAndUnderscores=[];
var wordToGuess;
var words = ["lebron james", "jimmy butler", "stephen curry", "anthony davis", "kyrie irving", "james harden", "kawhi leonard", "ben simmons", "victor oladipo", "giannis antetokounmpo", "john wall", "chris paul", "damian lillard","donovan mitchell","russell westbrook", "kristaps porzingis", "klay thompson", "kevin durant", "draymond green", "jayson tatum", "karl-anthony towns", "andrew wiggins", "michael jordan", "larry bird", "magic johnson", "kobe bryant"];

//******************************************************************************************************************/

//functions

function start(){
    guessesAndUnderscores=[]
    word=words[Math.floor(Math.random()*words.length)];
    console.log(words)
    wordToGuess=word.split("")
    console.log(wordToGuess)
    guessesLeft=9;
    for (var i=0; i<wordToGuess.length;i++){
    if (wordToGuess[i]!=" "){
    guessesAndUnderscores.push("_");
    }
    if (wordToGuess[i]==" "){
    guessesAndUnderscores[i]="<br>"
    }
   console.log(guessesAndUnderscores)
    $("#guessesAndUnderscores").html(guessesAndUnderscores.join(" "))
    incorrectGuesses=[]
    $("#incorrectGuesses").html(incorrectGuesses)
    $("#winCount").html(winCount)
    $("#lossCount").html(lossCount)
    $("#guessesLeft").html(guessesLeft)
}

}
//******************************************************************************************************************/

//in-game logic
start()

document.onkeydown=function(event){
    event=event.key
    console.log(event)
    for (var i=0;i<wordToGuess.length;i++){
    if (wordToGuess[i]==event && wordToGuess[i]!= " "){
        guessesAndUnderscores[i]=event;
        console.log(guessesAndUnderscores)
    }
  
}
if (wordToGuess.indexOf(event)==-1 && incorrectGuesses.indexOf(event)==-1){
       incorrectGuesses+=event
       $("#incorrectGuesses").html(incorrectGuesses)
       guessesLeft--
       $("#guessesLeft").html(guessesLeft)
}
if (guessesLeft==0){
    alert ("You Lose! The player was "+word)
    lossCount++
    start()
}
console.log(guessesAndUnderscores)
console.log(wordToGuess)

if (guessesAndUnderscores.indexOf("_")==-1){
    alert ("You Win! The player was "+word)
    winCount++
    start()
}
$("#guessesAndUnderscores").html(guessesAndUnderscores.join(" "))
}


})
