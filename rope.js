class Rope{
    constructor (bodyA, bodyB, offsetX,offsetY){
    this.offsetX = offsetX;
    this.offsetX = offsetY;
    var options ={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope);
    }
    display(){
        push()
        var pointA=this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        var A1x =pointA.x;
        var A1y = pointA.y;
        var A2x=pointB.x+this.offsetX;
        var A2y = pointB.y+this.offsetY;
        stroke(0);
    line(A1x,A1y,A2x,A2y);
    pop();
    }
}