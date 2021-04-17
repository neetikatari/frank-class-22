
class Ball{
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius=radius;
        var options={
            'restitution':0.8,
            'friction':0.8,
            'density':1.5
         }
        this.body = Bodies.circle(this.x, this.y, this.radius,options);
        World.add(myworld,this.body) 
    }

    display(){
    
        //namespace
        var pos=this.body.position;
        var angle=this.body.angle;
    
        //used to change the proprty or add new settings
        push();
    
        //translate:change the x and y position according to body
        //rotate:engine properties like frinction restitution
        translate(pos.x,pos.y);
        rotate(angle);   
        ellipseMode(CENTER);
        ellipse(0,0,this.radius*2,this.radius*2)
    
        //used to bring back to older setings
        pop ();
    }
}