let state = "play";
let s = 1.1;
let rocketY = 0;
let start = false;
let landing = false;
let gamecount = 0;
let resultcount = 0;
let resltcount2 = 0;
let landed = false;
let points = 0;
let speed = 0;
let rotation = -0.3;
let wings = "up";
let export1 = loadImage("p5/assets/export1.png");
let export2 = loadImage("p5/assets/export2.png");
let export3 = loadImage("p5/assets/export3.png");
let export4 = loadImage("p5/assets/export4.png");
let export5 = loadImage("p5/assets/export5.png");

fill(200, 190, 210);
function rocket(x, y) {
  push();
  noStroke();
  fill(255, 232, 179);
  ellipse(x + 40, y + 50, 100);
  ellipse(x + 40, y - 1, 50, 50);

  push();
  translate(x, y);
  rotate(0.4);
  ellipse(29, 15, 50, 105);
  pop();

  push();
  translate(x, y);
  rotate(-0.4);
  ellipse(45, 45, 50, 105);
  pop();

  fill(224, 189, 146);
  ellipse(x + 40, y + 50, 90);
  fill(255, 232, 179);
  push();
  translate(x, y);
  rotate(-0.3);
  ellipse(25, 45, 90, 70);
  fill(255, 255, 255);
  rotate(-0.5);
  ellipse(16, 17, 35, 20);
  ellipse(15, 33, 20, 18);
  pop();
  pop();
}

function crack1(x, y) {
  push();
  stroke(191, 120, 78);
  strokeWeight(5);
  line(x - 2, y + 14, x + 10, y + 30);
  line(x + 82, y + 20, x + 70, y + 25);

  strokeWeight(3);
  line(x + 10, y + 31, x + 25, y + 25);
  line(x + 70, y + 26, x + 60, y + 20);
  line(x + 60, y + 20, x + 55, y + 25);
  pop();
}

function crack2(x, y) {
  crack1(x, y);
  push();
  stroke(191, 120, 78);
  strokeWeight(2);
  line(x + 55, y + 26, x + 50, y + 23);
  line(x + 25, y + 25, x + 35, y + 30);
  line(x + 35, y + 30, x + 43, y + 25);
  line(x + 10, y + 30, x + 12, y + 42);
  line(x + 75, y + 36, x + 89, y + 40);
  strokeWeight(3);
  line(x + 78, y + 23, x + 75, y + 35);
  pop();
}

function BOING() {
  rocket(width / 2 - 40, 400);
  if (resultcount > 20) {
    crack1(width / 2 - 40, 400);
  }
  if (resultcount > 40) {
    crack2(width / 2 - 40, 400);
  }
}

function rightWing(x, y) {
  fill(255, 197, 58);
  noStroke();
  ellipse(x, y, 10);
  ellipse(x + 50, y, 40, 30);
  ellipse(x + 80, y - 10, 80, 20);

  push();
  rotate(0.2);
  ellipse(x + 85, y - 10, 80, 18);
  rotate(0.2);
  ellipse(x + 65, y - 10, 50, 15);
  pop();
}

function leftWing(x, y) {
  fill(255, 197, 58);
  noStroke();
  ellipse(x, y, 10);
  ellipse(x - 50, y, 40, 30);
  ellipse(x - 80, y - 10, 80, 20);

  push();
  rotate(-0.2);
  ellipse(x - 85, y - 10, 80, 18);
  rotate(-0.2);
  ellipse(x - 65, y - 10, 50, 15);
  pop();
}

function body(x, y) {
  push();
  noStroke();
  fill(255, 197, 58);
  ellipse(x + 40, y + 50, 100);
  ellipse(x + 40, y - 1, 50, 50);

  push();
  translate(x, y);
  rotate(0.4);
  ellipse(29, 15, 50, 105);
  pop();

  push();
  translate(x, y);
  rotate(-0.4);
  ellipse(45, 45, 50, 105);
  pop();

  triangle(x + 80, y + 10, x + 20, y + 20, x + 70, y - 20);
  triangle(x, y + 10, x + 20, y + 20, x + 10, y - 20);
  triangle(x + 24, y - 21, x + 61, y - 17, x + 50, y - 30);
  triangle(x + 24, y - 20, x + 45, y - 17, x + 40, y - 35);

  pop();
}

