export default class Scale {
  constructor(x, y, unit) {
    this.x = x;
    this.y = y;
    this.unit = unit;
    //this.color = color(255, 255, 255);
  }

  display() {
    push();
    noStroke();
    fill(255);
    translate(this.x, this.y);
    rect(0, 0, 20, -10 * this.unit);
    pop();
  }
}
