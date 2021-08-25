class Game{

constructor()
{
}
getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
        gameState = data.val();
    })

}

update(state) {
    database.ref('/').update({
        gameState: state
    });
}


async start(){
if(gameState === 0){

player = new Player(540,80);
var playerCountRef = await database.ref('playerCount').once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();
}
form = new Form()
form.display();


player1 = createSprite(540,80, 50, 50);
player1.addImage(player1Img);
player1.scale = 0.10;
players = [player1];
// Add more players here

bullet1 = createSprite(player1.x,player1.y,10,20);
bullet1.addImage(bulletImg);
bullet1.visible = false;

gun_1 = createSprite(player1.x,player1.y+3,10,10);
gun_1.addImage(gun_1Img);
gun_1.visible = false;


wall1 = createSprite(580,265,10,50);
assignPropWall(wall1);

wall2 = createSprite(455,250,10,90);
assignPropWall(wall2);

wall3 = createSprite(455,385,10,90);
assignPropWall(wall3);


wall4 = createSprite(495,250,10,90);
wall2.shapeColor = "red";
// wall4.visible = false;

wall5 = createSprite(495,385,10,90);
// wall5.visible = false;

wall6 = createSprite(585,260,50,10);
// wall6.visible = false;

wall7 = createSprite(539,290,90,10);
// wall7.visible = false;

wall8 = createSprite(539,345,90,10);
// wall8.visible = false;

wall9 = createSprite(729,345,90,10);
// wall9.visible = false;

wall10 = createSprite(729,290,90,10);
// wall10.visible = false;

wall11 = createSprite(650,585,1000,10);
// wall11.visible = false;

wall12 = createSprite(650,58,1000,10);
// wall12.visible = false;

wall13 = createSprite(525,110,160,10);
// wall13.visible = false;

wall14 = createSprite(755,110,200,10);
//  wall14.visible = false;

wall15 = createSprite(635,315,50,20);
// wall9.visible = false;

wall16 = createSprite(778,250,10,90);
// wall10.visible = false;

wall17 = createSprite(555,206,130,10);
// wall10.visible = false;

wall18 = createSprite(615,230,10,50);
// wall10.visible = false;

wall19 = createSprite(658,230,10,50);
// wall13.visible = false;

wall20 = createSprite(718,205,130,10);
//  wall14.visible = false;

wall21 = createSprite(688,260,50,10);
// wall9.visible = false;

wall22 = createSprite(688,267,10,50);
// wall10.visible = false;

wall23 = createSprite(355,345,190,10);
//   // wall10.visible = false;

wall24 = createSprite(355,290,190,10);
//   // wall10.visible = false;

//   //

wall25 = createSprite(910,345,190,10);
//   // wall25.visible = false;

wall26 = createSprite(910,290,190,10);
//   //  wall26.visible = false;

wall27 = createSprite(470,150,300,10);
//   // wall27.visible = false;

wall28 = createSprite(810,150,300,10);
//   // wall28.visible = false;

wall29 = createSprite(815,250,10,90);
//   // wall29.visible = false;

wall30 = createSprite(579,370,10,50);
//   // wall30.visible = false;

wall31 = createSprite(590,370,50,10);
//   // wall31.visible = false;

wall32 = createSprite(690,370,50,10);
//   //  wall32.visible = false;

wall33 = createSprite(690,370,10,50);
//   // wall33.visible = false;

wall34 = createSprite(360,210,200,10);
//   // wall34.visible = false;

wall35 = createSprite(1050,250,10,1000);
//   // wall35.visible = false;

wall36 = createSprite(200,200,10,1000);
//   // wall36.visible = false;

wall37 = createSprite(400,425,100,10);
// // wall37.visible = false;

wall38 = createSprite(690,370,50,10);
// //  wall38.visible = false;

wall39 = createSprite(778,385,10,90);
// // wall39.visible = false;

wall40 = createSprite(815,385,10,90);
// // wall40.visible = false;

wall41 = createSprite(620,400,10,50);
// // wall41.visible = false;

wall42 = createSprite(660,400,10,50);
// // wall42.visible = false;

wall43 = createSprite(557,425,130,10);
// // wall43.visible = false;

wall44 = createSprite(720,425,130,10);
// // wall44.visible = false;

wall45 = createSprite(630,487,530,10);
// // wall45.visible = false;

wall46 = createSprite(660,400,10,50);
// // wall46.visible = false;

} 

}

play(){
background(255);
form.hide();
Player.getPlayerInfo();
player.getMaxKill();
if(soundPlay = 1)
sound2.play();
//sound2.stop();
 
if(allPlayers !== undefined)
{
//var display_position = 100;
//index of the array 
var index = 0; 
//x and y position of players 
var x = 540 ;
var y = 80;
for(var plr in allPlayers){
//add 1 to the index for every loop 
//  index = index + 1 ; 

// players[index-1].x = x;
// players[index-1].y = y; 



// // console.log(index, player.index) 
if (index === player.index){
  stroke(10);
  fill("red");
  ellipse(x,y,30,30);
  //camera.position.x = players[index-1].x;
  //camera.position.y = players[index-1].y; 
  textSize(40);
  text("MINI FIRE", 588,20,250,150)
  textSize(20);
  text("Move player with ARROW ",windowWidth-100,windowHeight-450,100,100)
  text("Score :  ",40,90,100,100)
 }
 player.movePlayer();
 player.update();
}

// gunX = player1.x+100;
// gunY = player1.y;

// newX = player1.x+200;
// newY = player1.y;


// anamieX = player1.x+200;
// anamieY = player1.y;

// if( keyCode === 87){
//   gun1.x = player1.x;
//   gun1.y = player1.y;
// }
// // if(bullet1.isTouching(anamie2)){
// //   anamie2.hide;
// // }
// if(bullet1.x === new1.x){
//   new1.visible = false;
//   bullet1.velocityX = 0
//   bullet1.visible = false;
// }
// else{
//   new1.visible = true;
// }
// if(bullet1.X === new2.X && new2.Y){
//   new2.visible = false;
//   bullet1.velocityX = 0;
//   bullet1.visible = false;
// }
// else{
//   new2.visible = true;
//   // bullet1.visible = true;
// }

 
  drawSprites();
  // spawnGuns();

  // spawnGuns2();
  // spawnGuns3();
  // spawnGuns4();
  // spawnGuns5();
  // spawnGuns6();
  // spawnGuns7();
  // spawnGuns8();
  // spawnGuns9();
  // spawnGuns10();
  // spawnGuns11();
  //spawner();
  //hide1();
  
  
// if(keyWentDown(RIGHT_ARROW)){
//     player1.x = player1.x+10;
//     // player1.x = camera.x
//   }
//   if(keyWentDown(LEFT_ARROW)){
//     player1.x = player1.x-10;
//     // player1.x = camera.x
//   }
//   if(keyWentDown(UP_ARROW)){
//     player1.y = player1.y-10;
//     // player1.y = camera.y
//   }
//   if(keyWentDown(DOWN_ARROW)){
//     player1.y = player1.y+10;
//     // player1.y = camera.y
//   }

//       
    } 
    }
    }


                                                                   
   



                                                             
                                                         
                                                  
                                                                    
 

 