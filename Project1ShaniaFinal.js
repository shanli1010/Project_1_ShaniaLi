//Project 1 Shania Li Elegant
let chanel;
let ypos;
let c;
let xpos;
//let yDress;
//let s =0;

var flip = false;
var interval=800;
var lastTime=0;


function setup()
{
  createCanvas(1000, 1000);

  frameRate(20);

  
  chanel = new Dress(500, 150, (246, 244, 231)); //creates dress object 

  
}

function draw()
{

  back();

  if (millis()-lastTime>interval)
  {
    jig();
    lastTime = millis();
  }
    stroke(255);
 
    
  //s = a +0.1;
  //scale(s);                            Attempted to scale, could not get it to scale relative to y position of dress
  
  chanel.display(); //display dress
  chanel.move(2); //dress moves at speed of one

 

  
}
