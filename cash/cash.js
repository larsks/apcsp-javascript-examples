require("../codehs");

function how_many_coins(change) {
	let cents = Math.round(change * 100);
	let quarters, dimes, nickels;

	quarters = Math.floor(cents / 25);
	cents = cents - 25 * quarters;
	dimes = Math.floor(cents / 10);
	cents = cents - 10 * dimes;
	nickels = Math.floor(cents / 5);
	cents = cents - 5 * nickels;

	//println("Q " + quarters + " D " + dimes + " N " + nickels + " P " + cents);
	const coins = quarters + dimes + nickels + cents;
	return coins;
}

function start() {
	const tests = [
		[0.01, 1],
		[0.05, 1],
		[0.1, 1],
		[0.25, 1],
		[0.04, 4],
		[0.99, 9],
	];

	let failed = 0;
	let	passed = 0;
	let total = 0;

	for (testparms of tests) {
		total++;
		const res = how_many_coins(testparms[0]);
		if (res !== testparms[1]) {
			failed++;
			println(`FAILED! given input ${testparms[0]} expected ${testparms[1]} got ${res}`);
		} else {
			passed++;
		}
	}
	println(`total ${total} passed ${passed} failed ${failed}`);
}

start();
