//@ts-ignorets
Function.prototype.myCall = function(ctx,...args){
  // this==test
  ctx.fn = this
  ctx.fn(...args)
}


function test(a,b,c){
  console.log("🚀 ~ a,b,c",this, a,b,c)
}
//@ts-ignorets
test.myCall({a:0},1,2,3)
