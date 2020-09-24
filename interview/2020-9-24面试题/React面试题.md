# React面试题

### 1. React生命周期

一、初始化阶段：

getDefaultProps:获取实例的默认属性

getInitialState:获取每个实例的初始化状态

componentWillMount：组件即将被装载、渲染到页面上

render:组件在这里生成虚拟的DOM节点

componentDidMount:组件真正在被装载之后

二、运行中状态：

componentWillReceiveProps:组件将要接收到属性的时候调用

shouldComponentUpdate:组件接受到新属性或者新状态的时候（可以返回false，接收数据后不更新，阻止render调用，后面的函数不会被继续执行了）

componentWillUpdate:组件即将更新不能修改属性和状态

render:组件重新描绘

componentDidUpdate:组件已经更新

三、销毁阶段：

componentWillUnmount:组件即将销毁

### 2. React性能优化在哪个生命周期

shouldComponentUpdate 这个方法用来判断是否需要调用render方法重新描绘dom。因为dom的描绘非常消耗性能，如果我们能在shouldComponentUpdate方法中能够写出更优化的dom diff算法，可以极大的提高性能。

React 提供了生命周期函数 `shouldComponentUpdate`，在重新渲染机制回路（虚拟 DOM 对比和 DOM 更新）之前会被触发，赋予开发者跳过这个过程的能力。这个函数默认返回 `true`，让 React 执行更新。

```
shouldComponentUpdate: function(nextProps, nextState) {
  return true;
}
```

### 3. 为什么虚拟dom会提高性能?

虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。

具体实现步骤如下：

用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中

当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异

把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。

###4. 调用 setState 之后发生了什么

在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

###5. React 中 Element 与 Component 的区别是？

简单而言，React Element 是描述屏幕上所见内容的数据结构，是对于 UI 的对象表述。典型的 React Element 就是利用 JSX 构建的声明式代码片然后被转化为createElement的调用组合。而 React Component 则是可以接收参数输入并且返回某个 React Element 的函数或者类。

### 6. refs的作用？



### 7. React中keys的作用是什么？

Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。

在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性。

### 8. 在生命周期中的哪一步你应该发起 AJAX 请求？

我们应当将AJAX 请求放到 componentDidMount 函数中执行，主要原因有下：

- React 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componentWillMount 的触发次数。对于 componentWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componentWillMount。如果我们将 AJAX 请求放到 componentWillMount 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。
- 如果我们将 AJAX 请求放置在生命周期的其他函数中，我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了setState函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 componentDidMount 函数中进行 AJAX 请求则能有效避免这个问题。

### 9.shouldComponentUpdate 的作用是啥以及为何它这么重要？ 

shouldComponentUpdate 允许我们手动地判断是否要进行组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新。

### 10.如何告诉 React 它应该编译生产环境版本？

通常情况下我们会使用 Webpack 的 DefinePlugin 方法来将 NODE_ENV 变量值设置为 production。编译版本中 React 会忽略 propType 验证以及其他的告警信息，同时还会降低代码库的大小，React 使用了 Uglify 插件来移除生产环境下不必要的注释等信息。



## 1、创建虚拟DOM对象的两种方式

- React.createElement(type, props, ...children)
- <h1></h1> jsx语法

## 2、React 的 jsx 语法

