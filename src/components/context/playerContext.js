import React from 'react';
import superagent from 'superagent';

export const PlayerContext = React.createContext();

const API = process.env.REACT_APP_API;

const cookie = document.cookie.substring(5);

class PlayerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      selectedPlayer: [],
      selectedName: '',
      test: '',
      id: '',
      getPlayers: this.getPlayers,
      selectPlayer: this.selectPlayer,
      handleInputName: this.handleInputName,
      resetSelected: this.resetSelected,
      handlePut: this.handlePut,
      handlePost: this.handlePost,
      handleDelete: this.handleDelete,
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

  selectPlayer = (e) => {
    e.preventDefault();
    this.state.players.forEach((player) => {
      if (player.name === this.state.selectedName) {
        this.setState({ selectedPlayer: player, id: player._id });
      }
    });
  }

  handleInputName = (e) => {
    this.setState({ selectedName: e.target.value });
  };

  resetSelected = () => {
    this.setState({ selectedPlayer: [], id: '' });
  }

  handlePut = (payload) => {
    superagent
      .put(`${API}/api/v1/players/${payload.formData._id}`)
      .send(payload.formData)
      .set('Authorization', `Bearer ${cookie}`)
      .then((response) => {
        this.setState({ players: [...this.state.players, response.body] });
      })
      .catch(console.error);
  }

  handlePost = (payload) => {
    superagent
      .post(`${API}/api/v1/players`)
      .send(payload.formData)
      .set('Authorization', `Bearer ${cookie}`)
      .then((response) => {
        this.setState({ players: [...this.state.players, response.body] });
      })
      .catch(console.error);
  }

  handleDelete = (id) => {
    superagent
      .delete(`${API}/api/v1/players/${id}`)
      .set('Authorization', `Bearer ${cookie}`)
      .then((response) => {
        const playersList = this.state.players.filter(player => player._id !== id);
        this.setState({ 
          players: playersList, 
          selectedPlayer: [], 
          id: '', 
          selectedName: '', 
        });
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
