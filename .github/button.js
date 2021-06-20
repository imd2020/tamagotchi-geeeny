export default class Button {
  constructor(x, y, s, message, length) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.message = message;
    this.length = length;
    this.showCover = false;
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
    strokeWeight(15);
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
      this.frame();
    }
    fill("orange");
    noStroke();
    rect(0, 0, this.length * this.s, 80 * this.s, 20);
    fill("white");
    textSize(25 * (this.s * 1.2));
    textAlign(CENTER);
    text(this.message, this.length * 0.5 * this.s, 50 * this.s);
    if (this.hitTest()) {
      this.cover();
    }
    pop();
  }
}
