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
        var choice = readInt(prompt);

        if (choice == null || (choice >= min && choice <= max)) {
            return choice;
        }
    }
}

function start() {
    var done = false;

    while (!done) {
        println(
            "you are locked in a room. to get out you can search or you can try to break out"
        );
        var choice = getNumber("open door = 1, search = 2 or break out = 3? ", 1, 3);
        if (choice == null) {
            return;
        }

        if (choice == 1) done = opendoor();
        else if (choice == 2) done = gosearch();
        else if (choice == 3) done = gobreakout();
    }

    println("You escape!");
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
        "how many holes do you want to dig? choose a number between 1-10: ",
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
    if (Math.random() > 0.8) {
        println("You break down the door!");
        return true;
    } else {
        println("you are not strong enough to break out");
        return false;
    }
}

start();
