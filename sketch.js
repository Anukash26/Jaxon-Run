var runner, boy
var path, pathImage


function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  runner = loadAnimation("Runner-1.png","Runner-2.png"); 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY =4;
  path.scale=1.2;
  //code to reset background 
  if(path.y>400){
    path.y=height/2;

    }
  boy = createSprite(200,200);
  boy.addAnimation("running", runner)
  boy.scale=0.05
  boy.y = 350
}


function draw() {
  background(0);




 drawSprites();
}