function legs(x, y) {
  push();
  stroke(213, 99, 48);
  strokeWeight(10);
  line(x - 30, y + 60, x - 40, y + 70);
  line(x + 30, y + 60, x + 40, y + 70);

  stroke(236, 129, 66);
  line(x - 40, y + 70, x - 50, y + 54);
  line(x - 40, y + 70, x - 60, y + 68);
  line(x - 40, y + 70, x - 30, y + 77);

  line(x + 40, y + 70, x + 50, y + 54);
  line(x + 40, y + 70, x + 60, y + 68);
  line(x + 40, y + 70, x + 30, y + 77);
  pop();
}

function chick(x, y) {
  eggshell1(x, y + 60);
  eggshell2(x, y + 60);

  flappingWings(x, y);

  body(x - 40, y - 30);

  push();
  noStroke();
  fill(118, 71, 44);
  ellipse(x - 20, y - 15, 15, 20);
  ellipse(x + 20, y - 15, 15, 20);
  fill(255, 197, 58);
  ellipse(x - 19, y - 10, 16, 17);
  ellipse(x + 19, y - 10, 16, 17);

  //Belly
  fill(245, 230, 130);
  ellipse(x, y + 34, 65, 70);

  //Beak
  fill(236, 129, 66);
  ellipse(x, y - 5, 16);

  fill(213, 99, 48);
  triangle(x - 8, y - 5, x + 8, y - 5, x, y - 18);
  fill(200, 90, 0);
  triangle(x - 8, y - 5, x + 8, y - 5, x, y - 13);

  fill(236, 129, 66);
  triangle(x - 8, y - 5, x + 8, y - 5, x, y - 8);

  fill(255, 223, 148);
  push();
  translate(x + 71, y - 80);
  rotate(-0.2);
  ellipse(-120, -20, 20, 15);
  ellipse(0, 0, 20, 15);
  ellipse(30, 20, 20, 15);
  pop();
  rect(x - 44, y - 79, 3, -40);
  rect(x + 78, y - 80, 3, -40);
  rect(x + 111, y - 67, 3, -40);
  quad(x + 78, y - 121, x + 113, y - 107, x + 113, y - 98, x + 78, y - 111);

  pop();
  legs(x, y);
}
function eggshell1(x, y) {
  push();
  noStroke();
  fill(255, 232, 179);
  translate(x + 200, y - 60);
  rotate(1.9);

  push();
  translate(0, 0);
  rotate(0.6);
  ellipse(20, 0, 50, 95);
  pop();

  push();
  translate(0, 0);
  rotate(-0.6);
  ellipse(40, 40, 50, 95);
  pop();

  push();
  fill(224, 189, 146);
  translate(0, 0);
  ellipse(36, 39, 105, 50);
  triangle(30, 0, 40, 40, 20, 20);
  triangle(50, -10, 50, 40, 58, 20);
  triangle(50, 5, 30, 40, 58, 20);

  fill(191, 120, 78);
  triangle(60, 65, 40, 65, 40, 30);
  pop();
  pop();
}

function eggshell2(x, y) {
  push();
  noStroke();
  fill(255, 232, 179);
  translate(x + 180, y + 40);
  rotate(0.3);

  push();
  translate(0, 0);
  //ellipse(-350, 30, 100);
  arc(-350, 30, 110, 100, -0.1, 3.3);
  fill(224, 189, 146);
  ellipse(-350, 25, 111, 25);
  triangle(-325, 50, -320, 25, -340, 70);
  triangle(-330, 50, -320, 25, -340, 25);
  triangle(-390, 25, -380, 25, -382, 50);

  fill(191, 120, 78);
  triangle(-370, 10, -360, 10, -360, 30);

  pop();
  pop();
}

