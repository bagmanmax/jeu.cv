const pipesArray = [];
//const bPipe= new Image();
//bPipe.src='botpipe.png';
//const tPipe= new Image();
//tPipe.src='topPipe.png'

class Pipes {
  constructor() {
    this.topPipe = (Math.random() * canvas.height) / 2.8 + 15; // top of the screen
    this.bottomPipe = (Math.random() * canvas.height) / 2.8 + 15; // bottom of the screen
    this.x = canvas.width;
    this.width = 93;
    this.color = "cyan";
    this.height = 0;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.topPipe);
    ctx.fillRect(
      this.x,
      canvas.height - this.bottomPipe,
      this.width,
      this.bottomPipe
    );
  }
  update() {
    this.x -= gameSpeed;
    this.draw();
  }
}

function collisionPipes() {
  if (frame%50 === 0) {
    pipesArray.unshift(new Pipes()); // this adds a new pipe to the array with the constructor every 50 frames
  }
  for (let i = 0; i < pipesArray.length; i++) {
    pipesArray[i].update(); // for loop to make a new pipe in the array
  }
  if (pipesArray.length > 30) {
    pipesArray.pop(pipesArray[0]);
  }
}
function gameOver() {}
