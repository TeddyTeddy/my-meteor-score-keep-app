import {Players} from './../imports/api/players'
import {Meteor} from 'meteor/meteor';

console.log('Log from /server/main.js');
Meteor.startup(function() {
// will run when meteor app is ready
  // Players.insert({
  //   name: 'Hakan',
  //   score: 1
  // });  // snyc call
  // console.log(Players.find().fetch()); // sync call

  // let square = function(x) {
  //   return x * x;
  // };

  // let square = (x) => {
  //   return x*x;
  // };

  // let square = (x) => x*x;
  // console.log(square(10));

  // EXAMPLE 1: Arrow functions do not bind to (this) of object/outer scope
  let user = {
    name: 'Andrew',
    sayHi: function() {
      console.log(this.name);  // Andrew
    }
  };
  user.sayHi();

  let user2 = {
    name: 'Hakan',
    sayHi: () => { // arrow function does not bind to this
      console.log(this.name); // undefined, not Hakan
    }
  };
  user2.sayHi();

  // EXAMPLE 2: Arrow functions arguments object
  let user3 = {
    sayHi: function() { // ES5 function binds to arguments object that is passed
      console.log(arguments);  // { '0': 1, '1': 2 }
    }
  };
  user3.sayHi(1,2);

  let user4 = {
    sayHi: () => { // ES5 function binds to arguments object that is passed
      console.log(arguments);  // {}
    }
  };
  user4.sayHi(1,2);

  let user5 = {
    name: 'Obi Wan Knobi',
    sayHi () { // object method definition syntax
      console.log(this.name); // access to this
      console.log(arguments);  // access to arguments
    }
  };
  user5.sayHi(1,2);

  // Conclusion from EXAMPLE 1 & 2:
  // Arrow functions do not bing to THIS or ARGUMENTS
  // This means they are pretty poor candidate to use on objects

  // conclu
});
