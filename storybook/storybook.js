/*
Create an interactive story where the reader progresses through a series of
scenarios and makes decisions that influence the story’s outcome. The project
will emphasize using functions to manage different story sections, handle user
input, and control the flow of the narrative.
*/

require("../codehs");

var hasKey = false;

function getNumber(prompt, min, max) {
  while (true) {
    const choice = readLine(prompt);

    if (choice == null || choice == 'q')
      return null;

    const int_choice = parseInt(choice);
    if (int_choice >= min && int_choice <= max) {
      return int_choice;
    }
  }
}

function start() {
  var done = false;

  while (!done) {
    println(
      "You are locked in a room. To get out you can search or you can try to break out."
    );
    var choice = getNumber("open door = 1, search = 2 or break out = 3? ", 1, 3);
    if (choice == null) {
      break;
    }

    switch (choice) {
      case 1:
        done = opendoor();
        break;
      case 2:
        done = gosearch();
        break;
      case 3:
        done = gobreakout();
        break;
    }
  }

  if (done) {
    println("You escape!");
  } else {
    println("You give up.");
  }
}

function opendoor() {
  if (hasKey) {
    println("You unlock the door!");
    return true;
  } else {
    println("You don't have a key for this door.");
    return false;
  }
}

function gosearch() {
  var holes = getNumber(
    "How many holes do you want to dig? Choose a number between 1-10: ",
    1,
    10
  );
  if (holes == 2 || holes == 7 || holes == 9) {
    println("You found a key!");
    hasKey = true;
  } else {
    println("You don't find anything.")
  }

  return false;
}

function gobreakout() {
  if (Randomizer.nextInt(0,100) > 80) {
    println("You break down the door!");
    return true;
  } else {
    println("You fail to break down the door.");
    return false;
  }
}

start();
