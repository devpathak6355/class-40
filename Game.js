class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database1.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database1.ref('/').update({
            gameState: state
        }) 
    }
    async start(){
        if(gameState===0){
            form=new Form();
            form.display();
            player=new Player();
            var playerCountRef=await database1.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
          
        }
        car1= createSprite(100,200);
        car1.addImage("car1",car1Img);
        car2= createSprite(300,200);
        car2.addImage("car2",car2Img);
        car3= createSprite(500,200);
        car3.addImage("car3",car3Img);
        car4= createSprite(700,200);
        car4.addImage("car4",car4Img);
        cars=[car1,car2,car3,car4];
        //cars=[0,1,2,3]
    }
    play(){
       if(gameState===1){
        form.hide();
        /*textSize(30);
        text("Game Start",120,100);*/
        Player.getPlayerInfo();
        //allplayers[player1,player2,player3]
        //allplayers[0].name
        //allplayers[0].distance
        if(allPlayers !== undefined){
            //var display_position = 100;
            background("black");
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*6);
            //index of tifhe array
            var index = 0;
      
            //x and y position of the cars
            var x = 100;
            var y;
      
            for(var plr in allPlayers){
              //add 1 to the index for every loop
              index = index + 1 ;
      
              //position the cars a little away from each other in x direction
              x = x + 200;
              //use data form the database to display the cars in y direction
              y = displayHeight - allPlayers[plr].distance;
              cars[index-1].x = x;
              cars[index-1].y = y;
      
            if(index === player.index){
                stroke(10);
                fill("red");
                ellipse(x,y,60,60);
                cars[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y
            }
             
              //textSize(15);
              //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!=null){
            player.distance+=50;
            player.update();
            console.log(player.distance);
        }
        if(player.distance>3800){
            gameState=2;
        }
        
        drawSprites();
       }
       
    }
    end(){
        console.log("gameEnded")
    }
}