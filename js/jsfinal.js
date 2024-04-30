const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Button {
  constructor(x, y, width, height, color, text, velX, velY) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.text = text;
    this.velX = velX;
    this.velY = velY;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText(
      this.text,
      this.x + this.width / 2 - ctx.measureText(this.text).width / 2,
      this.y + this.height / 2 + 8
    );
  }

  update() {
    // Move the button
    this.x += this.velX;
    this.y += this.velY;

    // Bounce off the walls
    if (this.x + this.width >= width || this.x <= 0) {
      this.velX = -this.velX;
      createNewButton();
    }
    if (this.y + this.height >= height || this.y <= 0) {
      this.velY = -this.velY;
      createNewButton();
    }
  }
}

const buttons = [];

function createNewButton() {
  const newButton = new Button(
    random(0, width - 100),
    random(0, height - 50),
    100,
    50,
    randomRGB(),
    "Click to turn up volume",
    random(-2, 2),
    random(-2, 2)
  );
  buttons.push(newButton);
}

// Initial buttons
for (let i = 0; i < 1; i++) {
  createNewButton();
}

function loop() {
  ctx.clearRect(0, 0, width, height);

  for (const button of buttons) {
    button.update();
    button.draw();
  }

  requestAnimationFrame(loop);
}

loop();
