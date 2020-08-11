var drawing = [];
var restart,restart1;
function preload() {
  restart = loadImage("reset.png")
}
function setup() {
  createCanvas(800,400);
  
}
function draw() {
  background(255,255,255); 
  text(mouseX + ": " + mouseY,mouseX,mouseY);
  restart1 = createSprite(740,48,20,20);
  restart1.addImage(restart);
  restart1.scale = 0.2;
  
  drawSprites();
   noFill();
   
  beginShape();
  
   for(var i = 0;i<drawing.length;i++){
     vertex(drawing[i].x,drawing[i].y);
     endShape();
   }
   if(mousePressedOver(restart1)) {
    
     reset();
   }
    
   
    
   
}
function mouseDragged() {
  var position = {x:mouseX,y:mouseY};
    drawing.push(position);
}
function reset(){
  

  drawing = [];
}
