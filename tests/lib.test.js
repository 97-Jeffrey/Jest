const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');


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


describe('getCurrencies function', ()=>{

  it('should return supported currencies', ()=>{
    const result = lib.getCurrencies();
    //ideal way for arrays:
   
    expect(result).toEqual(expect.arrayContaining(['EUR','USD', 'AUD']));
  })
})


describe('getProduct function',()=>{
  it('should return product with given id', ()=>{
    const result = lib.getProduct(1);
    // expect(result).toEqual({id:1,price:10})
    expect(result).toMatchObject({id:1,price:10})
    expect(result).toHaveProperty("id",1);
  })
})



describe('registerUser function', ()=>{

  it("should throw if username is falsy",()=>{
    const args=[null, undefined, NaN, '', 0, false];
    args.forEach(a=>{
      expect(()=>{lib.registerUser(a)}).toThrow();
    })
  })

  it('should return a user object if username is valid', ()=>{
    const result = lib.registerUser('Jeffrey');
    expect(result).toMatchObject({username:"Jeffrey"});
    expect(result.id).toBeGreaterThan(0);
  })
})


describe('applyDiscount function', ()=>{
  it('should apply ten percent discount if customer has more than 10 points',()=>{
    db.getCustomerSync = function(customerId){

      console.log('Fake reading customer...'); 
      return {id:customerId, points:20};
    }
    const order ={customerId:1, totalPrice:10};
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  })
})

describe('notifyCustomer function', ()=>{

  it("should send an email to the customer", ()=>{
    db.getCustomerSync = jest.fn().mockReturnValue({email:'a'});
    mail.send = jest.fn();

    lib.notifyCustomer({customerId:1});

    expect(mail.send).toHaveBeenCalled();
    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);

  })
})