- 作用：用来创建虚拟DOM对象
- 语法：
  - 以<开头就会去解析，如果式html同名标签就解析html同名元素，如果不是就以其他方式解析
  - 以{开头就会去解析，将其中的代码当作js代码解析
    - if / for循环 不能用

## 3、定义组件两种方式

- 工厂函数 --> 简单组件

  ```
  function MyComponent() {
  	return <h1></h1>
  }
  ```

- ES6类 --> 复杂组件

  ```
  class MyComponent extends React.Component{
  	render() {
  		return <h1></h1>
  	}
  }
  ```

- 注意事项：

  - 组件首字母大写
  - 标签必须是闭合的
  - 有且只有一个根标签

## 4、React 组件的实例对象上 三大属性（what why how）

- state
  - 作用：	
    - 用来定义组件内部状态数据
    - 用来更新页面
  - 使用：
    - 初始化  在constructor中 this.state = {xxx: xxx}
    - 读取 this.state.xxx
    - 更新 this.setState({xxx: xxx})
- props
  - 作用：
    - 用来组件外向组件内传递数据
  - 使用：
    - 约束属性的类型和必要性 static propTypes = {xxx: PropTypes.func.isRequired}
    - 定义属性的默认值 static defaultProps = {xxx: xxx}
    - 读取 this.props.xxx
    - 设置 <List name={xxx}>
- refs
  - 作用：
    - 用来获取DOM元素
  - 使用：
    - 设置： 
      - 在constructor中 this.xxx = React.createRef()
      - 在虚拟DOM对象上 <input ref={this.xxx} />
    - 使用：this.xxx.current

## 5、组件化编码流程和套路



## 1、组件间通信

- props
  - 适用于父子组件通信
  - 一般数据：给子组件直接使用
  - 函数数据：子组件操作父组件
- pubsub-js
  - 适用于兄弟、祖孙组件通信
  - 消息的订阅-发布机制（自定义事件）
  - 接受方：订阅（只能一次，比发布要快）
    - PubSub.subscribe('消息名', function (msg, data) {})
  - 发送方: 发布
    - PubSub.publish('消息名', 数据)
- redux
  - 后面讲

## 2、路由

- 路由是什么？
  - 就是一个key-value的映射关系
- 分类：
  - 前端路由
    - 不需要发送请求
    - 不会刷新整个页面，局部更新
    - 会修改url地址和浏览器历史记录
    - value是component
  - 后端路由
    - 会发送请求
    - 会刷新整个页面
    - 会修改url地址和浏览器历史记录
    - value是callback
- 使用前端路由的作用：
  - 用来开发SPA（单页面应用）
  - 整个应用一个完整页面
  - 不需要发送请求
  - 不会刷新整个页面，局部更新
  - 会修改url地址和浏览器历史记录
- 使用：
  - BrowserRouter
  - HashRouter
  - Link
  - NavLink 
  - Route
  - Redirect
  - Switch
  - withRouter 
- 路由组件：通过Route组件加载的组件
  - history 修改浏览器历史记录
  - location 获取请求path
  - match 获取params参数

## 4、Fragment用法

- 不会生成多余Dom节点

## 5、谈谈组件的三大属性

- state
  - 定义组件内部状态数据
  - 使用场景：当页面需要更新，通过更新状态来完成
- props
  - 用来组件外向组件内传递数据
  - 使用场景：组件间通信
- refs
  - 用来获取DOM元素
  - 一般不用

## 3、setState真的是异步吗？

https://juejin.im/post/5c9e2f2ee51d454d361ec83c

```
​```
class App extends Component {
  state = {
    val: 0
  }
  // 求打印顺序和值？
  // 震惊!隔壁老王也有失手的时候~
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val); // ? A 0
	
	this.setState({val: this.state.val + 1}, () => {
		// 更新后 读取最新state --> 2
		console.log(this.state.val); // ? B 2
	});
    // 以上两次setState被合并成一次 --> val : 1
	
	// 类似于同步更新 --> val: 2
    this.setState((prevState) => ({val: prevState.val + 1})); 
    console.log(this.state.val); // ? C 0
      
    setTimeout(() => {
	  // 同步
      this.setState({val: this.state.val + 1});
      console.log(this.state.val); // ? D 3
      
      this.setState({val: this.state.val + 1});
      console.log(this.state.val); // ? E 4
    }, 1000)
  }
  
  render() {
    return <h2>App组件</h2>;
  }
}
​```
```

## 1、说说Array有哪些方法，作用和使用场景

- map 
  - 返回一个新数组，长度一样，里面的值可能不一样
  - React遍历生成虚拟DOM对象时
- filter
  - 返回一个新数组，长度可能不一样，里面的值一样。过滤
  - 对数据进行筛选后在进行展示
- reduce
  - 返回一个值，累加、统计
  - 累加、拼接多个dom元素等
- find
  - 返回数组中某一项值，查找数组中指定元素
- ...

## 2、什么是修饰器

https://github.com/ruanyf/es6tutorial/blob/gh-pages/docs/decorator.md

- 是什么?
  - 修饰器是一个对类进行处理的函数
- 使用
  - 对类的修饰。 可以改变类
    - 如： @withRouter
    - 参数不够用可以 @Form.create()
  - 对类的方法修饰：改变类的方法/属性的 描述符（readable、enumerable。。。）
