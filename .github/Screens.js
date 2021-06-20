export default class Screens {
  constructor(x, y) {
    this.x = 170;
    this.y = 330;
  }

  display() {
    fill(255, 244, 220);
    rect(this.x, this.y, 280, 200);
  }
}
