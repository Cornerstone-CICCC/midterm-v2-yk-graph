import { getInitials } from '../getInitials.js'

test('getInitials', () => {
  expect(getInitials('World Wide Web')).toBe('WWW')
  expect(getInitials('central intelligence agency')).toBe('CIA')
  expect(getInitials('john doe')).toBe('JD')
  expect(getInitials('New York City')).toBe('NYC')
  expect(getInitials('  spaced   out ')).toBe('SO')
})

test('getInitials with single word', () => {
  expect(getInitials('Hello')).toBe('H')
})

test('getInitials with empty string', () => {
  expect(() => getInitials('')).toThrow('Input cannot be empty')
})
