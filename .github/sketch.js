let DS = loadImage("assets/DS.png");
let DSpen = loadImage("assets/DSpen.png");
let gamestate = "start";
let showTutorial = false;
let allowedToContinue = false;
let counter = 0;
let dying = false;
let sheepcount = 0;
let countingAllowed = false;
let wakeupCounter = 0;
let endCounter = 0;
let r = 0;

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
let SleepMeter = new Scale(430, 120, 0.5);
let PlayMeter = new Scale(0, 0, 0.2);

let StartButton = new Button(245, 390, 1, "START", 130, false);
let TutorialButton = new Button(264, 475, 0.4, "HOW TO PLAY", 240, false);
let ContinueButton = new Button(270, 450, 0.5, "Continue", 160, false);
let FeedButton = new Button(185, 340, 0.8, "FEED", 95, false);
let SleepButton = new Button(270, 340, 0.8, "REST", 100, false);
let PlayButton = new Button(360, 340, 0.8, "PLAY", 95, false);
let EndButton = new Button(185, 420, 1.1, "END GAME", 228, true);
let AgainButton = new Button(255, 450, 0.5, "PLAY AGAIN", 210, false);

let Victory = new Announcement(210, 440, "Victory!");
let Failure = new Announcement(210, 440, "Failure!");
let Congrats = new Announcement(180, 420, "Congrats!");
let OhCrap = new Announcement(187, 420, "Oh Crap!");

let Berndt = new Creature(310, 180, "sad");
let Buddy = new Creature(60, 0, "happy");

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
      Berndt.mood = "dead";
      dying = true;
    }
    if (CherryMeter.unit >= 7) {
      Victory.display();
      dying = "no";
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
        Berndt.mood = "angry";
        console.log(PoisonMeter.unit);
      } else if (someFood.feed()) {
        CherryMeter.unit += 1;
        Berndt.mood = "happy";
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
// let cyan = {
//   light: color(191, 255, 245),

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
  // if (HungerScale.unit >= 0.2) {
  //   HungerScale.unit -= 0.0005;
  // }
  pop();
}
function screens() {
  if (gamestate === "start") {
    startscreen();
  } else if (gamestate === "game") {
    gamescreen();
  } else if (gamestate === "food") {
    foodscreen();
  } else if (gamestate === "rest") {
    restscreen();
  } else if (gamestate === "play") {
    playscreen();
  } else if (gamestate === "end") {
    endscreen();
  }

  if (gamestate !== "start" && gamestate !== "end") {
    moodScales();
    Berndt.display();
  }
}
function restscreen() {
  if (SleepMeter.unit < 7) {
    console.log(sheepcount);
    SleepMeter.display();
    Berndt.y = 450;
    if (mouseIsPressed) {
      countingAllowed = "up";
    }
    if (countingAllowed === "up") {
      if (sheepcount < 190) {
        sheepcount += 1;
      }
    } else if (countingAllowed === "down") {
      if (sheepcount > 0) {
        sheepcount -= 1;
      }
    }

    if (sheepcount > 100) {
      Berndt.mood = "sleepy";
      SleepMeter.unit += 0.02;
    } else {
      Berndt.mood = "sad";
    }
  } else {
    Berndt.mood = "waking";
    if (wakeupCounter < 130) {
      wakeupCounter++;
    }
    if (wakeupCounter > 40) {
      Berndt.mood = "happy";
    }
    if (wakeupCounter > 120) {
      if (Berndt.y > 180) {
        Berndt.y -= 20;
      }
      //Berndt.y = 180;
      ContinueButton.display();
    }
  }
  if (Berndt.mood !== "happy") {
    fill(255);
    text("Awake", 200, 200);
    text("Asleep", 380, 200);
    rect(308, 215, 4, 15);
    rect(200, 220, 220, 5);
    push();
    rect(210 + sheepcount, 210, 6, 25);

    pop();
  }
}

