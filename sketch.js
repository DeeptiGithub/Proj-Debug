const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


// make all var/variable.
var player1 , player2 , player3, players;
var enemy1 , enemy2 , enemy3;
var bg; 
var player , form , game;
var anamies;
var gun_1;
var wall1 , wall2 , wall3 , wall4 , wall5 , wall6 , wall7 , wall8 , wall9 , wall10 , 
    wall11 ,wall12, wall13 , wall14 , wall15 , wall16, wall17, wall18, wall19, wall20, 
    wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30,
    wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40, 
    wall41, wall42, wall43, wall44, wall45, wall46;
var allPlayers;
var game;
var gunX,gunY;
var bullet;
var anamieX,anamieY;
var Score = 0;
var gun1,gun2,gun3,gun4,gun5,gun6,gun7,gun8,gun9;
var new1,new2,new3,new4,new5,new6,new7,new8,new9,new10;
var newX,newY;
var sound1, sound2, sound3;
var form1;
var allPlayers;
var gameState = 0;
var playerCount = 0;
var bullet1, gun_1;

//preload all img/images

function preload(){
  // bullet
  bulletImg = loadImage("Images/bullet.png")
  gun_1Img = loadImage("Images/gun5.png");
  

  // players 1 , 2 , 3 load images

  player1Img = loadImage("Images/friend1.png");
  player2Img = loadImage("Images/friend2.png");
  player3Img = loadImage("Images/style1.png");

  // background/map load image
  
  //bg = loadImage("map3.jpg");

  // enemy 1 , 2 , 3 load images

  new1Img = loadImage("Images/anamy2.png");
  new2Img = loadImage("Images/anamy3.png");
  new3Img = loadImage("Images/anamy2.png");
  new4Img = loadImage("Images/anamy3.png");
  new5Img = loadImage("Images/anamy2.png");
  new6Img = loadImage("Images/anamy3.png");
  new7Img = loadImage("Images/anamy2.png");
  new8Img = loadImage("Images/anamy3.png");
  new9Img = loadImage("Images/anamy2.png");
  new10Img = loadImage("Images/anamy3.png");

  enemyGroup = new Group();

  // load Images of guns

  gun1Img = loadImage("Images/gun2.png")
  gun2Img = loadImage("Images/gun3.png")
  gun3Img = loadImage("Images/gun4.png")
  gun4Img = loadImage("Images/gun5.png")
  gun5Img = loadImage("Images/gun6.png")
  gun6Img = loadImage("Images/gun7.png")
  gun7Img = loadImage("Images/gun8.png")
  gun8Img = loadImage("Images/gun9.png")
  gun9Img = loadImage("Images/gun10.png")

  sound1 = loadSound("Fight.wav");
  sound2 = loadSound("BackgroundSound.wav");

  


}

//create setup

function setup() {

  // create canvas

  createCanvas(windowWidth,windowHeight);

  

  database = firebase.database();


  // gunGroup = new Group();
  
  // enemyGroup = new Group();

  // new1 = createSprite(730,90,50,50);
  // new1.addImage(new1Img);  
  // new1.scale = 0.25;

  
  // new2 = createSprite(330,90,50,50);
  // new2.addImage(new2Img);
  // new2.scale = 0.25;

  // new3 = createSprite(330,90,50,50);
  // new3.addImage(new3Img);
  // new3.scale = 0.25;

  // new4 = createSprite(330,90,50,50);
  // new4.addImage(new4Img);
  // new4.scale = 0.25;

  // new5 = createSprite(330,90,50,50);
  // new5.addImage(new5Img);
  // new5.scale = 0.25;

  // new6 = createSprite(330,90,50,50);
  // new6.addImage(new6Img);
  // new6.scale = 0.25;

  // new7 = createSprite(330,90,50,50);
  // new7.addImage(new7Img);
  // new7.scale = 0.25;

  // new8 = createSprite(330,90,50,50);
  // new8.addImage(new8Img);
  // new8.scale = 0.25;

  // new9 = createSprite(330,90,50,50);
  // new9.addImage(new9Img);
  // new9.scale = 0.25;

  // new10 = createSprite(330,90,50,50);
  // new10 = addImage(new10Img);
  // new10.scale = 0.25;
 
  
  // create sprite of player 1 , 2 , 3
  
  

if(gameState === 0){
  game = new Game();
  game.getState();
  game.start();
 }
}

// create function draw

