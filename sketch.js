var car,wall,speed,weight



function setup() {
  createCanvas(1600,400);
  car=createSprite(400, 200, 20,20);
  wall=createSprite(200, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();
}