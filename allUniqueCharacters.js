/*

    Suppose you have a string `s`.

    You are to write a function, allUniqueCharacters, that accepts a string and 
    returns `true` if the string has all unique characters, and `false` otherwise.

    * Output:   should be a boolean value `true` if the string has all unique characters,
                and `false` otherwise.
    * Input:    a single string `s`.
    * 
    * 


    Test Cases:

    console.log(allUniqueCharacters("abcdef")); // Expected output: true
    console.log(allUniqueCharacters("hello")); // Expected output: false
    console.log(allUniqueCharacters("1234567890")); // Expected output: true
    console.log(allUniqueCharacters("112233")); // Expected output: false
    console.log(allUniqueCharacters("")); // Expected output: true
    console.log(allUniqueCharacters("AaBbCc")); // Expected output: true
    
*/

export function allUniqueCharacters(s) {
  const charSet = new Set()

  for (const char of s) {
    if (charSet.has(char)) {
      return false
    }
    charSet.add(char)
  }

  return true
}

// Example usage:
console.log(allUniqueCharacters('abcdef')) // Expected output: true
console.log(allUniqueCharacters('hello')) // Expected output: false
console.log(allUniqueCharacters('1234567890')) // Expected output: true
console.log(allUniqueCharacters('112233')) // Expected output: false
console.log(allUniqueCharacters('')) // Expected output: true
console.log(allUniqueCharacters('AaBbCc')) // Expected output: true