function playscreen() {
  push();
  push();
  translate(200, 400);
  rotate(1.57);
  PlayMeter.display();
  pop();
  translate(300, 200);

  if (Math.random() > 0.9) {
    if (Math.random() > 0.5) {
      Berndt.mood = "happy";
      Buddy.mood = "neutral";
    } else {
      Berndt.mood = "neutral";
      Buddy.mood = "happy";
    }
  }

  if (Math.random() > 0.95) {
    Buddy.x = random(60, 90);
    Buddy.y = random(-70, 0);
  }
  Buddy.display();
  Berndt.x = 300 - Buddy.x;
  Berndt.y = 100 - Buddy.y;

  if (PlayMeter.unit < 21.5) {
    PlayMeter.unit += 0.1;
  }
  pop();
  if (PlayMeter.unit > 21) {
    ContinueButton.display();
  }
}

function whichMood() {
  if (dying === false) {
    if (TiredScale.unit > 2) {
      if (HungerScale.unit > 2 && TiredScale.unit > 2 && FriendScale.unit > 2) {
        Berndt.mood = "neutral";
      }
      if (HungerScale.unit > 4 && TiredScale.unit > 4 && FriendScale.unit > 4) {
        Berndt.mood = "happy";
        EndButton.covered = false;
        EndButton.cover();
      }
    } else {
      Berndt.mood = "angry";
    }
  } else {
    Berndt.mood = "dead";
  }
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
    TutorialButton.covered = true;
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
  Berndt.mood = "sad";
  FeedButton.display();
  SleepButton.display();
  PlayButton.display();
  whichMood();
  EndButton.display();
  pop();
}

function endscreen() {
  if (TiredScale > 4) {
    if (Math.random() > 0.9) {
      if (Math.random() > 0.5) {
        Berndt.mood = "happy";
        Berndt.y = random(160, 180);
      } else {
        Berndt.mood = "neutral";
        Berndt.y = random(170, 190);
      }
    }
    push();
    fill(255);
    textSize(20);
    text("You raised a happy little thing!", 175, 90);
    pop();
    Berndt.display();
    Congrats.display();
  } else {
    push();
    fill(255);
    textSize(18);
    text("You poisoned the poor little thing!", 175, 90);
    Berndt.mood = "dead";
    Berndt.display();
    OhCrap.display();
    translate(random(301, 305), random(107, 110));
    fill(0);
    stroke(255);
    strokeWeight(1);
    r += random(0.1, 0.9);
    rotate(r);
    ellipse(0, -15, 10);

    pop();
  }
  AgainButton.display();
  if (endCounter < 50) {
    endCounter++;
  }
}
function draw() {
  background(30);
  translate(0, 0);
  screens();

  //Startscreen.display();

  ds();
  if (mouseX >= 175 && mouseX <= 445 && mouseY >= 335 && mouseY <= 525) {
    pointer(mouseX, mouseY);
  }
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
      if (Berndt.mood !== "dead") {
        gamestate = "game";
        if (dying === "no") {
          HungerScale.unit += 2;
          dying = false;
        }
      } else {
        gamestate = "end";
      }
      allowedToContinue = false;
      PoisonMeter.unit = 1;
      CherryMeter.unit = 1;
      counter = 0;
    }
  }
  if (gamestate === "rest") {
    if (Berndt.y < 190) {
      if (ContinueButton.hitTest()) {
        sheepcount = 0;
        countingAllowed = false;
        wakeupCounter = 0;
        Berndt.y = 180;
        TiredScale.unit += 2;
        Berndt.mood = "sad";
        SleepMeter.unit = 0.5;
        gamestate = "game";
      }
    }
  }
  if (gamestate === "play") {
    if (ContinueButton.hitTest()) {
      PlayMeter.unit = 0.2;
      FriendScale.unit += 2;
      Berndt.x = 310;
      Berndt.y = 180;
      gamestate = "game";
    }
  }

  if (gamestate === "game") {
    if (EndButton.covered === false && EndButton.hitTest()) {
      gamestate = "end";
    }
  }
  if (gamestate === "end") {
    if (AgainButton.hitTest() && endCounter > 40) {
      HungerScale.unit = 0.2;
      TiredScale.unit = 0.2;
      FriendScale.unit = 0.2;
      endCounter = 0;
      gamestate = "start";
    }
  }

  if (gamestate === "game") {
    if (FeedButton.hitTest()) {
      gamestate = "food";
    }
    if (SleepButton.hitTest()) {
      gamestate = "rest";
    }
    if (PlayButton.hitTest()) {
      gamestate = "play";
    }
  }
}

function mouseReleased() {
  if (gamestate === "rest" && sheepcount > -100) {
    countingAllowed = "down";
  }
}
