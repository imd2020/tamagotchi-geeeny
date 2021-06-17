import Food from "./Food";

export default class Cherry extends Food {
  constructor(x, y) {
    super(x, y);
  }

  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    fill(200, 0, 0);
    ellipse(0, 0, 20);
    pop();
  }
}
