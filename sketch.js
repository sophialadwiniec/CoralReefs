// /***********************************************************************************
// 	Project1 
// 	by Sophia Ladwiniec

//
// ------------------------------------------------------------------------------------
// ***********************************************************************************/

// // Array of images
var images = [];

// var beginButton; 

// variable that is a function 
var drawFunction;

// keeps track of answers 
var bleached = 0; 


//Clickable objects
var beginButton;
var coralReefButton; 
var goToCoralReefButton; 
var coralImportanceButton; 
var bleachingButton;
var helpButton; 
var backButton;  
var mantaRayButton;
var turtleButton; 
var dolphinButton; 
var jellyfishButton;
var clownfishButton; 
var octopusButton; 
var crabButton; 
var whaleSharkButton; 


var turtleX = 1500 * (1/32) - 30; 
var turtleY = 850 * (1/32) - 90; 

var spongebob; 
var jellyfish; 
var jellyfishGroup; 

// load all images into an array
function preload() {
  images[0] = loadImage('assets/Start Page.png');
  images[1] = loadImage('assets/Question 1.png');
  images[2] = loadImage('assets/Question 2.png');
  images[3] = loadImage('assets/Question 3.png');
  images[4] = loadImage('assets/Question 4.png');
  images[5] = loadImage('assets/Question 5.png');
  images[6] = loadImage('assets/Question 6.png');
  images[7] = loadImage('assets/Question 7.png');
  images[8] = loadImage('assets/End of Questions Page.png');
  images[9] = loadImage('assets/Bleached Reef.png');
  images[10] = loadImage('assets/Somewhat bleached reef.png');
  images[11] = loadImage('assets/Healthy reef.png');
  images[12] = loadImage('assets/Coral Reef.png');
  images[13] = loadImage('assets/Coral reef importance.png');
  images[14] = loadImage('assets/Bleaching.png');
  images[15] = loadImage('assets/How can I help.png');
  images[16] = loadImage('assets/manta ray.png'); 
  images[17] = loadImage('assets/turtle.png'); 
  images[18] = loadImage('assets/dolphin.png'); 
  images[19] = loadImage('assets/jellyfish.png'); 
  images[20] = loadImage('assets/clownfish.png'); 
  images[21] = loadImage('assets/octopus.png'); 
  images[22] = loadImage('assets/crab.png');
  images[23] = loadImage('assets/whale shark.png');
  images[24] = loadImage('assets/turtle page.png');
  images[25] = loadImage('assets/jellyfish page.png');
  images[26] = loadImage('assets/spongebob jellyfishing.png'); 
  images[27] = loadImage('assets/cartoon jellyfish.png'); 
}

function setup() {
  createCanvas(1500, 850);

  spongebob = createSprite(100, 100);
  images[26].resize(300,300); 
  spongebob.addAnimation('normal',images[26],images[26]); 

  // jellyfish = createSprite(100,100); 
  images[27].resize(130, 140); 
  // jellyfish.addAnimation('normal',images[27],images[27]); 

  jellyfishGroup = new Group(); 

  drawFunction = start; 

  makeBeginButton();
  makeCoralReefButton(); 
  makeGoToCoralReefButton(); 
  makeCoralImportanceButton();
  makeBleachingButton();
  makeHelpButton(); 
  makeBackButton(); 
  makeMantaRayButton(); 
  makeTurtleButton(); 
  makeDolphinButton(); 
  makeJellyfishButton(); 
  makeClownfishButton(); 
  makeOctopusButton(); 
  makeCrabButton(); 
  makeWhaleSharkButton(); 
}

// Just draw the button
function draw() {
  background(128);
  drawFunction(); 
}

function makeWhaleSharkButton() {

  // Create the clickable object
  whaleSharkButton = new Clickable();
  
  whaleSharkButton.text = "";

  whaleSharkButton.image = images[23]; 

  // // This would give it a white background
  whaleSharkButton.color = "#00000000";
  whaleSharkButton.strokeWeight = 0; 

  // // set width + height to image size
  whaleSharkButton.width = 270; 
  whaleSharkButton.height = 390;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  whaleSharkButton.locate( width * (31/32) - whaleSharkButton.width * (31/32), height * (1/128) - whaleSharkButton.height * (1/128));

  // // Clickable callback functions, defined below
  whaleSharkButton.onPress = goToCoralReefButtonPressed;
  whaleSharkButton.onHover = beginButtonHover;
  whaleSharkButton.onOutside = animalButtonOnOutside;
}


