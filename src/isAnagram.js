/*

    Suppose you have two strings `s` and `t`.

    You are to write a function, isAnagram, that accepts two strings and 
    returns `true` if `t` is an anagram of `s`, and `false` otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a 
    different word or phrase, typically using all the original letters 
    exactly once.

    * Output:   should be a boolean value `true` if `t` is an anagram of `s`,
                and `false` otherwise.
    * Input:    two strings `s` and `t`.
    * 
    * 


    Test Cases:

    console.log(isAnagram("anagram", "nagaram")); // Expected output: true
    console.log(isAnagram("rat", "car")); // Expected output: false
    console.log(isAnagram("listen", "silent")); // Expected output: true
    console.log(isAnagram("a", "a")); // Expected output: true
    console.log(isAnagram("a", "b")); // Expected output: false
    console.log(isAnagram("anagram", "nag a ram")); // Expected output: false
    console.log(isAnagram("123", "321")); // Expected output: true
    
*/

export function isAnagram(s, t) {
  if (!s || !t) return false

  if (s.length !== t.length) return false

  const arrayT = t.split('')

  for (const char of s) {
    if (!arrayT.includes(char)) {
      return false
    }
    const index = arrayT.indexOf(char)
    arrayT.splice(index, 1)
  }

  return arrayT.length === 0
}

// Example usage:
console.log(isAnagram('anagram', 'nagaram')) // Expected output: true
console.log(isAnagram('rat', 'car')) // Expected output: false
console.log(isAnagram('listen', 'silent')) // Expected output: true
console.log(isAnagram('a', 'a')) // Expected output: true
console.log(isAnagram('a', 'b')) // Expected output: false
console.log(isAnagram('anagram', 'nag a ram')) // Expected output: false
console.log(isAnagram('123', '321')) // Expected output: true
