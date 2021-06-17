export default class Button {
  constructor(x, y, s, message, length) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.message = message;
    this.length = length;
  }

  display() {
    push();
    translate(this.x, this.y);
    fill("orange");
    noStroke();
    rect(0 * this.s, 0 * this.s, this.length * this.s, 80 * this.s, 20);
    fill("white");
    textSize(25 * this.s);
    textAlign(CENTER);
    text(this.message, this.length * 0.5 * this.s, 50 * this.s);
    pop();
  }

  hitTest() {
    if (
      mouseX >= this.x * this.s &&
      mouseX <= this.x + 100 * this.s &&
      mouseY >= this.y * this.s &&
      mouseY <= this.y + 80 * this.s
    ) {
      //console.log(this.message);
      return true;
    }
  }
}