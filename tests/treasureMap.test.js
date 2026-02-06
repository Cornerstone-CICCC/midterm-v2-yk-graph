import { treasureMap } from '../src/treasureMap'

test('treasureMap', () => {
  const map1 = [
    ['O', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'O'],
    ['O', 'O', 'O', 'X'],
  ]
  expect(treasureMap(map1)).toEqual({
    treasureCount: 3,
    coordinates: [
      [2, 0],
      [1, 1],
      [3, 2],
    ],
  })

  const map2 = [
    ['O', 'O'],
    ['O', 'O'],
  ]
  expect(treasureMap(map2)).toEqual({
    treasureCount: 0,
    coordinates: [],
  })

  const map3 = [
    ['X', 'O', 'O'],
    ['O', 'O', 'O'],
    ['X', 'X', 'O'],
    ['O', 'O', 'X'],
  ]
  expect(treasureMap(map3)).toEqual({
    treasureCount: 4,
    coordinates: [
      [0, 0],
      [0, 2],
      [1, 2],
      [2, 3],
    ],
  })
})
