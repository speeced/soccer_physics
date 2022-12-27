// ************************************************
// Teugg Soccer Physics
// Rip-off of the once popular Soccer Physics game
// Horribly coded by : Kevin Le Teugg, 2020
// File : ball.js
// Description : Ball class
// ************************************************

function Ball(options) {

  // ATTRIBUTES
  this.x = options.startPosX;
  this.y = options.startPosY;
  this.r = options.radius;
  this.body = Bodies.circle(this.x, this.y, this.r, options);

  // Adding the body to the world
  World.add(world, this.body);

  // DRAWING FUNCTION
  this.show = function() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    image(spriteSoccerBall, -this.r, -this.r, 2 * this.r, 2 * this.r);
    stroke(0, 0, 0);
    fill(255);
    pop();
  }

  this.isOnGround = function(ground) {
    return Matter.SAT.collides(this.body, ground.body).collided;
  }
}