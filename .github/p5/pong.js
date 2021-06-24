//variables
//gamestates
let state = "start";
let timer = 0;

//bats
let batLy = 260;
let batRy = 260;
let cyan = {
  light: color(191, 255, 245),
  main: color(111, 234, 255),
  glow: color(111, 234, 255, 20),
};
let lime = {
  light: color(250, 255, 175),
  main: color(200, 255, 70),
  glow: color(200, 255, 70, 20),
};
let mint = {
  light: color(192, 255, 191),
  main: color(70, 255, 149),
  glow: color(70, 255, 149, 20),
};
let purple = {
  light: color(214, 177, 255),
  main: color(134, 93, 255),
  glow: color(134, 93, 255, 20),
};
let pink = {
  light: color(255, 203, 250),
  main: color(255, 111, 243),
  glow: color(255, 111, 243, 22),
};
let red = {
  light: color(255, 197, 213),
  main: color(255, 70, 131),
  glow: color(255, 70, 131, 23),
};

let coloringR = false;
let coloringL = false;
let rChoosing = "now";
let lChoosing = false;

//ball
let ballX = -10;
let ballY = 0;
let starter = "R";
let thrown = false;
let wannaThrow = false;
let direction = 0; //random(1.5, 5); (umpositioniert, siehe keyReleased)
let upOrDown = 0; //Math.round(random(0, 1));
let angle = 0;
let wallContact = false;
let flight = false;
let settingFlight = false;
let balance = 0;
let tx = 0;
let ty = 0;
if (starter === "L") {
  tx = 700;
  ty = batLy + 40;
} else if (starter === "R") {
  tx = 100;
  ty = batRy + 40;
}
//Points
let pointsR = 0;
let pointsL = 0;
let scoring = false;
//booster
let speed = 1;
let batSpeedR = 1;
let batSpeedL = 1;
let speedboostR = false;
let wallboostR = false;
let batboostR = false;
let speedboostL = false;
let wallboostL = false;
let batboostL = false;
let actBL = 0;
let actBR = 0;
let deactBL = 0;
let deactBR = 0;
let actS = 0;
let actWL = 0;
let actWR = 0;
let deactWR = 0;
let deactWL = 0;

//Ich habe Rechts und Links verwechselt.
//Ich wollte es ändern, aber mein Gehirn hat
//sich schon so daran gewöhnt, dass es mich gestört hätte.
//R steht in diesem Spiel also für den linken Schläger
//Und L für den Rechten.
//Es tut mir leid :'|
//Ich war sehr müde?

