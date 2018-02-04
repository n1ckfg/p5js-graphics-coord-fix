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
  pg.ellipse(fixPMouseX(pg, 150), fixPMouseY(pg, 75), 30, 30);
  pg.stroke(255);
  pg.ellipse(fixMouseX(pg, 150), fixMouseY(pg, 75), 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}

function fixMouseX(_pg, offset) {
	return map(mouseX, 0, _pg.width, 0, _pg.width/2) - (offset/2);
}

function fixMouseY(_pg, offset) {
	return map(mouseY, 0, _pg.height, 0, _pg.height/2) - (offset/2);
}

function fixPMouseX(_pg, offset) {
	return map(pmouseX, 0, _pg.width, 0, _pg.width/2) - (offset/2);
}

function fixPMouseY(_pg, offset) {
	return map(pmouseY, 0, _pg.height, 0, _pg.height/2) - (offset/2);
}