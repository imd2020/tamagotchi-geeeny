import Shape from "./Shape";

export default class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(this.color);
    ellipse(1, 0, this.radius);
    pop();
  }
}