function scrambledEggs(x, y) {
  push();
  noStroke();
  fill(226, 202, 171);
  ellipse(x, y, 200, 30);
  ellipse(x + 70, y + 10, 100, 20);
  ellipse(x - 107, y + 2, 20, 10);
  rect(x - 107, y - 2, 20, 8);
  ellipse(x - 70, y + 10, 30, 10);

  fill(255, 246, 226);
  ellipse(x, y - 3, 189, 21);
  ellipse(x - 100, y, 25, 5);
  quad(x + 105, y + 5, x + 95, y, x, y + 5, x + 35, y + 10);
  ellipse(x + 70, y + 8, 80, 14);

  ellipse(x - 70, y + 6, 25, 8);

  fill(250, 140, 0);
  ellipse(x + 20, y - 13, 70, 30);

  fill(255, 197, 58);
  ellipse(x + 19, y - 18, 60, 18);

  fill(255, 223, 148);
  ellipse(x + 12, y - 21, 30, 10);

  fill(255, 246, 226);
  ellipse(x + 10, y - 22, 20, 7);
  pop();

  push();
  stroke(255, 246, 226);
  strokeWeight(8);
  noFill();
  arc(x + 20, y - 10, 80, 20, 0.2, -3.3);
  pop();

  eggshell1(x, y);
  eggshell2(x, y);
}

function calculatePoints() {
  points = 280 - gamecount + (207 - speed);
}

function star1(x, y, g) {
  push();
  noStroke();
  ellipse(x, y, 25 * g, 25 * g);
  triangle(x, y - 35 * g, x + 10 * g, y - 10 * g, x - 10 * g, y - 10 * g);

  push();
  translate(x, y);
  rotate(1.3);
  triangle(0, -35 * g, 10 * g, -10 * g, -10 * g, -10 * g);
  pop();

  push();
  translate(x, y);
  rotate(2.5);
  triangle(0, -35 * g, 10 * g, -10 * g, -10 * g, -10 * g);
  pop();

  push();
  translate(x, y);
  rotate(-1.3);
  triangle(0, -35 * g, 10 * g, -10 * g, -10 * g, -10 * g);
  pop();

  push();
  translate(x, y);
  rotate(-2.5);
  triangle(0, -35 * g, 10 * g, -10 * g, -10 * g, -10 * g);
  pop();

  pop();
}

function oneStar(x, y, g) {
  push();
  fill(110, 50, 10);
  star1(x, y, g * 1.4);
  fill(245, 200, 0);
  star1(x, y, g);
  fill(255, 250, 240);
  push();
  noStroke();
  quad(x - 30, y - 8, x - 8, y - 10, x, y - 30, x, y);

  fill(255, 230, 180);
  triangle(x + 30, y - 8, x + 10, y - 10, x + 13, y - 3);
  triangle(x - 13, y + 5, x - 20, y + 27, x - 7, y + 9);
  fill(230, 130, 0);
  quad(x + 2, y + 3, x + 13, y + 5, x + 18, y + 25, x + 2, y + 13);
  pop();
}

function starLess1(x, y, g) {
  fill(10, 0, 10);
  star1(x, y, g * 1.4);
  fill(45, 40, 60);
  star1(x, y, g);
}

function starLess(x, y) {
  starLess1(x, y, 1);
  starLess1(x, y + 90, 1);
  starLess1(x, y + 180, 1);
}

function grass1() {
  image(export1, -50, 300, 210, 300);
  image(export5, -40, 290, 350, 450);
  image(export4, 600, 230, 350, 450);
  image(export3, 510, 310, 250, 350);
  image(export5, 300, 360, 370, 450);
  image(export4, 140, 390, 390, 480);
}

function grass2() {
  image(export3, 20, 240, 200, 290);
  image(export1, 620, 260, 170, 270);
}

//Resulttabellen
function success() {
  noStroke();
  background(222, 157, 68);

  fill(255, 255, 255);
  rect(0, 100, 350, 100);
  triangle(350, 100, 400, 100, 350, 150);
  triangle(350, 150, 400, 200, 350, 200);
  fill(222, 157, 68);
  textSize(60);
  text("Congrats!", 20, 120, 350, 100);
  textSize(40);
  fill(255, 255, 255);
  text("You did it!", 50, 220, 350, 100);
  text("Speed ............", 70, 350);
  text("Energy left .....", 70, 435);
  fill(255, 255, 255);
  text("Total ..............", 70, 520);

  push();
  speed = Math.round(s * 10);
  calculatePoints();
  textAlign(RIGHT);
  text(280 - gamecount, 400, 435);
  text(speed, 400, 350);
  fill(255, 255, 255);
  text(points, 400, 520);
  pop();

  starLess(530, 340);
  if (points <= 170) {
    oneStar(530, 340, 1);
  }
  if (points > 170 && points <= 270) {
    oneStar(530, 340, 1);
    oneStar(530, 430, 1);
  }
  if (points > 270) {
    oneStar(530, 340, 1);
    oneStar(530, 430, 1);
    oneStar(530, 520, 1);
  }
}

