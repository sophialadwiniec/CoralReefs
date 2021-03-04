// /***********************************************************************************
// 	Project1 
// 	by Sophia Ladwiniec

//You will be guided at first through a quick questionnaire to bring awareness to your typical daily activites. 
//Don't worry not everyone is perfect these questions are just to shed light on how what you are doing everyday could easily change to help our coral reefs! 
//After that it will show you how your daily tasks can affect coral reefs. 
//The last portion is an interactive reef that will allow you to learn more about coral reefs and learn about the animals in coral reefs. 
// ------------------------------------------------------------------------------------
// ***********************************************************************************/

// // Array of images
var images = [];

// variable that is a function 
var drawFunction;

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

// sprites for mini animations on each page 
var spongebob; 
var jellyfishGroup; 
var clownfishGroup; 
var octopus; 
var platform; 
var crab; 
var shark; 

// global variables for jumping octopus 
var gravity = 1; 
var jump = 15; 
// specific coordinates for the turtle being able to move
var turtleX = 1500 * (1/32) - 30; 
var turtleY = 850 * (1/32) - 90;
// keeps track of user's answers to determine if their reef is bleached 
var bleached = 0;  

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
  images[28] = loadImage('assets/octopus page.png'); 
  images[29] = loadImage('assets/octopus cartoon.png');
  images[30] = loadImage('assets/platform.png');
  images[31] = loadImage('assets/fish page.png'); 
  images[32] = loadImage('assets/nemo.png');
  images[33] = loadImage('assets/crab page.png'); 
  images[34] = loadImage('assets/mr.krabs.png'); 
  images[35] = loadImage('assets/ray page.png'); 
  images[36] = loadImage('assets/mini ray.png'); 
  images[37] = loadImage('assets/dolphin page.png'); 
  images[38] = loadImage('assets/dolphin cartoon.png');
  images[39] = loadImage('assets/bubbles.png');
  images[40] = loadImage('assets/shark page.png');
  images[41] = loadImage('assets/cartoon shark.png'); 
}

// setup function which helps me resize images, create groups, and also create the animations 
function setup() {
  createCanvas(1500, 850);

  // creating animations and resizing images that are specific to certain animations 
  spongebob = createSprite(100, 100);
  images[26].resize(300,300); 
  spongebob.addAnimation('normal',images[26],images[26]); 

  images[27].resize(130, 140); 

  octopus = createSprite(width * (1/2) - 150, height *(5/8)); 
  images[29].resize(350,350); 
  octopus.addAnimation('normal', images[29], images[29]); 

  platform = createSprite(width * (1/2) - 150, 950); 
  images[30].resize(200,90); 
  platform.addAnimation('normal', images[30], images[30]);

  images[32].resize(130,97); 

  crab = createSprite(width * (1/2) - 150, height *(3/4)); 
  images[22].resize(430,300); 
  crab.addAnimation('normal', images[22], images[22]); 

  images[34].resize(250,250); 

  images[39].resize(75, 150); 

  shark = createSprite(width * (1/2) - 50, height *(14/16)); 
  images[41].resize(224, 224); 
  shark.addAnimation('normal', images[41], images[41]); 


  // creating groups for the animations that need multiple sprites 
  jellyfishGroup = new Group(); 
  clownfishGroup = new Group(); 
  rayGroup = new Group();
  bubbleGroup = new Group(); 

  // having the draw function start at the start page 
  drawFunction = start; 

  // making all my clickable buttons for each page 
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

// draw function 
function draw() {
  background(128);
  drawFunction(); 
}

// function that makes the whale shark button in the interactive reef 
function makeWhaleSharkButton() {

  // Create the clickable object
  whaleSharkButton = new Clickable();
  
  whaleSharkButton.text = "";

  whaleSharkButton.image = images[23]; 

  //makes the button color transparent 
  whaleSharkButton.color = "#00000000";
  whaleSharkButton.strokeWeight = 0; 

  //set width + height to image size
  whaleSharkButton.width = 270; 
  whaleSharkButton.height = 390;

  // placing the button on the page 
  whaleSharkButton.locate( width * (31/32) - whaleSharkButton.width * (31/32), height * (1/128) - whaleSharkButton.height * (1/128));

  // // Clickable callback functions for the whaleshark button , defined below
  whaleSharkButton.onPress = whaleSharkButtonPressed;
  whaleSharkButton.onHover = beginButtonHover;
  whaleSharkButton.onOutside = animalButtonOnOutside;
}

// when this button is pressed it will take you to the sharkpage 
whaleSharkButtonPressed = function () {
  drawFunction = sharkPage; 
}

// function that makes the crab button in the interactive reef 
function makeCrabButton() {

  // Create the clickable object
  crabButton = new Clickable();
  
  crabButton.text = "";

  crabButton.image = images[22]; 

  // gives the button a transparent background and changes the stroke to 0 
  crabButton.color = "#00000000";
  crabButton.strokeWeight = 0; 

  //set width + height to image size
  crabButton.width = 280; 
  crabButton.height = 120;

  // placing the button on the page 
  crabButton.locate( width * (31/32) - crabButton.width * (31/32), height * (26/32) - crabButton.height * (26/32));

  // // Clickable callback functions, defined below
  crabButton.onPress = crabButtonPressed;
  crabButton.onHover = beginButtonHover;
  crabButton.onOutside = animalButtonOnOutside;
}

// when this button is pressed it will take you to the crabpage 
crabButtonPressed = function () {
  drawFunction = crabPage; 
}

// function that makes the octopus button in the interactive reef 
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

  // places the button 
  octopusButton.locate( width * (13/16) - octopusButton.width * (13/16), height * (1/2) - octopusButton.height * (1/2));

  // // Clickable callback functions, defined below
  octopusButton.onPress = octopusButtonPressed;
  octopusButton.onHover = beginButtonHover;
  octopusButton.onOutside = animalButtonOnOutside;
}

