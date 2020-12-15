module.exports.bubbleSort = function(arr){
  let isSorted = true;
  for(let i=0; i<arr.length; i++){
    for(let j =i+1;j<arr.length; j++){
      if(arr[i] > arr[j]){
         let temp= arr[i];
         arr[i] = arr[j];
         arr[j] =temp;
         isSorted = false;
      }
      if(isSorted){
        return arr;
      }
    }
  }
  return arr;

}

