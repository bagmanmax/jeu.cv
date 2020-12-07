"use strict";
const birdy = new Image();
birdy.src = "../src/public/images/birdy.png";
class Player {
  constructor() {
    this.x = 60; // x axis of player
    this.y = 100; //y axis of player
    this.gravity = 0; //velocity of player falling
    this.poids = 1; // weight of player which affects falling
    this.originalWidth = 261; //10 birds divided to one frame
    this.birdAnimation=2;
    this.originalHeight = 148;
    this.width = this.originalWidth / 4; //  width of bird scaled to fit the box
    this.height = this.originalHeight / 3; // height of bird
  }

  falling() {
    //let birdFLoat=Math.sin(birdHeight)*20;
    //  gravity of the bird falling we need a condition to make sure it doesn't fall through the floor
    if (this.y > canvas.height - this.height) {
      this.y = canvas.height - this.height; // this makes the bird hit the ground and shake
      this.gravity = 0; // this makes it so the bird just stops falling
    } else {
      this.gravity += this.poids;
      this.y += this.gravity;
      this.gravity *= 0.8; // player flappy effect
    }
    if (gameTrigger) {
      this.jump();
    }
    if (this.y < 0 + this.height) {
      this.y = this.height;
      //this.gravity=0;
    }
  }
  draw() {
    // drawing the bird
    //ctx.fillStyle = "blue";
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      birdy,
      this.birdAnimation*this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x-12,//we add or remove to better fit the hitbox
      this.y-6,
      this.width*1.45,// to fill the hit box we multiply the height and width

      this.height*1.3
    ); // draw the image of the bird*/

  }
  jump() {
    // making the bird jump with spacebar
    this.gravity -= 3;
     if (this.birdAnimation>=9){this.birdAnimation=1;}
    // else if(frame%2===0){
      this.birdAnimation++ ;
    }
  }

const newPlayer = new Player();
