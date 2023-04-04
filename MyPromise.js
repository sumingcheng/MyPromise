class MyPromise {
  // 静态属性，3个状态
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  
  constructor (executor) {
    // 默认为准备状态
    this.status = MyPromise.PENDING
    this.value = null
    // ES6 class中，默认是严格模式，所以要绑定this
    // executor是一个函数，这个函数执行的时候，分别使用resolve和reject这两个方法来处理成功和失败的情况
    executor(this.resolve.bind(this), this.reject.bind(this))
  }
  
  resolve (value) {
    // Promise 特性 只有准备状态才能转换为成功状态
    if (this.status !== MyPromise.PENDING) {
      // 解决状态
      this.status = MyPromise.FULFILLED
      this.value = value
    }
  }
  
  reject (reason) {
    // 只有准备状态才能转换为失败状态
    if (this.status !== MyPromise.PENDING) {
      // 失败状态
      this.status = MyPromise.REJECTED
      this.value = reason
    }
  }
}
