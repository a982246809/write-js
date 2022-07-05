//将一个函数  变成柯里化函数
function add(a,b,c){
  return a+b+c
}
//通过fn.leng拿到参数个数 , 慢慢积累参数 , 当参数够了就执行函数 , 不够就返回函数
function curry(fn:Function){
  const argLength = fn.length
  let args = []

 function cacl(...curryArgs){
    args.push(...curryArgs)
    if(args.length<argLength){
      return cacl
    }else{
      return fn(...args)
    }
  }
  return cacl
}
const add2 = curry(add)

console.log("🚀 ~ add2(1)(2)(3)", add2(1)(2)(3))
