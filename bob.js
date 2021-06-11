class Bob {
  constructor(x, y, radius) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,

    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
  
    
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
    var angle = this.body.angle;
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill(255);
    ellipse(0, 0, this.radius*2, this.radius*2);
    pop();
  }
};
