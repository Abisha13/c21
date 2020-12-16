var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
car=createSprite(100, 200, 50, 80);
car.shapeColor="pink"
wall=createSprite(1000, 200, 50, 80);
wall.shapeColor="pink"
car.velocityX=3
}

function draw() {
  background(0,0,0);  
  

/* if(isTouching(car,wall)){
  car.shapeColor = "red";
  wall.shapeColor = "red";
 }
  else{
    car.shapeColor = "pink";
    wall.shapeColor = "pink";
  }*/
  bounceOff(car,wall);
  drawSprites();
}
