class LazyMan {
  tasks: Function[]

  constructor() {
    
    this.tasks = []
    //异步  等函数们先执行完
    setTimeout(()=>this.next(),0)
  }
  next() {
    // console.log("🚀 ~ this.tasks", this)

    const nextFn = this.tasks.shift()
    if (nextFn) {
      nextFn()
    }
  }
  eat(food: string) {
    // console.log("🚀 ~ eat")
    const fn =  ()=> {
      console.log("🚀 ~ eat", food)
      this.next()
    }
    this.tasks.push(fn)
    return this
  }
  sleep(t: number) {
    const fn =  ()=> {
      setTimeout(() => {
        console.log("🚀 ~睡 ", t)
        this.next()
      }, t)
    }
    this.tasks.push(fn)
    
    return this
  }
}
//调用函数 , 并不立即执行 , 而是推入队列  , next函数负责执行 , 并弹出
const lm = new LazyMan()
// lm.eat('啊').eat('我')
lm.eat('啊').sleep(2000).eat('我')
