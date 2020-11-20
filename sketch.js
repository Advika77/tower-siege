var polygon,slingShot,circle,Matter,bodies,world,polygon_image,position
var ground;
var stand1,stand2;


function setup() {
  createCanvas(800,400);
  createSprite(350, 200, 10, 100);
  const Bodies = World.Bodies;
}

function draw() {
  background(255,255,255);  

World.add=(world,polygon);

imageMode(CENTER)
Image(polygon_image,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}

function mouseDragged(){

       Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
   slingshot.fly();
   gameState = "launched";
}