export function ArrayFlatten(arr){
    const res = []
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      
      if(Array.isArray(element)){
        res.push(...element)
      }else{
        res.push(element)
      }
    }
    return res
}

console.log("🚀 ~ ArrayFlatten([1,[2,3],4])", ArrayFlatten([1,[2,3],4]))