- 场景：可以简化在React使用高阶组件
- 注意，
  - 修饰器对类的行为的改变，是**代码编译时**发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时执行的函数。
  - 修饰器不能用于函数：修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。



## 1. react生命周期函数

最新的生命周期：

- 初始化
  - constructor （初始化状态 - ref）
  - static getDerivedStateFromProps
  - render（返回渲染页面需要的虚拟dom对象）
  - componentDidMount（发送ajax请求、设置定时器）
- 更新
  - static getDerivedStateFromProps
  - shouldComponentUpdate（性能优化，减少重新渲染次数）
  - render
  - getSnapshotBeforeUpdate
  - componentDidUpdate（更新时发请求，注意需要有退出条件）
- 卸载
  - componentWillUnmount(收尾工作，如清除定时器、取消ajax请求)
- 即将废弃
  - componentWillMount
  - componentWillUpdate
  - componentWillReceiveProps
- 处理异常
  - static getDerivedStateFromError(error)
    - 通过更新状态 --> 从而渲染显示错误信息的组件
  - componentDidCatch()
    - 记录错误信息

## 2. react性能优化?

- shouldComponentUpdate 
  - 通过对比新旧state和props来决定是否重新渲染
- PureComponent
  - 实现了新旧state和props的浅比较
- 为了防止修改原对象，从而让浅比较比较不出来（确保前后数据一定不一样），可以使用immuable.js

## 3. 为什么虚拟dom会提高性能?

- 虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。
- 具体实现步骤如下：
  - 用 JavaScript 对象结构表示 DOM 树的结构
  - 然后用这个树构建一个真正的 DOM 树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。
  - 然后用新的树和旧的树进行比较，记录两棵树差异把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。

## 4. 虚拟DOM diff算法

- 虚拟DOM diff算法主要就是对以下三种场景进行优化：
- tree diff
  - 对树进行分层比较，两棵树只会对同一层次的节点进行比较。(因为 DOM 节点跨层级的移动操作少到可以忽略不计)
  - 如果父节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。
  - 注意：
    - React 官方建议不要进行 DOM 节点跨层级的操作，非常影响 React 性能。
    - 在开发组件时，保持稳定的 DOM 结构会有助于性能的提升。例如，可以通过 CSS 隐藏或显示节点，而不是真的移除或添加 DOM 节点。
- component diff
  - 如果是同一类型的组件，按照原策略继续比较 virtual DOM tree（tree diff）。
    - 对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。
  - 如果不是，直接替换整个组件下的所有子节点。
- element diff
  - 对处于同一层级的节点进行对比。
  - 这时 React 建议：添加唯一 key 进行区分。虽然只是小小的改动，性能上却发生了翻天覆地的变化！
    - 如： A B C D  -->  B A D C
    - 添加 key 之前： 发现 B != A，则创建并插入 B 至新集合，删除老集合 A；以此类推，创建并插入 A、D 和 C，删除 B、C 和 D。
    - 添加 key 之后： B、D 不做任何操作，A、C 进行移动操作，即可。
  - 建议：在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
- 总结
  - React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；
  - React 通过分层求异的策略，对 tree diff 进行算法优化；
  - React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；
  - React 通过设置唯一 key的策略，对 element diff 进行算法优化；
  - 建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；
  - 建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。  

## 5. 调用 setState 真的是异步吗？

- `setState` 只在 React 合成事件和钩子函数中是“异步”的，在原生DOM事件和定时器中都是同步的。
- 如果需要获取“异步”场景的 `setState` 的值  --> `this.setState(partial, callback)` 在 callback 中拿到最新的值
- 如果要在“异步”场景保证同步更新多次 `setState` --> `this.setState((prevState, props) => {return newState}) `
  - 能保证同步更新, 但是外面获取的值还是之前的值 
- 注意，setState有三种传参方式
  - this.setState()

## 6. setState如何使用？

- this.setState(obj) 更新，多次更新会合并，最后一次生效
- this.setState(obj, callback)  callback会在界面更新后调用
- this.setState(callback) callback 更新，多次更新会依次执行

## 7. React 中 keys 的作用是什么？

