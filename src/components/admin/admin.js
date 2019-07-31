import React, { useState, useContext, useEffect } from 'react';
import { PlayerContext } from '../context/playerContext';
import AdminForm from './form';

/**
 * @description PlayerStats component search player by name to get their stats
 */

const Admin = () => {
  const context = useContext(PlayerContext);

  useEffect(() => {
    context.getPlayers();
  }, []);


  /**
   * render function that returns a simple hello world
   */

  return (
      <React.Fragment>
        <h1>Admin!</h1>

          <form onSubmit={context.selectPlayer}>
            <input
              placeholder="playerName"
              name="playerName"
              onChange={context.handleInputName}
            />
            <input type="submit" value="playerName" />
          </form>
          {!!context.selectedPlayer.image && <img src={`${context.selectedPlayer.image}`}/>}
          <h2>{context.selectedPlayer.name}</h2>
          <h2>{context.selectedPlayer._id}</h2>
          <h2>{context.selectedPlayer.description}</h2>
          <h2>Yearly Passing Yards:{context.selectedPlayer.passing}</h2>
          <h2>Yearly Touchdowns:{context.selectedPlayer.touchdowns}</h2>
          <h2>Yearly Interceptions{context.selectedPlayer.interceptions}</h2>
          <AdminForm />
      </React.Fragment>
  );
};

export default Admin;
