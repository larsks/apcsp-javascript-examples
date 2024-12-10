require("../codehs");

const SYMBOLS = "!@#$%^&*()_+-={}[]:;<,>.?/~`"
const DIGITS = "0123456789"

function start()
{
  while (true) {
    const password = readLine("Enter your password: ");
    if (passwordIsValid(password)) {
      break;
    } else {
      println("Your password needs at least one uppercase letter, lowercase letter, number and symbol!");
    }
  }

  println("Your password is valid!");
}

function passwordIsValid(password)
{
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let digitCount = 0;
  let symbolCount = 0;

  for (let i=0; i<password.length; i++) {
    const c = password[i]
    if (DIGITS.includes(c)) {
      digitCount++;
    } else if (SYMBOLS.includes(c)) {
      symbolCount++;
    } else if (c.toLowerCase() == c) {
      lowercaseCount++;
    } else if (c.toUpperCase() == c) {
      uppercaseCount++;
    }
  }

  println(`upper ${uppercaseCount} lower ${lowercaseCount} digits ${digitCount} symbols ${symbolCount}`)

  return uppercaseCount > 0 && lowercaseCount > 0 && digitCount > 0 && symbolCount > 0;
}

start();
