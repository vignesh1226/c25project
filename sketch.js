const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var a,b,c,d,e;

var arr = []

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    for(i = 0;i < 400;i = i+15){
        a = new Raindrop(random(0,400),i,15);
        b = new Raindrop(random(0,400),i,10);
        c = new Raindrop(random(0,400),i,25);
        d = new Raindrop(random(0,400),i,30);
        e = new Raindrop(random(0,400),i,20);
    }

    arr = [a,b,c,d,e]

    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);


        arr[0].display()
        arr[1].display()
        arr[2].display()
        arr[3].display()
        arr[4].display()

    ground.display();
}