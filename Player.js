class Player{                       
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }
    getCount(){
        var playerCountRef=database1.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        database1.ref('/').update({
            playerCount: count
        })
    }
    update(){
        var playerIndex="players/player"+this.index;//players-player1,player2,player3
        database1.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
            //players/player1-Name : Dev Distance:200
            //players/player2-Name : Niharika Distance:100
            //players [player1,player2,player3]
            //player1 [name ,Distance]
        })
    }
    //player.update()ef
    //Player.getPlayerInfo() can be called by class has nothing to do with objects
    
   static getPlayerInfo(){
        var playerInfoRef=database1.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        });
    }
}