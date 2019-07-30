import React from 'react';
import superagent from 'superagent';

export const PlayerContext = React.createContext();

const API = process.env.REACT_APP_API;

class PlayerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      selectedPlayer: [],
      selectedName: '',
      test: '',
      getPlayers: this.getPlayers,
      findPlayer: this.findPlayer,
      handleInputName: this.handleInputName,
      resetSelected: this.resetSelected,
    };
  }

  getPlayers = () => {
    superagent
      .get(`${API}/api/v1/players`)
      .then((response) => {
        this.setState({ players: response.body.results });
      })
      .catch(console.error);
  }

  findPlayer = (e) => {
    e.preventDefault();
    this.state.players.forEach((player) => {
      if (player.name === this.state.selectedName) {
        this.setState({ selectedPlayer: player });
      }
    });
  }

  handleInputName = (e) => {
    this.setState({ selectedName: e.target.value });
  };

  resetSelected = () => {
    this.setState({ selectedPlayer: [] });
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
