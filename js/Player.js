class Player
{
  constructor()
  {
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount()
  {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
                                          playerCount = data.val();
                                      }
                      );
  }

  updateCount(count)
  {
    database.ref('/').update({
      playerCount: count
    });
  }

  update()
  {
    var playerIndex = "players/player" + ;
    database.ref(playerIndex).set({
      name:,
      distance:
    });
  }

             getPlayerInfo()
  {
    var playerInfoRef = database.ref('            ');
    playerInfoRef.on("value",(data)=>{
                                        allPlayers =   ;
                                      }
                    );

  }
}