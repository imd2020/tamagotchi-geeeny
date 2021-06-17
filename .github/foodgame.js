/*class Foodgame {
    constructor() {

    }
    display() {

    }
    foodDrop() {

    }
} */
import Cherry from "./Cherry";
import Poison from "./Poison";

let foodies = [];

function foodDrop() {
  let newFood;
  if (Math.random() < 0.5) {
    newFood = new Cherry(0, 0);
  } else {
    newFood = new Poison(0, 0);
  }
  newFood.x = random(175, 430);
  newFood.y = random(100, 330);
  return newShape;
}

function draw() {
  noFill();
  stroke(255, 0, 0);
  rect(175, 330, 270, 195);
  rect(160, 45, 300, 205);

  if (foodies.length < 5) {
    foodies.push(foodDrop());
  }

  for (let someFood of foodies) {
    someFood.display();
    someFood.y += 2;
  }
}
