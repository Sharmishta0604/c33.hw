const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
var engine,world; 
var particle;
var plinkos = [];
var divisions=[];
var turn=0;
var divisionHeight=300;
var score=0;
var ground;
var gamestate="play"
function setup() {
  var canvas=createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,800,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("100",20,550);
 text("200",100,550);
 text("500",180,550);
 text("100",260,550);
 text("200",340,550);
 text("500",420,550);
 text("100",500,550);
 text("200",580,550);
 text("500",660,550);
 text("100",740,550);
  Engine.update(engine);
  ground.display();
if(gamestate==="end"){
  textSize(80);
        text("Game over",200,400);
}
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y>700){
       if(particle.body.position.x>0 && particle.body.position.x<80){
         score=score+100;
         particle=null;
       }

        else if(particle.body.position.x>80 && particle.body.position.x<160){
        score=score+200;
        particle=null;
      }
      else if(particle.body.position.x>160 && particle.body.position.x<240){
        score=score+500;
        particle=null;
      }
      else if(particle.body.position.x>240 && particle.body.position.x<320){
        score=score+100;
        particle=null;
      }
      else if(particle.body.position.x>320 && particle.body.position.x<400){
        score=score+200;
        particle=null;
      }
      else if(particle.body.position.x>400 && particle.body.position.x<480){
        score=score+500;
        particle=null;
      }
      else if(particle.body.position.x>480 && particle.body.position.x<560){
        score=score+100;
        particle=null;
      }
      else if(particle.body.position.x>560 && particle.body.position.x<640){
        score=score+200;
        particle=null;
      }
      else if(particle.body.position.x>640 && particle.body.position.x<720){
        score=score+500;
        particle=null;
      }
      else if(particle.body.position.x>720 && particle.body.position.x<800){
        score=score+100;
        particle=null;
      }

      if(turn>=5){
        gamestate="end";
        
      }
     }
   }
  /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //mousePressed();
}

function mouseReleased(){
  if(gamestate==="play"){
    turn++;
    particle=new Particle(mouseX,50,10,10);
    //particle.display();
    console.log(turn);
  }
   }