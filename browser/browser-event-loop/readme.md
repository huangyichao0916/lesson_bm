## 浏览器内部有很多线程
 1. 定时器触发线程
 2. http触发
 3. GUI线程

## 什么是eventloop
  - 协调用户交互(事件)，渲染，网络

## 宏任务、任务、微任务
 ### 宏任务、任务
  setTimeout，整体的一段
  
  - 由宿主环境引起的任务(node,browser)

 ### 微任务
  Promise.then   MutationObserver   Process.nextTick

  - 由js本身引起的任务

## 流程
只要宏任务队列不为空：
 1. 从宏任务队列里面取出 一个 执行
 2. 从微任务队列里面取出所有 所有的 执行，如果在这执行过程中又产生了微任务，则再次重复
 3. 有可能进入浏览器的**更新渲染**
   - 执行 reqAnimationFrame回调
   - 执行IntersectionObserver回调
   - 重新绘制渲染

## 浏览器渲染
一个宏任务 -> 清空微任务 -> 渲染 一个宏任务 -> 清空微任务 -> 渲染 一个宏任务 -> 清空微任务 -> 渲染