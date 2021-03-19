const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Maxdrops
var engine, world;
var rain;
var chata;
var thunderImage;
var thunder;
function preload(){
    thunderImage=loadImage("proc41images/images/thunderbolt/1.png")
    thunderImage2=loadImage("proc41images/images/thunderbolt/3.png")
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    rain = new Drops(20,20,20)
    chata = new Umbrella(200,350,200)
    //thunder=createSprite(20,20,20,20)
   // thunder.addImage(thunderImage)
    for(var i=0; i<Maxdrops ; i++){
        this.drops.push(new drops(random(0,1000),random(0,1000)));
        }
}

function draw(){
    background("black");
    Engine.update(engine);
    rain.display();
    chata.display();

    for(var i = 0; i<Maxdrops; i++){ drops[i].display()};

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
    }
}
