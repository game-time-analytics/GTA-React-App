import React from 'react';

export const PlayerContext = React.createContext();

const API = process.env.REACT_APP_API;

class PlayerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      test: '',
      getPlayers: this.getPlayers,
    };
  }

  getPlayers = () => {
    // this.setState({ test: 'test2' });
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
