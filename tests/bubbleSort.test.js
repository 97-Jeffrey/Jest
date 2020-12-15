const sort = require('../sort/bubbleSort');



describe('the function bubbleSort', ()=>{

  it('should sort the array from smallest to largest', ()=>{

    const result = sort.bubbleSort([5,4,3,2,1]);
    expect([1,2,3,4,5]).toEqual(expect.arrayContaining(result))
  })
})