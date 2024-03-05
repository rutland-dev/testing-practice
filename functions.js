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

const regex = /[A-Za-z0-9!,.?:;"' ]/g

const letters = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.concat(caps.map(letter => letter.toLowerCase()));
})();

const numberSymbolArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", ",", ".", "?", " "];

const cipherArray = numberSymbolArray.concat(letters);

function testString(string) {
  if (string.match(regex).length === string.length) return true;
}

function caesarCipher(string, shift) {
  if (!testString(string)) {
    throw new Error("invalid string");
  }

  let result = "";

  for (let i = 0; i < string.length; i += 1) {
    const index = cipherArray.indexOf(string[i]);

    if (index + shift >= cipherArray.length) {
      result += cipherArray[(index + shift) % cipherArray.length];
    } else if ((index + shift) < 0) {
      let n = 0;
      let tempShift = shift;
      while (index + tempShift < 0) {
        n += 1;
        tempShift += 1;
      }
      result += cipherArray[cipherArray.length - n];
    } else {
      result += cipherArray[index + shift];
    }
  }
  return result;
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caesarCipher: caesarCipher
}