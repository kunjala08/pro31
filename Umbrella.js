class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.r=50
        this.image = loadImage("proc41images/images/Walking Frame/walking_1.png")
        this.body=Bodies.circle(this.x,this.y,50,options)
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
      
            fill("red");
            imageMode(CENTER);
            image(this.image,pos.x,pos.y+70,300,300);
           
    }
}