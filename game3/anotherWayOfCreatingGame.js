
const p1ScoreDisplay=document.getElementById('p1Score');
const p2ScoreDisplay=document.getElementById('p2Score');
const winingScoreDisplay=document.querySelector('p span')
const inputScore=document.getElementById('inputScore')
const p1Btn=document.getElementById('p1Btn')
const p2Btn=document.getElementById('p2Btn')
const reset=document.getElementById('resetBtn')

let p1Score=0;
let p2Score=0;
let winingScore=5; 
let gameOver=false;

function winner(oldScore,winingScore) {
    //game over
    if (oldScore===winingScore) {
        if (p1Score===winingScore) {
        p1ScoreDisplay.classList.add('winner')
        }else{
        p2ScoreDisplay.classList.add('winner')
        }
        gameOver=true;
        console.log('Game over');    
    p1Btn.setAttribute('disabled','disabled');
    p2Btn.setAttribute('disabled','disabled');
        }
}
function resetGame(){
    p1Score=0;
    p2Score=0;
    gameOver=false;
    p1ScoreDisplay.textContent=0;
    p2ScoreDisplay.textContent=0;
    p1Btn.removeAttribute('disabled')
    p2Btn.removeAttribute('disabled')
    p1ScoreDisplay.classList.remove('winner')
    p2ScoreDisplay.classList.remove('winner')

}
p1Btn.addEventListener('click',()=>{
   if(!gameOver){
        //Data change-programming
    p1Score++;
    winner(p1Score,winingScore)
    //Show change data -DOM
    p1ScoreDisplay.textContent=p1Score;
   }
})
p2Btn.addEventListener('click',()=>{
    if (!gameOver) {
    //Data change-programming
    p2Score++;
    winner(p2Score,winingScore)
    //Show change data -DOM
    p2ScoreDisplay.textContent=p2Score;
    }
})

inputScore.addEventListener('change',()=>{
    console.log(typeof inputScore.value);
    
    winingScoreDisplay.textContent=inputScore.value;
    winingScore=Number(inputScore.value);
    inputScore.value='';
    resetGame();
})

resetBtn.addEventListener('click',resetGame)


