class MyPromise {
  // 静态属性，3个状态
  static PENDING = 'PENDING'
  static FULFILLED = 'FULFILLED'
  static REJECTED = 'REJECTED'
  
  constructor (executor) {
    // 默认为准备状态
    this.status = MyPromise.PENDING
    this.value = null
    // ES6 class中，默认是严格模式，所以要绑定this
    // executor是一个函数，这个函数执行的时候，分别使用resolve和reject这两个方法来处理成功和失败的情况
    
    try {
      // 出现异常，直接执行reject
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      this.reject(e)
    }
  }
  
  resolve (value) {
    // Promise 特性 只有准备状态才能转换为成功状态
    if (this.status === MyPromise.PENDING) {
      // 解决状态
      this.status = MyPromise.FULFILLED
      this.value = value
    }
  }
  
  reject (reason) {
    // 只有准备状态才能转换为失败状态
    if (this.status === MyPromise.PENDING) {
      // 失败状态
      this.status = MyPromise.REJECTED
      this.value = reason
    }
  }
  
  then (onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = () => {
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = () => {
      }
    }
    // 如果是成功状态，才能执行成功的回调
    if (this.status === MyPromise.FULFILLED) {
      onFulfilled(this.value)
    }
    // 如果是失败状态，才能执行失败的回调
    if (this.status === MyPromise.REJECTED) {
      onRejected(this.value)
    }
  }
}
