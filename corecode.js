"use strict";
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;
const background = new Image(); // image for the background
const flyAudio= new Audio();
const hitAudio= new Audio();
const bangCollision= new Image();
const gameOverPic=new Image()
bangCollision.src='bang.png';
background.src = "bg.png ";
gameOverPic.src= 'gameover.png'
flyAudio.src="wing.mp3";
hitAudio.src='hit.mp3'

const bg = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
}

let gameTrigger = false; // bouton d'espace pour faire bouger l'oiseau
let birdHeight = 0; //hauteur de l'oiseau dans le canvas
let score = 0; // score des pipes passé
let frame = 0;
let gameSpeed =3; // speed of the scrolling from the left
//let startingPosition = (canvas.height-90);

function backgroundScrolling() {
  if (bg.x1<=-bg.width+gameSpeed ){bg.x1=bg.width;}// we add gamespeed to offset the white lines as much as we can
  
  else {bg.x1-=gameSpeed;}
  if(bg.x2<=-bg.width+gameSpeed){bg.x2=bg.width}
  else{ bg.x2-=gameSpeed};

  ctx.drawImage(background, bg.x1,bg.y, canvas.width,canvas.height); 
  ctx.drawImage(background, bg.x2,bg.y, canvas.width,canvas.height); 
  
  
  
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); //(x,y, dx, dy)

  //ctx.fillRect(20, startingPosition, 60, 60);
  backgroundScrolling() ;
  
  newPlayer.falling();
  newPlayer.draw();
  collisionPipes();
  if(testCrash()){gameOver();return;};
  
  
  requestAnimationFrame(animate);
  frame++;

  birdHeight += 1;
}
animate();


window.addEventListener("keydown", function (e) {
  console.log(e.code);
  if (e.code === "Space") {
    gameTrigger = true; //startingPosition-=20;
    flyAudio.play();
  }
});
window.addEventListener("keyup", function (e) {
  console.log(e.code);
  if (e.code === "Space") {
    gameTrigger = false; //startingPosition+=20;
    ;
  }
});
function testCrash(){// to  see if there are any collisions
  for(let i=0; i<pipesArray.length;i++ ) {
    if (newPlayer.x< pipesArray[i].x+ pipesArray[i].width &&
      newPlayer.x+newPlayer.width>pipesArray[i].x && 
      ((newPlayer.y < 0+pipesArray[i].topPipe && newPlayer.y+newPlayer.height>0)||
      (newPlayer.y>canvas.height- pipesArray[i].bottomPipe && newPlayer.y+newPlayer.height<canvas.height
        ))){
          console.log('hit');
          ctx.drawImage(bangCollision,newPlayer.x,newPlayer.y,50,70);
          hitAudio.play();
          return  true;
          
        }
  }
}
function gameOver(){
  ctx.fillStyle='black';
  ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.drawImage(gameOverPic,300,200,canvas.width/4,canvas.height/4);
//   cxt.drawImage(gameOverPic,
//     canvas.width / 2 - gameOverPic.width / 2,
//     canvas.height / 2 - gameOverPic.height / 2
// );
  
}
gameOver();