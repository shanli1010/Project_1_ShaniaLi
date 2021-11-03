function back()
{
  background(0);
  noStroke();
  fill(220, 181, 166);  //Runway
  beginShape();
  vertex(450,350);
  vertex(550,350);
  vertex(1000,1000);
  vertex(0,1000);
  endShape(CLOSE);
  
  
  noStroke();                  //Right curtain
  fill(143,143,143);
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



  var yRose = 350;
  var yRose_=350;
   for (var i= 550; i<1000; i=i+50)        //Roses
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
   }
   

   for (var j= 450; j>0; j=j-50)        //Roses
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
   }
   
   //let counter = 0;
   //alpha = 100;
   
   //if (counter%2 == 0)
   //{
   //  fill(FBFECB);
   //}
   
   
   
   
symbol(1000, 200, 0.5);
}



function curtainCurveMove(x,y) //(x=800 y=100
{
  //pushMatrix();              //attempted to use push and pop matric in conjuction  with curtainCurve() located under this function but it did not work 
  //var xMove = x;
  //var yMove = y;
  //translate(x,y);
  strokeWeight(6);
  curve(x,y,x,y,x-15,y+50,x+15,y+100);   //Curtain curve
  curve(x,y,x-15,y+50,x+15,y+100, x-15,y+150);
  curve(x-15,y+50,x+15,y+100, x-15,y+150,x+15, y+200);
  
  //popMatrix();
}

//function curtainCurve(){
// curve(800,100,800,100,785,150,815,200);   //Curtain curve
// curve(800,100,785,150,815,200, 785, 250);
// curve(785,150,815,200, 785, 250,815, 300);
//}
