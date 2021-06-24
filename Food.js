export default class Food {
  constructor(x, y, foodImage) {
    this.x = x;
    this.y = y;
    this.foodImage = foodImage;
  }

  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    fill(200);
    rect(0, 0, 20, 20);
    pop();
  }

  hitTest() {
    if (
      mouseX > this.x &&
      mouseX < this.x + 30 &&
      mouseY > this.y &&
      mouseY < this.y + 30 &&
      mouseIsPressed
    ) {
      return true;
    }
  }
}
