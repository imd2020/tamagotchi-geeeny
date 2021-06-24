import gsap from "./gsap.min.js";

const imdRechteck = {
  x: 100,
  y: 300,
};

function draw() {
  clear();
  rect(imdRechteck.x, imdRechteck.y, 50, 50);
}

function doMyAnimation() {
  gsap.to(imdRechteck, {
    delay: 0.2,
    duration: 1.2,
    ease: "easeInQuad",
    x: 100,
    y: 100,
    onComplete: () => {
      gsap.to(imdRechteck, {
        duration: 0.9,
        ease: "bounce",
        x: 100,
        y: 300,
        onComplete: () => {
          doMyAnimation();
        },
      });
    },
  });
}
doMyAnimation();
