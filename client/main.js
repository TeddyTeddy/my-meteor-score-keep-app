import React from 'react'; // no need to specify npm modules' path
import ReactDOM from 'react-dom'; // no need to specify npm modules' path
import {Meteor} from 'meteor/meteor'; // import the named export from meteor
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players'

// how do we get the players array into JSX?
const renderPlayers = function(playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has a score {player.score}</p>;
  });
};

// once the dom ready (rendered)
Meteor.startup(function() {
  // autorun monitors the queries executed inside the function
  // and one of the queries changes it re-runs the function
  Tracker.autorun(function () {
    let players = Players.find().fetch(); // sync call
    // render some JSX-JavaScript-XML to screen
    let title = 'Score Keep';
    let name = 'Andrew';
    let jsx = (
      <div>
        {/*Render h1 tag with title var as text*/}
        <h1>{title}</h1>
        {renderPlayers(players)}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'))
  });

});
