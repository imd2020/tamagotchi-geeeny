let DS = loadImage("assets/DS.png");
let DSpen = loadImage("assets/DSpen.png");
//pink(250,215,222)
//darkpink(240,195,205)
//yellow(255,244,220)

import Button from "./button";

function ds() {
  image(DS, -80, -15, 768, 600);
}
let StartButton = new Button(260, 400, 1, "START", LEFT);

function pointer(x, y) {
  if (mouseIsPressed === false) {
    image(DSpen, x - 20, y - 320, 230, 320);
    fill(170, 160, 195, 115);
    noStroke();
    ellipse(x, y, 60, 25);
  } else if (mouseIsPressed === true) {
    fill(170, 160, 195, 115);
    noStroke();
    ellipse(x, y, 50, 20);
    image(DSpen, x - 25, y - 305, 230, 320);
  }
}
function startscreen() {
  fill(255, 244, 220);
  rect(170, 330, 280, 200);
}

function draw() {
  background(30);
  startscreen();
  StartButton.display();
  if (StartButton.hitTest()) {
    console.log("nice");
  }
  ds();
  if (mouseX >= 175 && mouseX <= 445 && mouseY >= 335 && mouseY <= 525) {
    pointer(mouseX, mouseY);
  }
}
