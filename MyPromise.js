class MyPromise {
  // 静态属性，3个状态
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  
  constructor(executor) {
    // 默认为准备状态
    this.status = MyPromise.PENDING
  }
}
