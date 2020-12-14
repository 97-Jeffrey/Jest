module.exports.thirdMax= function(nums){

  let set = new Set(nums);
  nums = Array.from(set).sort((a,b)=>b-a);

  if(nums.length <3){
    return Math.max(...nums);
  }else{
      return nums[2];
  }

}