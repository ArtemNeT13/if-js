const sum = require('./main')

test('Sum should return sum of two values', () =>{
    expect(sum(5, 8)).toBe(13)
})

 test('Sum should return value correctly comparing to other values', () =>{
     expect(sum(3,5)).toBeGreaterThan(7)
     expect(sum(3,5)).toBeGreaterThanOrEqual(8)
     expect(sum(3,5)).toBeLessThan(9)
     expect(sum(3,5)).toBeLessThanOrEqual(8)
 })
test('Sum should sum 2 float values correctly', () =>{
    expect(sum(0.3,0.5)).toBeCloseTo(0.8)
})