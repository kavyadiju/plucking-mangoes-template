
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var tree, stoneObj,groundObj, launcherObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
  boy=loadImage("images/boy.png");
  bgI=loadImage("images/bg.jpg");
  treeI=loadImage("images/tree.png")	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;




}

function draw() {

  Engine.update(engine);

  imageMode(CENTER);
  image(bgI,650,300,1300,600);
  image(treeI, 1000,300,650, 650)	
  image(boy ,300,480,200,300);
  
  textSize(25);
  fill("purple");
  text("Press Space to get a second Chance to Play!!",50 ,50);
  
  
}

function mouseDragged()
{
	

function mouseReleased()
{
	
}

function keyPressed() {
	if (keyCode === 32) {
  
	}
  }

  function detectollision(s,m){

  mPos=m.body.position
  sPos=s.body.position
  
  var distance=dist(sPos.x, sPos.y, mPos.x, mPos.y)
 
  	if(distance<=m.r+s.r)
    {
  	  Matter.Body.setStatic(m.body,false);
    }

  }
