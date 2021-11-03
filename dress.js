class Dress {

  constructor(x, y, c) {
    this.ypos = y;
    this.c = c;
    this.xpos = x;
  }

  display() {
 
    push();
    strokeWeight(2);
    translate(0,this.ypos-200);
    fill(this.c);
    
    arc((this.xpos-50), this.ypos, 100, 100, PI, 0, CHORD); //Bust area of dress
    arc(this.xpos+50, this.ypos, 100, 100, PI, 0, CHORD);

    fill(132, 133, 135); //Gray Body piece of dress
    noStroke();
    beginShape();
    vertex(this.xpos-100, this.ypos);
    vertex(this.xpos+100, this.ypos);
    vertex(this.xpos+50, this.ypos+150);
    vertex(this.xpos-50, this.ypos+150);
    endShape();
    
    
    
    fill(26, 33, 51); //Bottom of Dress
    strokeWeight(10);
    stroke(26, 33, 51);
    line(this.xpos-100,this.ypos,this.xpos+50, this.ypos+150);
    line(this.xpos+100,this.ypos,this.xpos-50, this.ypos+150);
    line(this.xpos-100,this.ypos,this.xpos+100,this.ypos);
    strokeWeight(13);
    line(this.xpos,this.ypos,this.xpos+10, this.ypos-10);
    line(this.xpos,this.ypos,this.xpos-10, this.ypos-10);
    strokeWeight(2);
    line(this.xpos,this.ypos,this.xpos+30, this.ypos+30);
    line(this.xpos,this.ypos,this.xpos-30, this.ypos+30);
    arc(this.xpos, ((this.ypos)+300), 350, 350, PI, 0, CHORD);
    translate(0,this.ypos-150);
    symbol(2500, 1700, 0.2);
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