function makeCrabButton() {

  // Create the clickable object
  crabButton = new Clickable();
  
  crabButton.text = "";

  crabButton.image = images[22]; 

  // // This would give it a white background
  crabButton.color = "#00000000";
  crabButton.strokeWeight = 0; 

  // // set width + height to image size
  crabButton.width = 280; 
  crabButton.height = 120;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  crabButton.locate( width * (31/32) - crabButton.width * (31/32), height * (26/32) - crabButton.height * (26/32));

  // // Clickable callback functions, defined below
  crabButton.onPress = goToCoralReefButtonPressed;
  crabButton.onHover = beginButtonHover;
  crabButton.onOutside = animalButtonOnOutside;
}

function makeOctopusButton() {

  // Create the clickable object
  octopusButton = new Clickable();
  
  octopusButton.text = "";

  octopusButton.image = images[21]; 

  // // This would give it a white background
  octopusButton.color = "#00000000";
  octopusButton.strokeWeight = 0; 

  // // set width + height to image size
  octopusButton.width = 290; 
  octopusButton.height = 160;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  octopusButton.locate( width * (13/16) - octopusButton.width * (13/16), height * (1/2) - octopusButton.height * (1/2));

  // // Clickable callback functions, defined below
  octopusButton.onPress = goToCoralReefButtonPressed;
  octopusButton.onHover = beginButtonHover;
  octopusButton.onOutside = animalButtonOnOutside;
}

function makeClownfishButton() {

  // Create the clickable object
  clownfishButton = new Clickable();
  
  clownfishButton.text = "";

  clownfishButton.image = images[20]; 

  // // This would give it a white background
  clownfishButton.color = "#00000000";
  clownfishButton.strokeWeight = 0; 

  // // set width + height to image size
  clownfishButton.width = 200; 
  clownfishButton.height = 100;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  clownfishButton.locate( width * (3/4) - clownfishButton.width * (3/4), height * (12/16) - clownfishButton.height * (12/16));

  // // Clickable callback functions, defined below
  clownfishButton.onPress = goToCoralReefButtonPressed;
  clownfishButton.onHover = beginButtonHover;
  clownfishButton.onOutside = animalButtonOnOutside;
}

function makeJellyfishButton() {

  // Create the clickable object
  jellyfishButton = new Clickable();
  
  jellyfishButton.text = "";

  jellyfishButton.image = images[19]; 

  // // This would give it a white background
  jellyfishButton.color = "#00000000";
  jellyfishButton.strokeWeight = 0; 

  // // set width + height to image size
  jellyfishButton.width = 278; 
  jellyfishButton.height = 120;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  jellyfishButton.locate( width * (1/2) - jellyfishButton.width * (1/2), height * (3/4) - jellyfishButton.height * (3/4));

  // // Clickable callback functions, defined below
  jellyfishButton.onPress = jellyfishButtonPressed;
  jellyfishButton.onHover = beginButtonHover;
  jellyfishButton.onOutside = animalButtonOnOutside;
}

jellyfishButtonPressed = function () {
  drawFunction = jellyfishPage; 
}


function makeDolphinButton() {

  // Create the clickable object
  dolphinButton = new Clickable();
  
  dolphinButton.text = "";

  dolphinButton.image = images[18]; 

  // // This would give it a white background
  dolphinButton.color = "#00000000";
  dolphinButton.strokeWeight = 0; 

  // // set width + height to image size
  dolphinButton.width = 401; 
  dolphinButton.height = 266;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  dolphinButton.locate( width * (1/2) - dolphinButton.width * (1/2), height * (1/4) - dolphinButton.height * (1/4));

  // // Clickable callback functions, defined below
  dolphinButton.onPress = goToCoralReefButtonPressed;
  dolphinButton.onHover = beginButtonHover;
  dolphinButton.onOutside = animalButtonOnOutside;
}

function makeTurtleButton() {

  // Create the clickable object
  turtleButton = new Clickable();
  
  turtleButton.text = "";

  turtleButton.image = images[17]; 

  // // This would give it a white background
  turtleButton.color = "#00000000";
  turtleButton.strokeWeight = 0; 

  // // set width + height to image size
  turtleButton.width = 317; 
  turtleButton.height = 211;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  turtleButton.locate( width * (1/32) - turtleButton.width * (1/32), height * (13/16) - turtleButton.height * (13/16));

  // // Clickable callback functions, defined below
  turtleButton.onPress = turtleButtonPressed;
  turtleButton.onHover = beginButtonHover;
  turtleButton.onOutside = animalButtonOnOutside;
}

