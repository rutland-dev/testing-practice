function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string) {
  const array = string.split("");
  const reverseArray = array.reverse();
  const newString = reverseArray.join("");

  return newString;
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString
}