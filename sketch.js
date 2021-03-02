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
}

function setup() {
  createCanvas(1500, 850);

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
}

// Just draw the button
function draw() {
  background(128);
  drawFunction(); 
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
  turtleButton.onPress = goToCoralReefButtonPressed;
  turtleButton.onHover = beginButtonHover;
  turtleButton.onOutside = animalButtonOnOutside;
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
  
  helpButton.text = "How can I help?";
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

