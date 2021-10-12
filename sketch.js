function setup() {
  createCanvas(500,500);
  background(51);
  box = createSprite(250,250,30,30);
  box.shapeColor="black";

}

function draw() 
{

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("pink");
    
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    background("lightblue");

  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("lightgreen");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("red");
  
  }


  
  drawSprites();
}



