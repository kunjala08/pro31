const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Maxdrops =100;
var engine, world;
var rain;
var chata;
var thunderImage;
var thunder;
var drops = [];

var thunderCreatedFrame = 0;
function preload(){
    thunderImage=loadImage("proc41images/images/thunderbolt/1.png")
    thunderImage2=loadImage("proc41images/images/thunderbolt/3.png")
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    //rain = new Drops(20,20,20)
    chata = new Umbrella(200,350)
    //thunder=createSprite(20,20,20,20)
   // thunder.addImage(thunderImage)
   if(frameCount % 150=== 0){
    for(var i=0; i<Maxdrops ; i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }
   }
    
}

function draw(){
    background("black");
    Engine.update(engine);
  //  rain.display();
    chata.display();

    for(var i = 0; i<Maxdrops; i++){ 
        drops[i].display();
        drops[i].updateDrops();
    }
    
    drawSprites();
    lighting();
}   
function lighting(){
    rand = Math.round(random(1,4));
    if(frameCount%100===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : thunder.addImage(thunderImage);
            break;
            case 2 : thunder.addImage(thunderImage2);
            break;
            default : break;
        }
    thunder.scale = random(0.3,0.6)
    //thunder.destroy();
    }

    if( thunderCreatedFrame +10 === frameCount  && thunder){
        thunder.destroy();
    }
}
