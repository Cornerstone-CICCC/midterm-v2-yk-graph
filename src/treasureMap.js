/*
We have a grid with multiple hidden treasures marked as 'X'. We need a report on how many there are and exactly where they are.

Instruction
Create a function named treasureMap that receives an array of arrays (grid). 
It must return an object with this structure:
{
  treasureCount: number,
  coordinates: [ [x, y], [x, y] ... ]
}
*/

export const treasureMap = function (grid) {
  const treasureCount = grid.reduce((acc, row) => {
    const countInRow = row.filter((cell) => cell === 'X').length
    return acc + countInRow
  }, 0)

  const coordinates = []
  for (const row of grid) {
    row.forEach((cell, index) => {
      if (cell === 'X') {
        coordinates.push([index, grid.indexOf(row)])
      }
    })
  }

  return {
    treasureCount,
    coordinates,
  }
}

const map1 = [
  ['O', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'O'],
  ['O', 'O', 'O', 'X'],
]

console.log(treasureMap(map1))
// Output:
// {
//   treasureCount: 3,
//   coordinates: [ [2, 0], [1, 1], [3, 2] ]
// }

const map2 = [
  ['O', 'O'],
  ['O', 'O'],
]
console.log(treasureMap(map2))
// { treasureCount: 0, coordinates: [] }

const map3 = [
  ['X', 'O', 'O'],
  ['O', 'O', 'O'],
  ['X', 'X', 'O'],
  ['O', 'O', 'X'],
]
console.log(treasureMap(map3))
// {
//   treasureCount: 4,
//   coordinates: [ [0, 0], [0, 2], [1, 2], [2, 3] ]
// }