function draw() {
 

 

  

  //background(bg);
  //fill("black")
  //text(mouseX + "  " + mouseY,mouseX,mouseY)
  if(playerCount === 1){
    gameState = 1;
    player.updateCount(1);
     // background("grey");
      
  }

  if(gameState === 1){
    game.play();

  }
  


//  player1.collide(wall1);
//  player1.collide(wall2);
//  player1.collide(wall3);
//  player1.collide(wall4);
//  player1.collide(wall5);
//  player1.collide(wall6);
//  player1.collide(wall7);
//  player1.collide(wall8);
//  player1.collide(wall9);
//  player1.collide(wall10);
//  player1.collide(wall11);
//  player1.collide(wall12);
//  player1.collide(wall13);
//  player1.collide(wall14);
//  player1.collide(wall15);
//  player1.collide(wall16);
//  player1.collide(wall17);
//  player1.collide(wall18);
//  player1.collide(wall19);
//  player1.collide(wall20);
 
//  player1.collide(wall21);
//  player1.collide(wall22);
//  player1.collide(wall23);
//  player1.collide(wall24);
//  player1.collide(wall25);
//  player1.collide(wall26);
//  player1.collide(wall27);
//  player1.collide(wall28);
//  player1.collide(wall29);
//  player1.collide(wall30);
//  player1.collide(wall31);
//  player1.collide(wall32);
//  player1.collide(wall33);
//  player1.collide(wall34);
//  player1.collide(wall35);
//  player1.collide(wall36);
//  player1.collide(wall37);
//  player1.collide(wall38);
//  player1.collide(wall39);
//  player1.collide(wall40);
//  player1.collide(wall41);
//  player1.collide(wall42);
//  player1.collide(wall43);
//  player1.collide(wall44);
//  player1.collide(wall45);
//  player1.collide(wall46);




  
  


}


// // move player1 1
//  function hide1(){
//    if(keyCode === 32){
//      enemyGroup.visible = false;
//   }
//  }



// // //snawner [it help's to spawn enemy randomly on screen]

//  function spawner(){
//     console.log(frameCount);
//  if (frameCount % 100 === 0) {
//   anamies = createSprite(anamieX,anamieY,10,20);
//  anamies.velocityY = 1;
//   anamies.velocityX = -1
//     var rand = Math.round(random(1,2));
//   switch(rand){
//         case 1: anamies.addImage("enemy1Img",enemy1Img);
//          break;
//         case 2: anamies.addImage("enemy1Img",enemy3Img);
//          break;
//         default:
//          break;

//     }


//    anamies.scale = 0.25;
//    anamies.lifetime = 100;
//   enemyGroup.add(anamies);
   
// }
//  }
// 
//function spawnGuns(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(360,190,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//      gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
//  }

// function spawnGuns2(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(888,270,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }

// function spawnGuns3(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(645,295,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }

// function spawnGuns4(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(660,470,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }

// function spawnGuns5(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(275,570,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }

// function spawnGuns6(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(900,325,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }

// function spawnGuns7(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(710,185,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }

// function spawnGuns8(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(535,185,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }

// function spawnGuns9(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(360,330,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }

// function spawnGuns10(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(710,100,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }



// function spawnGuns11(){
//   // console.log(frameCount);
//   // console.log(gunX);
//   // console.log(gunY);
//   if(frameCount%200 === 0){
//     var gun = createSprite(520,100,10,10)
//     var ran = Math.round(random(1,9));
//     switch(ran){
//       case 1:gun.addImage(gun1Img);
//       break;
//       case 2:gun.addImage(gun2Img);
//       break;
//       case 3:gun.addImage(gun3Img);
//       break;
//       case 4:gun.addImage(gun4Img);
//       break;
//       case 5:gun.addImage(gun5Img);
//       break;
//       case 6:gun.addImage(gun6Img);
//       break;
//       case 7:gun.addImage(gun7Img);
//       break;
//       case 8:gun.addImage(gun8Img);
//       break;
//       case 9:gun.addImage(gun9Img);
//       break;
//       default:break;

      

      
    
      
//     }
//     gun.scale = 0.30;
//     gun.lifetime = 200;
//     gunGroup.add(gun);
//   }
// }






// function keyPressed(){

//   if(keyCode === 32){
//     // player1.velocityX = 10;
//     bullet1.visible = true;
//     bullet1.scale = 0.05;
//     // bullet.x+100;
//     bullet1.velocityX = 5;
//     enemyGroup.visible = false;
//     sound1.play();
    
//   }
//   if(keyCode != 32){
//     // bullet1.x = player1.x+10;
//     // bullet1.y = player1.y-5;
//     // bullet1.visible = false;
//     // bullet1.velocityX= 0;
//     // enemyGroup.visible = true;
//     // player1.velocityX = 0
//   }
//   if(keyCode === 32){
//     // player1.velocityX = 10;
//     gun_1.visible = true;
//     gun_1.scale = 0.25;
    
//   }
//   if(keyCode != 32){
//     gun_1.x = player1.x+10;
//      gun_1.y = player1.y+10;
//     gun_1.visible = false;
   
//     player1.velocityX = 0
//   }
//   if(keyCode === 87){
//     gun1.x = player1.x;
//     gun1.y = player1.y;
//   }
// }

  
   function assignPropWall(wall){
     wall.shapeColor = "yellow";
     wall.visible = "true";
     wall.scale = 1;
   }
    
     
      
       
        
          
