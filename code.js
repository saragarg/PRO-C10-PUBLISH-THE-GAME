var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1 = createSprite(200,100,400,10);

var boundary2 = createSprite(200,300,400,10);

var sam = createSprite(50,200,20,20);
sam.shapeColor="green";

var car1 = createSprite(125,120,15,15);
car1.shapeColor="red";
car1.velocityY=7;

var car2 = createSprite(175,275,15,15);
car2.shapeColor="red";
car2.velocityY=-7;

var car3 = createSprite(225,120,15,15);
car3.shapeColor="red";
car3.velocityY=7;


var car4 = createSprite(275,275,15,15);
car4.shapeColor="red";
car4.velocityY=-7;

var lives = 0;

function draw() {
  background("white"); 
 
fill("lightblue");
  rect(0,100,100,200);

fill("yellow");
  rect(300,100,100,200);

 
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
  
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
  
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
  
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
  
if (keyDown("right")) {
  sam.x = sam.x + 2;
}
    
  
if (keyDown("left")) {
  sam.x = sam.x - 2;
}  

textSize(30);
fill("red");
text("LIVES : "+lives,250,50);

  
if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)) {
 sam.x=50;
 sam.y=200;
 lives=lives +1;
  }
    
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