// this button will take you to the octopus page 
octopusButtonPressed = function () {
  drawFunction = octopusPage; 
}

// function that creates the clownfish button in the interactive reef 
function makeClownfishButton() {

  // Create the clickable object
  clownfishButton = new Clickable();
  
  clownfishButton.text = "";

  clownfishButton.image = images[20]; 

  // makes the button's background transparent 
  clownfishButton.color = "#00000000";
  clownfishButton.strokeWeight = 0; 

  // set width + height to image size
  clownfishButton.width = 200; 
  clownfishButton.height = 100;

  // places the button on the page 
  clownfishButton.locate( width * (3/4) - clownfishButton.width * (3/4), height * (12/16) - clownfishButton.height * (12/16));

  //Clickable callback functions, defined below
  clownfishButton.onPress = clownfishButtonPressed;
  clownfishButton.onHover = beginButtonHover;
  clownfishButton.onOutside = animalButtonOnOutside;
}

// this button takes you to the clownfish page 
clownfishButtonPressed = function () {
  drawFunction = clownfishPage; 
}

// function that makes the jellyfish button 
function makeJellyfishButton() {

  // Create the clickable object
  jellyfishButton = new Clickable();
  
  jellyfishButton.text = "";

  jellyfishButton.image = images[19]; 

  // makes the image have a transparent background 
  jellyfishButton.color = "#00000000";
  jellyfishButton.strokeWeight = 0; 

  // // set width + height to image size
  jellyfishButton.width = 278; 
  jellyfishButton.height = 120;

  // places the button on the page 
  jellyfishButton.locate( width * (1/2) - jellyfishButton.width * (1/2), height * (3/4) - jellyfishButton.height * (3/4));

  // // Clickable callback functions, defined below
  jellyfishButton.onPress = jellyfishButtonPressed;
  jellyfishButton.onHover = beginButtonHover;
  jellyfishButton.onOutside = animalButtonOnOutside;
}

// takes you to the jellyfish page when pressed 
jellyfishButtonPressed = function () {
  drawFunction = jellyfishPage; 
}

