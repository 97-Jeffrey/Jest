const reverse = require('../reverse');

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

describe('the function reverseVowels', ()=>{

  it('should only reverse position of vowels', ()=>{

    const result1 = reverse.reverseVowels("hello");
    const result2 = reverse.reverseVowels("leetcode");

    expect(result1).toBe("holle");
    expect(result2).toBe('leotcede');
  })
})