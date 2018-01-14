//import './../imports/utils';  // executes the file
import {greetUser, name} from './../imports/utils';
import add from './../imports/math';

console.log('Log from /server/main.js');
console.log(greetUser());
console.log(name);

console.log(add(2,7));
