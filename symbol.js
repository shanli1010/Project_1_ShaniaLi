function symbol(x,  y, size){   //"Fancy logo"

  stroke(0);
  strokeWeight(13*size);
  line((x*size), (y*size), ((x-50)*size), ((y-100)*size));//Left V line
  line((x*size),(y*size),((x+50)*size),((y-100)*size));//Right V line
  
  line((x*size),((y-50)*size),((x-50)*size),((y+50)*size));    //Left upside down V line
  line((x*size),((y-50)*size), ((x+50)*size),((y+50)*size));//Right upside down V line
  
  line((x-58)*size,(y-100)*size,(x-42)*size,(y-100)*size);//Left notch V
  line((x+42)*size, (y-100)*size, (x+58)*size, (y-100)*size);//Right notch V
  
  line(((x-58)*size),(y+50)*size, (x-42)*size, (y+50)*size);
  line((x+42)*size, (y+50)*size, (x+58)*size, (y+50)*size);
  
  
}
