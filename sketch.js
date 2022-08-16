function setup() {
  createCanvas(1080, 1920);
  angleMode(DEGREES);
}

function draw() {
  background("black");

  translate(width / 2, height / 2);
  rotate(-90);

  let d = day();
  let M = month();
  let y = year();
  let hr = hour();
  let min = minute();
  let sec = second();

  stroke("#a2d2ff");
  strokeWeight(6);
  noFill();
  let SecAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 450, 450, 0, SecAngle);

  stroke("#7251b5");
  noFill();
  let MinAngle = map(min, 0, 60, 0, 360) + map(sec, 0, 60, 0, 6);
  arc(0, 0, 350, 350, 0, MinAngle);

  stroke("#52b69a");
  noFill();
  let HrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 250, 250, 0, HrAngle);


  if(min < 10)
    min = "0"+min
    
  rotate(90);
  stroke("white");
  strokeWeight(1);
  textSize(37);
  fill("white");
  text(hr + " : " + min, 0 - 55, 0);

  stroke("white");
  fill("white");
  textSize(30);
  text(d + "/" + M + "/" + y, -64, 45);

  push();
  noFill();
  stroke("#00a896");
  strokeWeight(4);
  rect(300, -30, 70, 70);
  fill("white");
  strokeWeight(1);
  text(sec, 319, -8, 0);
  pop();
}
