import {Players} from './../imports/api/players'
import {Meteor} from 'meteor/meteor';

console.log('Log from /server/main.js');
Meteor.startup(() => {

});

// Object Spread Operator
let user = {
  name: 'Andrew',
  location: 'Helsinki'
};

let person = {
  ...user,
  age: 25
};

//console.log(person);

// Object Property Shorthand
let bike = 'Scott';
let stuff = {
  bike,
  laptop: 'Mac'
};

// console.log(stuff);

let house = {
  bedrooms: 2,
  bathrooms: 1.5
};
let yearBuilt = 1995;

/*
{
 bedrooms: 3
 bathrooms: 1.5
 yearBuilt: 1995,
 flooring: 'Carpet'
}
*/

let result = {
  ...house,
  bedrooms:3,
  yearBuilt,
  flooring: 'Carpet'
}

console.log(result);
