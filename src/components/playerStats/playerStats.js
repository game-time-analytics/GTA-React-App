/* eslint-disable max-len */
import React, { useState, useContext, useEffect } from 'react';
import { PlayerContext } from '../context/playerContext';
import MyForm from '../selectPlayer/form';

/**
 * PlayerStats component
 * @description sets the state for the players states (passing, touchdowns, interceptions)
 */
const PlayerStats = () => {
  const context = useContext(PlayerContext);
  const [passing, setPassing] = useState();
  const [touchdowns, setTouchdowns] = useState();
  const [interceptions, setInterceptions] = useState();

  useEffect(() => {
    setPassing(0);
    setTouchdowns(0);
    setInterceptions(0);
    context.getPlayers();
  }, []);

  /**
  * @method handlePassing
  * @param {Object} e
  * @description calculates passing yards for the player the user selected and divides it by 16 and passes that calucation into setPassing
  */
  const handlePassing = (e) => {
    e.preventDefault();
    const pYards = context.selectedPlayer.passing / 16;
    const yardEstimate = pYards * e.target.value;
    setPassing(yardEstimate);
  };

  /**
  * @method handleTouchdowns
  * @param {Object} e 
  * @description calculates touchdowns for the player the user selected and divides it by 16 and passes that calucation into setTouchdowns
  */
  const handleTouchdowns = (e) => {
    e.preventDefault();
    const tDowns = context.selectedPlayer.touchdowns / 16;
    const touchDownEstimate = tDowns * e.target.value;
    setTouchdowns(touchDownEstimate);
  };

  /**
  * @method handleInterceptions
  * @param {Object} e 
  * @description calculates interceptions for the player the user selected and divides it by 16 and passes that calucation into setInterceptions
  */
  const handleInterceptions = (e) => {
    e.preventDefault();
    const interceptionsWeek = context.selectedPlayer.interceptions / 16;
    const interceptionEstimate = interceptionsWeek * e.target.value;
    setInterceptions(interceptionEstimate);
  };

  return (
      <React.Fragment>
        <h1>Playerstats!</h1>
          <MyForm/>
          {!!context.selectedPlayer.image && <img src={`${context.selectedPlayer.image}`}/>}
          <h2>{context.selectedPlayer.name}</h2>
          <h2>{context.selectedPlayer.description}</h2>
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
