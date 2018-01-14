import React from 'react'; // no need to specify npm modules' path
import ReactDOM from 'react-dom'; // no need to specify npm modules' path
import {Meteor} from 'meteor/meteor'; // import the named export from meteor
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players'

// autorun monitors the queries executed inside the function
// and one of the queries changes it re-runs the function
Tracker.autorun(function () {
  console.log('Players list', Players.find().fetch()); // sync call
});

const players = [{
  _id:'1',
  name : 'Lauren',
  score: 99
}, {
  _id:'2',
  name : 'Cory',
  score: -1
}, {
  _id:'3',
  name : 'Andrew',
  score: -11
}, {
  _id:'4',
  name : 'Hakan',
  score: 8
}];

// how do we get the players array into JSX?
const renderPlayers = function(playersList) {

  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has a score {player.score}</p>;
  });
};

Meteor.startup(function() {
  // once the dom ready (rendered)
  // render some JSX-JavaScript-XML to screen
  let title = 'Score Keep';
  let name = 'Andrew';
  let jsx = (
    <div>
      {/*Render h1 tag with title var as text*/}
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is my second p.</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'))
});
