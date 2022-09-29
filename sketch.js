var backgroundImage
var moleImage
var mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9
var moles=[]
var score=0
var slapSound

//locations for moles{337,809;916,487;258,453;952,770;1281,604;1603,813;1739,647;1541,458;475,608}

function preload() {
  backgroundImage=loadImage("./visuals/game-screen.png")
  moleImage=loadImage("./visuals/mole.png")
  slapSound=loadSound("./sounds/slapSound.mp3")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  
  mole1=createSprite(258,384,50,50)
  mole1.addImage(moleImage)
  mole1.scale=0.45
  mole1.visible=false

  mole2=createSprite(475,539,50,50)
  mole2.addImage(moleImage)
  mole2.scale=0.55

  mole3=createSprite(337,740,50,50)
  mole3.addImage(moleImage)
  mole3.scale=0.6
  mole3.visible=false

  mole4=createSprite(916,418,50,50)
  mole4.addImage(moleImage)
  mole4.scale=0.5
  mole4.visible=false

  mole5=createSprite(952,701,50,50)
  mole5.addImage(moleImage)
  mole5.scale=0.6
  mole5.visible=false

  mole6=createSprite(1281,550,50,50)
  mole6.addImage(moleImage)
  mole6.scale=0.45
  mole6.visible=false

  mole7=createSprite(1541,389,50,50)
  mole7.addImage(moleImage)
  mole7.scale=0.45
  mole7.visible=false

  mole8=createSprite(1603,740,50,50)
  mole8.addImage(moleImage)
  mole8.scale=0.6
  

  mole9=createSprite(1739,578,50,50)
  mole9.addImage(moleImage)
  mole9.scale=0.5
  mole9.visible=false

  moles=[mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9]
}


function draw() {
  background(backgroundImage)
  
  drawSprites()

  if(mousePressedOver(mole1)&&mole1.visible===true) {
    mole1.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(mousePressedOver(mole2)&&mole2.visible===true) {
    mole2.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(mousePressedOver(mole3)&&mole3.visible===true) {
    mole3.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(mousePressedOver(mole4)&&mole4.visible===true) {
    mole4.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(mousePressedOver(mole5)&&mole5.visible===true) {
    mole5.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(mousePressedOver(mole6)&&mole6.visible===true) {
    mole6.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(mousePressedOver(mole7)&&mole7.visible===true) {
    mole7.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(mousePressedOver(mole8)&&mole8.visible===true) {
    mole8.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(mousePressedOver(mole9)&&mole9.visible===true) {
    mole9.visible=false
    score=score+1
    slapSound.play()
    slapSound.setVolume(0.4)
  }

  if(frameCount%5===0) {
    var choice=Math.round(random(0,8))
    moles[choice].visible=true
  }

  if(frameCount%10===0) {
    var choice=Math.round(random(0,8))
    moles[choice].visible=false
  }

  textSize(25)
  fill("black")
  text("Score: "+score,30,30)
  text(mouseX+ "," +mouseY,mouseX,mouseY)
 
}

