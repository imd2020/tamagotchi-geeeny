import Triangle from "./Triangle.js";
import Circle from "./Circle.js";

let allMyShapes = [];

function createShape() {
  let newShape;
  if (Math.random() < 0.5) {
    newShape = new Circle(0, 0, 20);
  } else {
    newShape = new Triangle(0, 0, 20);
  }
  newShape.x = Math.random() * 300 + 50;
  newShape.y = Math.random() * 200 - 100;
  newShape.color = color(Math.random() * 255, 0, 0);
  return newShape;
}

function draw() {
  background(20, 20, 20, 5);
  if (allMyShapes.length < 5) {
    allMyShapes.push(createShape());
  }

  for (let someShape of allMyShapes) {
    someShape.display();
    someShape.y += 2;
    someShape.rotation += 0.2;
    if (someShape.y > 500) {
      allMyShapes.pop();
    }
  }
}