// function that creates the dolphin button on the interactive reef 
function makeDolphinButton() {

  // Create the clickable object
  dolphinButton = new Clickable();
  
  dolphinButton.text = "";

  dolphinButton.image = images[18]; 

  // gives the dolphin a transparent background 
  dolphinButton.color = "#00000000";
  dolphinButton.strokeWeight = 0; 

  // set width + height to image size
  dolphinButton.width = 401; 
  dolphinButton.height = 266;

  // places the button 
  dolphinButton.locate( width * (1/2) - dolphinButton.width * (1/2), height * (1/4) - dolphinButton.height * (1/4));

  // Clickable callback functions, defined below
  dolphinButton.onPress = dolphinButtonPressed;
  dolphinButton.onHover = beginButtonHover;
  dolphinButton.onOutside = animalButtonOnOutside;
}

// takes you to the dolphin page when pressed 
dolphinButtonPressed = function () {
  drawFunction = dolphinPage; 
}

// function that creates the turtle button in the interactive reef 
function makeTurtleButton() {

  // Create the clickable object
  turtleButton = new Clickable();
  
  turtleButton.text = "";

  turtleButton.image = images[17]; 

  // this makes the turtle's background transparent 
  turtleButton.color = "#00000000";
  turtleButton.strokeWeight = 0; 

  // set width + height to image size
  turtleButton.width = 317; 
  turtleButton.height = 211;

  // places the button on the page 
  turtleButton.locate( width * (1/32) - turtleButton.width * (1/32), height * (13/16) - turtleButton.height * (13/16));

  // // Clickable callback functions, defined below
  turtleButton.onPress = turtleButtonPressed;
  turtleButton.onHover = beginButtonHover;
  turtleButton.onOutside = animalButtonOnOutside;
}

// takes you to the turtle page 
turtleButtonPressed = function () {
  drawFunction = turtlePage; 
}

// function makes the MantaRayButton on the interactive reef 
function makeMantaRayButton() {

  // Create the clickable object
  mantaRayButton = new Clickable();
  
  mantaRayButton.text = "";

  mantaRayButton.image = images[16]; 

  // gives the Manta ray a transparent background 
  mantaRayButton.color = "#00000000";
  mantaRayButton.strokeWeight = 0; 

  // set width + height to image size
  mantaRayButton.width = 242; 
  mantaRayButton.height = 156;

  // places the button on the page 
  mantaRayButton.locate( width * (1/32) - mantaRayButton.width * (1/32), height * (1/3) - mantaRayButton.height * (1/3));

  // // Clickable callback functions, defined below
  mantaRayButton.onPress = mantaRayButtonPressed;
  mantaRayButton.onHover = beginButtonHover;
  mantaRayButton.onOutside = animalButtonOnOutside;
}

// function for every animal button to make sure that the background stays transparent 
animalButtonOnOutside = function () {
  this.color = "#00000000";
}

// takes you to the ray page 
mantaRayButtonPressed = function () {
  drawFunction = rayPage; 
}

// function that creates the back button used throughout the project 
function makeBackButton() {

  // Create the clickable object
  backButton = new Clickable();
  
  // back button text 
  backButton.text = "Back";
  backButton.textColor = "#365673"; 
  backButton.textSize = 25; 

  backButton.color = "#8FD9CB";

  // set width + height to image size
  backButton.width = 100;
  backButton.height = 40;

  // places the button in the same location on every page it is used 
  backButton.locate( width * (1/32) , height * (15/16));

  // Clickable callback functions, defined below
  backButton.onPress = goToCoralReefButtonPressed;
  backButton.onHover = beginButtonHover;
  backButton.onOutside = beginButtonOnOutside;
}

// creates the help coral reef button on the interactive reef 
function makeHelpButton() {

  // Create the clickable object
  helpButton = new Clickable();
  
  helpButton.text = "How can you help?";
  helpButton.textColor = "#365673"; 
  helpButton.textSize = 25; 

  helpButton.color = "#8FD9CB";

  // set width + height to image size
  helpButton.width = 380;
  helpButton.height = 62;

  // places the button on the page 
  helpButton.locate( width * (23/32) , height * (7/8));

  // Clickable callback functions, defined below
  helpButton.onPress = helpButtonPressed;
  helpButton.onHover = beginButtonHover;
  helpButton.onOutside = beginButtonOnOutside;
}

