import React, { useContext, useEffect } from 'react';
import { PlayerContext } from '../context/playerContext';
import AdminForm from './form';
import MyForm from '../selectPlayer/form';

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
        <div className="adminPage">
          <MyForm />
          {!!context.selectedPlayer.image && <img src={`${context.selectedPlayer.image}`}/>}
          <h2>{context.selectedPlayer.name}</h2>
          <h2>{context.selectedPlayer._id}</h2>
          <h2>{context.selectedPlayer.description}</h2>
          <h2>Yearly Passing Yards:{context.selectedPlayer.passing}</h2>
          <h2>Yearly Touchdowns:{context.selectedPlayer.touchdowns}</h2>
          <h2>Yearly Interceptions{context.selectedPlayer.interceptions}</h2>
          <AdminForm />
        </div>
      </React.Fragment>
  );
};

export default Admin;
