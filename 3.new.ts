function Test(name,age){
  this.name=name
  this.age = age
}
Test.prototype.getName = function(){return this.name}

// const a=  new Test('s',12)
const a=  myNew(Test,'s',12)
myNew(Test,'s',12)
export function myNew(constructor , ...args){
  const ret = Object.create( constructor.prototype)
  constructor.call(ret,...args)
  return ret
}
console.log("🚀 ~ a", a)
console.log("🚀 ~ a.getName()", a.getName())


// Object.create =  function (o) {
//   var F = function () {};
//   F.prototype = o;
//   return new F();
// };

// function mynew(Fun ,...args){
//   //1.创建一个新的对象
// 	const obj ={};
//   //2.将新对象的[[prototype]]指向为构造函数的prototype
//   obj.__proto__ = Fun.prototype;
//   //3.将构造函数的this设置为新对象
//   let result = Fun.apply(obj,args);
//   //4.判断构造函数的返回值
//   return result instanceof Object? result:obj;
// }
// ————————————————
// 版权声明：本文为CSDN博主「44w0」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/qq_30136729/article/details/123937771
