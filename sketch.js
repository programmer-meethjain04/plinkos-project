 var plinkos=[];
 var particles=[];
 var divisions=[];
 var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  


  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,75))
  }
  for(var j=30;j<=width-10;j=j+50){
  plinkos.push(new plinko(j,175))
  }
  for(var j=20;j<=width-20;j=j+50){
    plinkos.push(new plinko(j,275))
  }
  for(var j=10;j<=width-10;j=j+50){
    plinkos.push(new plinko(j,375))
  }

  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<division.length;k++){
    division[k].display();
  }
  for(var a=0;a<plinko.length;a++){
    plinko[a].display();
  }
  drawSprites();
}