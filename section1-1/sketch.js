function setup() {
  createCanvas(128,128);
}

function draw() {
  // background(0);
  strokeWeight(4);
  fill(1, 1, 162);
  triangle(12,120,116,120,116,10);
  fill(70, 15, 4);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(20);
  textFont("serif");
  text("2020", 68, 100);
}
