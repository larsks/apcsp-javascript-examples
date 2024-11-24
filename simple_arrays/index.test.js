const simple_arrays = require(".");

test("doubleList doubles items in an array", () => {
  expect(simple_arrays.doubleList([1,2,3,4])).toEqual([1,1,2,2,3,3,4,4])
})

test("onlyEvens returns even numbers from an array", () => {
  expect(simple_arrays.onlyEvens([1,2,3,4])).toEqual([2,4])
})

test("reverseList reverses an array", () => {
  expect(simple_arrays.reverseList([1,2,3,4])).toEqual([4,3,2,1])
})