// takes you to the help page when pressed 
helpButtonPressed = function () {
  drawFunction = helpPage; 
}

// makes the learn more about bleaching button 
function makeBleachingButton() {

  // Create the clickable object
  bleachingButton = new Clickable();
  
  bleachingButton.text = "What is bleaching?";
  bleachingButton.textColor = "#365673"; 
  bleachingButton.textSize = 25; 

  bleachingButton.color = "#8FD9CB";

  // set width + height to image size
  bleachingButton.width = 380;
  bleachingButton.height = 62;

  // places the button on the page 
  bleachingButton.locate( width * (12/32) , height * (7/8));

  // // Clickable callback functions, defined below
  bleachingButton.onPress = bleachingButtonPressed;
  bleachingButton.onHover = beginButtonHover;
  bleachingButton.onOutside = beginButtonOnOutside;
}

// takes you to the what is bleaching page 
bleachingButtonPressed = function () {
  drawFunction = whatIsBleaching; 
}

// function that makes the coral reef importance button 
function makeCoralImportanceButton() {

  // Create the clickable object
  coralImportanceButton = new Clickable();
  
  coralImportanceButton.text = "Why are coral reefs important?";
  coralImportanceButton.textColor = "#365673"; 
  coralImportanceButton.textSize = 25; 

  coralImportanceButton.color = "#8FD9CB";

  // set width + height to image size
  coralImportanceButton.width = 380;
  coralImportanceButton.height = 62;

  // places the button 
  coralImportanceButton.locate( width * (1/32) , height * (7/8));

  // // Clickable callback functions, defined below
  coralImportanceButton.onPress = coralImportanceButtonPressed;
  coralImportanceButton.onHover = beginButtonHover;
  coralImportanceButton.onOutside = beginButtonOnOutside;
}

// takes you to the coral reef importance page 
coralImportanceButtonPressed = function () {
  drawFunction = coralReefImportance; 
}

// makes the go to coral reef button found after you find out which reef your daily life choices causes 
function makeGoToCoralReefButton() {

  // Create the clickable object
  goToCoralReefButton = new Clickable();
  
  goToCoralReefButton.text = "Click here to go to the interactive reef";
  goToCoralReefButton.textColor = "#365673"; 
  goToCoralReefButton.textSize = 37; 

  goToCoralReefButton.color = "#8FD9CB";

  // set width + height to image size
  goToCoralReefButton.width = 739;
  goToCoralReefButton.height = 84;

  // places button on the page 
  goToCoralReefButton.locate( width/2 - goToCoralReefButton.width/2 , height * (3/4));

  //Clickable callback functions, defined below
  goToCoralReefButton.onPress = goToCoralReefButtonPressed;
  goToCoralReefButton.onHover = beginButtonHover;
  goToCoralReefButton.onOutside = beginButtonOnOutside;
}

// takes you to the interactive reef 
goToCoralReefButtonPressed = function () {
  drawFunction = coralReef; 
}

// makes the coral reef button that allows you to see the coral reef you generated 
function makeCoralReefButton() {

  // Create the clickable object
  coralReefButton = new Clickable();
  
  coralReefButton.text = "Click here to see your coral reef!";
  coralReefButton.textColor = "#365673"; 
  coralReefButton.textSize = 37; 

  coralReefButton.color = "#8FD9CB";

  // set width + height to image size
  coralReefButton.width = 994;
  coralReefButton.height = 90;

  // places the button on the page 
  coralReefButton.locate( width/2 - coralReefButton.width/2 , height * (3/4));

  // // Clickable callback functions, defined below
  coralReefButton.onPress = coralReefButtonPressed;
  coralReefButton.onHover = beginButtonHover;
  coralReefButton.onOutside = beginButtonOnOutside;
}

