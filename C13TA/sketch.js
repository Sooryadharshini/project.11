var trex;
var trexRunning;
var ground;
var groundImage;
var ground2;



function preload(){
  //1. loading the animation 
  trexRunning=loadAnimation("trex1.png","trex2.png","trex3.png");
  groundImage=loadImage("ground2.png");
}


function setup(){
  createCanvas(600,200);

  //creating trex
  trex=createSprite(50,160,20,20);
  //2. add the animation 
  trex.addAnimation("running",trexRunning);
  trex.scale=0.5;

  //create the ground 
  ground=createSprite(300,180,600,10);
  ground.addImage("abc",groundImage);
  ground.velocityX=-4;

  //create another ground 
  ground2=createSprite(100,190,400,10);
  ground2.visible=false;
}

function draw(){
  background("lightblue");

  if(keyDown("space") && trex.y>150){
    trex.velocityY=-10;
  }

  //apply gravity to trex
  trex.velocityY=trex.velocityY+0.8;

  //make the trex to stand on the ground 
  trex.collide(ground2);

  //making infinite ground 
  if(ground.x>0){
    ground.x=ground.width/2;
  }


  drawSprites();
}