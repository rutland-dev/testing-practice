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

test("adds two numbers", () => {
  expect(functions.calculator.add(3, 2)).toEqual(5);
})

test("subtracts 'b' from 'a'", () => {
  expect(functions.calculator.subtract(3, 2)).toEqual(1);
})

test("divides 'a' by 'b'", () => {
  expect(functions.calculator.divide(6, 2)).toEqual(3);
})

test("multiplies two numbers", () => {
  expect(functions.calculator.multiply(3, 2)).toEqual(6);
})