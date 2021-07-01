const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myEngine,myWorld;

var ground1,ground2,ground3,ground4;
var division1,division2,division3,division4,division5,division6,division7,division8;

var particles1 =  [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var plinko;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground1 = new Ground(width/2,height,width,20);
  //ground2 = new Ground(0,0,10,1600);
  //ground3 = new Ground(480,0,10,1600);
  //ground4 = new Ground(0,0,960,10);

  // division1 = new Division(0,650,10,300);
  // division2 = new Division(80,650,10,300);
  // division3 = new Division(160,650,10,300);
  // division4 = new Division(240,650,10,300);
  // division5 = new Division(320,650,10,300);
  // division6 = new Division(400,650,10,300);
  // division7 = new Division(480,650,10,300);
  // division8 = new Division(520,650,10,300);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k,height - divisionHeight/2,10,divisionHeight));
  } 

  for(var j = 75; j <= width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 50; j <= width -10; j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75; j <= width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 50; j <= width -10; j = j+50){
    plinkos.push(new Plinko(j,375));
  }

 

}

function draw() {
  background(0,0,0);
  Engine.update(myEngine);
  ground1.display();
  
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%60 ===0){
    particles1.push(new Particles(random(width/2-10,width/2+10),10,10))
  }

  for(var i = 0; i<particles1.length; i++){
    particles1[i].display();
  }

  for(var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
}