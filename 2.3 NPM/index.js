// var generateName = require("sillyname");

import generateName from "sillyname";
var sillyName = generateName();

import superheroes from "superheroes";
var superHero = superheroes.random();

console.log(`My name is ${sillyName}.`);
console.log(`I am ${superHero}`);
