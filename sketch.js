
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trashcan, trashcan2, trashcan3, paper, trashcanimage, paperimage

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	var options={
		isStatic:false,
		restitution: 0.3,
		friction:0.5,
		density:0.2
	}

	paper = createSprite(100,650,25,25)
	paper.shapeColor = color(255,0,0)

	trashcan = createSprite(600,680,40,200)
	trashcan2 = createSprite(700,680,160,40)
	trashcan3 = createSprite(770,680,40,200)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper.Body, paper.Body.position,{x:85,y:-85})
	}
}


