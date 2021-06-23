const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubber,iron;
var stone;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(600,1100,200,50);
	plane = new Plane(600,height,1200,10);
	stone = new Stone(700,300,100,100);
	rubber = new Rubber(900,300,80);
	iron = new Iron(300,350);



  
}


function draw() {
  
  background("lightskyblue");
  Engine.update(engine)
  //drawSprites();
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();
  
}