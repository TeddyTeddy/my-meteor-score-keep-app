import React from 'react'; // no need to specify npm modules' path
import ReactDOM from 'react-dom'; // no need to specify npm modules' path
import {Meteor} from 'meteor/meteor'; // import the named export from meteor
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';
import PlayerList from './../imports/ui/PlayerList'

// how do we get the players array into JSX?
const renderPlayers = (playersList) => {
  return playersList.map( player => {
    return <Player key={player._id} player={player}/>;
  });
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
        <PlayerList/>
        <AddPlayer/>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