turtleButtonPressed = function () {
  drawFunction = turtlePage; 
}

function makeMantaRayButton() {

  // Create the clickable object
  mantaRayButton = new Clickable();
  
  mantaRayButton.text = "";

  mantaRayButton.image = images[16]; 

  // // This would give it a white background
  mantaRayButton.color = "#00000000";
  mantaRayButton.strokeWeight = 0; 

  // // set width + height to image size
  mantaRayButton.width = 242; 
  mantaRayButton.height = 156;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  mantaRayButton.locate( width * (1/32) - mantaRayButton.width * (1/32), height * (1/3) - mantaRayButton.height * (1/3));

  // // Clickable callback functions, defined below
  mantaRayButton.onPress = goToCoralReefButtonPressed;
  mantaRayButton.onHover = beginButtonHover;
  mantaRayButton.onOutside = animalButtonOnOutside;
}

animalButtonOnOutside = function () {
  this.color = "#00000000";
}

function makeBackButton() {

  // Create the clickable object
  backButton = new Clickable();
  
  backButton.text = "Back";
  backButton.textColor = "#365673"; 
  backButton.textSize = 25; 


  // // This would give it a white background
  backButton.color = "#8FD9CB";

  // // set width + height to image size
  backButton.width = 100;
  backButton.height = 40;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  backButton.locate( width * (1/32) , height * (15/16));

  // // Clickable callback functions, defined below
  backButton.onPress = goToCoralReefButtonPressed;
  backButton.onHover = beginButtonHover;
  backButton.onOutside = beginButtonOnOutside;
}

function makeHelpButton() {

  // Create the clickable object
  helpButton = new Clickable();
  
  helpButton.text = "How can you help?";
  helpButton.textColor = "#365673"; 
  helpButton.textSize = 25; 


  // // This would give it a white background
  helpButton.color = "#8FD9CB";

  // // set width + height to image size
  helpButton.width = 380;
  helpButton.height = 62;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  helpButton.locate( width * (23/32) , height * (7/8));

  // // Clickable callback functions, defined below
  helpButton.onPress = helpButtonPressed;
  helpButton.onHover = beginButtonHover;
  helpButton.onOutside = beginButtonOnOutside;
}

helpButtonPressed = function () {
  drawFunction = helpPage; 
}

function makeBleachingButton() {

  // Create the clickable object
  bleachingButton = new Clickable();
  
  bleachingButton.text = "What is bleaching?";
  bleachingButton.textColor = "#365673"; 
  bleachingButton.textSize = 25; 


  // // This would give it a white background
  bleachingButton.color = "#8FD9CB";

  // // set width + height to image size
  bleachingButton.width = 380;
  bleachingButton.height = 62;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  bleachingButton.locate( width * (12/32) , height * (7/8));

  // // Clickable callback functions, defined below
  bleachingButton.onPress = bleachingButtonPressed;
  bleachingButton.onHover = beginButtonHover;
  bleachingButton.onOutside = beginButtonOnOutside;
}

bleachingButtonPressed = function () {
  drawFunction = whatIsBleaching; 
}

function makeCoralImportanceButton() {

  // Create the clickable object
  coralImportanceButton = new Clickable();
  
  coralImportanceButton.text = "Why are coral reefs important?";
  coralImportanceButton.textColor = "#365673"; 
  coralImportanceButton.textSize = 25; 


  // // This would give it a white background
  coralImportanceButton.color = "#8FD9CB";

  // // set width + height to image size
  coralImportanceButton.width = 380;
  coralImportanceButton.height = 62;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  coralImportanceButton.locate( width * (1/32) , height * (7/8));

  // // Clickable callback functions, defined below
  coralImportanceButton.onPress = coralImportanceButtonPressed;
  coralImportanceButton.onHover = beginButtonHover;
  coralImportanceButton.onOutside = beginButtonOnOutside;
}

coralImportanceButtonPressed = function () {
  drawFunction = coralReefImportance; 
}

