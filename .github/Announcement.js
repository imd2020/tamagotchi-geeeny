export default class Announcement {
  constructor(x, y, content) {
    this.x = x;
    this.y = y;
    this.content = content;
  }

  display() {
    push();
    fill(0);
    stroke(255);
    strokeWeight(10);
    textSize(60);
    text(this.content, this.x, this.y);
    pop();
  }
}
