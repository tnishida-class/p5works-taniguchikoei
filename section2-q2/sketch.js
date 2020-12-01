function setup() {
    createCanvas(400, 400);
  noStroke();
  background(255);
 for(let i=0; i<9; i++){
   for(let j=0; j<9; j++){
     if(i%2!==0&&j%2==0){
       fill(165);
       rect(i*50, j*50, 50, 50);
     }
      if(i%2==0&&j%2!=0){
         fill(165);
         rect(i*50, j*50, 50, 50);
       }
   }
 }
  for(let c=1; c<=15; c=c+2){
    for(let d=1; d<=15; d=d+2){
      if(c%4==3&&d%4==1&&d<=5){
        fill(255, 0, 0);
        ellipse(c*25, d*25, 50);
      }
      if(c%4==1&&d==3){
        fill(255, 0, 0);
        ellipse(c*25, d*25, 50);
      }
      if(c%4==3&&d==13){
        fill(0);
        ellipse(c*25, d*25, 50);
      }
      if(c%4==1&&d%4==3&&d>=9&&d<=15){
        fill(0);
        ellipse(c*25, d*25, 50);
      }
    }
  }
}
