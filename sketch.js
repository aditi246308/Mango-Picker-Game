
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world, engine, tree, boy, mango1, mango2, mango3, mango4, mango5, mango6, mango7, stone1, chain1;

function preload(){
	boy = loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 1000);
	engine = Engine.create();
	world = engine.world;

  tree = new Tree(900,680);
  
  mango1 = new Mango(850,650,80,80);
  mango1.scale = 0.02;
  
  mango2 = new Mango(1000,650,80,80);
  mango2.scale = 0.02;
  
  mango3 = new Mango(1075,550,80,80);
  mango3.scale = 0.02;
  
  mango4 = new Mango(925,550,80,80);
  mango4.scale = 0.02;
  
  mango5 = new Mango(775,550,80,80);
  mango5.scale = 0.02;

  mango6 = new Mango(850,450,80,80);
  mango6.scale = 0.02;
  
  mango7 = new Mango(1000,450,80,80);
  mango7.scale = 0.02;

  stone1 = new Stone(60,770,40,45);

  chain1 = new Chain(stone1,boy,0,0);


}

function draw() {

  background(255);
  Engine.update(engine);

   
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  
  image(boy,100,750,160,280);
}

function drawLine(constraint)
{
	stoneBodyPosition=constraint.bodyA.position
	boyBodyPosition=constraint.bodyB.position

	boyBodyOffset=constraint.pointB;
	
	boyBodyX=roofBodyPosition.x+roofBodyOffset.x
	boyBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(stoneBodyPosition.x, stoneBodyPosition.y, boyBodyX,boyBodyY);
}
