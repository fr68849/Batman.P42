const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var engine, world;
var rainGroup;
var man,manImg,moon,moonImg,batman,batmanImg;
var rand;
var drop1Img,drop2Img;
var bg,bgImg,road,roadImg;
var thunderCreatedFrame=0;


function preload(){
    bgImg= loadImage("bg1.png");
    roadImg=loadImage("Road.png");
    moonImg=loadImage("moon1.png");
    drop1Img=loadImage("drop1.png");
    drop2Img=loadImage("drop2.png");
    batmanImg=loadImage("Bestman-01.png");
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

    batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",
     "bat4.png","bat5.png","bat6.png",
     "bat7.png","bat8.png","bat9.png",
     "bat10.png","bat11.png","bat12.png");

    manImg= loadAnimation("walking_1.png","walking_2.png",
     "walking_3.png","walking_4.png","walking_5.png",
     "walking_6.png","walking_7.png","walking_2.png");
     
     rainGroup = new Group();
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);

    bg= createSprite(200,300,200,500);
    bg.addImage("background",bgImg);
    bg.scale=0.5;

    road=createSprite(200,570,200,100);
    road.addImage("road",roadImg);
    road.scale=0.1;

    moon=createSprite(330,80,60,60);
    moon.addImage("moon",moonImg);
    moon.scale=0.02;

    man= createSprite(200,400,60,60);
    man.scale=0.5;
    man.addAnimation("moving",manImg);

    batman=createSprite(200,400,60,60);
    batman.addAnimation("batman",batmanImg);
    batman.scale=0.2;
    batman.visible=false;

    umbrella = new Umbrella(200,500);
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    textSize(15);
    fill("white");
    text("Presiona flecha derecha y sorpréndete",20,20);

  if(keyDown("RIGHT_ARROW")){
      man.visible=false;
      batman.visible=true;
      
  }
  if(keyDown("LEFT_ARROW")){
    man.visible=true;
    batman.visible=false;
    
}
  

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
    }
    
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

  if(frameCount % 0.5 === 0){
      rain = createSprite(random(5,390),0,10,10);
      rain.addImage("drop1",drop1Img);
      rain.velocityY = 15;
      rain.scale=0.02;
      var ran = Math.round(random(1,2));
      switch(rand){
       case 1:rain.addImage("drop1",drop1Img);
       break;
       case 2: rain.addImage("drop2",drop2Img);
       break;
      }
      rainGroup.add(rain);
  }

    drawSprites();
}   

