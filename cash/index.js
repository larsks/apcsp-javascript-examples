require("../codehs");

function new_change(q, d, n, c) {
	return {
		quarters: q,
		dimes: d,
		nickels: n,
		cents: c,
		coins: q + d + n + c,
	};
}

function how_many_coins(change) {
	if (Number.isNaN(Number.parseFloat(change)) || change < 0)
		return new_change(0, 0, 0, 0);
	let cents = Math.round(change * 100);

	const quarters = Math.floor(cents / 25);
	cents = cents - 25 * quarters;
	const dimes = Math.floor(cents / 10);
	cents = cents - 10 * dimes;
	const nickels = Math.floor(cents / 5);
	cents = cents - 5 * nickels;

	//println("Q " + quarters + " D " + dimes + " N " + nickels + " P " + cents);
	return new_change(quarters, dimes, nickels, cents);
}

exports.how_many_coins = how_many_coins;
