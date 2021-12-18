var bg,background;
var snowball;
var lp;

function preload() {
  bg =loadImage("snow2.jpg");

}

function setup() {
  createCanvas(1495,744);
// snow=createSprite(400, 200, 10, 10);
}

function draw() {
  background(bg);

  drawSprites();
}