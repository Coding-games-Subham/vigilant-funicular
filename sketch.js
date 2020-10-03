
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new bob(400,450);
	ball2 = new bob(480,450);
	ball3 = new bob(560,450);
	ball4 = new bob(320,450);
	ball5 = new bob(240,450);
	roof= new Roof(400,100,400,30);
	roop1=new rope(ball1.body,roof.body,0);
	roop2=new rope(ball2.body,roof.body,80);
	roop3=new rope(ball3.body,roof.body,160);
	roop4=new rope(ball4.body,roof.body,-80);
	roop5=new rope(ball5.body,roof.body,-160);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  roop1.display(); 
  roop2.display();
  roop3.display();
  roop4.display();
  roop5.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 roof.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45}); 
	} }