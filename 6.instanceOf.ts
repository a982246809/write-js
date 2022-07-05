function myinstansof(instance:any , clas){
  if(instance==null) return false
  if(instance.__proto__==clas.prototype){
    return true
  }else{
   return myinstansof(instance.__proto__,clas)
  }
  
}

class Foo{
  
}
class Bar{
  
}
const foo = new Foo()
const bar = new Bar()


// myinstansof(foo,Foo)
console.log("🚀 ~ myinstansof(foo,Foo)", myinstansof(foo,Foo))
console.log("🚀 ~ myinstansof(foo,Foo)", myinstansof(bar,Foo))
// console.log('foo' instanceof String) //false 只能是对象  不能是原始值


