
//用map  复杂度低
//或  双向链表
class LRU {
  
  size:number
  queue:any[]
  constructor(size){
    this.queue = []
  }
  get(key){
    let ret = null;
    this.queue.forEach(((v,i)=>{
      if(v[key]){
        this.queue.splice(i,1)
        ret = v
        this.queue.push(ret)
      }
    }))
    return ret
  }
  set(k,v){
    if(this.queue.length==this.size){
      this.queue.shift()
    }
    this.queue.push({[k]:v})
    return this.queue
  }
}

const lru = new LRU(2);
lru.set('1',1)
lru.set('2',2)
lru.get('1')
