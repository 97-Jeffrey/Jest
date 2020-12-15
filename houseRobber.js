const rob = function(nums) {
    
  if(!nums.length )return 0;
  
  if(nums.length===1) return nums[0];

  
  let runningSum=[];
  runningSum[0]= nums[0];
  runningSum[1]= Math.max(nums[1], nums[0]);
  
  for(let i=2; i<nums.length; i++){
      runningSum[i] = Math.max(runningSum[i-1], nums[i]+runningSum[i-2])
  }
  
  return runningSum[runningSum.length-1];
 
}

module.exports = rob;