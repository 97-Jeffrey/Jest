module.exports.reverseOnlyLetters = function(S) {
    
  let letters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let arr = S.split('');
  let left = 0, right = arr.length-1;
  
  while(left<right){
      
      if(left<right && !letters.includes(arr[left])){
          left++;
      }
      else if(left<right && !letters.includes(arr[right])){
          right--;
      }else{
          let temp = arr[left];
          arr[left]=arr[right];
          arr[right]=temp;
          left++;
          right--;
      }
  }
  
  return arr.join('');
  
};


module.exports.reverseVowels = function(s) {
  
    let S = s.split("");
    let vowels ='aeiouAEIOU';
    let left =0;
    let right =S.length-1;

    while(left<right){
        
        if(left<right &&!vowels.includes(S[left])){
            left++;
        }
        if(left<right && !vowels.includes(S[right])){
            right--;
        }
        else{
            let temp = S[left];
            S[left] = S[right];
            S[right]=temp;
            left++;
            right--;    
        }
    }
    return S.join('');
};
