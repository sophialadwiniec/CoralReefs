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
var bleached; 


// A Clickable object
var beginButton;

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
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  drawFunction = start; 

  makeBeginButton();
}

// Just draw the button
function draw() {
  background(128);
  drawFunction(); 
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
   image(images[0], 0, 0, windowWidth, windowHeight);
   beginButton.draw();
}

questionOne = function() {
   image(images[1], 0, 0, windowWidth, windowHeight);
}

questionTwo = function() {
   image(images[2], 0, 0, windowWidth, windowHeight);
}

questionThree = function() {
   image(images[3], 0, 0, windowWidth, windowHeight);
}

questionFour = function() {
   image(images[4], 0, 0, windowWidth, windowHeight);
}

questionFive = function() {
   image(images[5], 0, 0, windowWidth, windowHeight);
}

questionSix = function() {
   image(images[6], 0, 0, windowWidth, windowHeight);
}

questionSeven = function() {
   image(images[7], 0, 0, windowWidth, windowHeight);
}

endOfQuestions = function() {
  image(images[8], 0, 0, windowWidth, windowHeight);
}


function keyTyped() {
  if (drawFunction === questionOne){
    if(key === 'a'){
      drawFunction = questionTwo;
      bleached++;  
    }
    else if(key === 'b'){
      drawFunction = questionTwo;
      bleached++;  
    }
    else if(key === 'c'){
      drawFunction = questionTwo;
      bleached++;  
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
      drawFunction = questionThree;
      bleached++;  
    }
    else if(key === 'd'){
      drawFunction = questionThree;
    }
  }

  else if (drawFunction === questionThree){
    if(key === 'a'){
      drawFunction = questionFour;
    }
    else if(key === 'b'){
      drawFunction = questionFour;
      bleached++; 
    }
    else if(key === 'c'){
      drawFunction = questionFour;
      bleached++;  
    }
  }

  else if (drawFunction === questionFour){
    if(key === 'a'){
      drawFunction = questionFive;
      bleached++;  
    }
    else if(key === 'b'){
      drawFunction = questionFive;
      bleached++; 
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
      drawFunction = questionSix;
      bleached++; 
    }
    else if(key === 'd'){
      drawFunction = questionSix;
    }
    else if(key === 'e'){
      drawFunction = questionSix;
      bleached++; 
    }
  }

  else if (drawFunction === questionSix){
    if(key === 'a'){
      drawFunction = questionSeven;  
    }
    else if(key === 'b'){
      drawFunction = questionSeven;
      bleached++; 
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
      drawFunction = endOfQuestions;
      bleached++; 
    }
    else if(key === 'd'){
      drawFunction = endOfQuestions;
      bleached++; 
    }
  }
}

