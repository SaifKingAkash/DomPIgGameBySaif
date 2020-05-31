var scores, roundScore, activePlayer,gamePlaying ;


GameStart();


document.querySelector(".btn-roll").addEventListener ("click",function(){
    if (gamePlaying){
        diceDiv = Math.random()*6;
        var dice = Math.floor(diceDiv)+1;
        document.querySelector(".dice").style.display="block";
        
        document.querySelector(".dice").src ="dice-"+dice +".png";
        //Update Score
        if(dice !== 1){
            roundScore += dice;
            document.querySelector("#current-"+activePlayer).textContent = roundScore;
            } else {
                //Next Player
                nextPlayer();
            } 
    }
    
    });
document.querySelector(".btn-hold").addEventListener("click",function(){
    //add round score
    if (gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
        //next player
        
        //cheak if win
        if (scores[activePlayer]>=30){
            document.getElementById("name-"+activePlayer).textContent="Winner!";
            document.querySelector(".player-"+activePlayer +"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer +"-panel").classList.remove("active");
            document.querySelector(".dice").style.display="none";
            gamePlaying=false;
        } else{
        nextPlayer();
        }
    }

});
//new game button
document.querySelector(".btn-new").addEventListener("click",function(){
    GameStart();
});



function nextPlayer(){
    activePlayer ===0? activePlayer=1 :activePlayer=0;
    roundScore =0;
    document.getElementById("current-0").textContent="0";
    document.getElementById("current-1").textContent="0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display="none";
};
function GameStart (){
    scores = [0,0]
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector(".dice").style.display="none";
    document.getElementById("score-0").textContent="0";
    document.getElementById("score-1").textContent="0";
    document.getElementById("current-1").textContent="0";
    document.getElementById("current-0").textContent="0";
    document.querySelector("#name-0").textContent="Player 1"
    document.querySelector("#name-1").textContent="Player 2"
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}

/*var diceDiv = Math.random()*2;
var randomPayer = Math.floor(diceDiv);*/


























































































