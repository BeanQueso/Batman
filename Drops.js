class Drops{
    constructor(x,y){
        var  options = {
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:1,
            
                }
        this.body = Bodies.circle(x,y,5,options);
        this.r = 5;
    
        this.pos = random(0,800);
        World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("blue");
        var pos = this.body.position;
        ellipse(pos.x,pos.y , this.r, this.r);
    }
    update(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body, {x: random(0,800), y:random(0,50)}); 
        }
    }
}