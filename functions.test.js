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

test("'testing! 123*' should throw Error", () => {
  expect(() => functions.caesarCipher("testing! **", 5)).toThrow(Error);
})

test("'test! 123' should return 'O NOfjWXY' if using a shift of 36", () => {
  expect(functions.caesarCipher("test! 123", 36)).toMatch(/^O NOfjWXY$/);
})

test("'O NOfjWXY' should return 'test! 123' if using a shift of -36", () => {
  expect(functions.caesarCipher("O NOfjWXY", -36)).toMatch(/^test! 123$/);
})

testObject = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}

test("analyzeArray([1, 8, 3, 4, 2, 6]) should return an object that matches testObject", () => {
  expect(functions.analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(testObject);
})