
var trex ,trex_running;
var edges
var ground


function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,40,20)
trex.addAnimation("running",trex_running)
trex.scale=0.6

ground = createSprite(50,180,400,20)
edges = createEdgeSprites()
}

function draw(){
  background("white")
 if(keyDown("space")) 
{
  trex.velocityY=-5
}
trex.velocityY=trex.velocityY + 0.5


trex.collide(ground)

 drawSprites()
}