- 虚拟DOM的key的作用?
  - 简单说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用
  - 详细说: 当列表数组中的数据发生变化生成新的虚拟DOM后, React进行新旧虚拟DOM的diff比较
    - key没有变
      - item数据没变, 直接使用原来的真实DOM
      - item数据变了, 对原来的真实DOM进行数据更新
    - key变了
      - 销毁原来的真实DOM, 根据item数据创建新的真实DOM显示(即使item数据没有变)
- key为index的问题
  - 添加/删除/排序 => 产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低
  - 如果item界面还有输入框 => 产生错误的真实DOM更新 ==> 界面有问题
  - 注意: 如果不存在添加/删除/排序操作, 用index没有问题
- 解决:
  - 使用item数据的标识数据作为key, 比如id属性值

## 8. 在生命周期中的哪一步你应该发起 AJAX 请求？

- 我们应当将AJAX 请求放到 componentDidMount 函数中执行，主要原因有下：
  - 放在 constructor 和 componentWillMount 中都会影响组件初始化渲染速度
  - React 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componentWillMount 的触发次数。对于 componentWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componentWillMount。如果我们将 AJAX 请求放到 componentWillMount 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。
    - 所以 componentWillMount 即将废弃
  - 如果是服务器渲染，放在 constructor 和 componentWillMount 中请求会在服务器端和浏览器端都执行一次，不好

## 9. 何为受控组件(controlled component)

- 在 HTML 中，类似 `<input>, <textarea> 和 <select>` 这样的表单元素会维护自身的状态，并基于用户的输入来更新。当用户提交表单时，前面提到的元素的值将随表单一起被发送。但在 React 中会有些不同，包含表单元素的组件将会在 state 中追踪输入的值，并且每次调用回调函数时，如 onChange 会更新 state，重新渲染组件。一个输入表单元素，它的值通过 React 的这种方式来控制，这样的元素就被称为"受控元素"。
- 简单来讲：受控组件就是做自动收集表单数据的一种组件，通过onChange事件来更新

## 10. 何为高阶组件(higher order component)

- 概念：高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
- 目的: 能让其他组件复用相同的逻辑
- 当你发现两个组件有重复逻辑时，就使用HOC来解决。
- 用法详见：https://juejin.im/post/5c972f985188252d7f2a3eb0

## 11. 组件间通信有哪些方式

- props
  - 子 --> 父，父组件传函数数据给子组件，子组件调用修改父组件数据
  - 父 --> 子，父组件传非函数数据给子组件
  - 兄弟（一般不用）,数据定义在公共的父组件中。
- pubsub-js
  - 适用于兄弟组件、祖孙组件。
  - pubsub.subscribe('MSG', (msg, data) => {})
  - pubsub.publish('MSG', data)
  - 注意：
    - 先订阅在发布
    - 订阅只能一次，发布可以多次
- redux
  - 保存多个组件共享的数据
- 定义对象保存数据（一般不用）
  - 类似与redux，在对象中保存，其他组件引入使用
- webstorage
  - 保存在浏览器本地，引入使用
  - 也可以跨页面通信

## 12. 谈谈redux

- 作用: 集中管理多个组件共享的状态
- 特点: 单一数据源、纯函数、只读state
- 核心：
  - store
    - 用来集中存储数据的
  - action-creators
    - 用来生成action对象 {type: xxx, data: xxx}
    - 分为：同步和异步，同步返回值是对象，异步返回值是函数
  - action-types
    - 用来定义action对象的type
  - reducers
    - 根据之前的状态和action对象来生成新状态，并更新store对象的数据
    - 一种状态数据对应一个reducer函数
- 工作流程
  - 组件调用action-creators生成action对象
  - 组件调用store对象的dispatch方法，分发action对象
  - 此时会自动触发reducer函数调用（遍历所有reducer函数直到匹配上）
  - reducer函数一旦调用就会返回一个新的状态
  - 新状态会交给store对象管理，从而更新状态
  - 一旦状态更新，就会触发store.subscribe订阅的函数，从而重新渲染组件
  - 组件重新渲染就能获取最新的store对象的值了
- 扩展概念：
  - UI组件：负责界面展示，没有redux内容
  - 容器组件：负责数据操作，仅有redux内容，将其传给UI组件

## 13. 前端路由实现原理

- Hash模式
  - window对象提供了onhashchange事件来监听hash值的改变,一旦url中的hash值发生改变,便会触发该事件。
- History 模式
  - listen监听历史栈信息变化,变化时重新渲染
  - 使用pushState方法实现添加功能
  - 使用replaceState实现替换功能

