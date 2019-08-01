import React, { useContext } from 'react';
import { PlayerContext } from '../context/playerContext';

const MyForm = () => {
  const context = useContext(PlayerContext);

  return (
          <form onSubmit={context.selectPlayer}>
            <input
              className="formForm"
              placeholder="playerName"
              name="playerName"
              onChange={context.handleInputName}
            />
            <input className="formButton" type="submit" value="Search Player" />
          </form>
  );
};

export default MyForm;
