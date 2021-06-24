import Cherry from "./Cherry";
import Poison from "./Poison";
import Scale from "./Scale";

let cherryImg = loadImage("assets/cherry.png");
let poisonImg = loadImage("assets/poison.png");

let foodies = [];
let newFood;
let PoisonMeter = new Scale(400, 120, 1);
let CherryMeter = new Scale(430, 120, 1);

function foodDrop() {
  if (Math.random() < 0.5) {
    newFood = new Cherry(0, 0, cherryImg);
  } else {
    newFood = new Poison(0, 0, poisonImg);
  }
  newFood.x = random(180, 420);
  newFood.y = random(250, 320);

  return newFood;
}

function draw() {
  noFill();
  stroke(255, 0, 0);
  rect(175, 330, 270, 195);
  rect(160, 45, 300, 205);

  if (foodies.length < 1) {
    foodies.push(foodDrop());
  }

  for (let someFood of foodies) {
    someFood.display();
    someFood.y += 5;

    if (someFood.hitTest() || someFood.y > 550) {
      someFood.feed();

      if (someFood.poison()) {
        PoisonMeter.unit += 1;
      } else if (someFood.feed()) {
        CherryMeter.unit += 1;
      }
      foodies.pop();
    }

    PoisonMeter.display();
    CherryMeter.display();
  }
}
