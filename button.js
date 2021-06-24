export default class Button {
  constructor(x, y, s, message, length, covered, color) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.message = message;
    this.length = length;
    this.covered = covered;
    this.color = color;
  }

  cover() {
    push();
    noStroke();
    translate(this.x, this.y);
    fill(0, 0, 0, 50);
    rect(0, 0, this.length * this.s, 80 * this.s, 20);
    pop();
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.length * this.s &&
      mouseY >= this.y &&
      mouseY <= this.y + 80 * this.s
    ) {
      return true;
    }
  }
  frame() {
    push();
    stroke(255);
    strokeWeight(15 * this.s);
    rect(0, 0, this.length * this.s, 80 * this.s, 20);
    pop();
  }
  display() {
    push();
    translate(this.x, this.y);
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.length * this.s &&
      mouseY >= this.y &&
      mouseY <= this.y + 80 * this.s
    ) {
      if (this.covered === false) {
        this.frame();
      }
    }
    fill(this.color);
    noStroke();
    rect(0, 0, this.length * this.s, 80 * this.s, 20);
    fill("white");
    textSize(25 * (this.s * 1.2));
    textAlign(CENTER);
    text(this.message, this.length * 0.5 * this.s, 50 * this.s);
    pop();
    push();
    if (this.covered === true) {
      this.cover();
    }
    pop();
  }
}