function field() {
  push();
  noFill();
  stroke(coloringL.main);
  rect(91, 53, 610, 500);
  stroke(0, 0, 0, 120);
  rect(91, 53, 610, 500);
  stroke(coloringR.main);
  rect(95 + 4, 50 - 3, 610, 500);
  stroke(0, 0, 0, 120);
  rect(95 + 4, 50 - 3, 610, 500);

  stroke(255);
  strokeWeight(2);
  rect(95, 50, 610, 500);
  line(400, 50, 400, 550);
  pop();
  if (wallboostL === "active" || wallboostR === "active") {
    push();
    noStroke();
    fill(coloringR.glow);
    rect(380, 50, 20, 500);
    fill(coloringL.glow);
    rect(400, 50, 20, 500);
    fill(coloringR.main);
    rect(386, 50, 10, 500);
    fill(coloringL.main);
    rect(404, 50, 10, 500);
    fill(coloringR.light);
    rect(392, 50, 10, 500);
    fill(coloringL.light);
    rect(400, 50, 8, 500);
    fill(255);
    rect(395, 50, 10, 500);
    pop();
  }
  score(0);
}
function restartButton() {
  push();
  fill(255);
  rect(250, 600, 300, 70);
  fill(0);
  textAlign(CENTER);
  textSize(50);
  text("RESTART", 400, 655);
  fill(255);
  textSize(16.5);
  if (state === "game") {
    text("YOU LOSE YOUR CURRENT SCORES", 401, 690);
  }
  pop();
  if (mouseIsPressed) {
    if (
      state === "game" &&
      mouseY > 600 &&
      mouseY < 670 &&
      mouseX > 250 &&
      mouseX < 550
    ) {
      state = "start";
      coloringR = false;
      coloringL = false;
      rChoosing = "now";
      lChoosing = false;

      //ball
      ballX = -10;
      ballY = 0;
      starter = "L";
      thrown = false;
      wannaThrow = false;
      direction = 0; //random(1.5, 5); (umpositioniert, siehe keyReleased)
      upOrDown = 0; //Math.round(random(0, 1));
      angle = 0;
      wallContact = false;
      flight = false;
      settingFlight = false;
      balance = 0;
      tx = 0;
      ty = 0;
      if (starter === "L") {
        tx = 700;
        ty = batLy + 40;
      } else if (starter === "R") {
        tx = 100;
        ty = batRy + 40;
      }
      //Points
      pointsR = 0;
      pointsL = 0;
      scoring = false;
      //booster
      speed = 1;
      batSpeedR = 1;
      batSpeedL = 1;
      speedboostR = false;
      wallboostR = false;
      batboostR = false;
      speedboostL = false;
      wallboostL = false;
      batboostL = false;
      actBL = 0;
      actBR = 0;
      deactBL = 0;
      deactBR = 0;
      actS = 0;
      actWL = 0;
      actWR = 0;
      deactWL = 0;
      deactWR = 0;
    }
    if (
      state === "end" &&
      mouseY > 600 &&
      mouseY < 670 &&
      mouseX > 250 &&
      mouseX < 550
    ) {
      state = "start";
      coloringR = false;
      coloringL = false;
      rChoosing = "now";
      lChoosing = false;

      //ball
      ballX = -10;
      ballY = 0;
      starter = "L";
      thrown = false;
      wannaThrow = false;
      direction = 0; //random(1.5, 5); (umpositioniert, siehe keyReleased)
      upOrDown = 0; //Math.round(random(0, 1));
      angle = 0;
      wallContact = false;
      flight = false;
      settingFlight = false;
      balance = 0;
      tx = 0;
      ty = 0;
      if (starter === "L") {
        tx = 700;
        ty = batLy + 40;
      } else if (starter === "R") {
        tx = 100;
        ty = batRy + 40;
      }
      //Points
      pointsR = 0;
      pointsL = 0;
      scoring = false;
      //booster
      speed = 1;
      batSpeedR = 1;
      batSpeedL = 1;
      speedboostR = false;
      wallboostR = false;
      batboostR = false;
      speedboostL = false;
      wallboostL = false;
      batboostL = false;
      actBL = 0;
      actBR = 0;
      deactBL = 0;
      deactBR = 0;
      actS = 0;
      actWL = 0;
      actWR = 0;
      deactWL = 0;
      deactWR = 0;
    }
  }
}

function keyReleased() {
  if (thrown === false) {
    if (
      (starter === "R" && key === "d") ||
      (starter === "L" && key === "ArrowLeft")
    ) {
      thrown = true;
      direction = random(1.5, 5);
      upOrDown = Math.round(random(0, 1));
    }
  }
  if (wallboostL === "available" && key === "ArrowRight") {
    wallboostL = "active";
  }
  if (wallboostR === "available" && key === "a") {
    wallboostR = "active";
  }
}

function switchingW() {
  if (wallContact === false) {
    wallContact = true;
  } else if (wallContact === true) {
    wallContact = false;
  }
  if (flight === "rising") {
    flight = "falling";
  } else if (flight === "falling") {
    flight = "rising";
  }
}