## 14. react懒加载方案

- react-loadable
  - 是民间 --> 需要额外下载引入
  - 支持服务器渲染
- Suspense 和 lazy
  - 是官方 --> 只需引入
  - 不支持服务器渲染

总结：使用 create-react-app 会将其单独提取成一个bundle输出，从而资源可以懒加载和重复利用。

## 15. 什么是状态提升？

- 它允许你在兄弟组件间传递数据”或“它允许你拥有更多纯展示组件，更易复用
- 具体：使用redux来做
- 扩展：context - 将来可能被废弃，但目前真香

## 16. React和vue的区别

留下悬念~

## 17. 开放性问题

- 开发中如何调试React的错误
  - 借助 React Developer Tools	。
  - 借助 eslint 的报错。
  - 打断点。
  - 打印法。一行行打印
- 开发中遇到了什么困难
  - 一般：开发中遇到某个错误，调试过了， 开发中遇到某个功能，研究/找资料过了
  - 好：开发中如何优化，如何提升团队效率，如何规避/检查错误
- 如果你有无限的时间预算并让你解决/提升/改变你最后一个项目里的一项东西，你会选什么，以及为什么选它？
  - 使用 mobx 取代 redux
  - 使用 react hooks 取代 state
  - 使用 context 组件通信
  - ...

## 18. react调度/调和算法fiber（高级）

- 概念：react的执行流程
- 此文偏难，一般不问，需要掌握者自行说出~ 可跳过
- 具体内容详见两篇文章，大量涉及源码
- https://mp.weixin.qq.com/s/uDIknJ-WeUJnPR8S-HnTww
- https://juejin.im/post/5a2276d5518825619a027f57#heading-0

# React复习

## 1、 React介绍

- 用于快速构建用户界面的js库
- 特点
  - 声明式
  - 组件化
  - 高效
  - ...

## 2、 创建虚拟DOM对象的两种方式

- js
  - React.createElment('h1', {id: 'myId'}, children, children...)
- jsx
  - `<h1>xxx</h1>`

## 3、 jsx

