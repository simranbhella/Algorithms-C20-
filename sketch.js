var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=2;
  movingRect=createSprite(200,200,80,30);
  movingRect.shapeColor="green";
  movingRect.velocityY=-2;
}

function draw() {
  background("black");  
  movingRect.x=mouseX;
  movingRect.y=mouseY;


if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}
else {
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
movingRect.velocityX=movingRect.velocityX*(-1);
fixedRect.velocityX=fixedRect.velocityX*(-1);
}
if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.velocityY=fixedRect.velocityY*(-1);
    movingRect.velocityY=movingRect.velocityY*(-1);
  }

edges=createEdgeSprites();
movingRect.bounceOff(edges);
fixedRect.bounceOff(edges);
  drawSprites();
}