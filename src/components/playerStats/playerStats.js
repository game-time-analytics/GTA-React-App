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
  const [passing, setPassing] = useState();
  const [touchdowns, setTouchdowns] = useState();
  const [interceptions, setInterceptions] = useState();

  useEffect(() => {
    // console.log("update incoming");\
    setPassing(0);
    setTouchdowns(0);
    setInterceptions(0);
    context.getPlayers();
  }, []);

  const handlePassing = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const pYards = context.selectedPlayer.passing / 16;
    const yardEstimate = pYards * e.target.value;
    setPassing(yardEstimate);
  };

  const handleTouchdowns = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const tDowns = context.selectedPlayer.touchdowns / 16;
    const touchDownEstimate = tDowns * e.target.value;
    setTouchdowns(touchDownEstimate);
  };

  const handleInterceptions = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const interceptionsWeek = context.selectedPlayer.interceptions / 16;
    const interceptionEstimate = interceptionsWeek * e.target.value;
    setInterceptions(interceptionEstimate);
  };

  /**
   * render function that returns a simple hello world
   */

  return (
      <React.Fragment>
        <h1>Playerstats!</h1>

          <form onSubmit={context.findPlayer}>
            <input
              placeholder="playerName"
              name="playerName"
              onChange={context.handleInputName}
            />
            <input type="submit" value="playerName" />
          </form>
          {!!context.selectedPlayer.image && <img src={`${context.selectedPlayer.image}`}/>}
          <h2>{context.selectedPlayer.name}</h2>
          <h2>Yearly Passing Yards:{context.selectedPlayer.passing}</h2>
          <h2>Calculated Passing Points Per Week:{passing}</h2>
          <h2>Yearly Touchdowns:{context.selectedPlayer.touchdowns}</h2>
          <h2>Calculated Touchdown Points Per Week:{touchdowns}</h2>
          <h2>Yearly Interceptions{context.selectedPlayer.interceptions}</h2>
          <h2>Calculated Interception Points Per Week:{interceptions}</h2>
          <h1>Total: {passing + touchdowns + interceptions}</h1>
          <input
              placeholder="Passing Points"
              name="passing"
              type="number"
              onChange={handlePassing}
            />
            <input
              placeholder="Touchdown Points"
              name="touchdowns"
              type="number"
              onChange={handleTouchdowns}
            />
            <input
              placeholder="Interception Points"
              name="interceptions"
              type="number"
              onChange={handleInterceptions}
            />
          
      </React.Fragment>
  );
};

export default PlayerStats;
