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