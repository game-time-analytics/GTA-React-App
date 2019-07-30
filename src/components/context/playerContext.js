import React from 'react';
import superagent from 'superagent';

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
    superagent
      .get(`${API}/api/v1/players`)
      .then((response) => {
        // console.log(response.text);
        console.log(response.body.results);
        this.setState({ players: response.body.results });
      })
      .catch(console.error);
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
