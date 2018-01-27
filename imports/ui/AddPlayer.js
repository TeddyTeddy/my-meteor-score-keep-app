import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(event) {
    let playerName = event.target.playerName.value; // Name value entered by user
    event.preventDefault(); // will stop reloading the page
    if(playerName) {
      // clear out the value that is set to the form
      event.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });  // snyc call
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player Name"></input>
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}
