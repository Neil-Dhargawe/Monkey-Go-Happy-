var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstaclesImage;
var FoodGroup, obstacleGroup;
var score;
 var  survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
   FoodGroup=new Group();
   obstacleGroup=new Group();
  
  score = 0;
  
  
}


function draw() {
  background(300);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
 monkey.velocityY=monkey.velocityY+0.8;
  
 monkey.collide(ground);
  spawnFood();
  spawnObstacles(); 
  
 stroke("white");
 textSize(20);
 fill("white"); 
 text("Score:"+score,500,50);
  
  if(obstacleGroup.isTouching (monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time :"+ survivalTime,100,50)
  
 drawSprites(); 
}

function spawnFood (){
  if(frameCount%60 === 0){
    banana=createSprite(360,250,40,0);
    banana.y=random(120,300);
  key.depth=banana.depth+1
  
  //add Image of banana  
    banana.addImage(bananaImage);
    banana.scale=0.05;
    
  //add Each banana to the group
    FoodGroup.add(banana);
      banana.velocityX=-5;
  
  //lifetime to the variable  
  banana.lifetime=300;
  //mon
  }  
}

function spawnObstacles(){
  if(frameCount % 200 === 0){
    obstacle=createSprite(300,320,10,40)
    obstacle.velocityX= -6;
    
    //add Image to obstcles
    obstacle.addImage(obstaclesImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacles
    obstacle.lifetime=300;
    
    obstacleGroup.add(obstacle);
  }
}