function switchingB() {
  if (speed === 1 || direction >= 5) {
    if (
      (ballX >= 105 &&
        ballX <= 110 &&
        ballY > batRy - 5 &&
        ballY < batRy + 85) ||
      (ballX >= 690 && ballX <= 695 && ballY > batLy - 5 && ballY < batLy + 85)
    ) {
      if (speedboostL === false || speedboostR === false) {
        actS++;
      }
      if (wallboostR === "active") {
        deactWR++;
        //console.log(deactWR);
      }
      if (wallboostL === "active") {
        deactWL++;
        //console.log(deactWL);
      }

      if (starter === "R") {
        starter = "L";
      } else if (starter === "L") {
        starter = "R";
      }
    }
  } else if (speed > 1 || direction < 5) {
    if (
      (ballX >= 100 &&
        ballX <= 110 &&
        ballY > batRy - 5 &&
        ballY < batRy + 85) ||
      (ballX >= 690 && ballX <= 700 && ballY > batLy - 5 && ballY < batLy + 85)
    ) {
      if (starter === "R") {
        starter = "L";
      } else if (starter === "L") {
        starter = "R";
      }
    }
  } else if (speed < 1 || direction <= 1.02) {
    if (
      (ballX >= 100 &&
        ballX <= 130 &&
        ballY > batRy - 5 &&
        ballY < batRy + 85) ||
      (ballX >= 600 && ballX <= 700 && ballY > batLy - 5 && ballY < batLy + 85)
    ) {
      if (starter === "R") {
        starter = "L";
      } else if (starter === "L") {
        starter = "R";
      }
    }
  }
  if (wallboostR === "active" || wallboostL === "active") {
    if (ballX >= 380 && ballX < 400) {
      starter = "L";
    } else if (ballX > 400 && ballX <= 420) {
      starter = "R";
    }
  }
}

function setFlight() {
  if (upOrDown === 0) {
    flight = "rising";
  } else if (upOrDown === 1) {
    flight = "falling";
  }
  settingFlight = true;
}

function okToScore() {
  if (
    (scoring === false && ballX > 700) ||
    (scoring === false && ballX < 100)
  ) {
    scoring = "score";
  }
}

function points() {
  if (scoring === "score") {
    if (ballX < 100) {
      pointsL = pointsL + 1;
      actBR++;
      actBL = 0;
    }
    if (ballX > 700) {
      pointsR = pointsR + 1;
      actBL++;
      actBR = 0;
    }
    if (batboostR === "active") {
      deactBR++;
      console.log(deactBR);
    }
    if (batboostL === "active") {
      deactBL++;
    }
    scoring = "done";
  }
}

function score(y) {
  textSize(90);
  textAlign(LEFT);
  fill(coloringL.glow);
  text(pointsL, 425, 130 + y, 50);
  text(pointsL, 425, 130 + y, 50);
  text(pointsL, 425, 130 + y, 50);
  text(pointsL, 425, 130 + y, 50);
  text(pointsL, 425, 130 + y, 50);
  text(pointsL, 425, 130 + y, 50);

  fill(coloringR.glow);
  text(pointsL, 435, 130 + y, 50);
  text(pointsL, 435, 130 + y, 50);
  text(pointsL, 435, 130 + y, 50);
  text(pointsL, 435, 130 + y, 50);
  text(pointsL, 435, 130 + y, 50);
  text(pointsL, 435, 130 + y, 50);

  fill(255);
  text(pointsL, 430, 130 + y, 50);

  textAlign(RIGHT);
  fill(coloringR.glow);
  text(pointsR, 340, 130 + y, 50);
  text(pointsR, 340, 130 + y, 50);
  text(pointsR, 340, 130 + y, 50);
  text(pointsR, 340, 130 + y, 50);
  text(pointsR, 340, 130 + y, 50);
  text(pointsR, 340, 130 + y, 50);

  fill(coloringL.glow);
  text(pointsR, 330, 130 + y, 50);
  text(pointsR, 330, 130 + y, 50);
  text(pointsR, 330, 130 + y, 50);
  text(pointsR, 330, 130 + y, 50);
  text(pointsR, 330, 130 + y, 50);
  text(pointsR, 330, 130 + y, 50);

  fill(255);
  text(pointsR, 335, 130 + y, 50);
}
function restartL() {
  actS = 0;
  speedboostR = false;
  speedboostL = false;
  starter = "L";
  thrown = false;
  scoring = false;
  settingFlight = false;
  startposition();
  if (starter === "L") {
    tx = 700;
    ty = batLy + 40;
  } else if (starter === "R") {
    tx = 100;
    ty = batRy + 40;
  }
}

