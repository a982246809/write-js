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
console.log("ð ~ a", a)
console.log("ð ~ a.getName()", a.getName())


// Object.create =  function (o) {
//   var F = function () {};
//   F.prototype = o;
//   return new F();
// };

// function mynew(Fun ,...args){
//   //1.åå»ºä¸ä¸ªæ°çå¯¹è±¡
// 	const obj ={};
//   //2.å°æ°å¯¹è±¡ç[[prototype]]æåä¸ºæé å½æ°çprototype
//   obj.__proto__ = Fun.prototype;
//   //3.å°æé å½æ°çthisè®¾ç½®ä¸ºæ°å¯¹è±¡
//   let result = Fun.apply(obj,args);
//   //4.å¤æ­æé å½æ°çè¿åå¼
//   return result instanceof Object? result:obj;
// }
// ââââââââââââââââ
// çæå£°æï¼æ¬æä¸ºCSDNåä¸»ã44w0ãçååæç« ï¼éµå¾ªCC 4.0 BY-SAçæåè®®ï¼è½¬è½½è¯·éä¸åæåºå¤é¾æ¥åæ¬å£°æã
// åæé¾æ¥ï¼https://blog.csdn.net/qq_30136729/article/details/123937771
