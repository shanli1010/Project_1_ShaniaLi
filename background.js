function back()
{
  background(0);
  noStroke();
  
   if ((frameCount%20 == 0)||(frameCount%20 == 10))           //Flashing Camera Lights
  {
    fill(255,201,94,100);
    ellipse(random(600,1000),(random(400,1000)), 150, 150);
    ellipse(random(0,450),(random(400,1000)), 100, 100);
  }
  else ((frameCount%20 == 5)||(frameCount%20 == 2))
  {
    fill(255,201,94,40);
    ellipse(random(600,1000),(random(400,1000)), 100,100);
    ellipse(random(0,450),(random(400,1000)), 150, 150);
  }
    
  fill(220, 181, 166);  //Runway
  beginShape();
  vertex(450,350);
  vertex(550,350);
  vertex(1000,1000);
  vertex(0,1000);
  endShape(CLOSE);
  

 
  
  
  noStroke();                  //Right curtain
  fill(128, 0, 32);
  beginShape();
  curveVertex(550,0);
  curveVertex(550,0);
  curveVertex(565,87.5);
  curveVertex(545,175);
  curveVertex(565,262.5);
  curveVertex(600,350);
  curveVertex(1000,350);
  curveVertex(1200,0);
  curveVertex(550,-100);
  curveVertex(550,0);
  curveVertex(550,0);
  endShape(CLOSE);
  
beginShape();                //Left Curtain
  curveVertex(450,0);
  curveVertex(450,0);
  curveVertex(435,87.5);
  curveVertex(455,175);
  curveVertex(435,262.5);
  curveVertex(400,350);
  curveVertex(0,350);
  curveVertex(-200,0);
  curveVertex(450,-100);
  curveVertex(450,0);
  curveVertex(450,0);
  endShape();



  var yRose = 350; //Y value for right runway
  var yRose_=350; //Y value for left Runway
   for (var i= 550; i<1000; i=i+50)        //Roses right
   {
   strokeWeight(3);
   stroke(0,108,0);
   line(i,yRose,i,yRose+25);
   fill(139,0,0);
   stroke(0);
   strokeWeight(1);
   ellipse(i+5,yRose,12,12);
   ellipse(i-5,yRose,12,12);
   ellipse(i,yRose,20,10);
   ellipse(i+5,yRose+5,16,15);
   ellipse(i-5,yRose+5,16,15);
   yRose+=70;
   
   noStroke();                      //Flashing Lights on Runway Right
    if (frameCount%20 == 0)
   {
     fill(255,201,94,100);
     ellipse(i,yRose,50,50);
   }
   else                            //Center of flashing light
   {
     fill(255,201,94);
     ellipse(i,yRose,20,20);
   }
   
   }
   

   for (var j= 450; j>0; j=j-50)        //Roses left
   {
   strokeWeight(3);
   stroke(0,108,0);
   line(j,yRose_,j,yRose_+25);
   fill(139,0,0);
   stroke(0);
   strokeWeight(1);
   ellipse(j+5,yRose_,12,12);
   ellipse(j-5,yRose_,12,12);
   ellipse(j,yRose_,20,10);
   ellipse(j+5,yRose_+5,16,15);
   ellipse(j-5,yRose_+5,16,15);
   yRose_+=70;
   
   noStroke();                      //Flashing Lights on Runway left
    if (frameCount%20 == 0)
   {
     fill(255,201,94,100);
     ellipse(j,yRose_,50,50);
     millis(1000);
     
   }
   else                            //Center of flashing lights 
   {
     fill(255,201,94);
     ellipse(j,yRose_,20,20);
   }
   }
 
   
symbol(1000, 200, 0.5);            //Logo in middle of screen
}



function curtainCurveSteady(x,y) //Original Curtain curves 
{

  stroke(0);
  strokeWeight(2);
  curve(x,y+10,x,y+10,x-5,y+60,x+5,y+110);   //Curtain curve
  curve(x,y+10,x-5,y+60,x+5,y+110, x-5,y+160);
  curve(x-5,y+60,x+5,y+110, x-5,y+160,x+5, y+210);
  
}

function curtainCurveFlipped(x,y)
{
   stroke(0);
  strokeWeight(2);
  curve(x,y+10,x,y+10,x+5,y+60,x-5,y+110);   //Curtain curve
  curve(x,y+10,x+5,y+60,x-5,y+110, x+5,y+160);
  curve(x+5,y+60,x-5,y+110, x+5,y+160,x-5, y+210);
}

function jig()                          //Attempted to do curtain curve mechanism we were talking about, but didn't work exactly how I wanted to but still workds
{
  let xValue = [50,100, 200, 300, 400, 600, 700, 800, 900, 950]; //X values for curtain squiggles
  let yValue = [200,30, 180, 45, 180, 40, 150, 60, 173, 20 ]; //Y value for curtain squiggles

    for (var i = 0; i<=9; i++)
    {
        if (flip == false)
       {
        curtainCurveSteady(xValue[i], yValue[i]);
        flip = true;
       }
      else if (flip == true)
       {
        curtainCurveFlipped(xValue[i], yValue[i]);
        flip = false;
       }
    }

  
  
}

function cameras()
{
  noStroke();
  if (frameCount%10 == 0)
  {
    fill(255,201,94,100);
    ellipse(random(600,1000),(random(400,600)), 50,50);
  }
  else
  {
     fill(0);
    ellipse(random(600,1000),(random(400,600)), 50,50);
  }
    
  
  
  
}

