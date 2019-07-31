import React, { useState, useContext, useEffect } from 'react';
import { PlayerContext } from '../context/playerContext';

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
          <h2>{context.selectedPlayer._id}</h2>
          <h2>{context.selectedPlayer.description}</h2>
          <h2>Yearly Passing Yards:{context.selectedPlayer.passing}</h2>
          <h2>Yearly Touchdowns:{context.selectedPlayer.touchdowns}</h2>
          <h2>Yearly Interceptions{context.selectedPlayer.interceptions}</h2>

          {/* <form onSubmit={context.findPlayer}>
            <input
              placeholder="playerName"
              name="playerName"
              onChange={context.handleInputName}
            />
            <input type="submit" value="playerName" />
          </form> */}
          {/* <input
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
            /> */}
            {/* <form onSubmit={state.callAPI}>
            <section>
              <input
                type="text"
                className="wide"
                name="url"
                placeholder="URL"
                value={state.url}
                onChange={state.handleChange}
              />

              <div id="methods">
                <label>
                  <input
                    type="radio"
                    name="method"
                    checked={state.method === 'post' ? true : false}
                    value="post"
                    onChange={state.handleChange}
                  />
                  <span>POST</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="method"
                    checked={state.method === 'put' ? true : false}
                    value="put"
                    onChange={state.handleChange}
                  />
                  <span>PUT</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="method"
                    checked={state.method === 'delete' ? true : false}
                    value="delete"
                    onChange={state.handleChange}
                  />
                  <span>DELETE</span>
                </label>
                <label>
                  <button type="submit">Go!</button>
                </label>
              </div>
            </section>
            </form> */}
          
      </React.Fragment>
  );
};

export default Admin;
