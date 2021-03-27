const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = []
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  engine = Engine.create();
    world = engine.world;

  createCanvas(480, 800);
  // createSprite(400, 200, 50, 50);
  ground = new Ground(width/2,height-5,width,10);
  for (var k = 0; k <= width; k+=80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }
  for (var j = 40; j <= width; j +=50)
{
plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10; j+=50) 
{
plinkos.push(new Plinko(j,175));
}
for (var j = 40; j <=width; j+=50) 
{
plinkos.push(new Plinko(j,275));
}
for (var j = 15; j <=width-10; j+=50) 
{
plinkos.push(new Plinko(j,375));
}
  
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0);
  if (frameCount%60===0){
    particles.push(new Particle(random (width/2-10, width/2+10), 10,10))
  }
  ground.display();

for (var j = 0; j < plinkos.length; j++) {
  plinkos[j].display();
}
for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}
  for (var k = 0; k < divisions. length; k++) {
  divisions [k].display();
  
  }
  // particle.display();
  // drawSprites();
}