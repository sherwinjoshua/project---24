class Rubber{
    constructor(x,y,r){
        var options={
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
       // this.width = width;
        //this.height = height;
        
        World.add(world, this.body);
      }
      display(){
    var pos =this.body.position;
   // pos.x = mouseX;
   // pos.y = mouseY;
    //var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    //rotate(angle);
    strokeWeight(4);
    stroke("black");
    fill("blue");
    rectMode(CENTER);
    ellipse(0, 0, this.r);
    pop();
        
    }
};