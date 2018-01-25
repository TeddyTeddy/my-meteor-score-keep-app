import {Players} from './../imports/api/players'
import {Meteor} from 'meteor/meteor';

console.log('Log from /server/main.js');
Meteor.startup(() => {
  class Person {
    constructor(name ='Anonymys') {
      this.name = name;
    }
    getGreeting() {
      return `Hi! I am ${this.name}`;  // Hi! I am Andrew
    }
  }
  let me = new Person('Mike');
  console.log(me.getGreeting());
});
