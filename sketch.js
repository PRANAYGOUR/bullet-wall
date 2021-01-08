var bullet,thickness, wall;
var speed, weight;

function setup() {

  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness=random( 22,83)
bullet =   createSprite(50, 200, 50, 10);

wall = createSprite(1200,200,thickness,100);
wall.shapeColor = color(80,80,80);
bullet.velocityX =speed;
//wall.velocityX=weight;

}

function draw() {
  background(0);  
 if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){
      bullet.shapeColor= color("green");
     wall.shapeColor = color("green");
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor= color("blue");
      wall.shapeColor = color("blue");
    }
    if(deformation<100){
      bullet.shapeColor= color("red");
      wall.shapeColor = color("red");
    }
  }



  
  
  drawSprites();
}