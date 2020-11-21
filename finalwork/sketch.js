// 最終課題を制作しよう
var angle=0
let a, b, e, x, y, z, W, H, X

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  z = 0;
  a = width+150;
  b = height/2;
  e = 70;
  f = 500;
  x1 = width/2;
  w1 = 80;
  h1 = 300;
  x2 = width/2 + 500;
  w2 = 300;
  h2 = 250;
  x3 = width/2 + 900;
  h3 = 450;
  w3 = 250;
  x4 = width/2 + 1700;
  h4 = 200;
  w4 = 220;
  x5 = width/2 + 100;
  h5 = 420;
  w5 = 150;
  x6 = width/2 + 280;
  h6 = 290;
  w6 = 190;
  x7 = width/2 + 1200;
  h7 = 220;
  w7 = 150;
  x8 = width/2 + 1400;
  h8 = 400;
  w8 = 200;
  x9 = width/2 - 200;
  h9 = 150;
  w9 = 150;
  x10 = width/2 - 450;
  h10 = 330;
  w10 = 220;
  x11 = width/2 - 750;
  h11 = 300;
  w11 = 200;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(54, 77, 107);

  fill(225, 225, 0);
  for(p = 70; p<width; p += 210){
    star(p, 70, 10, 0);}

  fill(225, 225, 0);
  for(q = 140; q<width; q += 210){
    star(q, 100, 10, 0);
  }

  fill(225, 225, 0);
  for(r=210; r<width; r += 210){
    star(r, 130, 10, 0);
  }

  fill(225, 225, 0);
  for(s=100; s<width; s += 210){
    star(s, 160, 10, 0);
  }

    fill(225, 225, 0);
  for(t=190; t<width; t += 210){
    star(t, 215, 10, 0);
  }

  fill(225, 225, 0);
  for(u=70; u<width; u += 210){
    star(u, 240, 10, 0);
  }

    fill(225, 225, 0);
  for(v=150; v<width; v += 210){
    star(v, 300, 10, 0);
  }

    fill(225, 225, 0);
  for(w=220; w<width; w += 210){
    star(w, 330, 10, 0);
  }

    fill(225, 225, 0);
  for(c=80; c<width; c += 210){
    star(c, 370, 10, 0);
  }

  noStroke();
  fill(225, 255, 0);
  star(x, y, 15, z);
  x -= 1;
  y += 1;
  z += 5;
    if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }

  building(x1, w1, h1);
  x1 -= 1;
  if(mouseIsPressed){x1 -= 2.5};
  if(x1+1500<0){x1 = width};

  building(x2, w2, h2);
  x2 -= 1;
  if(mouseIsPressed){x2 -= 2.5};
  if(x2+1500<0){x2 = width};

  building(x3, w3, h3);
  x3 -= 1;
  if(mouseIsPressed){x3 -= 2.5};
  if(x3+1500<0){x3 = width};

  building(x4, w4, h4);
  x4 -= 1;
  if(mouseIsPressed){x4 -= 2.5};
  if(x4+1500<0){x4 = width};

  building(x5, w5, h5);
  x5 -= 1;
  if(mouseIsPressed){x5 -= 2.5};
  if(x5+1500<0){x5 = width};

  building(x6, w6, h6);
  x6 -= 1;
  if(mouseIsPressed){x6 -= 2.5};
  if(x6+1500<0){x6 = width};

  building(x7, w7, h7);
  x7 -= 1;
  if(mouseIsPressed){x7 -= 2.5};
  if(x7+1500<0){x7 = width};

  building(x8, w8, h8);
  x8 -= 1;
  if(mouseIsPressed){x8 -= 2.5};
  if(x8+1500<0){x8 = width};

  building(x9, w9, h9);
  x9 -= 1;
  if(mouseIsPressed){x9 -= 2.5};
  if(x9+1500<0){x9 = width};

  building(x10, w10, h10);
  x10 -= 1;
  if(mouseIsPressed){x10 -= 2.5};
  if(x10+1500<0){x10 = width};

  building(x11, w11, h11);
  x11 -= 1;
  if(mouseIsPressed){x11 -= 2.5};
  if(x11+1500<0){x11 = width};

  line(0, height*68/80+25, width, height*68/80+25);
  fill(0);
  rect(0, height*68/80+25, width, height-(height*68/80+25));

  fill(255);
  rect(e, height*68/80+55, 100, 10);
  e += -1;
  if(e+100<0){e = width};
   if(mouseIsPressed){e -= 2.5};

  fill(255);
  rect(f, height*68/80+55, 100, 10);
  f += -1;
  if(f+100<0){f = width};
   if(mouseIsPressed){f -= 2.5};

    push();
  translate(width*20/80, height*70/80);  //表示したい場所へ移動
  rotate(radians(angle));       //原点中心の回転
  fill(237, 216, 213);
  ellipse(0, 0, 50);
  fill (0);
  rect(-9, -13, 1, 6);
  fill(0);
  rect(9, -13, 1, 6);
  fill(0);
  rect(-9, 9, 18, 1);

  angle += 4;
  if(mouseIsPressed){angle += 6};
  pop();

}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 5; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function building(X, W, H){
 fill(1, 30, 66);
 rect(X, height*68/80-H+25, W, H);
 fill(225, 225, 0);
 rect(X+W*5/32, height*68/80-H+25+H/16, W/8, H/4);
 fill(225, 225, 0);
 rect(X+W*14/32, height*68/80-H+25+H*6/16, W/8, H/4);
 fill(225, 225, 0);
 rect(X+W*23/32, height*68/80-H+25+H*11/16, W/8, H/4);
 fill(225, 225, 0);
 rect(X+W*14/32, height*68/80-H+25+H/16, W/8, H/4);
 fill(225, 225, 0);
 rect(X+W*5/32, height*68/80-H+25+H*11/16, W/8, H/4);
 fill(225, 225, 0);
 rect(X+W*5/32, height*68/80-H+25+H*6/16, W/8, H/4);
 fill(225, 225, 0);
 rect(X+W*23/32, height*68/80-H+25+H*6/16, W/8, H/4);
 fill(225, 225, 0);
 rect(X+W*23/32, height*68/80-H+25+H/16, W/8, H/4);
 fill(225, 225, 0);
 rect(X+W*14/32, height*68/80-H+25+H*11/16, W/8, H/4);
}
