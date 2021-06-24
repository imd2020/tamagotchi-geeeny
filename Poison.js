import Food from "./Food.js";

export default class Poison extends Food {
  constructor(x, y, foodImage) {
    super(x, y, foodImage);
  }

  display() {
    push();
    noStroke();
    translate(this.x, this.y);
    fill(200, 0, 0);
    image(this.foodImage, 0, 0, 30, 30);
    pop();
  }

  poison() {
    if (this.hitTest()) {
      return true;
    }
  }
  feed() {
    if (this.hitTest()) {
      //Damit die Main datei eine methode findedt, das hier tut nichts. Verhindert nur einen Fehler
    }
  }
}
