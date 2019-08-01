import React, { useContext } from 'react';
import { PlayerContext } from '../context/playerContext';

const MyForm = () => {
  const context = useContext(PlayerContext);

  return (
          <form onSubmit={context.selectPlayer}>
            <input
              placeholder="playerName"
              name="playerName"
              onChange={context.handleInputName}
            />
            <input type="submit" value="playerName" />
          </form>
  );
};

export default MyForm;