function failure() {
  noStroke();
  background(30, 10, 60);
  fill(255, 255, 255);
  rect(0, 100, 400, 100);
  triangle(400, 100, 450, 100, 400, 150);
  triangle(400, 150, 450, 200, 400, 200);
  fill(0, 0, 0);
  textSize(60);
  text("Uh... yummy?", 20, 170);
  textSize(40);
  fill(200, 180, 245);
  text("You killed it.", 50, 220, 350, 100);
  text("Speed ............", 70, 350);
  text("Energy left .....", 70, 435);
  fill(255, 255, 255);
  text("Total ...................", 70, 520);

  push();
  speed = Math.round(s * 10);
  fill(200, 180, 245);
  calculatePoints();
  textAlign(RIGHT);
  text(280 - gamecount, 400, 435);
  text(speed, 400, 350);
  fill(255, 255, 255);
  text(0, 400, 520);
  pop();

  starLess(530, 340);
}

//Sorgt dafür, dass Log nur einmal kommt
function win() {
  if (landed === false) {
    console.log("You landed successfully");
    landed = true;
  }
}
function lose() {
  if (landed === false) {
    console.log("You crashed");
    landed = true;
  }
}

function down() {
  s = s + 0.5;
}

function up() {
  s = s - 0.4;
}

function frame(x, y, s) {
  rect(x, y, 200 * s, 100 * s);
  ellipse(x, y + 50 * s, 40 * s);
  ellipse(x + 200 * s, y + 50, 40 * s);
  push();
  fill(255, 197, 58);
  ellipse(x, y + 50, 20 * s);
  ellipse(x + 200, y + 50, 20 * s);
  pop();
}

function startButton() {
  if (start === false) {
    landing = false;
    push();
    noStroke();
    fill(110, 60, 32);
    rect(290, 190, 220, 120);
    ellipse(300, 250, 60);
    ellipse(500, 250, 60);
    fill(118, 71, 44);
    frame(300, 200, 1);
    pop();
    fill(255, 197, 58);
    textSize(50);
    text("START", 320, 225, 180, 80);
    rocketY = 0;
    s = 1.1;
    gamecount = 0;
    resultcount = 0;
    landed = false;
    points = 0;
    fill(255, 232, 179);
    textSize(30);
    text("PRESS START", 20, 70);
    text("    TO PLAY", 20, 100);
    text("PRESS ANY", 315, 70);
    text("KEY TO FLY", 315, 100);
    text("CLICK MOUSE", 550, 70);
    text(" TO RESTART", 550, 100);

    //CLICK MOUSE TO REPLAY
  }
}

function fuel() {
  if (gamecount <= 278) {
    gamecount = gamecount + 2;
    push();
    noStroke();
    fill(255, 232, 179);
    rect(10, 10, 280 - gamecount, 20);
    textSize(20);
    text("ENERGY", 295 - gamecount, 30);
    pop();
  }
}

function specks(x, y, s) {
  fill(110, 60, 32);
  for (let i = 0; i < 900; i = i + 225) {
    ellipse(x + i, y, 15 * s, 5 * s);
  }
  for (let i = 0; i < 900; i = i + 285) {
    ellipse(x + i + 10, y + 10, 15 * s, 5 * s);
  }
  for (let i = 0; i < 900; i = i + 205) {
    ellipse(x + i + 50, y + 40, 15 * s, 5 * s);
  }
  for (let i = 0; i < 900; i = i + 205) {
    ellipse(x + i - 30, y + 20, 15 * s, 5 * s);
  }
}

