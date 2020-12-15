const reverse = require('../reverseOnlyLetter');

describe('the function reverseOnlyLetter', ()=>{

  it('it only reverse letters in a string', ()=>{
    const result1 =reverse.reverseOnlyLetters("ab-cd");
    const result2 =reverse.reverseOnlyLetters("a-bC-dEf-ghIj");
    const result3 =reverse.reverseOnlyLetters("Test1ng-Leet=code-Q!");

    expect(result1).toBe("dc-ba");
    expect(result2).toBe("j-Ih-gfE-dCba");
    expect(result3).toBe("Qedo1ct-eeLg=ntse-T!");
  })
})