const { sum } = require('../index')


describe('Play stuff', function () {
    test('checking', function () {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })
})