//Screens
function playScreen() {
  clear();
  background(191, 120, 78);

  for (let i = 0; i < 900; i = i + 80) {
    push();
    strokeWeight(7);
    stroke(179, 104, 60);
    line(i, 0, i, 600);
    fill(179, 104, 60);
    ellipse(i + 40, 475, 5);
    pop();
  }

  push();
  noStroke();
  fill(118, 71, 44);
  rect(0, 500, 1000, 400);
  specks(18, 510, 1);
  specks(-12, 555, 1);
  specks(123, 595, 1);
  pop();

  push();
  stroke(159, 179, 60);
  grass1();
  grass2();

  pop();

  if (start === true && landing === false) {
    if (keyIsPressed && gamecount <= 278 && landing === false) {
      flappingWings(width / 2, rocketY + 30);
      legs(width / 2, rocketY + 30);
    }
    rocket(width / 2 - 40, rocketY);
  }

  startButton();

  if (
    mouseIsPressed &&
    mouseX > 300 &&
    mouseX < 500 &&
    mouseY > 200 &&
    mouseY < 300
  ) {
    start = true;
  }
  if (start === true && landing === false) {
    fuel();

    //Regelt Ab- und Auftrieb
    if (rocketY < 400) {
      rocketY = rocketY + s;
      if (keyIsPressed && gamecount <= 278) {
        up();
      } else {
        down();
      }
    }
  }

  //Regelt die Endposition
  if (rocketY >= 400) {
    rocketY = 400;
  }

  //Checkt Geschwindigkeit
  if (rocketY >= 400 && s > 5) {
    landing = "crash";
  }
  if (rocketY >= 400 && s <= 5) {
    landing = "success";
  }

  if (landing === "crash") {
    resultcount = resultcount + 1;
    if (resultcount < 80) {
      BOING();
    } else {
      scrambledEggs(width / 2, 500);
    }
    lose();
    if (resultcount === 170) {
      start = false;
      state = "resultCrash";
      speed = Math.round(s * 10);
    }
  }
  if (landing === "success") {
    resultcount = resultcount + 1;
    if (resultcount < 80) {
      BOING();
    } else {
      chick(width / 2, 440);
    }
    win();
    if (resultcount === 170) {
      start = false;
      state = "resultSuccess";
      speed = Math.round(s * 10);
      calculatePoints();
      console.log(points);
    }
  }

  stroke(131, 160, 35);
  grass2(width / 2 + 150, 900, 1, 1);
  grass1(width / 2 + 250, 800, 1, 1);

  stroke(131, 160, 35);
  grass1(width / 2 + (width / 2 + 140), 630, 1.2, 1);
  grass2(210, 600, 1, 1);

  stroke(159, 179, 60);

  grass2(width / 2 + 400, 850, 1, 1);
  grass1(width / 2 - 50, 720, 1, 1);
}

function resultSuccessScreen() {
  resultcount = resultcount + 1;
  background(222, 157, 68, 15);
  if (resultcount > 200) {
    success();
    stroke(255);
    strokeWeight(10);
    noFill();
    rect(-5, -5, 780, 620);
    pop();
  }
}

function resultCrashScreen() {
  resultcount = resultcount + 1;
  background(30, 10, 60, 15);
  if (resultcount > 200) {
    failure();
    stroke(255);
    strokeWeight(10);
    noFill();
    rect(-5, -5, 780, 620);
    pop();
  }
}

function flappingWings(x, y) {
  if (wings === "up" && rotation <= 0.3) {
    rotation = rotation + 0.15;
    if (rotation >= 0.3) {
      wings = "down";
    }
  }
  if (wings === "down" && rotation >= -0.4) {
    rotation = rotation - 0.14;
    if (rotation <= -0.4) {
      wings = "up";
    }
  }

  push();
  translate(x - 10, y);
  rotate(-rotation);
  leftWing(0, 0);
  pop();
  push();
  translate(x + 10, y);
  rotate(rotation);
  rightWing(0, 0);
  pop();
}

function draw() {
  push();
  translate(10, 10);
  if (state === "play") {
    playScreen();
    stroke(255, 232, 179);
    strokeWeight(10);
    noFill();
    rect(-5, -5, 780, 620);
    pop();
  } else if (state === "resultSuccess") {
    resultSuccessScreen();
  } else if (state === "resultCrash") {
    resultCrashScreen();
  }
}

function mouseClicked() {
  if (state === "resultCrash" || state === "resultSuccess") {
    state = "play";
    landing = false;
  }
}
