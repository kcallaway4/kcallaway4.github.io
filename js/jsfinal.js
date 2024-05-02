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
  
 handleClick() {
    const colors = ["red", "green", "yellow", "blue"];
    const currentIndex = colors.indexOf(this.color);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    this.color = nextColor;
  }
}

const buttons = [];
let blueButtonCount = 0;
let pauseAnimationFlag = false;

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
    if (!pauseAnimationFlag) {
      button.update();
    }
    button.draw();
  }

  requestAnimationFrame(loop);
}

// Add event listener for mouse clicks
canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
  
    // Check if the click is inside any button
    for (const button of buttons) {
      if (
        mouseX >= button.x &&
        mouseX <= button.x + button.width &&
        mouseY >= button.y &&
        mouseY <= button.y + button.height
      ) {
        button.handleClick();
      }
    }
  });
  
 

  function checkBlueButtons() {
    blueButtonCount++;
    if (blueButtonCount >= 5) {
      pauseAnimationFlag = true;
      displayMessage();
    }
}
  
// function openPopUp() {
//     const popupContainer = document.querySelector('.popup-container');
//     const closeButton = document.querySelector('.close');
//     const textInput = document.getElementById('textInput');
//     const submitButton = document.getElementById('submitButton');
  
//     if (pauseAnimationFlag) {
//       popupContainer.style.display = 'flex'; // Change display to flex to enable centering
//       textInput.focus();
//     }
//   }
  
function displayMessage(msgText, msgType) {
    const body = document.body;

    const panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);

    const msg = document.createElement("p");
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));

    if (msgType === "warning") {
        msg.style.backgroundImage = "url(/img/warning.jpg)";
        panel.style.backgroundColor = "orange";
    }       
    else if (msgType === "chat") {
        msg.style.backgroundImage = "url(/img/chat.gif)";
        panel.style.backgroundColor = "lightblue";
    } 
    else {
        msg.style.paddingLeft = "20px";
    }
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const userInputText = userInput();
    const warningInputText = warningInput();
    displayMessage(userInputText, warningInputText);
});

function userInput() {
    let text = prompt("Enter a message!");
    return text;
}

function warningInput() {
    let text = prompt("Is this a warning, or a chat?");
    return text;
}

loop();
