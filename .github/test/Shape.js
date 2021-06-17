export default class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 50, 50);
    this.rotation = 0;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(this.color);
    circle(0, 0, 10);
    pop();
  }
}
