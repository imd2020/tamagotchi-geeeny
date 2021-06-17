import Food from "./Food";

export default class Cherry extends Food {
  constructor(x, y) {
    super(x, y);
  }
  display() {
    fill(255);
    translate(this.x, this.y);
    rect(0, 0, 20, 20);
  }
}
