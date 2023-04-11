<!--
 * @Description:
 * @Version: 1.0
 * @Autor: Li Cheng
 * @Date: 2023-04-10 22:02:56
 * @LastEditors: Li Cheng
 * @LastEditTime: 2023-04-11 18:55:59
-->

# Promise

先看一下 Promise 的基本用法

```js

const promise = new Promise((resolve, reject) => {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

```

## 基础分析

通过用法可以知道 Promise 肯定是一个类，接收一个`callback`函数。

通过`resolve`来返回成功，`reject`来返回失败。

## 三个状态

什么时候返回成功，什么时候返回失败？
那肯定是有三个状态的 pending(进行中)、fulfilled(已成功)、rejected(已失败)`。
一开始执行的时候状态肯定是`pending`的，那么当执行`resolve`状态变成`fulfilled`,`reject`后变成`rejected`。

状态只会从`pending` -> `fulfilled` 或者 `pending` -> `rejected`。一旦改变，那么将不可再更改。
**还有一种情况就是当`Promise`中有`throw`时，相当于执行了`reject`。**

## 实现简单 Promise

```js
class MyPromise {
  // 定义三个状态
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    // 一开始状态是pending
    this.PromiseState = MyPromise.PENDING;
    // 定义返回值
    this.PromiseResult = null;
    // 初始化时，callback 直接执行
    exector(this.resolve, this.reject);
  }
  
  resolve(result) {
    if(this.PromiseState === MyPromise.PENDING) {
      this.PromiseState = MyPromise.FULFILLED;
      this.PromiseResult = result;
    }
  }

  rejcet(reason) {
    if(this.PromiseState === MyPromise.PENDING) {
      this.PromiseState = MyPromise.REJECTED;
      this.PromiseResult = reason;
    }
  }
}
```
