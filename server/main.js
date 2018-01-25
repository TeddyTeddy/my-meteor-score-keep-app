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

  let person = new Employee('David', 10);
  console.log(person.getGreeting());
  console.log(person.getPersonDescription());
  console.log(person.hasJob());

  let me = new Employee('Mike', 10, 'db admin');
  console.log(me.getGreeting());
  console.log(me.getPersonDescription());
  console.log(me.hasJob());

  class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'assembly') {
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting() {
      //    Hi! I am Andrew. I am a Assembly developer
      return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} programmer`;
    }
  }

  let programmerOne = new Programmer('Gokhan', 40, 'ES2015' );
  console.log(programmerOne.getGreeting());

  let programmerTwo = new Programmer('Hakan', 40 );
  console.log(programmerTwo.getGreeting());



});
