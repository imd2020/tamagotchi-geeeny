import Shape from "./Shape";

export default class Triangle extends Shape {
  constructor(x, y) {
    super(x, y);
  }

  display() {
    push();
    noFill();
    translate(this.x, this.y);
    rotate(this.rotation);
    stroke(this.color);
    rect(-5, -5, 10, 10);
    pop();
  }
}
