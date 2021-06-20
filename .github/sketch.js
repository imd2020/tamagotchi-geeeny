let DS = loadImage("assets/DS.png");
let DSpen = loadImage("assets/DSpen.png");
let gamestate = "food";
let showTutorial = false;
let allowedToContinue = false;
let counter = 0;

import Cherry from "./Cherry";
import Poison from "./Poison";
import Scale from "./Scale";
import Creature from "./Creature";
import Button from "./button";
import Screens from "./Screens";
import Announcement from "./Announcement";

let cherryImg = loadImage("assets/cherry.png");
let poisonImg = loadImage("assets/poison.png");

let foodies = [];
let newFood;
let PoisonMeter = new Scale(400, 120, 1);
let CherryMeter = new Scale(430, 120, 1);
let HungerScale = new Scale(180, 120, 0.2);
let TiredScale = new Scale(210, 120, 0.2);
let FriendScale = new Scale(240, 120, 0.2);

let StartButton = new Button(245, 390, 1, "START", 130);
let TutorialButton = new Button(264, 475, 0.4, "HOW TO PLAY", 240);
let ContinueButton = new Button(270, 450, 0.5, "Continue", 160);
let FeedButton = new Button(185, 450, 0.8, "FEED", 95);
let SleepButton = new Button(270, 450, 0.8, "SLEEP", 100);
let PetButton = new Button(360, 450, 0.8, "PET", 95);

let Victory = new Announcement(210, 440, "Victory!");
let Failure = new Announcement(210, 440, "Failure!");

let Berndt = new Creature(310, 180, "happy");

function foodDrop() {
  if (Math.random() < 0.5) {
    newFood = new Cherry(0, 0, cherryImg);
  } else {
    newFood = new Poison(0, 0, poisonImg);
  }
  newFood.x = random(180, 420);
  newFood.y = random(250, 320);

  return newFood;
}

function foodgame() {
  if (PoisonMeter.unit < 7 && CherryMeter.unit < 7) {
    if (foodies.length < 1) {
      foodies.push(foodDrop());
    }
  } else {
    push();
    if (PoisonMeter.unit >= 7) {
      Failure.display();
    }
    if (CherryMeter.unit >= 7) {
      Victory.display();
    }
    ContinueButton.display();
    if (counter < 60) {
      counter += 1;
      console.log(counter);
    }
    if (counter >= 50) {
      allowedToContinue = true;
    }

    pop();
  }

  for (let someFood of foodies) {
    someFood.display();
    someFood.y += 5;

    if (someFood.hitTest() || someFood.y > 530) {
      someFood.feed();

      if (someFood.poison()) {
        PoisonMeter.unit += 2;
        console.log(PoisonMeter.unit);
      } else if (someFood.feed()) {
        CherryMeter.unit += 1;
      }
      foodies.pop();
    }
  }

  PoisonMeter.display();
  CherryMeter.display();
}
/*
//let pink = {
//  main: color(250,215,222),
//  dark: color(240,195,205)
  }
//yellow(255,244,220)
*/

//this.color = color(255,0,0); fill(this.color);

function moodScales() {
  push();
  noStroke();
  fill(255);
  rect(170, 50, 100, 80);
  fill("lightgreen");
  rect(175, 55, 90, 30);
  fill("gold");
  rect(175, 80, 90, 30);
  fill("red");
  rect(175, 100, 90, 25);
  HungerScale.display();
  TiredScale.display();
  FriendScale.display();
  pop();
}
function screens() {
  if (gamestate === "start") {
    startscreen();
  } else if (gamestate === "game") {
    gamescreen();
  } else if (gamestate === "food") {
    foodscreen();
  }
  moodScales();
}

let Startscreen = new Screens();

function ds() {
  image(DS, -80, -15, 768, 600);
}

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
  rect(160, 45, 300, 210);
  rect(170, 330, 280, 200);
  TutorialButton.display();
  StartButton.display();
  if (showTutorial === true) {
    push();
    TutorialButton.cover();
    fill(0);
    stroke(200);
    strokeWeight(15);
    rect(200, 60, 220, 175, 25);
    fill(255);
    noStroke();
    text("TUT", 200, 100, 200, 200);
    pop();
  }
}

function foodscreen() {
  foodgame();
}

function gamescreen() {
  push();
  FeedButton.display();
  SleepButton.display();
  PetButton.display();
  pop();
}

function draw() {
  background(30);
  screens();

  //Startscreen.display();

  Berndt.mood = "sad";

  Berndt.display();

  ds();
  if (mouseX >= 175 && mouseX <= 445 && mouseY >= 335 && mouseY <= 525) {
    pointer(mouseX, mouseY);
  }

  noFill();
  stroke(255, 0, 0);
  rect(175, 330, 270, 195);
  rect(160, 45, 300, 205);
}

function mouseClicked() {
  if (gamestate === "start") {
    if (StartButton.hitTest()) {
      gamestate = "game";
    }
    if (TutorialButton.hitTest()) {
      showTutorial = true;
    }
  }
  if (gamestate === "food") {
    if (ContinueButton.hitTest() && allowedToContinue === true) {
      gamestate = "game";
      allowedToContinue = false;
      PoisonMeter.unit = 1;
      CherryMeter.unit = 1;
    }
  }
  if (gamestate === "game") {
    if (FeedButton.hitTest()) {
      gamestate = "food";
    }
  }
}