- 作用：用来创建虚拟DOM对象
- 语法:
  - 以<开头，如果是html同名元素，就当作html标签解析，如果不是，就是组件
  - 以{开头，里面代码就会当作js代码解析
    - if for不能写
- 注意：
  - 必须有且只有一个根标签
  - 标签必须有结束符
  - 如果是组件，首字母必须大写

## 4、 创建组件的两种方式

- 工厂函数:定义简单组件、没有状态的组件
- ES6类：定义功能更加强大，复杂的组件

## 5、 组件三大属性

- state
  - 定义组件内部状态数据
  - 使用场景：当页面需要更新，通过更新状态来完成
- props
  - 用来组件外向组件内传递数据
  - 使用场景：组件间通信
- refs
  - 用来获取DOM元素
  - 一般不用

## 6、 生命周期函数

- 初始化
  - constructor （初始化状态，定义createRef, 只会执行一次）
  - static getDerivedStateFromProps
  - render (得到渲染组件要用的虚拟DOM对象)
  - componentDidMount （发送ajax请求、设置定时器...，只会执行一次）
- 更新
  - static getDerivedStateFromProps
  - shouldComponentUpdate （性能优化，减少组件重新渲染的次数）
  - render
  - getSnapshotFormProps
  - componentDidUpdate （更新时发送ajax，注意一定要有判断条件）
- 卸载
  - componentWillUnmount (收尾工作，清除定时器)

## 7、 受控组件

- 受控组件就是通过 onChange 事件来自动收集表单数据的一种组件
- 非受控组件，通过ref手动收集表单数据的组件

## 8、 高阶组件

- 概念：本质上是一个函数，接受一个组件作为参数，返回值是一个组件
- 作用：用来复用代码
- 场景：当有多个组件都有一个重复的逻辑函数，这时候考虑使用高阶组件提取公共逻辑函数

## 9、 组件间通信

- props
  - 用于父子组件通信
  - 父 --> 子 ： 传入一般属性，子组件读取使用
  - 子 --> 父 ： 父组件定义操作数据方法，传递子组件，子组件调用传参来修改父组件数据
- pubsub
  - 用于兄弟、祖孙组件通信
  - subscribe 订阅，只能订阅一次。先订阅在发布
  - publish 发布，可以发布多次
- redux
  - 用于保存多个组件中共享状态数据
- 定义公共对象保存数据，其他组件引入使用
- webStorage

## 10、 发送请求方式

- axios
  - 兼容更好，使用更加简单方便
- fetch
  - 原生的技术，兼容性不好，所以一般时使用一个库 - fetch.js

## 11、 路由

- 前端路由：一种映射关系，key-value。key指的是路由路径，value指的是组件。
- 特点：
  - 不会发送请求
  - 会更新url地址
  - 更新局部页面
- 使用： react-router-dom
  - BrowserRouter 所有路由都要包裹这个组件内
  - Route 路由组件： 匹配url地址，一旦匹配上就加载对应组件
  - Link 路由链接：切换url地址，不会发送请求
  - NavLink 路由链接：切换url地址，不会发送请求，会多一个active class
  - Redirect 重定向：一旦加载，就立即重定向到指定地址（切换url地址）
  - Switch 切换：让多个组件从上到下只匹配一个（解决Redirect的死循环问题）
  - withRouter 高阶组件：给被包装组件传递路由组件的三大属性
- 路由组件的三大属性
  - history
    - 切换url地址
  - location
    - 获取路由路径 pathname
    - 获取参数 state
  - match
    - 获取params参数  /shop/:id
- 跳转路由链接（切换url地址）
  - this.props.history.xxx() 用于事件回调函数
  - `<Redirect to="/xxx" />` 用于render方法里面

## 12、 扩展

- Fragment： 
  - 不会生成任何DOM元素，减少不必要DOM结构
  - 性能更好
- 懒加载方案
  - loadable
  - Suspend lazy

## 13、 性能优化方案

- shouldComponentUpdate 减少更新次数
  - 比较新/旧的props和state里面的值, 是否有变化
  - 如果有变化，返回值为true，代表更新
  - 如果都没有变化，返回值为false，代表不更新
- PureComponent
  - 内部对新/旧的props和state里面的值进行浅比较
    - 比较值是否一致
    - 看是否是对象数据
    - 看内部属性的数量是否一致
    - 对比属性的值是否一致
- 因为绝大部分都是进行浅比较（只比较对象的直接属性），如果修改对象属性的属性，就检测不到了，从而导致组件没有重新渲染
- 解决方案
  - 保证每一次更新数据是一个新数据（不要修改原数据，每次产生一个新数据）
  - immuable-js  这个库能保证数据一定是唯一的

# Redux

## 1、介绍

- 是什么？状态管理库
- 作用：能够集中性多个组件共享的状态
- 核心模块：
  - action-creators
    - 用来定义创建action对象的工厂函数模块
    - action对象：{type: xxx, data: xxx}
  - reducers
    - 根据prevState和action来生成newState
    - 多个reducer函数需要用combineReducers整合在一起
  - store
    - 用来集中性管理数据的仓库
  - action-types
    - 定义action对象type值，常量
- 工作流程：
  - 读取
    - store.getState() 
  - 更新
    - 首先调用action-creators来生成action对象
    - 调用store.dispatch传入action
    - 一旦调用dispatch方法，就会自动遍历reducers函数中的所有reducer函数
    - reducer函数就会根据prevState（从store对象读取的）和action（dispatch传入的）来生成newState
    - newState会自动交给store对象管理
    - store对象将newState保存起来，由store.subscribe来触发组件的重新渲染
    - 从而组件就能得到最新的状态值
- react-redux
  - 简化写redux
  - Provider
    - 接受store属性并管理它
    - 一旦状态发生变化，会自动更新组件
  - connect
    - 一种HOC思想，将redux的读取和更新方法封装起来，传入到对应的组件内
    - 返回一个新组件 -- 容器组件
    - 包装一个用户定义的组件 -- UI组件
- redux-thunk
  - 用来在redux中处理异步代码（发送请求）
  - 异步action creator 返回值函数
  - 同步action creator 返回值action对象
- redux-devtools-extension
  - 用来开发中调试redux状态

## 1. 组件的生命周期函数

1)  组件的三个生命周期状态:

​    * Mount：插入真实 DOM

​    * Update：被重新渲染

​    * Unmount：被移出真实 DOM

2)        React 为每个状态都提供了勾子(hook)函数

