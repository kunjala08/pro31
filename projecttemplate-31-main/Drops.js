class Drops {
    constructor(x,y,r){
      var options = {
          'friction':0,
      }
      this.x=x;
      this.y=y;
      this.radius=r
      this.body=Bodies.circle(x,y,r,options);
      
      
     World.add(world,this.body)
   
    }

    display(){

        var pos = this.body.position;
        push();
            translate(pos.x,pos.y);
            fill("blue");
            ellipseMode(RADIUS);
            ellipse(0,0,5.5);
        pop();
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,400)})

        }
    }
}