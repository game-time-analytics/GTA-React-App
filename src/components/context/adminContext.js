import React from 'react';
import superagent from 'superagent';
// import cookie from 'react-cookies';
// import jwt from 'jsonwebtoken';

export const AdminContext = React.createContext();

// const SECRET = process.env.REACT_APP_SECRET || 'changeit';


class AdminProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // login: this.login,
      // logout: this.logout,
      handlePut: this.handlePut,
      handlePost: this.handlePost,
    };
  }

  handlePut() {
    console.log('handleput');
  }

  handlePost() {
    console.log('handlpost');
  }

  render() {
    return (
      <AdminContext.Provider value={this.state}>
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}

export default AdminProvider;
