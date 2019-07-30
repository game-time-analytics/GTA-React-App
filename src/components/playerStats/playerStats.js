import React, { useState, useContext, useEffect } from 'react';
import { PlayerContext } from '../context/playerContext';
import { statement } from '@babel/template';


/**
 * Home class that contains a hello world for when the home route is hit
 */
const PlayerStats = () => {

  const context = useContext(PlayerContext);
  // const [username, setUsername] = useState();
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
        <h2>{context.test}</h2>
      </React.Fragment>
  );
};

export default PlayerStats;
