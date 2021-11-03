//Project 1 Shania Li
let chanel;
let ypos;
let c;
let xpos;


function setup()
{
  createCanvas(1000, 1000);
  background(0);
  frameRate(20);
  chanel = new Dress(500, 200, (246, 244, 231)); //creates dress object 
}

function draw()
{
     back();
  stroke(255);
  let yValue = [0, 180]; //Y value for curtain squiggles
  let xValue = [100, 200, 300, 400, 600, 700, 800, 900]; //X values for curtain squiggles

  //let fc = frameCount;
  //if (fc%20 == 0)           //Draws squiggles of curtain
  //{
  //  for (var i = 0; i<=7; i++)
  //  {
  //    for (var j = 0; j<=2; j++)
  //    {
  //      curtainCurveMove(xValue[i], yValue[j]);
  //    }
  //  }
  //}
  chanel.display(); //display dress
  chanel.move(1); //dress moves at speed of one
}
