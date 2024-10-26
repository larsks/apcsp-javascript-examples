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

module.exports = {
  println: println,
  readLine: readLine,
  readInt: readInt,
}

global.println = println;
global.readLine = readLine;
global.readInt = readInt;
