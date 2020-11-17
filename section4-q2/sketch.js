let x, y, vx, vy, z;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  z = 0;
}

function star(cx, cy, r, angle){
  beginShape();    // 点つなぎを始める
  for(var i = 0; i < 5; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}

function draw(){
  background(0);
  noStroke();
  fill(52, 164, 235);
  star(x, y, 50, z);
  x -= 2;
  y += 2;
  z += 10;
    if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}
