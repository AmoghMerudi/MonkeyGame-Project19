var monkey, monkeyImage, banana, bananaImage, stone, stoneImage, background1, backgroundImage, ground, stoneGroup ,bananaGroup, score

function preload() {
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png",  "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  backgroundImage = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(680,400);
  
  background1 = createSprite(200,200,10,10)
  background1.addImage(backgroundImage);
  
  monkey = createSprite(80,350,10,10);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale = 0.1
  
  ground = createSprite(1,370,2000,5)
  ground.visible = false;
  
  stonesGroup = new Group();
  bananaGroup = new Group();
  
  score = 0;
}

function draw() {
  background(220);
  
    if(keyDown("space")){
     monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY+1;
  
    monkey.collide(ground)
  
  drawSprites();
  createStones();
  createBananas(); 
  
  text("Score " + score,590,10);
  
  if(monkey.isTouching(bananaGroup)){
    score = score + 2;
   }
       
        switch(score){
      case 100: monkey.scale = 0.11;
        break;
      case 200: monkey.scale = 0.12;
        break;
      case 300: monkey.scale = 0.13;
        break;
      case 400: monkey.scale = 0.14;
        break;
      case 500: monkey.scale = 0.15;
        break;
      case 600: monkey.scale = 0.16;
        break;
      case 700: monkey.scale = 0.17;
        break;
      case 800: monkey.scale = 0.18;
        break;
      case 900: monkey.scale = 0.19;
        break;
      case 1000: monkey.scale = 0.2;
        break;
      default: break;
    }
}

function createStones(){
  if(World.frameCount % 60 === 0){
     stone = createSprite(680,350,10,40);
     stone.addImage(stoneImage);
     stone.scale = 0.1;
     stone.velocityX = -6;
     stone.lifetime = 680/2;
     /*stoneGroup.add(stone);*/   
  }
}
  
function createBananas(){
  if(World.frameCount % 60 === 0){
     banana = createSprite(680,200,40,10);
     banana.addImage(bananaImage);
     banana.scale = 0.06;
     banana.velocityX = -6;
     banana.lifetime = 680/2
     bananaGroup.add(banana);
  }
}