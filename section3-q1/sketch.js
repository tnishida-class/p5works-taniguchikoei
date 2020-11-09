function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(0, 0, 255, 70, 50, "I love keyakizaka");
}

function balloon(c1, c2, c3, x, y, t){
  push();
  noStroke();
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(c1, c2, c3);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, x + p, y + h + p);
  fill(c1, c2, c3)
  triangle(x + w + p * 2, y, x + w + p * 2 + 20, y, x + w + p * 2, y + 10, )
  pop();
}
