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
        // this.setState({ id: player._id });
      }
    });
  }

  handleInputName = (e) => {
    this.setState({ selectedName: e.target.value });
  };

  resetSelected = () => {
    this.setState({ selectedPlayer: [] });
  }

  handlePut(payload) {
    console.log(payload);
    console.log('handleput');
    // console.log(payload.record._id);
    console.log(payload.formData._id);
  }

  handlePost(payload) {
    // console.log(payload);
    console.log(document.cookie);
    console.log(payload.formData);
    // console.log('handlpost');
    console.log(cookie);
    // const obj = {
    //   name: payload.formData.name,
    //   description: payload.formData.description,
    //   passing: payload.formData.passing,
    //   touchdowns: payload.formData.touchdowns,
    //   interceptions: payload.formData.interceptions,
    //   team: payload.formData.team,
    //   image: payload.formData.image,
    // };
    // console.log(obj);
    superagent
      .post(`${API}/api/v1/players`)
      .send(payload.formData)
      .set('Authorization', `Bearer ${cookie}`)
      .then((response) => {
        console.log(response.body);
        // this.setState({ players: response.body.results });
      })
      .catch(console.error);
  }

  handleDelete(payload) {
    console.log(payload);


    // console.log(payload.formData._id);
    console.log('handleDelete');
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
