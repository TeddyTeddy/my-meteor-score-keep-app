import React from 'react'; // no need to specify npm modules' path
import ReactDOM from 'react-dom'; // no need to specify npm modules' path
import {Meteor} from 'meteor/meteor'; // import the named export from meteor
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

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

// once the dom ready (rendered)
Meteor.startup( () => {
  // autorun monitors the queries executed inside the function
  // and one of the queries changes it re-runs the function
  Tracker.autorun( () => {
    let players = Players.find().fetch(); // sync call
    // render some JSX-JavaScript-XML to screen
    let title = 'Score Keep';
    let subtitle = 'Provided by Hakan Cuzdan';
    let jsx = (
      <div>
        {/*Render h1 tag with title var as text*/}
        <TitleBar title={title} subtitle={subtitle}/>
        {renderPlayers(players)}
        <AddPlayer score={10}/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
