const cash = require("./cash");

describe("how_many_coins", () => {
	it.each([
		[0, 0],
		[-1, 0],
		["test", 0],
		[0.01, 1],
		[0.05, 1],
		[0.1, 1],
		[0.25, 1],
		[0.04, 4],
		[0.99, 9],
		[1.41, 8],
	])("when the input is '%f'", (change, expected) => {
		expect(cash.how_many_coins(change).coins).toBe(expected);
	});
});
