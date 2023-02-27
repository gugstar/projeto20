
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine,world
var box,ball,tijolo


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic : false,
		frictionAir:0.2
 }




    barra = Bodies.rectangle(400,10,300,50,plane_options)
	World.add(world,barra)

    ball = Bodies.circle(200,40,50,50)
	World.add(world,ball)







	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(100,200,200);
  
  Engine.update(engine)
push()

  fill("red")
rect(barra.position.x,barra.position.y,150,25)

pop()
ellipse(ball.position.x,ball.position.y,50,50)
  drawSprites();
 
}



