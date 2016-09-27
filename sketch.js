//if things aren't working, write console.log("mousepressed"), for example, into mousepressed function to see if it works

var x = 100;
var y = 100;

var ellipseWidth = 100;
var ellipseHeight = 100;

var xSpeed = 4;
var ySpeed = 4;

var c;

function setup() {
	createCanvas(windowWidth, windowHeight);
	c = color(random(255), random(255), random(255), random(255));

}

function draw() {
	background(255);

	noStroke();
	fill(c);
	ellipse(x, y, ellipseWidth, ellipseHeight);

	if (x > windowWidth - ellipseWidth / 2) {
		xSpeed = -xSpeed;
		c = color(random(255), random(255), random(255), random(255));
	}

	if (x < ellipseWidth / 2) {
		xSpeed = -xSpeed;
		c = color(random(255), random(255), random(255), random(255));
	}

	if (y > windowHeight - ellipseHeight / 2) {
		ySpeed = -ySpeed;
		c = color(random(255), random(255), random(255), random(255));
	}

	if (y < ellipseHeight / 2) {
		ySpeed = -ySpeed;
		c = color(random(255), random(255), random(255), random(255));
	}



	x = x + xSpeed;
	y = y + ySpeed;

}