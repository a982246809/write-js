import {ArrayFlatten} from './1.mjs'

describe('first', () => { 
  it('describe',()=>{
    expect(ArrayFlatten([1,[2,[3]]])).toEqual([1,2,[3]])
  })
 })
