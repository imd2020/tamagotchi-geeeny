let DS = loadImage("assets/DS.png");
let DSpen = loadImage("assets/DSpen.png");
let Logo = loadImage("assets/TamagotchiLogo.png");
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

let pink = {
  main: color(250, 215, 222),
  dark: color(235, 175, 190),
};

import Cherry from "./Cherry.js";
import Poison from "./Poison.js";
import Scale from "./Scale.js";
import Creature from "./Creature.js";
import Button from "./button.js";
import Screens from "./Screens.js";
import Announcement from "./Announcement.js";

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

let StartButton = new Button(245, 390, 1, "START", 130, false, pink.dark);
let TutorialButton = new Button(
  264,
  475,
  0.4,
  "HOW TO PLAY",
  240,
  false,
  pink.dark
);
let ContinueButton = new Button(
  270,
  450,
  0.5,
  "Continue",
  160,
  false,
  pink.dark
);
let FeedButton = new Button(185, 340, 0.8, "FEED", 95, false, pink.dark);
let SleepButton = new Button(270, 340, 0.8, "REST", 100, false, pink.dark);
let PlayButton = new Button(360, 340, 0.8, "PLAY", 95, false, pink.dark);
let EndButton = new Button(185, 420, 1.1, "END GAME", 228, true, pink.dark);
let AgainButton = new Button(
  255,
  450,
  0.5,
  "PLAY AGAIN",
  210,
  false,
  pink.dark
);

let Victory = new Announcement(210, 440, "Victory!");
let Failure = new Announcement(210, 440, "Failure!");
let Congrats = new Announcement(180, 420, "Congrats!");
let OhCrap = new Announcement(187, 420, "Oh Crap!");

let Berndt = new Creature(
  310,
  180,
  "sad",
  color(235, 175, 190),
  color(250, 215, 222),
  color(180, 100, 120)
);
let Buddy = new Creature(
  60,
  0,
  "happy",
  color(185, 200, 140),
  color(235, 240, 200),
  color(110, 135, 75)
);

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

function moodScales() {
  push();
  noStroke();
  fill(255);
  rect(170, 50, 100, 80);
  fill(210, 220, 180);
  rect(175, 55, 90, 30);
  fill(255, 230, 175);
  rect(175, 80, 90, 30);
  fill(240, 175, 165);
  rect(175, 100, 90, 25);
  HungerScale.display();
  TiredScale.display();
  FriendScale.display();
  if (HungerScale.unit >= 0.2 && gamestate !== "food" && gamestate !== "end") {
    HungerScale.unit -= 0.0005;
  }
  if (TiredScale.unit >= 0.2 && gamestate !== "rest" && gamestate !== "end") {
    TiredScale.unit -= 0.0005;
  }
  if (FriendScale.unit >= 0.2 && gamestate !== "play" && gamestate !== "end") {
    FriendScale.unit -= 0.0005;
  }
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
      SleepMeter.unit += 0.05;
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
      gsap.to(Berndt, {
        duration: 0.5,
        ease: "sine",
        y: 185,
      });

      ContinueButton.display();
    }
  }
  if (Berndt.mood !== "happy") {
    fill(255);
    noStroke();
    text("Awake", 200, 212);
    text("Asleep", 380, 212);
    rect(308, 220, 4, 15);
    rect(200, 225, 220, 5);
    push();
    fill(pink.dark);
    rect(210 + sheepcount, 215, 6, 25);

    pop();
  }
}

function playscreen() {
  push();
  push();
  noStroke();
  fill(pink.dark);
  rect(200, 400, 215, 20);
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
    gsap.to(Buddy, {
      duration: 0.1,
      ease: "sine",
      x: random(60, 90),
      y: random(-20, 20),
    });
    // Buddy.x = random(60, 90);
    // Buddy.y = random(-20, 20);
  }
  Buddy.display();
  Berndt.x = 300 - Buddy.x;
  Berndt.y = 180 - Buddy.y;

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
    fill(120, 110, 145, 115);
    noStroke();
    ellipse(x, y, 60, 25);
  } else if (mouseIsPressed === true) {
    fill(120, 110, 145, 155);
    noStroke();
    ellipse(x, y, 50, 20);
    image(DSpen, x - 25, y - 305, 230, 320);
  }
}

function startscreen() {
  fill(255);
  room();
  image(Logo, 160, 50, 320, 146);
  TutorialButton.display();
  StartButton.display();
  if (showTutorial === true) {
    push();
    TutorialButton.covered = true;

    fill(pink.dark);
    stroke(255);
    strokeWeight(10);
    rect(175, 60, 270, 175, 25);
    fill(255);
    noStroke();
    textSize(18);
    text("Feed your Lil' Thing Cherries, not poison!", 190, 80, 250, 175);
    text(
      "Pet it to put it to sleep, or watch it play with a friend.",
      190,
      130,
      250,
      175
    );
    text("Make it happy to win!", 190, 190, 250, 175);
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
  if (TiredScale.unit > 4) {
    if (Math.random() > 0.9) {
      if (Math.random() > 0.5) {
        Berndt.mood = "happy";
        gsap.to(Berndt, {
          duration: 0.1,
          ease: "sine",
          y: random(160, 180),
        });
        //Berndt.y = random(160, 180);
      } else {
        Berndt.mood = "neutral";
        gsap.to(Berndt, {
          duration: 0.1,
          ease: "sine",
          y: random(170, 190),
        });
        //Berndt.y = random(170, 190);
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
    fill(0);
    //rect(160,70, 300, 28);
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
function room() {
  push();
  noStroke();
  fill(220, 160, 135);
  rect(100, 40, 400, 250);
  for (let i = 0; i < 7; i += 1) {
    fill(240, 190, 140);
    rect(i * 55 + 140, 40, 15, 250);
  }
  fill(160, 100, 75);
  rect(60, 200, 400, 20);
  fill(120, 65, 45);
  rect(100, 220, 400, 320);
  for (let i = 0; i < 7; i += 1) {
    fill(85, 40, 20);
    rect(140, i * 50 + 240, 350, 4);
  }
  fill(235, 175, 190);
  //rect(200,100, 20, 200);
  pop();
}

function draw() {
  background(90, 70, 80);
  translate(0, 0);
  room();
  screens();

  //Startscreen.display();

  ds();
  if (mouseX >= 175 && mouseX <= 445 && mouseY >= 335 && mouseY <= 525) {
    pointer(mouseX, mouseY);
  }
}
window.draw = draw;
window.mouseClicked = mouseClicked;
window.mouseReleased = mouseReleased;

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
      Berndt.mood = "sad";
      dying = false;
      EndButton.covered = true;
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
