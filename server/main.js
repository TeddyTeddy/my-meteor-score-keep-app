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

  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }
    getGreeting() {
      if(this.title) {
        return `Hi! I am ${this.name}. I work as ${this.title}`;  // Hi! I am Andrew
      } else {
        return super.getGreeting();
      }
    }
    hasJob() {
      return !!this.title;
    }
  }

  // Programmer extends person
  // name, age, preferredLanguage defaults to 'assembly'
  // override GetGreeting for the Programmer
  //    Hi! I am Andrew. I am a Assembly developer

  // Create 2 brand new programmers
  // one with assembly
  // one with ES2015


  let person = new Employee('David', 10);
  console.log(person.getGreeting());
  console.log(person.getPersonDescription());
  console.log(person.hasJob());

  let me = new Employee('Mike', 10, 'db admin');
  console.log(me.getGreeting());
  console.log(me.getPersonDescription());
  console.log(me.hasJob());
});