function restartR() {
  actS = 0;
  speedboostR = false;
  speedboostL = false;
  starter = "R";
  thrown = false;
  scoring = false;
  settingFlight = false;
  startposition();
  if (starter === "L") {
    tx = 700;
    ty = batLy + 40;
  } else if (starter === "R") {
    tx = 100;
    ty = batRy + 40;
  }
}
function moveBall() {
  if (thrown === true) {
    if (upOrDown === 0) {
      angle = -1;
    } else if (upOrDown === 1) {
      angle = 1;
    }

    if (settingFlight === false) {
      setFlight();
    }
    if (ballY >= 535 || ballY <= 65) {
      switchingW();
    }
    if (wallContact === false) {
      ballY = ballY + angle * direction * speed;
    }
    if (wallContact === true) {
      ballY = ballY - angle * direction * speed;
    }

    switchingB();
    //console.log(direction);

    if ((ballX >= 100 && ballX <= 109) || (ballX >= 691 && ballX <= 700)) {
      if (
        (ballY > batRy - 5 &&
          ballY < batRy + 10 &&
          ballX >= 100 &&
          ballX <= 109) ||
        (ballY > batLy - 5 &&
          ballY < batLy + 10 &&
          ballX >= 691 &&
          ballX <= 700) ||
        (ballY > batRy + 70 &&
          ballY < batRy + 85 &&
          ballX >= 100 &&
          ballX <= 109) ||
        (ballY > batLy + 70 &&
          ballY < batLy + 85 &&
          ballX >= 691 &&
          ballX <= 700)
      ) {
        if (flight === "falling") {
          if (
            (ballY > batRy - 5 && ballY < batRy + 15) ||
            (ballY > batLy - 5 && ballY < batLy + 15)
          ) {
            switchingW();
          }
        } else if (flight === "rising") {
          if (
            (ballY > batRy + 65 && ballY < batRy + 85) ||
            (ballY > batLy + 65 && ballY < batLy + 85)
          ) {
            switchingW();
          }
        }
      }
    }

    //Y-Richtung
    if (starter === "R") {
      ballX = ballX + (8 - direction) * speed;
    } else if (starter === "L") {
      ballX = ballX - (8 - direction) * speed;
    }
  }

  //Abseits
  if (pointsL < 10 && pointsR < 10) {
    if (ballX < -200) {
      restartL();
    }
    if (ballX > 1000) {
      restartR();
    }
  }
}

function ball(x, y) {
  push();
  noStroke();
  if (starter === "L") {
    if (thrown === true) {
      fill(coloringL.glow);
      triangle(x, y + 9, x, y - 9, tx, ty);
      triangle(x, y + 9, x, y - 9, tx, ty);
      triangle(x, y + 9, x, y - 9, tx, ty);
      tx = tx + (x - tx) / 10;
      ty = ty + (y - ty) / 10;
    }
    fill(coloringL.glow);
    ellipse(x, y, 25);
    fill(coloringL.main);
    ellipse(x, y, 17);
    fill(coloringL.light);
    ellipse(x, y, 13);
  } else if (starter === "R") {
    if (thrown === true) {
      fill(coloringR.glow);
      triangle(x, y + 9, x, y - 9, tx, ty);
      triangle(x, y + 9, x, y - 9, tx, ty);
      triangle(x, y + 9, x, y - 9, tx, ty);
      tx = tx + (x - tx) / 10;
      ty = ty + (y - ty) / 10;
    }
    fill(coloringR.glow);
    ellipse(x, y, 25);
    fill(coloringR.main);
    ellipse(x, y, 17);
    fill(coloringR.light);
    ellipse(x, y, 13);
  }

  fill(255);
  ellipse(x, y, 10);
  pop();
}
function startposition() {
  speed = 1;
  if (starter === "R" && thrown === false) {
    ballX = 115;
    ballY = batRy + 40;
  }
  if (starter === "L" && thrown === false) {
    ballX = 686;
    ballY = batLy + 40;
  }
}

