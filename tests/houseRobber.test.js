const houseRobber  = require('../houseRobber');

describe('the function houseRobber', ()=>{

  it('should return 0 if nums array is empty', ()=>{
    const result = houseRobber([]);
    expect(result).toBe(0);
  })

  it('should return the only element if nums array has only one element', ()=>{
    const result = houseRobber([5]);
    expect(result).toBe(5);
  })

  it('should return the larger element if nums array has only two elements', ()=>{
    const result = houseRobber([5,10]);
    expect(result).toBe(10);
  })

  it('should return the largest sum of elements with no adjacent element selected when there\'s at least three element3', ()=>{
    const result = houseRobber([2,7,9,3,1]);
    expect(result).toBe(12);
  })
  
})