function makeGoToCoralReefButton() {

  // Create the clickable object
  goToCoralReefButton = new Clickable();
  
  goToCoralReefButton.text = "Click here to go to the interactive reef";
  goToCoralReefButton.textColor = "#365673"; 
  goToCoralReefButton.textSize = 37; 


  // // This would give it a white background
  goToCoralReefButton.color = "#8FD9CB";

  // // set width + height to image size
  goToCoralReefButton.width = 739;
  goToCoralReefButton.height = 84;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  goToCoralReefButton.locate( width/2 - goToCoralReefButton.width/2 , height * (3/4));

  // // Clickable callback functions, defined below
  goToCoralReefButton.onPress = goToCoralReefButtonPressed;
  goToCoralReefButton.onHover = beginButtonHover;
  goToCoralReefButton.onOutside = beginButtonOnOutside;
}

goToCoralReefButtonPressed = function () {
  drawFunction = coralReef; 
}

function makeCoralReefButton() {

  // Create the clickable object
  coralReefButton = new Clickable();
  
  coralReefButton.text = "Click here to see your coral reef!";
  coralReefButton.textColor = "#365673"; 
  coralReefButton.textSize = 37; 


  // // This would give it a white background
  coralReefButton.color = "#8FD9CB";

  // // set width + height to image size
  coralReefButton.width = 994;
  coralReefButton.height = 90;

  // // set to middle of screen, since we are drawing from the corners, we need to make an
  // // additional calculation here
  coralReefButton.locate( width/2 - coralReefButton.width/2 , height * (3/4));

  // // Clickable callback functions, defined below
  coralReefButton.onPress = coralReefButtonPressed;
  coralReefButton.onHover = beginButtonHover;
  coralReefButton.onOutside = beginButtonOnOutside;
}

coralReefButtonPressed = function () {
  print('The value of bleached is ' + bleached);
  if(bleached <= 7 && bleached >= 5){
    drawFunction = bleachedReef; 
  } else if(bleached <= 4 && bleached >= 2){
    drawFunction = somewhatBleachedReef; 
  }
  else {
    drawFunction = healthyReef; 
  }
}

function makeBeginButton() {

  // Create the clickable object
  beginButton = new Clickable();
  
  beginButton.text = "Click to Begin";
  beginButton.textColor = "#365673"; 
  beginButton.textSize = 37; 


  // This would give it a white background
  beginButton.color = "#8FD9CB";

  // set width + height to image size
  beginButton.width = 434;
  beginButton.height = 97;

  // set to middle of screen, since we are drawing from the corners, we need to make an
  // additional calculation here
  beginButton.locate( width/2 - beginButton.width/2 , height * (3/4));

  // Clickable callback functions, defined below
  beginButton.onPress = beginButtonPressed;
  beginButton.onHover = beginButtonHover;
  beginButton.onOutside = beginButtonOnOutside;
}

// Meow alert box when pressed (mouse down)
beginButtonPressed = function () {
  drawFunction = questionOne; 
}

// tint when mouse is over
beginButtonHover = function () {
  this.color = "#F29199";
}

// return to normal when it is outside
beginButtonOnOutside = function () {
  this.color = "#8FD9CB";
}

start = function() {
   image(images[0], 0, 0, width, height);
   beginButton.draw();
}

questionOne = function() {
   image(images[1], 0, 0, width, height);
}

questionTwo = function() {
   image(images[2], 0, 0, width, height);
}

questionThree = function() {
   image(images[3], 0, 0, width, height);
}

questionFour = function() {
   image(images[4], 0, 0, width, height);
}

questionFive = function() {
   image(images[5], 0, 0, width, height);
}

questionSix = function() {
   image(images[6], 0, 0, width, height);
}

questionSeven = function() {
   image(images[7], 0, 0, width, height);
}

endOfQuestions = function() {
  image(images[8], 0, 0, width, height);
  coralReefButton.draw();
}

bleachedReef = function() {
  image(images[9], 0, 0, width, height);
  goToCoralReefButton.draw(); 
}

somewhatBleachedReef = function() {
  image(images[10], 0, 0, width, height);
  goToCoralReefButton.draw(); 
}

healthyReef = function() {
  image(images[11], 0, 0, width, height);
  goToCoralReefButton.draw(); 
}

coralReef = function() {
  image(images[12], 0, 0, width, height);
  coralImportanceButton.draw();
  bleachingButton.draw(); 
  helpButton.draw(); 
  mantaRayButton.draw(); 
  turtleButton.draw(); 
  dolphinButton.draw(); 
  jellyfishButton.draw(); 
  clownfishButton.draw(); 
  octopusButton.draw(); 
  crabButton.draw(); 
  whaleSharkButton.draw(); 
}

