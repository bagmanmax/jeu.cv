const pipesArray = [];

class Pipes {
  constructor() {
    this.topPipe = (Math.random() * canvas.height) / 2.9 + 20;
    this.bottomPipe = (Math.random() * canvas.height) / 2.6 + 15;
    this.x = canvas.width;
    this.width = 22;
    this.color = "orange";
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
  if (frame % 50 === 0) {
    pipesArray.unshift(new Pipes()); // this adds a new pipe to the array with the constructor every 50 frames
  }
  for (let i = 0; i < pipesArray.length; i++) {
    pipesArray[i].update(); // for loop to make a new pipe in the array
  }
  if (pipesArray.length > 15) {// every 15 pipes it erases the last array number
    pipesArray.pop(pipesArray[0]);
  }
  
}