// takes you to the reeef you created based on the amount of points you received for bleaching 
coralReefButtonPressed = function () {
  if(bleached <= 7 && bleached >= 5){
    drawFunction = bleachedReef; 
  } else if(bleached <= 4 && bleached >= 2){
    drawFunction = somewhatBleachedReef; 
  }
  else {
    drawFunction = healthyReef; 
  }
}

// makes the start button on the start page 
function makeBeginButton() {

  // Create the clickable object
  beginButton = new Clickable();
  
  beginButton.text = "Click to Begin";
  beginButton.textColor = "#365673"; 
  beginButton.textSize = 37; 

  beginButton.color = "#8FD9CB";

  // set width + height to image size
  beginButton.width = 434;
  beginButton.height = 97;

  // places button on the page 
  beginButton.locate( width/2 - beginButton.width/2 , height * (3/4));

  // Clickable callback functions, defined below
  beginButton.onPress = beginButtonPressed;
  beginButton.onHover = beginButtonHover;
  beginButton.onOutside = beginButtonOnOutside;
}

// when clicked takes you to question one 
beginButtonPressed = function () {
  drawFunction = questionOne; 
}

// when the mouse hovers any button it chooses this color 
beginButtonHover = function () {
  this.color = "#F29199";
}

// return to normal when it is outside
beginButtonOnOutside = function () {
  this.color = "#8FD9CB";
}

// function that takes you to the start page 
start = function() {
   image(images[0], 0, 0, width, height);
   beginButton.draw();
}

// function that asks question one 
questionOne = function() {
   image(images[1], 0, 0, width, height);
}

// function that asks question two 
questionTwo = function() {
   image(images[2], 0, 0, width, height);
}

// function that asks question three 
questionThree = function() {
   image(images[3], 0, 0, width, height);
}

// function that asks question four
questionFour = function() {
   image(images[4], 0, 0, width, height);
}

// function that asks question five 
questionFive = function() {
   image(images[5], 0, 0, width, height);
}

// function that asks question six 
questionSix = function() {
   image(images[6], 0, 0, width, height);
}

// function that asks question seven
questionSeven = function() {
   image(images[7], 0, 0, width, height);
}

// function that takes you to the end of questions page 
endOfQuestions = function() {
  image(images[8], 0, 0, width, height);
  coralReefButton.draw();
}

// function that takes you to a bleached reef 
bleachedReef = function() {
  image(images[9], 0, 0, width, height);
  goToCoralReefButton.draw(); 
}

// function that takes you to a somewhat bleached reef 
somewhatBleachedReef = function() {
  image(images[10], 0, 0, width, height);
  goToCoralReefButton.draw(); 
}

// function that takes you to a healthy reef 
healthyReef = function() {
  image(images[11], 0, 0, width, height);
  goToCoralReefButton.draw(); 
}

// function that draws the interactive reef full of animal buttons 
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

// function that draws the coral reef importance page 
coralReefImportance = function(){
  image(images[13], 0, 0, width, height);
  backButton.draw(); 
}

// function that draws the what is bleaching apge 
whatIsBleaching = function(){
  image(images[14], 0, 0, width, height);
  backButton.draw(); 
}

// function that draws the how you can help page 
helpPage = function(){
  image(images[15], 0, 0, width, height);
  backButton.draw(); 
}

// function that draws the turtle page 
turtlePage = function(){
  image(images[24], 0, 0, width, height);
  image(images[17], turtleX, turtleY, 400, 300); 
  backButton.draw(); 
}

// function that draws the shark page and also incorporates animations 
sharkPage = function(){
  image(images[40], 0, 0, width, height);
  image(images[23], width * (1/16) - 60, height * (1/16), 200, 275);

  // sets the proper sprites to visible 
  spongebob.visible = false; 
  octopus.visible = false;
  crab.visible = false; 
  shark.visible = true; 

  // makes the shark grow as the key up arrow is pressed 
  if(keyIsDown(UP_ARROW)){
    shark.scale += 0.05;
  }
  // makes the shark shrink as the key down arrow is pressed 
  if(keyIsDown(DOWN_ARROW)){
    shark.scale -= 0.05; 
  }

  // added this in because sprites keep doing their functions even when not visible 
  if(octopus.collide(platform)){
    octopus.velocity.y = 0; 
  }

  drawSprites(); 
  backButton.draw(); 
}

