class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.r=r
        this.image = loadImage("proc41images/images/Walking Frame/walking_1.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        push();
            translate(pos.x,pos.y);
            fill("red");
            imageMode(CENTER);
            image(this.image,0,0,550);
            console.log(this.image)
        pop();
    }
}