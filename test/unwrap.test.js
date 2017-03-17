/* global describe it expect */
const unwrap = require('..')
const fill = require('filled-array')

describe('unwrap phase', () => {
  it('phase unwrap', function () {
    const positive = fill((i) => i % (2 * Math.PI), 10)
    expect(positive).toEqual([0, 1, 2, 3, 4, 5, 6, 0.7168146928204138, 1.7168146928204138, 2.7168146928204138])
    expect(unwrap(positive, true)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    const negative = fill((i) => -i % (2 * Math.PI), 10)
    expect(negative).toEqual([-0, -1, -2, -3, -4, -5, -6, -0.7168146928204138, -1.7168146928204138, -2.7168146928204138])
    expect(unwrap(negative, true)).toEqual([-0, -1, -2, -3, -4, -5, -6, -7, -8, -9])
  })

  it('phase unwrap in place', function () {
    var signal = fill((i) => i % (2 * Math.PI), 1024)
    var unwrapped = unwrap(signal, true)
    unwrap(signal)
    expect(signal).toEqual(unwrapped)
  })
})
