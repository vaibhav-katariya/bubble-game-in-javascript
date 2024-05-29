
let rn = 0;
let timer = 60;
let hit = 0;
let score = 0;
let bodyMain = document.querySelector('.body_main');

function bubbleCreate(){
    let bubble = '';

    for(let i=1; i<=90; i++){
        rn = Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${rn}</div>`
    }
    bodyMain.innerHTML = bubble;
}

function timmer(){
     let time = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#gameTime').textContent = timer;
        }else{
            clearInterval(timer);
            bodyMain.innerHTML = `<h1>GAME OVER YOUR SCORE IS ${score}</h1>`;
        }
    },1000)
}

function newHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector('#newHit').textContent = hit;
}

function storeScore(){
    score += 10;
    document.querySelector('#score').textContent = score;
}

bodyMain.addEventListener('click',(dets)=>{
    let clickNumber = Number(dets.target.textContent);
    if(clickNumber === hit){
        storeScore();
        newHit();
        bubbleCreate();
    }
})


bubbleCreate();
timmer();
newHit();