const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var bd = 100;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,50,600,20);
    bob1 = new Bob(400,200,25);
    bob2 = new Bob(500,200,25);
    bob3 = new Bob(600,200,25);
    bob4 = new Bob(700,200,25);
    bob5 = new Bob(800,200,25);
    rope1 = new Rope(bob1.body,ground.body,-2*bd,0);
    rope2 = new Rope(bob2.body,ground.body,-1*bd,0);
    rope3 = new Rope(bob3.body,ground.body,0,0);
    rope4 = new Rope(bob4.body,ground.body,1*bd,0);
    rope5 = new Rope(bob5.body,ground.body,2*bd,0);
}

function draw(){
    background(255);
    Engine.update(engine);

    ground.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:20,y:-20})
    }
}