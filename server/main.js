import {Players} from './../imports/api/players'
import {Meteor} from 'meteor/meteor';

console.log('Log from /server/main.js');
Meteor.startup(function() {
// will run when meteor app is ready
  Players.insert({
    name: 'Andrew',
    score: 3
  });  // snyc call
  Players.insert({
    name: 'Hakan',
    score: 1
  });  // snyc call
  console.log(Players.find().fetch()); // sync call
});
