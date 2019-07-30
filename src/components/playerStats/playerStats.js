import React, { useState, useContext, useEffect } from 'react';
import { PlayerContext } from '../context/playerContext';

/**
 * Home class that contains a hello world for when the home route is hit
 */
const PlayerStats = () => {

  const { state, dispatch } = useContext(PlayerContext);
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  useEffect(() => {
    // console.log("update incoming");
  }, []);

  /**
   * render function that returns a simple hello world
   */

  return (
      <React.Fragment>
        <h1>Playerstats!</h1>
      </React.Fragment>
  );
};

export default PlayerStats;
