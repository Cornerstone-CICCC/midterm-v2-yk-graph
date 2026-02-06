import { allUniqueCharacters } from '../allUniqueCharacters.js'

describe('allUniqueCharacters', () => {
  test('should return true for a string with all unique characters', () => {
    expect(allUniqueCharacters('abcdef')).toBe(true)
    expect(allUniqueCharacters('1234567890')).toBe(true)
    expect(allUniqueCharacters('')).toBe(true)
    expect(allUniqueCharacters('AaBbCc')).toBe(true)
  })

  test('should return false for a string with duplicate characters', () => {
    expect(allUniqueCharacters('hello')).toBe(false)
    expect(allUniqueCharacters('112233')).toBe(false)
  })
})
