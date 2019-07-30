import React, { useState, useContext, useEffect } from 'react';
import { PlayerContext } from '../context/playerContext';


// const If = (props) => {
//   return !!props.condition ? props.children : null;
// };

/**
 * Home class that contains a hello world for when the home route is hit
 */
const PlayerStats = () => {

  const context = useContext(PlayerContext);
  // const [playerName, setPlayerName] = useState();
  // const [password, setPassword] = useState();

  useEffect(() => {
    // console.log("update incoming");
    context.getPlayers();
  }, []);

  /**
   * render function that returns a simple hello world
   */

  return (
      <React.Fragment>
        <h1>Playerstats!</h1>
        {/* <h2>{context.players.map((player, idx) => (

          <p key={idx}>Name: {player.name} Passing Yards: {player.passing} Touchdowns: {player.touchdowns}{player.interceptions}<img src={`${player.image}`}/></p>

        ))}</h2> */}
            <form onSubmit={context.findPlayer}>
            <input
              placeholder="playerName"
              name="playerName"
              onChange={context.handleInputName}
            />
            <input type="submit" value="playerName" />
          </form>
          <img src={`${context.selectedPlayer.image}`}/>
          <h2>{context.selectedPlayer.name}</h2>
          <h2>{context.selectedPlayer.passing}</h2>
          <h2>{context.selectedPlayer.touchdowns}</h2>
          <h2>{context.selectedPlayer.interceptions}</h2>
          
      </React.Fragment>
  );
};

export default PlayerStats;
