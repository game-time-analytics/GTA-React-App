import React from 'react';

export const PlayerContext = React.createContext();

const API = process.env.REACT_APP_API;

class PlayerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      getPlayers: this.getPlayers,
    };
  }

  getPlayers = () => {

  }

  render() {
    return (
      <PlayerContext.Provider value={this.state}>
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}


export default PlayerProvider;
