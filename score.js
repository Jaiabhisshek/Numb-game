// Iteration 8: Making scoreboard functional
let scoreboard = document.getElementById("score-board")

scoreboard.innerText = localStorage.getItem ("total")

let playAgain = document.getElementById("play-again-button") 

playAgain.onclick=function(){
    location.href="index.html"
}