//bats
function batPartR1(x, y) {
  push();
  noStroke();
  arc(x + 5, y + 15, 20, 30, -1.8, 1);
  arc(x + 5, y + 65, 20, 30, -1, 1.8);
  rect(x, y + 15, 15, 50);
  rect(x, y + 5, 10, 70);
  ellipse(x + 5, y + 5, 10);
  ellipse(x + 5, y + 75, 10);
  pop();
}
function batPartR2(y) {
  push();
  noStroke();
  arc(95, y + 11, 10, 15, -1.8, 1);
  arc(95, y + 69, 10, 15, -1, 1.8);
  rect(95, y + 11, 5, 60);
  rect(93, y + 5, 5, 70);
  pop();
}
function batPartL1(x, y) {
  push();
  noStroke();
  arc(x + 5, y + 15, 20, 30, 1.8, -1.2);
  arc(x + 5, y + 65, 20, 30, 1.2, -1.8);
  rect(x - 5, y + 15, 15, 50);
  rect(x, y + 5, 10, 70);
  ellipse(x + 5, y + 5, 10);
  ellipse(x + 5, y + 75, 10);
  pop();
}
function batPartL2(x, y) {
  push();
  noStroke();
  arc(x + 5, y + 11, 10, 15, 1.8, -1.2);
  arc(x + 5, y + 69, 10, 15, 1.4, -1.8);
  rect(x, y + 11, 5, 60);
  rect(x + 2, y + 5, 5, 70);
  pop();
}
function batR(values, y) {
  push();
  noStroke();
  fill(values.glow);
  rect(80, y - 10, 33, 100, 50);
  rect(85, y - 5, 24, 90, 50);
  if (batboostR === "active") {
    rect(75, y - 20, 43, 120, 50);
    rect(195, 555, 42, 42, 10);
    rect(195, 555, 42, 42, 10);
  }
  pop();
  fill(values.main);
  batPartR1(90, y);
  fill(values.light);
  batPartR2(y);
  fill(255);
  push();
  noStroke();
  arc(94, y + 40, 7, 60, 4.8, 1.6);
  pop();
}
function batL(values, y) {
  push();
  noStroke();
  fill(values.glow);
  rect(688, y - 10, 33, 100, 50);
  rect(692, y - 5, 24, 90, 50);
  if (batboostL === "active") {
    rect(683, y - 20, 43, 120, 50);
    rect(665, 555, 42, 42, 10);
    rect(665, 555, 42, 42, 10);
    //rect(662,552, 48, 48, 10);
  }
  pop();
  fill(values.main);
  batPartL1(701, y);
  fill(values.light);
  batPartL2(701, y);
  fill(255);
  push();
  noStroke();
  arc(707, y + 40, 7, 60, 1.6, 4.8);
  pop();
}

//Move the bats
function moveBatL() {
  if (keyIsDown(38) && batLy > 55) {
    batLy = batLy - 5 * batSpeedL;
  }
  if (keyIsDown(40) && batLy < 465) {
    batLy = batLy + 5 * batSpeedL;
  }
}
function moveBatR() {
  if (keyIsDown(87) && batRy > 55) {
    batRy = batRy - 5 * batSpeedR;
  }
  if (keyIsDown(83) && batRy < 465) {
    batRy = batRy + 5 * batSpeedR;
  }
}

