export default class Creature {
  constructor(x, y, mood, color1, color2, color3) {
    this.x = x;
    this.y = y;
    this.mood = mood;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
  }

  ears(rotation) {
    push();
    if (this.mood === "sleepy" || this.mood === "waking")
      if (mouseX > 170 && mouseX < this.x - 20) {
        rotate(-0.2);
      } else if (mouseX > this.x + 20 && mouseX < 440) {
        rotate(0.2);
      }
    fill(this.color1);
    strokeWeight(5);
    stroke(this.color2);
    push();
    translate(-30, -27);
    rotate(-rotation);
    ellipse(-5, -5, 35, 45);
    pop();

    push();
    translate(30, -27);
    rotate(rotation);
    ellipse(5, -5, 35, 45);
    pop();
    pop();
  }

  eyes() {
    push();
    fill(this.color3);
    if (
      this.mood !== "dead" &&
      this.mood !== "sleepy" &&
      this.mood !== "waking"
    ) {
      rect(-25, 5, 10, -20, 100);
      rect(25, 5, -10, -20, 100);
    }
    fill(this.color2);
    if (this.mood === "happy") {
      rect(-27, 20, 15, -20, 100);
      rect(27, 20, -15, -20, 100);
    }
    if (this.mood === "angry") {
      rect(-26, -10, 15, -20, 100);
      rect(26, -10, -15, -20, 100);
    }
    if (this.mood === "sad") {
      rect(-30, -10, 15, -20, 100);
      rect(30, -10, -15, -20, 100);
    }
    if (this.mood === "dead") {
      push();
      fill(this.color3);
      translate(-30, 15);
      rotate(0.8);
      rect(0, 0, 5, -25, 100);
      pop();
      push();
      fill(this.color3);
      translate(-9, 15);
      rotate(-0.8);
      rect(0, 0, -5, -25, 100);
      pop();

      push();
      fill(this.color3);
      translate(9, 15);
      rotate(0.8);
      rect(0, 0, 5, -25, 100);
      pop();
      push();
      fill(this.color3);
      translate(30, 15);
      rotate(-0.8);
      rect(0, 0, -5, -25, 100);
      pop();
    }
    if (this.mood === "sleepy") {
      push();
      if (mouseX > 170 && mouseX < this.x - 20) {
        rotate(-0.2);
      } else if (mouseX > this.x + 20 && mouseX < 440) {
        rotate(0.2);
      }
      fill(this.color3);
      noStroke();
      rect(-25, 10, 10, -20, 100);
      rect(25, 10, -10, -20, 100);
      fill(this.color2);
      rect(-25, 5, 10, -20, 100);
      rect(25, 5, -10, -20, 100);
      pop();
      push();
      textSize(10);
      noStroke();
      fill(this.color2);
      text("Z", 20, -50);
      textSize(20);
      text("Z", 35, -56);
      textSize(30);
      text("Z", 55, -80);
      pop();
    }
    if (this.mood === "waking") {
      push();
      if (mouseX > 170 && mouseX < this.x - 20) {
        rotate(-0.2);
      } else if (mouseX > this.x + 20 && mouseX < 440) {
        rotate(0.2);
      }
      fill(this.color3);
      noStroke();
      rect(-25, 10, 10, -20, 100);
      rect(25, 10, -10, -20, 100);
      fill(this.color2);
      rect(-27, 0, 12, -20, 100);
      rect(27, 0, -12, -20, 100);
      textSize(10);
      pop();
    }
    pop();
  }

  mouth() {
    push();
    stroke(this.color3);
    strokeWeight(3);
    if (this.mood === "happy") {
      fill(this.color1);
      arc(0, 10, 20, 40, 0, PI, CHORD);
    }
    if (this.mood === "neutral") {
      noFill();
      arc(0, 10, 15, 15, 0.4, PI - 0.4);
    }
    if (this.mood === "angry" || this.mood === "sad") {
      noFill();
      arc(0, 18, 15, 20, PI + 0.3, -0.3);
    }
    if (this.mood === "dead") {
      stroke(this.color3);
      strokeWeight(3);
      rect(-10, 22, 20, 10, 20);
    }
    if (this.mood === "sleepy" || this.mood === "waking") {
      push();
      if (mouseX > 170 && mouseX < this.x - 20) {
        rotate(-0.2);
      } else if (mouseX > this.x + 20 && mouseX < 440) {
        rotate(0.2);
      }
      fill(this.color1);
      stroke(this.color3);
      strokeWeight(3);
      arc(0, 20, 15, 10, PI - 0.6, 0.6, CHORD);
      pop();
    }

    pop();
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    if (this.mood === "neutral" || this.mood === "waking") {
      if (this.mood === "waking") {
        push();
        if (mouseX > 170 && mouseX < this.x - 20) {
          rotate(-0.2);
        } else if (mouseX > this.x + 20 && mouseX < 440) {
          rotate(0.2);
        }
        pop();
      }
      this.ears(0.9);
    } else if (this.mood === "happy") {
      this.ears(0.4);
    } else if (
      this.mood === "sad" ||
      this.mood === "angry" ||
      this.mood === "sleepy"
    ) {
      if (this.mood === "sleepy") {
        push();
        if (mouseX > 170 && mouseX < this.x - 20) {
          rotate(-0.2);
        } else if (mouseX > this.x + 20 && mouseX < 440) {
          rotate(0.2);
        }
        pop();
      }
      this.ears(1.3);
    } else if (this.mood === "dead") {
      this.ears(1.5);
    }

    //Body
    fill(this.color2);
    ellipse(0, 2, 100, 95);
    //Feet
    fill(this.color1);
    push();
    translate(35, 50);
    rotate(-0.4);
    arc(0, 0, 50, 40, PI + 0.4, 2 * PI + 0.4, OPEN);
    pop();
    //
    push();
    translate(-35, 50);
    rotate(0.4);
    arc(0, 0, 50, 40, PI - 0.4, 2 * PI - 0.4, OPEN);
    pop();

    //Eyes n mouth
    this.eyes();
    this.mouth();
    pop();
  }
}
