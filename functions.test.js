const {stringlength,stringReverse,calculator,capitalize} = require('./functions.js');


test('check if string is between 1 and 10', () => {
    const value = 'string';
    expect(stringlength(value)).toBe(value.length);
    expect(stringlength(value)).toBeGreaterThan(1);
    expect(stringlength(value)).toBeLessThanOrEqual(10);
  });
test('reversestring', () => {
    const value2 = 'string2';
    expect(stringReverse(value2)).not.toBe(value2.length);
  });
describe('calculator', () => {
    test('add',() => {
        expect(calculator.add(2,2)).toBe(4)
    })
    test('subtract',() => {
        expect(calculator.subtract(12,4)).toBe(8)
    })
    test('divide',() => {
        expect(calculator.divide(10,2)).toBe(5)
    })
    test('multiply',() => {
        expect(calculator.multiply(3,3)).toBe(9)
    })
})
test('capitalize',() =>{
    const value3 = 'string';
    expect(capitalize(value3[0])).toBe(value3[0].toUpperCase())
})