// draws the ray page that uses animations 
rayPage = function(){
  image(images[35], 0, 0, width, height);
  image(images[16], width * (1/16) - 60, height * (1/16), 260, 200);

  // sets the proper sprites to visible 
  spongebob.visible = false; 
  octopus.visible = false;
  crab.visible = false; 
  shark.visible = false; 

  // for loop that makes the rays fall down the page and removes them from the ray group 
  for(var i = 0; i < rayGroup.length; i++){
    var sprite = rayGroup[i]; 
    sprite.addSpeed(.1, 90); 

    if(sprite.position.y > height + 100){
      sprite.remove(); 
    }
  }

  // added this in because sprites keep doing their functions even when not visible 
  if(octopus.collide(platform)){
    octopus.velocity.y = 0; 
  }

  drawSprites(); 
  backButton.draw(); 
}

// function that draws the crab page 
crabPage = function(){
  image(images[33], 0, 0, width, height);

  // sets the proper sprites to visible
  spongebob.visible = false; 
  octopus.visible = false;
  shark.visible = false; 

  // if the mouse is pressed it hides the crab so that mr.krabs can show up once the mouse is pressed 
  if(mouseIsPressed){
    crab.visible = false; 
  } else{
    crab.visible = true; 
  }

  // added this in because sprites keep doing their functions even when not visible 
  if(octopus.collide(platform)){
    octopus.velocity.y = 0; 
  }

  drawSprites(); 
  backButton.draw(); 
}

// function that draws the dolphin page and also includes animations 
dolphinPage = function(){
  image(images[37], 0, 0, width, height);
  image(images[18], width * (1/16) - 60, height * (1/16), 260, 200);
  image(images[38], width * (1/2) - 40, height * (3/4), 250, 125);

  // sets the proper sprites to visible 
  spongebob.visible = false; 
  octopus.visible = false;
  crab.visible = false; 
  shark.visible = false; 

  // for loop that allows the bubbles from the dolphin to travel upward which are stored in the bubble group 
  for(var i = 0; i < bubbleGroup.length; i++){
    var sprite = bubbleGroup[i]; 
    sprite.addSpeed(.1, 270); 

    if(sprite.position.y < 0){
      sprite.remove(); 
    }
  }

  // added this in because sprites keep doing their functions even when not visible 
  if(octopus.collide(platform)){
    octopus.velocity.y = 0; 
  }

  drawSprites(); 
  backButton.draw(); 
}

// function that draws the clownfish page 
clownfishPage = function(){
  image(images[31], 0, 0, width, height);
  image(images[20], width * (1/16) - 60, height * (1/16), 260, 200);

  // function that makes the proper sprites visible 
  spongebob.visible = false; 
  octopus.visible = false; 
  crab.visible = false; 
  shark.visible = false; 

  // for loop that allows the clownfish that are created to fall downwards 
  for(var i = 0; i < clownfishGroup.length; i++){
    var sprite = clownfishGroup[i]; 
    sprite.addSpeed(.1, 90); 

    if(sprite.position.y > height + 100){
      sprite.remove(); 
    }
  }

  // added this in because sprites keep doing their functions even when not visibl
  if(octopus.collide(platform)){
    octopus.velocity.y = 0; 
  }

  drawSprites(); 
  backButton.draw();
}

