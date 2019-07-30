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
    // this.setState({ test: 'test2' });
    superagent
      .get(`${API}/api/v1/players`)
      .then((response) => {
        // console.log(response.text);
        // console.log(response.body.results);
        this.setState({ players: response.body.results });
      })
      .catch(console.error);
  }

  findPlayer = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(this.state.players);
    this.state.players.forEach((player) => {
      // console.log(player.name);
      // console.log(e.target);
      if (player.name === this.state.selectedName) {
        // console.log('inside if');
        this.setState({ selectedPlayer: player });
      }
      // console.log(this.state.selectedPlayer);
    });
  }

  handleInputName = (e) => {
    // console.log('inputname');
    // console.log(e.target.value);
    this.setState({ selectedName: e.target.value });
  };

  resetSelected = () => {
    // console.log('reset');
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
