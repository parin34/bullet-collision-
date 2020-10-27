var bullet,wall,thickness;
var speed, weight;


function setup() {
  createCanvas(1000,400);

  speed=random(223,321);
  weight=random(30,152);
  
  thickness=random(22,83);
  
  bullet = createSprite(50, 200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  

  wall = createSprite(900,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  
  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damege=0.5 * weight * speed * speed/(thickness * thickness *thickness);

    if(damege>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damege<10){
      wall.shapeColor=color(0,255,0);

    }
  }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdege=Lwall.x;
  if(bulletRightEdge>=wallLeftEdege){
    return true;
  }
  return false;
}