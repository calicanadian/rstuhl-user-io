import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: 'calicanadian' },
      { username: 'designstuhl' }
    ]
  };

  updateUsernameHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: 'designstuhl' }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.updateUsernameHandler.bind(this)} username={this.state.users[0].username} />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
      </div>
    );
  }
}

export default App;
