import {Players} from './../imports/api/players'
import {Meteor} from 'meteor/meteor';

console.log('Log from /server/main.js');
Meteor.startup(() => {
  class Person {
    constructor(name ='Anonymys', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi! I am ${this.name}`;  // Hi! I am Andrew
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} years old`;// Andrew is 25 years old
    }
  }
  let me = new Person('Mike', 10);
  console.log(me.getGreeting());
  console.log(me.getPersonDescription());
});
