/* eslint-disable max-len */

import React from 'react';
import superagent from 'superagent';

export const PlayerContext = React.createContext();

const API = process.env.REACT_APP_API;

/**
 * @description Player Provider class component that sets the initial state
 */

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
  
  /**
   * @method getPlayers
   * @description makes a call to the API and sets the state of the players array to have the results passed from the body
   */

  getPlayers = () => {
    superagent
      .get(`${API}/api/v1/players`)
      .then((response) => {
        this.setState({ players: response.body.results });
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  }

  /**
   * @method findPlayer
   * @param {Object} e
   * @description finds the player in the player array located in state. If player name passed in from the event matches the player in array, that player will be the selectedPlayer
   */

  findPlayer = (e) => {
    e.preventDefault();
    this.state.players.forEach((player) => {
      if (player.name === this.state.selectedName) {
        this.setState({ selectedPlayer: player });
      }
    });
  }

  /**
   * @method handleInputName
   * @param {Object} e
   * @description sets the state of selected name to the value of what the user types into the inputfield
   */

  handleInputName = (e) => {
    this.setState({ selectedName: e.target.value });
  };

  /**
   * @method resetSelected
   * @description sets the state of selected player to an empty string
   */

  resetSelected = () => {

    this.setState({ selectedPlayer: [] });
  }

  render() {
    return (
      <PlayerContext.Provider value={this.state}>
        {/* eslint-disable-next-line react/prop-types */}
        {this.props.children}
      </PlayerContext.Provider>
    );
  }
}


export default PlayerProvider;
