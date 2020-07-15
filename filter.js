var image=null;
var canvas=null;
var orgi=null;
function upload(){

  var fileinput=document.getElementById("finput");
 orgi=new SimpleImage(fileinput);
  image=new SimpleImage(fileinput);

  canvas=document.getElementById("can");
  image.drawTo(canvas);
  alert("Image uploaded");
 }

function greyscale(){
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  image.drawTo(canvas);
}

function rainbow(){
  var x=image.getWidth()/7;
  for(var pixel of image.values()){
    if(pixel.getX()<=x){
      pixel.setRed(255);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    if(pixel.getX()<=x*2 && pixel.getX()>x){
      pixel.setRed();
      pixel.setGreen();
      pixel.setBlue();
    }
    if(pixel.getX()<=x*3 && pixel.getX()>x*2){
      pixel.setRed();
      pixel.setGreen();
      pixel.setBlue();
    }
    if(pixel.getX()<=x*4 && pixel.getX()>x*3){
      pixel.setRed();
      pixel.setGreen();
      pixel.setBlue();
    }
    if(pixel.getX()<=x*5 && pixel.getX()>x*4){
      pixel.setRed();
      pixel.setGreen();
      pixel.setBlue();
    }
    if(pixel.getX()<=x*6 && pixel.getX()>(x*5)){
      pixel.setRed();
      pixel.setGreen();
      pixel.setBlue();
    }
    if(pixel.getX()<=x*7 && pixel.getX()>x*6){
      pixel.setRed();
      pixel.setGreen();
      pixel.setBlue();
    }


  }
  image.drawTo(canvas);
}

function redchange(){
  var a=image.getWidth()/3;
  var b=2*a;
  var c=3*a;
  for(var pixel of image.values()){
    if(pixel.getX()<=a){
      pixel.setRed(255);
    }
    if(pixel.getX()<=b && pixel.getX()>a){
      pixel.setBlue(255);
    }
    if(pixel.getX()<=c && pixel.getX()>b){
      pixel.setGreen(255);
    }
  }
  image.drawTo(canvas);
}

function blurit(){

}

function resetit(){
  orgi.drawTo(canvas);
}
