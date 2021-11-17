
var trex ,trex_running;
var ground, groundImage;
var invisibleGround
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,150,20,20);
 trex.addAnimation("running",trex_running);
 trex.scale - 0.3; //the scale will not shrink 

 //creating ground
 ground = createSprite(200,180,300,20);
 ground.addImage(groundImage);
 ground.velocityX = -6;
 invisibleGround = createSprite(200,190,300,20);
 invisibleGround.visible=false
}


function draw(){
  background("white")
  drawSprites();
  trex.collide(invisibleGround)
if (ground.x <0){
ground.x = 200
}

if(keyDown("space")&&trex.y>100){
  trex.velocityY=-5;

}
}
