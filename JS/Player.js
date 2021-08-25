
    class Player {
         constructor(x,y){ 
             this.index = null;
              this.kill = 0;
              this.distance = 0;
               this.name = null;
                this.rank = null;
                this.x = x;
                this.y = y;
                
             }
movePlayer(){
if(keyIsDown(UP_ARROW) && this.index !== null){
   this.y -=10
}
                
if(keyIsDown(DOWN_ARROW) && this.index !== null){
   this.y +=10
}
                
if(keyIsDown(LEFT_ARROW) && this.index !== null){
   this.x -=10
}
                
if(keyIsDown(RIGHT_ARROW) && this.index !== null){
   this.x +=10
}
}
              getCount(){
                var playerCountRef = database.ref('playerCount');
                playerCountRef.on("value",(data)=>{
                         playerCount = data.val(); })
                         }
                          updateCount(count){
                               database.ref('/').update({ playerCount: count });
                             }
                              update(){
                                   var playerIndex = "players/player" + this.index;
                                    database.ref(playerIndex).set({ 
                                        name:this.name,
                                        kill:this.kill 
                                    });
                                 }
                                  static getPlayerInfo(){
                                       var playerInfoRef = database.ref('players');
                                        playerInfoRef.on("value",(data)=>{ 
                                             allPlayers = data.val(); 
                                        })
                                     }
                                      getMaxKill()
                                       {
                                            database.ref('players/player').on("value",(data)=>{
                                                 this.kill = data.val(); 
                                                }) 
                                            } 
                                            
                                            static updateMaxKill(killCount) {
                                                 database.ref('/').update({
                                                      playerWin:killCount
                                                    }
                                                    )
                                                 }
                                                 }
