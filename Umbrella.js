class Umbrella{
    constructor(x,y){
        var  options = {
            isStatic:true,
       
            
                }
        this.body = Bodies.circle(x,y,75,options);
        this.r = 75;
        this.image = loadImage("Walking Frame/walking_1.png");
        this.pos = random(0,800);
        World.add(world, this.body);
    }
    display(){
       imageMode(CENTER);
        var pos = this.body.position;
        image(this.image,pos.x,500 , 400, 400);
    }
}