const Constraint= Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";
var level;
var L1,L2,L3;
var gameState =0;
var score1=0;
var score2= 0;
var score3=0;
var edges;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
	level= new Level();
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
if(gameState===0){
   level.display();
}
if(gameState===1){
	level.hide();
	L1.display();
	}

if(gameState===2){
	level.hide();
	L2.display();
}
 
}
/*

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.position, {x:-300,y:-270});

	}
}
*/
