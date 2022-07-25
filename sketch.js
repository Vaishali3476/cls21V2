var fixedRect, movingRect,fixedRect1,fixedRect2;
function setup() {
  createCanvas(1200,800);
  
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
fixedRect= createSprite(100, 100, 50, 50);
fixedRect.shapeColor = "green";
fixedRect1 = createSprite(200, 100, 50, 50);
fixedRect1.shapeColor = "green";
fixedRect2 = createSprite(300, 100, 50, 50);
fixedRect2.shapeColor = "green";
  
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 clrchange();
  drawSprites();
}

function clrchange(){
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect, fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue";
  }
  else if(isTouching(movingRect, fixedRect2)){
      movingRect.shapeColor = "blue";
      fixedRect2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "red";
    fixedRect1.shapeColor = "yellow";
    fixedRect2.shapeColor="white";
  }
}