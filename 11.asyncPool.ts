async function asyncPool(poolLimit, array, iteratorFn) {
  const all = []
  const executing = [] // 存储正在执行的异步任务

  //循环创建异步任务
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array))
    all.push(p)

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      // 保存正在执行的异步任务 
      executing.push(e)
      // 等待较快的任务执行完成
      if(executing.length>poolLimit){
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(all)
}

const timeout = (i) => new Promise((resolve) => setTimeout(() => resolve(i), i))
await asyncPool(2, [1000, 5000, 3000, 2000], timeout)
// Call iterator (i = 1000)
// Call iterator (i = 5000)
// Pool limit of 2 reached, wait for the quicker one to complete...
// 1000 finishes
// Call iterator (i = 3000)
// Pool limit of 2 reached, wait for the quicker one to complete...
// 3000 finishes
// Call iterator (i = 2000)
// Itaration is complete, wait until running ones complete...
// 5000 finishes
// 2000 finishes
// Resolves, results are passed in given array order `[1000, 5000, 3000, 2000]`
// -----------------------------------
// 浅析JavaScript中如何实现并发控制：并发控制的理解和执行流程、使用 asyncPool 实现并发控制及其实现原理、如何手写 Promise.all 和 Promise.race
// https://blog.51cto.com/u_15127565/4153901
//
