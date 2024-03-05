const functions = require("./functions.js");

test("capitalizes the first letter of a string", () => {
  expect(functions.capitalize("hello")).toMatch(/Hello$/);
});

test("capitalizes the first letter of a string", () => {
  expect(functions.capitalize("HELLO")).toMatch(/Hello$/);
});

test("reverses a string", () => {
  expect(functions.reverseString("hello")).toMatch(/olleh$/);
})