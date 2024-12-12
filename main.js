var score=0;
var timer=30;
var newHit;
function makeBubble(){
    var clutter=``;
    for(var i=1;i<=102;i++){
        var rn=Math.floor(Math.random()*(10-1)+1)
        clutter+=`<div class="bubble">${rn}</div>`
    }
    document.querySelector('#btm').innerHTML=clutter;
}

function clock(){
    setInterval(()=>{
        timer--;
        if(timer<0)return ;
        document.querySelector('#timer').textContent=timer;
        if(timer==0){
            window.location.href='score.html';
        }
    },1000)
}

function getNewHit(){
    newHit=Math.floor(Math.random()*(10-1)+1);
    document.querySelector('#hit').textContent=newHit;

}

function increaseScore(){
    score+=10;
    document.querySelector('#score').textContent=score;
}

function decreaseScore(){
    score-=10;
    document.querySelector('#score').textContent=score;
}

clock()
getNewHit()
makeBubble()

document.querySelector('#btm').addEventListener('click',(detail)=>{
    var clickedNum=Number(detail.target.textContent);
    console.log(clickedNum);
    if (newHit===clickedNum) {
        increaseScore()
        getNewHit()
        makeBubble()
    }
    else if(newHit!==clickedNum && clickedNum%1==0){
        decreaseScore()
        getNewHit()
        makeBubble()
    }  
})
