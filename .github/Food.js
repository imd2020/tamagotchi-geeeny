export default class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    fill(200);
    rect(0, 0, 20, 20);
    pop();
  }
}
