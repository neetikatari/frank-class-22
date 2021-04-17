class Bird{
    constructor(x,y,width,height){
    
        var options={
           'restitution':0.8,
           'friction':0.8,
           'density':1.5
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
    
        //translate:change the x and y position according to body
        //rotate:engine properties like frinction restitution
        translate(pos.x,pos.y);
        rotate(angle);   
        fill("red")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
    
        //used to bring back to older setings
        pop ();
    }

};

