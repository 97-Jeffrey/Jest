const lib = require('../lib');


describe('absolute function', ()=>{
  it('should return positive if number is positive', ()=>{
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  
  it('should return positive if number is negative', ()=>{
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  
  it('should return 0 if number is zero', ()=>{
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
})


describe('greet function', ()=>{
  it('should return greeting message', ()=>{
    const result = lib.greet('Jeffrey');
    expect(result).toMatch(/Jeffrey/);
    //or 
    expect(result).toContain('Jeffrey');
  })
})
