# p5.play-boilerplate
Boiler plate for p5.play
const World=Matter.World
const Bodies=Matter.Bodies
const Engine=Matter.Engine

## class 21
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var myengine,myworld
var myobject
var ground,ball

function setup(){
  createCanvas(400,400)
  myengine =  Engine.create()
  myworld = myengine.world;

//for static option
var ground_options={
  isStatic:true
}

var ball_options={

 restitution:0.7

}
ground=Bodies.rectangle(200,390,200,20,ground_options)
World.add(myworld,ground)

ball=Bodies.circle(200,100,20,ball_options)
World.add(myworld,ball)

console.log(ground)
  myobject = Bodies.rectangle(100,100,50,50)

  World.add(myworld,myobject)

  console.log(myobject)
  console.log(myobject.type)
  console.log(myobject.position.x)
}

function draw() {
  background(3);
  Engine.update(myengine)
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)


  rectMode(CENTER)
  rect(myobject.position.x,myobject.position.y,40,40)

}






