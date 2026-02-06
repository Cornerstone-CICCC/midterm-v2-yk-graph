import { calculateTotal } from '../src/shoppingCart'

test('calculateTotal', () => {
  expect(
    calculateTotal([
      { name: 'Apple', price: 1.5, quantity: 2 }, // 3.00
      { name: 'Banana', price: 0.5, quantity: 4 }, // 2.00
      { name: 'Laptop', price: 1000, quantity: 1 }, // 1000
    ]),
  ).toBe(1005)

  expect(
    calculateTotal([
      { name: 'Notebook', price: 4, quantity: 5 }, // 20
      { name: 'Pencil', price: 2, quantity: 3 }, // 6
    ]),
  ).toBe(26)
})

test('calculateTotal with floating point prices', () => {
  expect(
    calculateTotal([
      { name: 'Gadget', price: 19.99, quantity: 3 }, // 59.97
      { name: 'Widget', price: 5.49, quantity: 4 }, // 21.96
    ]),
  ).toBeCloseTo(81.93)
})

test('calculateTotal with empty cart', () => {
  expect(calculateTotal([])).toBe(0)
})
