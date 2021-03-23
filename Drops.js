class Drops {
    constructor(x,y){
      var options = {
          'friction':0,
      }
      this.x=x;
      this.y=y;
      this.radius=5
      this.body=Bodies.circle(x,y,5,options);
      
      
     World.add(world,this.body)
   
    }

    updateDrops(){

        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})

        }
    }

    display(){

        var pos = this.body.position;
      
            fill("blue");
            ellipseMode(RADIUS);
            ellipse(pos.x,pos.y,this.radius,this.radius);
      
        
    }
}