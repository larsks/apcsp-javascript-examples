/*
Write a program that prompts the user for a meal: breakfast, lunch, or dinner.
Then using if statements and else statements, print the user a message
recommending a meal. For example if the meal was breakfast, you could say 
something like, "How about some avocado on toast?"
*/

const readlineSync = require("readline-sync");

/*
Our mealMenu() function returns an integer representing the
selected meal. We use constants to represent these numbers so that
it's obvious in context what they're for.
*/
const MEAL_BREAKFAST = 1;
const MEAL_LUNCH = 2;
const MEAL_DINNER = 3;
const MEAL_SNACKS = 4;

/*
We provide a list of items for each meal. We select a random item from
the list for the selected meal and print that as a suggestion.
*/
const BREAKFASTS = [
	"Avocado on toast",
	"Oatmeal",
	"Yogurt with jam",
	"Pancakes",
	"Eggs and bacon",
];

const LUNCHES = [
	"A hamburger",
	"Pasta with sauce",
	"A peanut butter and jelly sandwhich",
	"Tomato soup",
	"A grilled cheese sandwhich",
];

const DINNERS = [
	"Barbeque chicken",
	"Pizza",
	"Potato leek soup",
	"Paneer tikka massala",
	"Grilled salmon",
];

const SNACKS = [
	"Potato chips",
	"Samosas",
	"Some dates",
	"An apple",
	"A banana",
	"Candy corn",
	"Tacquitos",
];

function println(msg) {
	console.log(msg === undefined ? "" : msg);
}

function readLine(prompt) {
	return readlineSync.question(prompt);
}

function readInt(prompt) {
	const val = readlineSync.question(prompt);
	return Number.parseInt(val);
}

function start() {
	let mealName;
	let options;

	while (true) {
		const meal = mealMenu();

		if (meal === -1) {
			println("I guess you weren't hungry!");
			return;
		}

		switch (meal) {
			case MEAL_BREAKFAST:
				mealName = "breakfast";
				options = BREAKFASTS;
				break;
			case MEAL_LUNCH:
				mealName = "lunch";
				options = LUNCHES;
				break;
			case MEAL_DINNER:
				mealName = "dinner";
				options = DINNERS;
				break;
			case MEAL_SNACKS:
				mealName = "snack";
				options = SNACKS;
				break;
		}

		const selected = options[Math.floor(Math.random() * options.length)];
		println("");
		println(`For  ${mealName} how about: ${selected}`);
		println("");
	}
}

function mealMenu() {
	println("*** Select a meal ***");
	println();
	println("1 - Breakfast");
	println("2 - Lunch");
	println("3 - Dinner");
	println("4 - Snacks");
	println();
	println("Enter q to quit.");
	while (true) {
		println();
		const rawChoice = readLine("Your choice? ");
		if (rawChoice == null || rawChoice === "q") {
			return -1;
		}
		const choice = Number.parseInt(rawChoice);
		if (choice >= 1 && choice <= 4) {
			return choice;
		}
		println("Invalid choice (must be 1, 2, 3, or 4). ");
	}
}

start();
