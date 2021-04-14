class Box{
constructor(x,y,width,height){

    var options={
        'restitution':1.0,
        'friction':0.8,
        'density':0.8 
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(myworld,this.body);
}

display(){

    //namespace
    var pos=this.body.position;
    var angle=this.body.angle;

    //used to change the proprty 
    //add new settings
    push();

    //change the x and y position according to engine properties like frinction restitution
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height)

    //used to bring back to older setings
    pop ();
}
}

## sketch.js
box1= new Box(200,200,40,60);
box2=new Box(200,200,30,30);

box1.display();
box2.display();