import React from 'react'; // no need to specify npm modules' path
import ReactDOM from 'react-dom'; // no need to specify npm modules' path
import {Meteor} from 'meteor/meteor'; // import the named export from meteor
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players'

// how do we get the players array into JSX?
const renderPlayers = (playersList) => {
  return playersList.map( player => (
    <p key={player._id}>
      {player.name} has {player.score} point(s).
      <button onClick={() => Players.update(player._id, {$inc: {score: 1}})}>+1</button>
      <button onClick={() => Players.update(player._id, {$inc: {score: -1}})}>-1</button>
      <button onClick={() => Players.remove(player._id)}>X</button>
    </p>) );
};

const handleSubmit = (event) => {
  // event is for the form
  // event.target is form
  let playerName = event.target.playerName.value; // Name value entered by user
  event.preventDefault(); // will stop reloading the page
  if(playerName) {
    // clear out the value that is set to the form
    event.target.playerName.value = '';
    // the challange: players insert
    // insert the user entered player value and a score of 0
    Players.insert({
      name: playerName,
      score: 0
    });  // snyc call
  }
};

// once the dom ready (rendered)
Meteor.startup( () => {
  // autorun monitors the queries executed inside the function
  // and one of the queries changes it re-runs the function
  Tracker.autorun( () => {
    let players = Players.find().fetch(); // sync call
    // render some JSX-JavaScript-XML to screen
    let title = 'Score Keep';
    let name = 'Andrew';
    let jsx = (
      <div>
        {/*Render h1 tag with title var as text*/}
        <h1>{title}</h1>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"></input>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
