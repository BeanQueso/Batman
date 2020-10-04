
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var thund, drops, paper, ground, rect1, rect2, rect3, maxDrops, batboy, thunderImg1, thunder, thunderImg1, thunderImg2, thunderImg3, thunderImg4, rand;
function preload()
{
		thunderImg1 = loadImage("thunderbolt/1.png");
        thunderImg2 = loadImage("thunderbolt/2.png");
        thunderImg3 = loadImage("thunderbolt/3.png");
        thunderImg4 = loadImage("thunderbolt/4.png");
}

function setup() {
	createCanvas(800, 700);
	maxDrops = 100;
	drops = [];

	engine = Engine.create();
	world = engine.world;


	for(var i=0; i<maxDrops;i++){
		drops.push(new Drops(random(0,800), 0));
	}

	rect1 = new Ground(400, 690, 800,20);
	batboy = new Umbrella(400, 400);


	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  for(var i=0; i<maxDrops;i++){
	drops[i].display();
	drops[i].update();
}
rect1.display();
batboy.display();

rand = random(0,4);
if(frameCount%100===0){
	thunder = createSprite(400, 100);
	thunder.scale = 0.5;
	thunder.lifetime = 50;
	 rand = Math.round(random(1,4));
    switch(rand) {
      case 1: thunder.addImage("1",thunderImg1);
              break;
      case 2: thunder.addImage("2",thunderImg2);
              break;
      case 3: thunder.addImage("3",thunderImg3);
              break;
      case 4: thunder.addImage("4",thunderImg4);
              break;
      default: break;
    }

}
/*
if(rand === 1){
	thunder = createSprite(400,100,10,10);
	thunder.addImage("w", thunderImg1);
thunder.scale = 0.4;

}else if(rand === 2){
	thunder = createSprite(400,100,10,10);
	thunder.addImage("a", thunderImg2);
	thunder.scale = 0.4

}else if(rand === 3){
	thunder = createSprite(400,100,10,10);
	thunder.addImage("s", thunderImg3);
	thunder.scale = 0.4
}else if(rand === 4){
	thunder = createSprite(400,100,10,10);
	thunder.addImage("d", thunderImg4);
	thunder.scale = 0.4
}*/
drawSprites();







}
