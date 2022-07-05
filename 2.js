let res=[];
function ArrayFlatten(arr){

    if(Array.isArray(arr)){
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        ArrayFlatten(element)
      }
    }else{
      res.push(arr)
    }
  
  
}
ArrayFlatten([1,[2,[3]],4])
console.log("🚀 ~ res", res)
