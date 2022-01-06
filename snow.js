class Snow{
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.6,
          'density':2.0
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius = 50;
     // this.height = height;
      this.Image = loadImage("snow4.webp")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate (pos.x, pos.y)
      rotate (this.body.angle)
      imageMode(CENTER);
      fill("red");
      image(this.Image, 0,0, this.radius, this.radius);
      pop ()
    }
  };
  