​    *componentWillMount()  将来的17版本将被标记为UNSAFE，在未来18版本直接被废弃

​    *componentDidMount()

​    *componentWillUpdate()

​    *componentDidUpdate()

​    *componentWillUnmount()

3)       生命周期流程:

a.        第一次初始化渲染显示: ReactDOM.render()

​      *constructor(): 创建对象初始化state

​      *componentWillMount() : 将要插入回调

​      * render(): 用于插入虚拟DOM回调

​      *componentDidMount() : 已经插入回调

b.        每次更新state: this.setSate()

​      *componentWillUpdate() : 将要更新回调

​      * render(): 更新(重新渲染)

​      *componentDidUpdate() : 已经更新回调

c.         移除组件: ReactDOM.unmountComponentAtNode(containerDom)

​      *componentWillUnmount() : 组件将要被移除回调

### 重要的勾子

1)        render(): 初始化渲染或更新渲染调用

2)        componentDidMount(): 开启监听, 发送ajax请求

3)        componentWillUnmount(): 做一些收尾工作, 如: 清理定时器

4)        componentWillReceiveProps(): 后面需要时讲

### constructor()

```
 1. 初始化state
  2. 初始化React.createRef()
  3. 绑定函数的this指向（过去）
constructor(props) {
  super(props); // props作用：用来在constructor函数中操作this.props
  console.log('constructor()');
  console.log(this.props);
  this.state = {
    isUpdated: false
  }
}
```

### componentDidMount()

1. 发送ajax请求
2. 设置异步任务 --> 绑定事件或者设置定时器等
   */

```
componentDidMount() {
  console.log('componentDidMount()');
  // 设置定时器
  setTimeout(() => {
    /*this.setState({
      isUpdated: true
    })*/

    ReactDOM.unmountComponentAtNode(document.getElementById('example'));
  }, 1000)
}
```

### shouldComponentUpdate()

```
  专门用来做React性能优化的：将之前的状态/属性和当前的状态/属性进行对比，如果一样，就不更新，如果不一样就更新
    返回值为true就更新
    返回值为false就不更新
*/
shouldComponentUpdate(prevProps, nextState) {
  console.log(prevProps, nextState);
  console.log('shouldComponentUpdate()');
  return true;
}
```

### componentDidUpdate()

 可以获取更新后DOM元素，从而进行操作

```
componentDidUpdate() {
  console.log('componentDidUpdate()');
}
```

### componentWillUnmount()

 做一些收尾工作：清除定时器、全局变量、取消ajax请求。。。

```
componentWillUnmount() {
  console.log('componentWillUnmount()');
}
```

### render()

 render() {

```
  console.log('render()');
  return <h2>LifeCircle</h2>
}
```

## 2. 说说脚手架的理解

- xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
  - 包含了所有需要的配置 
  - 指定好了所有的依赖
  - 可以直接安装/编译/运行一个简单效果
  - react提供了一个用于创建react项目的脚手架库: create-react-app
  - 项目的整体技术架构为:  react + webpack + es6 + eslint + babel
  - 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化



## 3. key值的问题

react利用key来识别组件，它是一种身份标识标识

每个key对应一个组件，相同的key react认为是同一个组件，这样后续相同的key对应组件都不会被创建。

有了key属性后，就可以与组件建立了一种对应关系，react根据key来决定是销毁重新创建组件还是更新组件。

- key相同，若组件属性有所变化，则react只更新组件对应的属性；没有变化则不更新。
- key值不同，则react先销毁该组件(有状态组件的`componentWillUnmount`会执行)，然后重新创建该组件（有状态组件的`constructor`和`componentWillUnmount`都会执行）

当数组中的数据发生变化时: React 比较更新前后的元素 key 值，
   如果相同则更新，如果不同则销毁之前的，重新创建一个元素

   结论：

```
如果今后需要往数组最前面插入数据，必须用id作为key的值，
如果不是，而是往最后追加，可以用index作为key的值，（如果数据中有id属性，就用id）
key的值必须保证唯一且稳定
使用场景：
1、在项目开发中，key属性的使用场景最多的还是由数组动态创建的子组件的情况，需要为每个子组件添加唯一的key属性值。
2、为一个有复杂繁琐逻辑的组件添加key后，后续操作可以改变该组件的key属性值，从而达到先销毁之前的组件，再重新创建该组件。
```





