import { isAnagram } from '../src/isAnagram'

test('isAnagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true)
  expect(isAnagram('rat', 'car')).toBe(false)
  expect(isAnagram('listen', 'silent')).toBe(true)
  expect(isAnagram('a', 'a')).toBe(true)
  expect(isAnagram('a', 'b')).toBe(false)
  expect(isAnagram('anagram', 'nag a ram')).toBe(false)
  expect(isAnagram('123', '321')).toBe(true)
})

test('different lengths', () => {
  expect(isAnagram('hello', 'helloo')).toBe(false)
})

test('one parameter', () => {
  expect(isAnagram('hello')).toBe(false)
})

test('case sensitivity', () => {
  expect(isAnagram('Listen', 'silent')).toBe(false)
})