coralReefImportance = function(){
  image(images[13], 0, 0, width, height);
  backButton.draw(); 
}

whatIsBleaching = function(){
  image(images[14], 0, 0, width, height);
  backButton.draw(); 
}

helpPage = function(){
  image(images[15], 0, 0, width, height);
  backButton.draw(); 
}

turtlePage = function(){
  image(images[24], 0, 0, width, height);
  image(images[17], turtleX, turtleY, 400, 300); 
  backButton.draw(); 
}

jellyfishPage = function(){
  image(images[25], 0, 0, width, height);
  image(images[19], width * (1/16) - 60, height * (1/16), 400, 200);
  
  spongebob.velocity.x = (mouseX - spongebob.position.x)/10; 
  spongebob.velocity.y = (mouseY - spongebob.position.y)/10; 
  jellyfishGroup.overlap(spongebob, collect); 
  drawSprites(); 
  backButton.draw(); 
}

function collect(sprite)
{
  sprite.remove();
}

function keyPressed(){
  if (drawFunction === turtlePage){
    if(keyCode === UP_ARROW){
      turtleY = turtleY - 30; 
    }
    else if(keyCode === DOWN_ARROW){
      turtleY = turtleY + 30; 
    }
    else if(keyCode === RIGHT_ARROW){
      turtleX = turtleX + 30; 
    }
    else if(keyCode === LEFT_ARROW){
      turtleX = turtleX - 30; 
    }
  }
  if (drawFunction === jellyfishPage){
    if(keyCode === UP_ARROW){
      for(var i = 0; i < 20; i++){
        var jellyfishSingle = createSprite(random(0,width), random(0, height));
        jellyfishSingle.addAnimation('normal',images[27],images[27]);  
        jellyfishGroup.add(jellyfishSingle); 
      }
    }
  }
}


function keyTyped() {
  if (drawFunction === questionOne){
    if(key === 'a'){
      drawFunction = questionTwo;
    }
    else if(key === 'b'){
      bleached++;  
      print('the width is' + width + "the height is: " + height);
      drawFunction = questionTwo;
    }
    else if(key === 'c'){
      bleached++;  
      print('The value of bleached is ' + bleached);
      drawFunction = questionTwo;
    }
    else if(key === 'd'){
      drawFunction = questionTwo;
    }
  }

  else if (drawFunction === questionTwo){
    if(key === 'a'){
      drawFunction = questionThree;
    }
    else if(key === 'b'){
      drawFunction = questionThree;
    }
    else if(key === 'c'){
      bleached++;  
      drawFunction = questionThree;
    }
    else if(key === 'd'){
      bleached++;  
      drawFunction = questionThree;
    }
  }

  else if (drawFunction === questionThree){
    if(key === 'a'){
      drawFunction = questionFour;
    }
    else if(key === 'b'){
      bleached++;  
      drawFunction = questionFour;
    }
    else if(key === 'c'){
      bleached++;  
      drawFunction = questionFour;
    }
  }

  else if (drawFunction === questionFour){
    if(key === 'a'){
      bleached++;  
      drawFunction = questionFive;
    }
    else if(key === 'b'){
      bleached++;  
      drawFunction = questionFive;
    }
    else if(key === 'c'){
      drawFunction = questionFive;
    }
  }

  else if (drawFunction === questionFive){
    if(key === 'a'){
      drawFunction = questionSix;  
    }
    else if(key === 'b'){
      drawFunction = questionSix;
    }
    else if(key === 'c'){
      bleached++; 
      drawFunction = questionSix;
    }
    else if(key === 'd'){
      drawFunction = questionSix;
    }
    else if(key === 'e'){
      bleached++; 
      drawFunction = questionSix;
    }
  }

  else if (drawFunction === questionSix){
    if(key === 'a'){
      drawFunction = questionSeven;  
    }
    else if(key === 'b'){
      bleached++; 
      drawFunction = questionSeven;
    }
    else if(key === 'c'){
      drawFunction = questionSeven;
    }
  }

  else if (drawFunction === questionSeven){
    if(key === 'a'){
      drawFunction = endOfQuestions;  
    }
    else if(key === 'b'){
      drawFunction = endOfQuestions;
    }
    else if(key === 'c'){
      bleached++; 
      drawFunction = endOfQuestions;
    }
    else if(key === 'd'){
       bleached++; 
      drawFunction = endOfQuestions;
    }
  }

}

