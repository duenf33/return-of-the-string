/*******************
 * YOUR CODE HERE! *
 *******************/
function yell(str) {
  return str + '!';
}
console.log(yell('hello'));


function getFirstCharacter(str) {
  return str[0];
}
console.log(getFirstCharacter('hello'));


function getLastCharacter(str) {
  str = str.slice(-1)
  return str;
}
console.log(getLastCharacter('Fernando'))


function getOneCharacter(str, x) {
  
  return str[x];
}
console.log(getOneCharacter('duenas', 2))


function getTwoCharacters(str, x, y){
  return str[x] + str[y];
}
console.log(getTwoCharacters('fernando duenas', 1, 6))


function makeCapitalized(str){
  return str.toUpperCase();
}
console.log(makeCapitalized('hello'));

function yellLouder(str){
  return str.toUpperCase() + '!!!'
}
console.log(yellLouder('louder'))


function getInitials(str) {
  str1 = str.split(" ").map((x)=>x[0]).join(".") + '.';
  str2 = str1[0]+str1[1]+str1[2]+str1[3];
  console.log(str);
  console.log(str1);
  return str2;
}
console.log(getInitials('Fernando Duenas Bustos'))

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