//Booster
function speedboost(values, x) {
  push();
  stroke(values.light);
  fill(0);
  rect(x, 560, 30, 30);
  fill(values.light);
  noStroke();
  triangle(x + 5, 565, x + 5, 585, x + 18, 575);
  triangle(x + 15, 565, x + 15, 585, x + 28, 575);
  pop();
}
function wallboost(values, x) {
  push();
  fill(0);
  stroke(values.light);
  rect(x, 560, 30, 30);
  fill(values.light);
  noStroke();
  rect(x, 565, 12, 21);
  rect(x + 19, 565, 12, 21);
  stroke(255);
  line(x + 15, 561, x + 15, 589);
  pop();
}
function batboost(values, x) {
  push();
  stroke(values.light);
  fill(5);
  rect(x, 560, 30, 30);
  noStroke();
  fill(values.light);
  ellipse(x + 20, 567, 6);
  rect(x + 10, 563, 4, 15);
  fill(255, 255, 255, 90);
  ellipse(x + 22, 569, 6);
  rect(x + 10, 567, 4, 15);
  fill(255, 255, 255, 50);
  ellipse(x + 24, 571, 6);
  rect(x + 10, 571, 4, 15);
  pop();
}
function boosterR() {
  speedboost(coloringR, 100);
  if (speedboostR === false) {
    push();
    noStroke();
    fill(0, 0, 0, 200);
    rect(100, 560, 31, 31);
    pop();
  }

  wallboost(coloringR, 150);
  if (wallboostR === false) {
    push();
    noStroke();
    fill(0, 0, 0, 200);
    rect(150, 560, 31, 31);
    pop();
  }

  batboost(coloringR, 200);
  if (batboostR === false) {
    push();
    noStroke();
    fill(0, 0, 0, 200);
    rect(200, 560, 31, 31);
    pop();
  }
}
function boosterL() {
  speedboost(coloringL, 570);
  if (speedboostL === false) {
    push();
    noStroke();
    fill(0, 0, 0, 200);
    rect(570, 560, 31, 31);
    pop();
  }
  wallboost(coloringL, 620);
  if (wallboostL === false) {
    push();
    noStroke();
    fill(0, 0, 0, 200);
    rect(620, 560, 31, 31);
    pop();
  }
  batboost(coloringL, 670);
  if (batboostL === false) {
    push();
    noStroke();
    fill(0, 0, 0, 200);
    rect(670, 560, 31, 31);
    pop();
  }
}
function boosting() {
  if (batboostL === false) {
    if (actBL >= 3) {
      batboostL = "active";
    }
  } else if (batboostL === "active") {
    if (deactBL >= 3) {
      batboostL = false;
      deactBL = 0;
      actBL = 0;
    }
  }

  if (batboostR === false) {
    if (actBR >= 3) {
      batboostR = "active";
    }
  } else if (batboostR === "active") {
    if (deactBR >= 3) {
      batboostR = false;
      deactBR = 0;
      actBR = 0;
    }
  }

  if (batboostR === "active") {
    batSpeedR = 2;
  } else {
    batSpeedR = 1;
  }
  if (batboostL === "active") {
    batSpeedL = 2;
  } else {
    batSpeedL = 1;
  }
  if (actS >= 5) {
    speedboostL = "active";
    speedboostR = "active";
  }
  if (speedboostL === "active" || speedboostR === "active") {
    speed = 1.5;
  }

  actWL = pointsR - pointsL;
  actWR = pointsL - pointsR;
  if (wallboostL === false) {
    if (actWL >= 5) {
      wallboostL = "available";
    }
  }
  if (wallboostR === false) {
    if (actWR >= 5) {
      wallboostR = "available";
    }
  }
  if (deactWR >= 5) {
    wallboostR = false;
    actWR = 0;
    deactWR = 0;
  }
  if (deactWL >= 5) {
    wallboostL = false;
    actWL = 0;
    deactWL = 0;
  }
}

