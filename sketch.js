var bgImage,sleepImage,brush_Img,gym_Anim,eat_Anim,drink_Anim,move_Anim; 
var astronaut,bg;

function preload(){
  
    bgImage= loadImage("bg.png");
    sleepImage = loadImage("sleep.png");
    brush_Img = loadAnimation ("brush.png");
    gym_Anim = loadAnimation("gym1.png","gym2.png");
    eat_Anim = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png");
    drink_Anim = loadAnimation("drink1.png","drink1.png","drink2.png","drink3.png","drink3.png","drink4.png","drink4.png");
    move_Anim = loadAnimation("moving.png","moving1.png");
    
}

function setup() {
  createCanvas(800,400);
 bg= createSprite(400, 200, 50, 50);
 bg.addImage(bgImage);
bg.scale=0.2;


  astronaut=createSprite(400,230);
  astronaut.addImage(sleepImage);
  astronaut.scale=0.1;
}

function draw() {
  background("white");  
  
  if (keyDown("UP_ARROW" ) ){
    astronaut.addAnimation("brushing", brush_Img);
    astronaut.changeAnimation("brushing");
    astronaut.y = 280;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym_Anim);
    astronaut.changeAnimation("gymming");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
 
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat_Anim);
    astronaut.changeAnimation("eating");
    astronaut.velocityX=0.2;
    astronaut.velocityY=-0.2;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking",drink_Anim);
    astronaut.changeAnimation("drinking");
    astronaut.y = 280;
    astronaut.velocityX=0;
    astronaut.velocityY=-0;
  }
  if (keyDown("m")){
    astronaut.addAnimation("move",move_Anim);
    astronaut.changeAnimation("move");
    astronaut.velocityX=0.2;
    astronaut.velocityY=-0.2;
  }
 
  drawSprites();
  text("Instructions:-",40,20,fill("white"));
  text("Up Arrow=Brushing",40,35,fill("white"));
  text("Down Arrow=Gymming",40,50,fill("white"));
  text("Left Arrow=Eating",40,65,fill("white"));
  text("Right Arrow=Drinking",40,80,fill("white"));
  text("m key=Move",40,95,fill("white"));
}