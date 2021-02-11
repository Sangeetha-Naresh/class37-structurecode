class Game 
{
  constructor(){}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data)
                            {
                              gameState = data.val();
                            }
                    );

  }

  update(state)
  {
    database.ref('/').update({  gameState : state  });
  }

               start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef =  database.ref('playerCount').once("value");
      

      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.   ;
       
        player.getCount();
      }

      form = new Form();
      form.display();
    }
  }

  play()
  {
    form.hide();

    textSize(30);
    text("               ", 120, 100)
    
           .getPlayerInfo();

    if(allPlayers !== undefined)
    {
      var y_position = ;

      for(var plr in allPlayers)
      {
        if (plr === )
          fill("    ");
        else
          fill("   ");

        y_position+=;

        textSize(15);
        text(                                                  , 120,y_position)
      }
    }

    if(keyIsDown(                  ) && player.index !==   )
    {
      player.distance +=;
      player.;
    }
  }
}