//Starters
function selection() {
  fill(lime.main);
  rect(100, 200, 70, 70);
  fill(mint.main);
  rect(205, 200, 70, 70);
  fill(cyan.main);
  rect(310, 200, 70, 70);
  fill(purple.main);
  rect(415, 200, 70, 70);
  fill(pink.main);
  rect(520, 200, 70, 70);
  fill(red.main);
  rect(625, 200, 70, 70);
}
function frame1(x) {
  push();
  fill(255);
  textSize(15);
  text("PLAYER 1", x - 5, 192);
  strokeWeight(10);
  stroke(255);
  noFill();
  rect(x, 200, 70, 70);
  pop();
}
function frame2(x) {
  push();
  fill(255);
  textSize(15);
  textAlign(RIGHT);
  text("PLAYER 2", x + 77, 290);
  strokeWeight(10);
  stroke(255);
  noFill();
  rect(x, 200, 70, 70);
  pop();
}
function choosingR() {
  if (coloringR === lime) {
    frame1(100);
  } else if (coloringR === mint) {
    frame1(205);
  } else if (coloringR === cyan) {
    frame1(310);
  } else if (coloringR === purple) {
    frame1(415);
  } else if (coloringR === pink) {
    frame1(520);
  } else if (coloringR === red) {
    frame1(625);
  }

  if (mouseIsPressed) {
    if (rChoosing === "now")
      if (mouseY > 200 && mouseY < 270) {
        if (mouseX > 100 && mouseX < 170) {
          coloringR = lime;
          frame1(100);
        }
        if (mouseX > 205 && mouseX < 275) {
          coloringR = mint;
          frame1(205);
        }
        if (mouseX > 310 && mouseX < 380) {
          coloringR = cyan;
          frame1(310);
        }
        if (mouseX > 415 && mouseX < 485) {
          coloringR = purple;
          frame1(415);
        }
        if (mouseX > 520 && mouseX < 590) {
          coloringR = pink;
          frame1(520);
        }
        if (mouseX > 625 && mouseX < 695) {
          coloringR = red;
          frame1(625);
        }
      }

    if (
      mouseY > 300 &&
      mouseY < 350 &&
      mouseX > 100 &&
      mouseX < 700 &&
      rChoosing === "now" &&
      coloringR !== false &&
      lChoosing === false
    ) {
      rChoosing = "done";
      lChoosing = "now";
      if (timer < 100) {
        timer++;
      }
    }
  }
}
function choosingL() {
  if (coloringL === lime) {
    frame2(100);
  } else if (coloringL === mint) {
    frame2(205);
  } else if (coloringL === cyan) {
    frame2(310);
  } else if (coloringL === purple) {
    frame2(415);
  } else if (coloringL === pink) {
    frame2(520);
  } else if (coloringL === red) {
    frame2(625);
  }

  if (mouseIsPressed) {
    if (lChoosing === "now" && rChoosing === "done")
      if (mouseY > 200 && mouseY < 270) {
        if (mouseX > 100 && mouseX < 170) {
          coloringL = lime;
          frame2(100);
        }
        if (mouseX > 205 && mouseX < 275) {
          coloringL = mint;
          frame2(205);
        }
        if (mouseX > 310 && mouseX < 380) {
          coloringL = cyan;
          frame2(310);
        }
        if (mouseX > 415 && mouseX < 485) {
          coloringL = purple;
          frame2(415);
        }
        if (mouseX > 520 && mouseX < 590) {
          coloringL = pink;
          frame2(520);
        }
        if (mouseX > 625 && mouseX < 695) {
          coloringL = red;
          frame2(625);
        }
      }

    if (lChoosing === "now" && coloringL !== false) {
      if (mouseY > 300 && mouseY < 350 && mouseX > 100 && mouseX < 700) {
        lChoosing = "done";
      }
    }
  }
}

function choiceButton() {
  fill(255);
  rect(100, 300, 595, 50);
  fill(0);
  push();
  textSize(30);
  textAlign(CENTER);
  text("ENTER CHOICE", 400, 335);
  pop();
}
function startButton() {
  push();
  fill(255);
  rect(200, 400, 400, 100);
  fill(0);
  textSize(60);
  textAlign(CENTER);
  text("START", 400, 470);
  pop();
}

