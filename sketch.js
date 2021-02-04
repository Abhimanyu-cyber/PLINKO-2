var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions=[];
var particle
var plinkos = [];

var divisionHeight=200;
var score =0,count=0;
var gameState="start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,475));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   if(particle!=null){
      particle.display();
      if(particle.body.position.y>760){
        if(particle.body.position.x>0 && particle.body.position.x<160){
          score=score +100
          particle=null;
        }
          else if(particle.body.position.x>161 && particle.body.position.x<320){
          score=score+150;
          particle=null;
        }
          else if(particle.body.position.x>321 && particle.body.position.x<480){
          score=score+300;
          particle=null;
        }
        else if(particle.body.position.x>481 && particle.body.position.x<640){
          score=score +150
          particle=null;
        }
        else if(particle.body.position.x>641 && particle.body.position.x<800){
          score=score +100
          particle=null;
        }
      }
    }
    if(count>=5 && gameState!=="end"){
      gameState="end";
    }
    if(gameState==="end"){
      textSize(80)
      fill(255)
      text("GAMEOVER",175,245)
    }
    
   




   textSize(40)
   text("SCORE="+score,10,40)
   text("100",5,650)
   text("100",85,650)
   text("150",165,710)
   text("150",245,710)
   text("300",325,770)
   text("300",405,770)
   text("150",485,710)
   text("150",565,710)
   text("100",645,650)
   text("100",725,650)
}

function mousePressed(){
  if(gameState!=="end"){
    particle=new Particle(mouseX,10,10,10);
    count=count +1
  }
}