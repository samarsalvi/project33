const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg
var snow1, snow2
function preload(){
 bg = loadImage("snow2.jpg")
  //snow1 = loadImage("snow4.webp")
 // snow2 = loadImage("snow5.webp")
}
function setup() {
  createCanvas(1080, 530);
   engine = Engine.create();
    world = engine.world;
 // createSprite(400, 200, 50, 50);
  snow1 = new Snow(Math.random(10,700), 10)
  snow2 = new Snow(Math.random(20,800), 300)
  snow3 = new Snow(Math.random(70,500), 10)
  snow4 = new Snow(Math.random(50,600), 10)
  snow5 = new Snow(Math.random(70,300), 10)
  snow6 = new Snow(Math.random(30,800), 10)
  snow7 = new Snow(Math.random(60,400), 10)

}

function draw() {
  background(bg);  

  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();





  drawSprites();
}