// function that draws the octopus page 
octopusPage = function(){
  image(images[28], 0, 0, width, height);
  image(images[21], width * (1/16) - 60, height * (1/16), 300, 160);

  // sets the proper sprites to visble 
  spongebob.visible = false; 
  octopus.visible = true; 
  crab.visible = false; 
  shark.visible = false;

  // changes the octopuses gravity, ultimately allowing it to fall after it jumps up 
  octopus.velocity.y += gravity; 

  // when the octopus is touching the platform it's velocity will be 0 
  if(octopus.collide(platform)){
    octopus.velocity.y = 0; 
  }

  drawSprites(); 
  backButton.draw(); 
}

// function that draws the jellyfish page 
jellyfishPage = function(){
  image(images[25], 0, 0, width, height);
  image(images[19], width * (1/16) - 60, height * (1/16), 400, 200);

  // sets the proper sprites to visible 
  spongebob.visible = true; 
  octopus.visible = false;
  crab.visible = false;  
  shark.visible = false; 

  // allows spongebob to follow your mouse throughout the page 
  spongebob.velocity.x = (mouseX - spongebob.position.x)/10; 
  spongebob.velocity.y = (mouseY - spongebob.position.y)/10; 

  // if spongebob touches a jellyfish it will collect it, callback function for collect 
  jellyfishGroup.overlap(spongebob, collect); 

  // added this in because sprites keep doing their functions even when not visibl
  if(octopus.collide(platform)){
    octopus.velocity.y = 0; 
  }

  drawSprites(); 
  backButton.draw(); 
}

// function that removes whatever jellyfish were collected by spongebob from the jellyfish group 
function collect(sprite){
  sprite.remove();
}

// specifically for the mr. krabs on the crab page, it will show mr. krabs when you press down for a couple seconds 
function mousePressed(){
  if(drawFunction === crabPage){
    var mrKrabs = createSprite(width * (1/2) - 150, height *(3/4)); 
    mrKrabs.addAnimation('normal', images[34], images[34]); 

    mrKrabs.life = 20; 
  }
}

// separated into two functions, this function is specific to any keys that are pressed for animations 
function keyPressed(){
  // allows the turtle to move with the arrow keys 
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
  // creates 10 jellyfish when the user pressed the up arrow 
  else if (drawFunction === jellyfishPage){
    if(keyCode === UP_ARROW){
      for(var i = 0; i < 20; i++){
        var jellyfishSingle = createSprite(random(0,width), random(0, height));
        jellyfishSingle.addAnimation('normal',images[27],images[27]);  
        jellyfishGroup.add(jellyfishSingle); 
      }
    }
  }
  // allows the octopus to jump when the user pressed their up arrow 
  else if (drawFunction === octopusPage){
    if(keyCode === UP_ARROW){
      octopus.velocity.y = -jump; 
    }
  }
  // allows clownfish to be created at the user's cursor when they press the up arrow 
  else if(drawFunction === clownfishPage){
    if(keyCode === UP_ARROW){
      var clownfishSingle = createSprite(mouseX, mouseY);
      clownfishSingle.addAnimation('normal',images[32],images[32]);  
      clownfishGroup.add(clownfishSingle); 
    }
  }
  // creates 5 random rays that fall from the sky on the ray page 
  else if(drawFunction === rayPage){
    if(keyCode === UP_ARROW){
      for(var i = 0; i < 5; i++){
        var raySingle = createSprite(random(0,width), 0);
        raySingle.addAnimation('normal',images[36],images[36]);  
        rayGroup.add(raySingle); 
      }
    }
  }
  // allows the dolphin to blow bubbles from it's spout when the user pressed the up arrow 
  else if(drawFunction === dolphinPage){
    if(keyCode === UP_ARROW){
      var bubbleSingle = createSprite(width * (1/2) + 120, height * (3/4));
      bubbleSingle.addAnimation('normal',images[39],images[39]);  
      bubbleGroup.add(bubbleSingle); 
    }
  }
}

// this functions is specific to the questionnaire portion and allows for the user to change states easily 
function keyTyped() {
  if (drawFunction === questionOne){
    if(key === 'a'){
      drawFunction = questionTwo;
    }
    else if(key === 'b'){
      bleached++;  
      drawFunction = questionTwo;
    }
    else if(key === 'c'){
      bleached++;  
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

