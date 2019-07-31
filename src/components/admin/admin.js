import React, { useState, useContext, useEffect } from 'react';
import { PlayerContext } from '../context/playerContext';
import AdminForm from './form';
// import AdminProvider from '../context/adminContext';

/**
 * @description PlayerStats component search player by name to get their stats
 */

const Admin = () => {
  const context = useContext(PlayerContext);
  // const [passing, setPassing] = useState();
  // const [touchdowns, setTouchdowns] = useState();
  // const [interceptions, setInterceptions] = useState();

  useEffect(() => {
    // setPassing(0);
    // setTouchdowns(0);
    // setInterceptions(0);
    context.getPlayers();
  }, []);


  // const handlePassing = (e) => {
  //   e.preventDefault();
  //   const pYards = context.selectedPlayer.passing / 16;
  //   const yardEstimate = pYards * e.target.value;
  //   setPassing(yardEstimate);
  // };

  // const handleTouchdowns = (e) => {
  //   e.preventDefault();
  //   const tDowns = context.selectedPlayer.touchdowns / 16;
  //   const touchDownEstimate = tDowns * e.target.value;
  //   setTouchdowns(touchDownEstimate);
  // };

  // const handleInterceptions = (e) => {
  //   e.preventDefault();
  //   const interceptionsWeek = context.selectedPlayer.interceptions / 16;
  //   const interceptionEstimate = interceptionsWeek * e.target.value;
  //   setInterceptions(interceptionEstimate);
  // };

  /**
   * render function that returns a simple hello world
   */

  return (
    // <AdminProvider>
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
    // </AdminProvider>
  );
};

export default Admin;
