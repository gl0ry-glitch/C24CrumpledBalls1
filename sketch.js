
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground = new Ground(400,680,800,20);
  box1 = new Box(500,630,10,80);
  box2 = new Box(600,630,10,80);
  box3 = new Box(550,670,90,10);
  paper = new Paper(100,670,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 paper.display();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
	}
}



