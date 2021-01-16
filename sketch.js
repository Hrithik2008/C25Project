
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftBox,rightBox,downBox,dustbinPic,dustbin;

function preload(){
	dustbinPic=loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(100,680,40);
	ground=new Ground(400,700,800,20);
	leftBox = new Box(width/2+100,height-135,20,241.3);
	rightBox = new Box(width/2+300,height-135,20,241.3);
	downBox = new Box(width/2+200,height-25,200,20);
	
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(200,200,200);
  
  imageMode(CENTER);

  drawSprites();

  ball.display();
  ground.display();
 
  downBox.display();
  leftBox.display();
  rightBox.display();
 
  image(dustbinPic,downBox.body.position.x,downBox.body.position.y-110,200,241.304348);
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Body.applyForce(ball.body,ball.body.position,{x:200,y:-300});

	}
}



