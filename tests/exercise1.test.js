const exercise = require('../exercise1');

describe('fizzBuzz function', ()=>{

  it('should throw exception when type of input is not a number', ()=>{
    expect(()=>{exercise.fizzBuzz('haha')}).toThrow();
  })
  it('should return FizzBuzz whnen input is divisible by both 3 and 5', ()=>{
    const result = exercise.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  })
  it('should return Fizz whnen input is divisible by 3', ()=>{
    const result = exercise.fizzBuzz(9);
    expect(result).toBe('Fizz');
  })
  it('should return Buzz whnen input is divisible by 5', ()=>{
    const result = exercise.fizzBuzz(10);
    expect(result).toBe('Buzz');
  })
})