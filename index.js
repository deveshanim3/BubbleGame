function makeBubble(){
    var clutter=``;
    for(var i=1;i<=102;i++){
        var rn=Math.floor(Math.random()*(10-1)+1)
        clutter+=`<div class="bubble">${rn}</div>`
    }
    document.querySelector('#btm').innerHTML=clutter;
}

var timer=60;
function clock(){
    setInterval(()=>{
        timer--;
        if(timer<0)return ;
        document.querySelector('#timer').textContent=timer;
    },1000)
}

function getNewHit(){
    var newHit=Math.floor(Math.random()*(10-1)+1);
    document.querySelector('#hit').textContent=newHit;

}

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector('#score').textContent=score;
}


clock()
getNewHit()
makeBubble()