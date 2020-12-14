const lib = require("../thirdMax");

describe('thirdMax function', ()=>{
  it('should return maximum if there \'less than three numbers in the arr', ()=>{
    const result = lib.thirdMax([1,2]);
    expect(result).toBe(2);
  })

  it('should return maximum if in the arr', ()=>{
    const result = lib.thirdMax([1,2,3,4]);
    expect(result).toBe(2);
  })

  it('should return maximum if in the arr excluding the duplicate values', ()=>{
    const result = lib.thirdMax([1,2,2,3]);
    expect(result).toBe(1);
  })

  
})