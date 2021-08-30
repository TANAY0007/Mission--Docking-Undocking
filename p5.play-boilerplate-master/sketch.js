let hasDocked=false

function preload() {
  issImage= loadImage("Docking-undocking/iss.png")
  bgImage=loadImage("Docking-undocking/spacebg.jpg")
  space1=loadAnimation("Docking-undocking/spacecraft1.png")
  space2= loadAnimation("Docking-undocking/spacecraft2.png")
  space3= loadAnimation ("Docking-undocking/spacecraft3.png")
  space4= loadAnimation(" Docking-undocking/spacecraft4.png")
}



function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issImage)
  iss.scale=0.8
  spacecraft= createSprite(350, 300, 50,50)
  spacecraft.addAnimation('craft_standing', space1)
  spacecraft.scale=0.2  
  if(!hasDocked){
    spacecraft.x=Math.round(random(0, 800))
  }
  if(!hasDocked){
    spacecraft.y= Math.round(random(200, 400))
  }  
}

function draw() {
  background(bgImage);  
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spacecraft.addAnimation('craft_standing',space4)
      spacecraft.x=spacecraft.x-5

    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addAnimation('craft_standing',space3)
      spacecraft.x=spacecraft.x+5
    }
    if(keyDown(UP_ARROW)){
      spacecraft.addAnimation('craft_standing',space2)
      spacecraft.y=spacecraft.y-5
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addAnimation('craft_standing',space1)
      spacecraft.y=spacecraft.y+5
    }
    console.log(spacecraft.x)
    console.log(spacecraft.y)
    if(spacecraft.x>340 && spacecraft.x <360 && spacecraft.y>280 && spacecraft.y<300){
      hasDocked=true
    }

  }
  else if(hasDocked){
      fill('white')
      textSize(40)
      text('Docking Successful!', 250, 380 )
  }
  drawSprites();
}