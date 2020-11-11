function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(3);

	//robots head
	fill(102,178,255);
	rect(100, 100, 300, 300, 200);


	//robots antenna
	fill(51, 51, 255);
	ellipse(200, 80, 100, 100);
	fill(51, 51, 255);
	ellipse(290, 80, 100, 100);
	fill(102, 102, 255);
	ellipse(250, 70, 100, 100);

	fill(255, 102, 102);
	rect(210, 80, 80, 80);

	//robotsfreckles
	point(150, 250);
	point(140, 260);
	point(130, 250);
	point(150, 270);
	point(130, 270);
	point(325, 250);
	point(350, 250);
	point(350, 270);
	point(350, 250);

	//robots eyes
	fill(102,255,255);
	ellipse(175, 200, 80, 80);
	ellipse(175, 200, 70, 70);
	ellipse(175, 200, 60, 60);
	ellipse(175, 200, 50, 50);
	ellipse(175, 200, 40, 40);
	point(175, 200);
	ellipse(325, 200, 60, 60);
	ellipse(325, 200, 50, 50);
	ellipse(325, 200, 40, 40);
	ellipse(325, 200, 30, 30);
	ellipse(325, 200, 20, 20);
	ellipse(325, 200, 10, 10);
	point(325, 200);


	//robots nose
	fill(255, 102, 255);
	ellipse(250, 260, 100, 100, 100, 100);
	

	//robots ears
	ellipse(100, 240, 30, 100);
	ellipse(400, 240, 30, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(175, 340);
	vertex(200, 370);
	vertex(225, 340);
	vertex(250, 370);
	vertex(275, 340);
	vertex(300, 370);
	vertex(325, 340);
	endShape();

	//robots mouth
	noFill();
	beginShape();
	vertex(175, 350);
	vertex(185, 350);
	vertex(225, 350);
	vertex(250, 350);
	vertex(275, 350);
	vertex(300, 350);
	vertex(325, 350);
	endShape();
}