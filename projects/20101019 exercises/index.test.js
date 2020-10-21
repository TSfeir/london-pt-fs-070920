const { expect } = require('@jest/globals');
const greeting = require('./index');
// test('should say Hello', () => {
//   expect(greeting()).toBe('Hello')
// })

const factorial = require(`./index`);
test(`should return the factorial value of a given number`, () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(10)).toBe(3628800);  
})