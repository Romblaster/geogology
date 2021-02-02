
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1
var iron1
var rubber1
var rock1
var sand1, sand2, sand3, sand4, sand5
var ground

function preload()
{
	engine = Engine.create();
	world = engine.world;

}

function setup() {
	createCanvas(800, 700);

	ground = new Ground(600,200,100,20)

//hammer1 = new hammer(100,100,50,20)

iron1 = new iron(100,100,100,100)



	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  //hammer1.display()
	ground.display()
	iron1.display()

  drawSprites();
 
}



