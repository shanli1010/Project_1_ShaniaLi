class Dress {

  constructor(x, y, c) {
    this.ypos = y;
    this.c = c;
    this.xpos = x;
  }

  display() {
 
    push();                          //Finaly figured out push and pop with this display function, wasn't working properly before 
    strokeWeight(2);
    translate(0,this.ypos-200);
    fill(this.c);
    
    
    arc((this.xpos-50), this.ypos, 100, 100, PI, 0, CHORD); //Bust area of dress - left
    arc(this.xpos+50, this.ypos, 100, 100, PI, 0, CHORD); //Right bust
    arc(this.xpos+50, this.ypos, 300, 300, ((5*PI)/4),((5*PI)/4), OPEN);

   fill(0); //Gray Body piece of dress
    noStroke();
    beginShape();
    vertex(this.xpos-100, this.ypos);
    vertex(this.xpos+100, this.ypos);
    vertex(this.xpos+50, this.ypos+150);
    vertex(this.xpos-50, this.ypos+150);
    endShape();
    
    stroke(255);
    line(this.xpos-100,this.ypos,this.xpos-50,this.ypos+150); //White corset lines
    line(this.xpos-50,this.ypos,this.xpos,this.ypos+150);
    line(this.xpos,this.ypos,this.xpos,this.ypos+150);
     line(this.xpos+50,this.ypos,this.xpos,this.ypos+150);
     line(this.xpos+100,this.ypos,this.xpos+50,this.ypos+150);
    
    
     fill(192,147,108);
     noStroke();
    rect(this.xpos-100, this.ypos+180, 200, 230); //Gold underlying part of dress
    
    fill(this.c); //Bottom of Dress
    strokeWeight(10);
    stroke(26, 33, 51);
   
    
    
    strokeWeight(13);
    stroke(192,147,108);
    line(this.xpos,this.ypos,this.xpos+10, this.ypos-10); //Bow for dress
    line(this.xpos,this.ypos,this.xpos-10, this.ypos-10);
    strokeWeight(2);
    line(this.xpos,this.ypos,this.xpos+30, this.ypos+30);
    line(this.xpos,this.ypos,this.xpos-30, this.ypos+30);
    
    
    noStroke();                    //White right part of flowy dress
    beginShape();
    curveVertex(this.xpos-65,this.ypos+130);
    curveVertex(this.xpos-65,this.ypos+130); 
    curveVertex(this.xpos+100, this.ypos+150);
    curveVertex(this.xpos+120, this.ypos+450);
    //curveVertex(this.xpos-50,this.ypos+300);
    curveVertex(this.xpos-60, this.ypos+230);
    curveVertex(this.xpos-65, this,ypos+130);
    curveVertex(this.xpos-65,this.ypos+130);
    endShape();
    
    fill(0);                      //Black left part of flowy dress
    beginShape();
    curveVertex(this.xpos+65,this.ypos+130);
    curveVertex(this.xpos+65,this.ypos+130); 
    curveVertex(this.xpos-100, this.ypos+150);
    curveVertex(this.xpos-120, this.ypos+450);
    //curveVertex(this.xpos,this.ypos+300);
    curveVertex(this.xpos+60, this.ypos+230);
    curveVertex(this.xpos+65, this,ypos+130);
    curveVertex(this.xpos+65,this.ypos+130);
    endShape();
    
  
    
    strokeWeight(20);                    //Belt
    stroke(255);
    line(this.xpos-55, this.ypos+130, this.xpos+55, this.ypos+130);
   
    
    
    translate(0,this.ypos-150);
    symbol(2500, 1420, 0.2);          //Symbol on belt of dress
    pop();
  

  }

  move(speed) {
   
    this.ypos = speed + this.ypos;  
     if (this.ypos>600)  
     {
       this.ypos = 300;
     }
     
  }
}