//results
function lWins() {
  push();
  textSize(40);
  textAlign(LEFT);
  fill(coloringR.main);
  text("YOU LOSE, PLAYER 1!", 100, 300);
  fill(coloringL.main);
  text("YOU WIN, PLAYER 2!", 272, 450);
  fill(255);
  text("YOU LOSE, PLAYER 1!", 102, 300);
  text("YOU WIN, PLAYER 2!", 270, 450);
  noFill();
  stroke(255);
  strokeWeight(10);
  //rect(420,300,125,125);
  pop();
}
function rWins() {
  push();
  textSize(40);
  textAlign(LEFT);
  fill(coloringR.main);
  text("YOU WIN, PLAYER 1!", 100, 300);
  fill(coloringL.main);
  text("YOU LOSE, PLAYER 2!", 272, 450);
  fill(255);
  text("YOU WIN, PLAYER 1!", 102, 300);
  text("YOU LOSE, PLAYER 2!", 270, 450);
  noFill();
  stroke(255);
  strokeWeight(10);
  //rect(250,300,125,125);
  pop();
}
function sky() {
  push();
  for (let i = 0; i < 700; i++) {
    fill(coloringL.main);
    ellipse(10 * i * 10, 520, 10);
  }
  for (let i = 0; i < 700; i++) {
    fill(0, 0, 0, random(100, 150));
    ellipse(10 * i * 20, 520, 10);
  }
  for (let i = 0; i < 700; i++) {
    fill(coloringR.main);
    ellipse(10 * i * 10, 190, 10);
  }
  for (let i = 0; i < 700; i++) {
    fill(0, 0, 0, random(100, 150));
    ellipse(10 * i * 20, 190, 10);
  }
  pop();
}
function lights1() {
  push();
  for (let i = 0; i < 7; i++) {
    fill(coloringL.main);
    ellipse(50, 10 * i * 10 + 10, 10);
  }
  for (let i = 0; i < 7; i++) {
    fill(0, 0, 0, random(100, 150));
    ellipse(50, 10 * i * 10 + 10, 10);
  }
  for (let i = 0; i < 7; i++) {
    fill(coloringR.main);
    ellipse(750, 10 * i * 10 + 10, 10);
  }
  for (let i = 0; i < 7; i++) {
    fill(0, 0, 0, random(100, 150));
    ellipse(750, 10 * i * 10 + 10, 10);
  }
  pop();
}
function lights2() {
  push();
  for (let i = 0; i < 700; i++) {
    fill(red.main);
    ellipse(10 * i * 10, 550, 10);
  }
  for (let i = 0; i < 700; i++) {
    fill(0, 0, 0, random(100, 150));
    ellipse(10 * i * 20, 550, 10);
  }
  for (let i = 0; i < 700; i++) {
    fill(cyan.main);
    ellipse(10 * i * 10, 380, 10);
  }
  for (let i = 0; i < 700; i++) {
    fill(0, 0, 0, random(100, 150));
    ellipse(10 * i * 20, 380, 10);
  }
  pop();
}

//screens
function gameScreen() {
  background(0);
  lights1();
  field();
  batR(coloringR, batRy);
  batL(coloringL, batLy);
  moveBatL();
  moveBatR();

  ball(ballX, ballY);
  moveBall();

  startposition();
  points();
  okToScore();
  boosterR();
  boosterL();
  boosting();
  restartButton();

  if (pointsL > 9 || pointsR > 9) {
    timer++;
    if (timer > 100) {
      state = "end";
    }
  }
}

function startScreen() {
  push();
  textAlign(LEFT);
  background(0);
  lights2();
  if (mouseIsPressed) {
    if (mouseX > 100 && mouseX < 700 && mouseY < 120 && mouseY > 50) {
      console.log("(neon genesis evangeli-pong, haha)", 100, 600);
    }
  }

  fill(255);
  textSize(97);
  text("NEON PONG", 100, 120);
  pop();
  selection();
  if (rChoosing !== "done" || lChoosing !== "done") {
    choiceButton();
  }
  if (lChoosing === "done") {
    startButton();
  }

  if (rChoosing !== "done") {
    push();
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text("CHOOSE A COLOR, PLAYER 1", 99, 170);
    pop();
  } else if (lChoosing !== "done") {
    push();
    textAlign(LEFT);
    fill(255);
    textSize(20);
    text("PLAYER 2, CHOOSE A COLOR", 99, 170);
    pop();
  }
  /*
  if (timer > 50) {
    lChoosing = "now";
}
*/
  choosingL();
  choosingR();
}
function endScreen() {
  timer++;
  background(0, 0, 0, 50);
  if (timer > 150) {
    background(0);
    sky();
    fill(255);
    textSize(97);
    textAlign(LEFT);
    text("NEON PONG", 100, 120);
    if (pointsL > 9) {
      lWins();
    } else if (pointsR > 9) {
      rWins();
    }
    push();
    score(260);
    noStroke();
    fill(255);
    rect(388, 355, 20, 10, 10);
    pop();
    fill(255);
    restartButton();
  }
}

function draw() {
  if (state === "game") {
    gameScreen();
  } else if (state === "start") {
    startScreen();
  } else if (state === "end") {
    endScreen();
  }
  push();
  noFill();
  stroke(255);
  rect(0, 0, 799, 729);
  pop();
}

function mouseReleased() {
  if (mouseY > 400 && mouseY < 500 && mouseX > 200 && mouseX < 600) {
    state = "game";
  }
}
