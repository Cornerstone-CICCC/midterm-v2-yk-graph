/*
We have a shopping cart represented by an array of items. Each item has a price and a quantity.

Instruction
Create a function named calculateTotal that receives an array of item objects. Each object has `price` and `quantity`. Return the total cost of the cart.
*/

export const calculateTotal = function (cart) {
  if (cart.length === 0) return 0

  return cart.reduce((total, { price, quantity }) => {
    return total + price * quantity
  }, 0)
}

const myCart = [
  { name: 'Apple', price: 1.5, quantity: 2 }, // 3.00
  { name: 'Banana', price: 0.5, quantity: 4 }, // 2.00
  { name: 'Laptop', price: 1000, quantity: 1 }, // 1000
]

console.log(calculateTotal(myCart)) // 1005

const myCart2 = [
  { name: 'Notebook', price: 4, quantity: 5 }, // 20
  { name: 'Pencil', price: 2, quantity: 3 }, // 6
]
console.log(calculateTotal(myCart2)) // 26
