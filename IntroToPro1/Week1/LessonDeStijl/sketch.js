function setup() {
  createCanvas(840, 840);
}

function draw() {
  background(0);

  //top left white box
  fill(255,255,255);
  rect(0, 0, 180, 240);

  //main red box
  fill(255,0,0);
  rect(200, 0, 640, 620);

  //middle white box
  fill(255,255,255);
  rect(0, 300, 180, 320);

   //bottom blue box
   fill(26,0,255);
   rect(0, 640, 180, 200);

   //bottom white middle box
   fill(255,255,255);
   rect(200, 640, 560, 200);

   //bottom right top box
   fill(255,255,255);
   rect(780, 640, 80, 80);

    //bottom right bottom box
    fill(255,255,0);
    rect(780, 760, 100, 80);
}
