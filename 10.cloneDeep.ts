//考虑  map set  循环引用
function cloneDeep(obj:any , map = new WeakMap()){
  //如果已经有缓存  , 直接返回 , 反正死循环
  if(map.get(obj)){
    return obj;
  }
  let target:any= {}
  map.set(obj,target)

  if(obj instanceof Map){
    target = new Map()
    obj.forEach((value,key)=>{
      let val = cloneDeep(value,map)
      let k = cloneDeep(key,map)
      target.set(k,val)
    })
  }

  if(obj instanceof Set){
    target = new Set()
    obj.forEach((value)=>{
      let val = cloneDeep(value,map)
      target.set(val)
    })
  }

  if(obj instanceof Object || obj instanceof Array ){
    for(let k in obj){
      target[k] = obj[k]
    }
  }
}
