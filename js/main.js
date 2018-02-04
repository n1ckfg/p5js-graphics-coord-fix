"use strict";

// https://p5js.org/examples/structure-create-graphics.html

var pg;

function setup(){
  createCanvas(710, 400);
  pg = createGraphics(400, 250);
}

function draw(){
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255,255,0);
  //pg.ellipse(pmouseX, pmouseY, 30, 30);
  pg.ellipse(fixGraphicsX(pmouseX, pg, 150), fixGraphicsY(pmouseY, pg, 75), 30, 30);
  pg.stroke(255);
  //pg.ellipse(mouseX, mouseY, 60, 60);
  pg.ellipse(fixGraphicsX(mouseX, pg, 150), fixGraphicsY(mouseY, pg, 75), 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}

function fixGraphicsX(_x, _pg, _offset) {
	return map(_x, 0, _pg.width, 0, _pg.width/pixelDensity()) - (_offset/pixelDensity());
}

function fixGraphicsY(_y, _pg, _offset) {
	return map(_y, 0, _pg.height, 0, _pg.height/pixelDensity()) - (_offset/pixelDensity());
}