//namespace 
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myengine,myworld;
var box1,box2

function setup(){
  createCanvas(400,400)
  myengine = Engine.create();
  myworld = myengine.world

  //var ground_options={isStatic:true}
  var ball_options={restitution:0.7}
  //ground=Bodies.rectangle(200,380,400,10,ground_options)
  //World.add(myworld,ground)
  
  box1=new Box(200,300,50,50);
  box2=new Box(220,100,50,100);
  box3= new Box(60,80,41,15);
  ground= new ground(200,380,400,10)


  //for static option
  //var ground_options={isStatic:true}
  var ball_options={isStatic:false,restitution:0.7}
  ball=Bodies.circle(50,100,20,ball_options)
  World.add(myworld,ball)

  ball1 = new Ball(300,150,30)
}

function draw() {
  background(3);

  Engine.update(myengine)

  box1.display()
  box2.display()
  box3.display()
  ground.display()

//rectMode(CENTER)
//rect(ground.position.x,ground.position.y,400,20)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
console.log(ball.position)

ball1.display()
}
