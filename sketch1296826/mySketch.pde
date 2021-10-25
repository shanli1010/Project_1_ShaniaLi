//Shania Li Sketch 2

int numberOfClicks = 1; // # of clicks
int num = 0;


void setup() {
  size(800, 800);
  background(0);
  frameRate(120);
  mousePressed();
}


void draw() {


  for (int i = 0; i < 6; i++)     //Repeats symbol horizontally
  {
    for (int j = 0; j < 6; j++)   //Repeats symbol vertically
    {

      if (num == 0)                //First stationary grid
      {
        symbol(160*i, 160*j, 0, 0, 255, 1);
      }
      if (num == 1)                //First move; tell user to move mouse around screen
      {
        symbol(160*i, 160*j, 0, 0, 255, 1);
        one(160*i, 160*j);
      }
    }
  }
  if (num == 2)
  {
    two();
  }
  if (num == 3)
  {
    three();
  }
  if (num == 4)
  {
    four();
  }
  if (num == 5)
  {
    five();
  }
}


void mousePressed()      //Counter for mouse clicks
{
  if (mousePressed == true)
  {
    num = numberOfClicks++;
    println(num);
  }
}


void symbol(float sx, float sy, float r, float g, float b, float size)  //sets x, y, color of shape, and size of shape
{

  stroke(r, g, b);
  strokeWeight(5);
  noFill();
  ellipse(sx, sy, (25*size), (25*size));       //Top circle
  ellipse(sx, (sy+(160*size)), (25*size), (25*size));    //Bottom Cirlce

  noFill();
  beginShape(TRIANGLES);        //Triangle
  vertex(sx, sy);               //Top point
  vertex((sx-(40*size)), (sy+(60*size)));         //Left Corner
  vertex((sx+(40*size)), (sy+(60*size)));         //Right Corner
  endShape();

  noFill();
  beginShape();                 // Square
  vertex((sx-(40*size)), (sy+(80*size)));         //Top left
  vertex((sx+(40*size)), (sy+(80*size)));         //Top right
  vertex((sx+(40*size)), (sy+(160*size)));        //Bottom right
  vertex((sx-(40*size)), (sy+(160*size)));        //Bottom left
  endShape(CLOSE);

  strokeWeight(1);
  line((sx-(35*size)), (sy+(60*size)), sx-((35*size)), (sy+(80*size))); //Left thin connector line
  line((sx+(35*size)), (sy+(60*size)), (sx+(35*size)), (sy+(80*size))); //Right thin connector line
}



void one(int sx, int sy) { //First screen change, causes glitch when mouse is hovered over one of the symbols

  if (( mouseX > 45) && (mouseX < 110) || (mouseX > 205) && (mouseX < 280) || (mouseX > 365) && (mouseX < 440) || (mouseX > 525) && (mouseX < 600) || (mouseX > 685) && (mouseX < 760))
  {
    if ((mouseY > 40))
    {
      symbol(sx+5, sy+5, 255, 0, 0, 1);
    }
  }
}


