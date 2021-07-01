class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,5,options);
        this.r = 5;
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angles = this.body.angle;
        fill("white");
        push();
        translate(pos.x,pos.y);
        rotate(angles);
        fill ("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}