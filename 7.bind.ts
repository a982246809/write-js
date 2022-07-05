function myBind(fn,that,...args){
  that.fn = fn
  function retFn(...ars2){
    fn.aplly(that,...args,...ars2)
  }
  return retFn
}

function test(a,b,c){
  console.log("🚀 ~ a,b,c",this, a,b,c)
}

const bindedFn = myBind(test,{a:2},1,2)
bindedFn(3)
// context 就是this的意思
