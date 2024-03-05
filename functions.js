function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string) {
  const array = string.split("");
  const reverseArray = array.reverse();
  const newString = reverseArray.join("");

  return newString;
}

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  multiply: function(a, b) {
    return a * b;
  }
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator
}