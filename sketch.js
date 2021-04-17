
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

   paper= new Paper(100,650,80)
  
}


function draw() {
  rectMode(CENTER);
  Engine.run(engine);

  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
}

function keyPressed(){
   if(keyCode === 32){
    Body.applyForce(paper,paper.body.position,{x:80, y:-80})
   }

}
