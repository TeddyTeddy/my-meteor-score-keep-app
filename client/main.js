import React from 'react'; // no need to specify npm modules' path
import ReactDOM from 'react-dom'; // no need to specify npm modules' path
import {Meteor} from 'meteor/meteor'; // import the named export from meteor
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import App from './../imports/ui/App'

// once the dom ready (rendered)
Meteor.startup( () => {
  // autorun monitors the queries executed inside the function
  // and one of the queries changes it re-runs the function
  Tracker.autorun( () => {
    let players = Players.find({},{sort: {score:-1}}).fetch(); // sync call
    let title = 'Score Keep';
    let subtitle = 'Created by Hakan Cuzdan';
    ReactDOM.render(<App title={title} subtitle={subtitle} players={players}/>, document.getElementById('app'))
  });
});
