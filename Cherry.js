import Food from "./Food.js";

export default class Cherry extends Food {
  constructor(x, y, foodImage) {
    super(x, y, foodImage);
  }
  display() {
    push();
    fill(255);
    translate(this.x, this.y);
    image(this.foodImage, 0, 0, 30, 30);
    pop();
  }

  feed() {
    if (this.hitTest()) {
      return true;
    }
  }
  poison() {
    if (this.hitTest()) {
      //Damit die Main datei eine methode findedt, das hier tut nichts. Verhindert nur einen Fehler
    }
  }
}