void two() {
  background(0);
  for (int r = 0; r < 800; r+=30)
  {
    symbol(r, 400, 41, 146, 20, .5);
  }
  for (int e = 0; e < 800; e+=30)
  {
    symbol(e, 500, 30, 108, 14, .5);
  }
  for (int f = 0; f < 800; f+=30)
  {
    symbol(f, 600, 22, 80, 10, .75);
  }
  for (int h = 0; h < 800; h+=30)
  {
    symbol(h, 750, 11, 41, 5, .85);
  }
  

  if (( mouseY > 0 ) && ( mouseY < 400 )) //If mouse is on top half of screen, light blue sky
  {
    for (int f = 0; f < 800; f+=30)
    {
      symbol(f, 0, 35, 236, 236, .5);
    }
    for (int r = 0; r < 800; r+=30)
    {
      symbol(r, 100, 35, 236, 236, .5);
    }
    for (int e = 0; e < 800; e+=30)
    {
      symbol(e, 200, 35, 236, 236, .5);
    }
    for (int f = 0; f < 800; f+=30)
    {
      symbol(f, 300, 35, 236, 236, .5);
    }
    fill(#FFEF00);                      //sun in left corner
   ellipse(0,0,350,350);
  } 
  else                                //If mouse is on bottom half of screen, dark blue sky
  {
    for (int f = 0; f < 800; f+=30)
    {
      symbol(f, 0, 14, 70, 134, .5);
    }
    for (int r = 0; r < 800; r+=30)
    {
      symbol(r, 100, 14, 70, 134, .5);
    }
    for (int e = 0; e < 800; e+=30)
    {
      symbol(e, 200, 14, 70, 134, .5);
    }
    for (int f = 0; f < 800; f+=30)
    {
      symbol(f, 300, 14, 70, 134, .5);
    }
    fill(255,255,255);                  //moon in right corner
    ellipse(700,200,100,100);
  }
}


void three() {    //When mouse is on the left of screen, american flag displayed, when it is on the right, communist american flag displayed
  background(0);

  if (( mouseX > 0 ) && ( mouseX < 400 ))  //Blue Symbols in corner
  {
    for (float g = 0; g < 400; g+=50)
    {
      for (float z = 0; z < 300; z+=50)
      {
        symbol(g, z, 60, 59, 110, 0.2);
      }
    }
  }
  if (( mouseX > 400 ) && ( mouseX < 800 ))  //Red lines in corner
  {
    for (float g = 0; g < 400; g+=50)
    {

      for (float z = 0; z < 300; z+=50)
      {
        symbol(g, z, 255, 0, 0, 0.4);
      }
    }
    noFill();                     //two yellow circles for communist flag
    stroke(255, 217, 0);
    strokeWeight(6);
    ellipse(200, 150, 275, 275);
    ellipse(200, 150, 225, 225);
  }

  for (float s = 400; s <800; s+=50)  /// Red stripes from center to right
  {
    for (float t = 0; t <= 800; t+=100)
    {
      symbol(s, t, 178, 34, 52, 0.2);
    }
  }

  for (float u = 0; u <400; u+=50)    //Red stripes from left to center
  {
    for (float v = 300; v < 800; v+=100)
    {
      symbol(u, v, 178, 34, 52, 0.2);
    }
  }


  for (float f = 400; f <800; f+=50)  //White stripes from center to right
  {
    for (float h = 50; h <= 800; h+=100)
    {
      symbol(f, h, 255, 255, 255, 0.2);
    }
  }

  for (float m = 0; m <400; m+=50) //White stripes from left to center
  {
    for (float n = 350; n < 800; n+=100)
    {
      symbol(m, n, 255, 255, 255, 0.2);
    }
  }
}



void four()
{
  background(0);
  if (( mouseX > 0) && (mouseX < 400))                    //when mouse is on the left of screen
  {
    float a = map(mouseX, 0, width, 0, 175);
    float b = map(mouseX, 0, width, 40, 300);
    fill(255, a, a);
    symbol(width/8, height/8, 97, b, b, b/16);
    symbol(width/2.666666666, height/2.66666666, b, 72, b, b/16);
    symbol(width/1.6, height/1.6, b, b, 130, b/16);
    symbol(width/1.142857142857143, height/1.142857142857143, b, b, 190, b/16);
  } else                                                  //if mouse is on the right of screen
  {
    float a = map(mouseX, 0, width, 0, 175);
    float b = map(mouseX, 0, width, 40, 300);
    fill(255, a, a);
    symbol(width/8, height/8, 255, 0, 0, b/16);
    symbol(width/2.666666666, height/2.66666666, 255, 0, 0, b/16);
    symbol(width/1.6, height/1.6, 255, 0, 0, b/8);
    symbol(width/1.142857142857143, height/1.142857142857143, 255, 0, 0, b/16);
  }

  if (( mouseY > 0) && (mouseY < 400))                  //if mouse is on the top half of screen
  {

    float c = map(0, mouseY, height, 0, 170);
    float d = map(0, mouseY, height, 40, 300);
    fill(255, c, c);
    symbol(width/1.142857142857143, height/8, 48, 297, 255, d/16);
    symbol(width/1.6, height/2.66666666, 48, 297, 255, d/16);
    symbol(width/2.666666666, height/1.6, 48, 297, 255, d/16);
    symbol(width/8, height/1.142857142857143, 48, 297, 255, d/16);
  } else                                                //if mouse is on the bottom half of screen
  {

    float c = map(0, mouseY, height, 0, 170);
    float d = map(0, mouseY, height, 40, 300);
    fill(255, c, c);
    symbol(width/1.142857142857143, height/8, 97, d, d, d/16);
    symbol(width/1.6, height/2.66666666, d, 72, d, d/16);
    symbol(width/2.666666666, height/1.6, d, d, 130, d/16);
    symbol(width/8, height/1.142857142857143, d, d, 190, d/16);
  }
}


void five() {
  background(0);          //background circles
  fill(#FCFFFA);
  ellipse(400, 400, 500, 500);
  fill(#F8EAED);
  ellipse(400, 400, 400, 400);
  fill(#F2CFDB);
  ellipse(400, 400, 300, 300);
  fill(#EAADC6);
  ellipse(400, 400, 200, 200);
  fill(#E591B3);
  ellipse(400, 400, 100, 100);
  noFill();
  beginShape();                 // Square
  vertex(50, 50);         //Top left
  vertex(350, 50);         //Top right
  vertex(350, 350);        //Bottom right
  vertex(50, 350);        //Bottom left
  endShape(CLOSE);

  beginShape();                 // Square
  vertex(450, 50);         //Top left
  vertex(750, 50);         //Top right
  vertex(750, 350);        //Bottom right
  vertex(450, 350);        //Bottom left
  endShape(CLOSE);

  beginShape();                 // Square
  vertex(50, 450);         //Top left
  vertex(350, 450);         //Top right
  vertex(350, 750);        //Bottom right
  vertex(50, 750);        //Bottom left
  endShape(CLOSE);

  beginShape();                 // Square
  vertex(450, 450);         //Top left
  vertex(750, 450);         //Top right
  vertex(750, 750);        //Bottom right
  vertex(450, 750);        //Bottom left
  endShape(CLOSE);


  if (((mouseX > 50) && (mouseX < 350)) && ((mouseY > 50) && (mouseY < 350))) //If mouse enters left top box, this code will run
  {
    symbol(mouseX, mouseY, 220, 100, 200, 0.2);
  } else if (((mouseX > 450) && (mouseX < 750)) && ((mouseY > 50) && (mouseY < 350))) //If mouse enters right top box, this code will run
  {
    symbol(mouseX, mouseY, 220, 100, 200, 0.4);
  } else if (((mouseX > 50) && (mouseX < 350)) && ((mouseY > 450) && (mouseY < 750))) //If mouse enters left bottom box, this code will run
  {
    symbol(mouseX, mouseY, 220, 100, 200, 0.6);
  } else if (((mouseX > 450) && (mouseX < 750)) && ((mouseY > 450) && (mouseY < 750))) //If mouse enters right bottom box, this code will run
  {
    symbol(mouseX, mouseY, 220, 100, 200, 0.8);
  } else                                                                                //If mouse isn't in any of the boxes, this code will run
  {
    symbol(mouseX, mouseY, 0, 0, 0, 1);
  }
}
