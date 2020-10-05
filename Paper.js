class Paper{
constructor(){
  var  options = {
isStatic:false,
restitution:0.3,
friction:1,
density:0.2,

    }
this.body = Bodies.circle(100, 50, 5, options);
this.radius = 5;
World.add(world, this.body);

}
display(){
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

}

}