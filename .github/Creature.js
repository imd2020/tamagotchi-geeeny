export default class Creature {
  constructor(x, y, mood) {
    this.x = x;
    this.y = y;
    this.mood = mood;
  }

  ears(rotation) {
    fill(100);
    noStroke();
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
  }

  eyes() {
    push();
    fill(0);
    if (this.mood !== "dead") {
      rect(-25, 5, 10, -20, 100);
      rect(25, 5, -10, -20, 100);
    }
    fill(200);
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
      fill(0);
      translate(-30, 15);
      rotate(0.8);
      rect(0, 0, 5, -25, 100);
      pop();
      push();
      fill(0);
      translate(-9, 15);
      rotate(-0.8);
      rect(0, 0, -5, -25, 100);
      pop();

      push();
      fill(0);
      translate(9, 15);
      rotate(0.8);
      rect(0, 0, 5, -25, 100);
      pop();
      push();
      fill(0);
      translate(30, 15);
      rotate(-0.8);
      rect(0, 0, -5, -25, 100);
      pop();
    }
    pop();
  }

  mouth() {
    push();
    stroke(0);
    strokeWeight(3);
    if (this.mood === "happy") {
      fill(100);
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
      stroke(0);
      strokeWeight(3);
      rect(-10, 22, 20, 10, 20);
    }

    pop();
  }
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    if (this.mood === "neutral") {
      this.ears(0.9);
    } else if (this.mood === "happy") {
      this.ears(0.4);
    } else if (this.mood === "sad" || this.mood === "angry") {
      this.ears(1.3);
    } else if (this.mood === "dead") {
      this.ears(1.5);
    }

    //Body
    fill(200);
    ellipse(0, 2, 100, 95);
    //Feet
    fill(100);
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