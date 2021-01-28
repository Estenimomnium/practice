'use strict'

let a = 4326;
let b = 297515;

a = String(a);
b = String(b);

let mystring = a + b;

let myArray = mystring.split('');

myArray.unshift("Иванов");

myArray.reverse();

let s = myArray.join('');

console.log(s);