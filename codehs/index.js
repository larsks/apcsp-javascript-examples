/*
 * codehs compatability library
 *
 * This library implements functions decribed described in the codehs.com
 * "Intro to JavaScript" textbook.
 *
 */

const readlineSync = require("readline-sync");

function println (msg) {
  console.log(msg === undefined ? "" : msg);
}

function readLine (prompt) {
  return readlineSync.question(prompt);
}

function readInt (prompt) {
  const val = readlineSync.question(prompt);
  return Number.parseInt(val);
}

function readFloat (prompt) {
  const val = readlineSync.question(prompt);
  return Number.parseFloat(val);
}

class Randomizer {
  static nextInt(low, high) {
    const val = Math.random();
    return Math.floor((high-low) * val + low);
  }
}

module.exports = {
  println: println,
  readLine: readLine,
  readInt: readInt,
  readFloat: readFloat,
  Randomizer: Randomizer,
}

global.println = println;
global.readLine = readLine;
global.readInt = readInt;
global.readFloat = readFloat;
global.Randomizer = Randomizer;
