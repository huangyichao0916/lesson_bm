# Vue

1. 组件间通信

   - 父向子通信

     + 父组件将数据通过v-bind绑定,塞在 子组件标签的自定义属性上,子组件内部创建props选项,注册传入值,即可使用

       props特性属性:damu

       ​	props特性属性最终会被 vue 移除

     ​	非 props 特性属性: class, :xxx

     ​		所有的非 props 特性属性子组件都会继承 

     + 使用$children: 可以在父组件中直接访问子组件
     + 父组件直接获取子组件的值: 子组件设置ref, 父组件取值,用this.$refs.xxx

   - 子向父通信

     + 使用vue事件: 父组件向子组件传递事件方法,子组件通过$emit触发事件,回调给父组件
     + 通过修改父组件传递的props来修改父组件数据,该方法不推荐
     + 使用this.$parent.xxx可以直接调用父组件的方法

   - 兄弟间通信/非父子组件间通信

     - 通过总线事件机制

       使用一个vue实例作为中央事件总线, $on来监听一个事件, $emit来触发一个事件.

     - 通过pubsub订阅

     - 当需要复杂的数据管理时, 用vuex进行数据管理

2. vuex

   ​

3. vue 生命周期

   图示:

   ![vue生命周期1](D:\学习\学习资料\study\vue生命周期1.png)

总结:

1. Vue的所有生命周期函数都是自动绑定到this的上下文上。所以，你这里使用箭头函数的话，就会出现this指向的父级作用域，就会报错。

2. 生命周期各阶段

   **初始化( 1 次)**:

   - beforeCreate(): 

     - 初始化了部分参数，如果有相同的参数，做了参数合并，执行 `beforeCreate`；

     1. **在 new Vue ( ) 的对象过程当中，首先执行了init（init是vue组件里面默认去执行的），在init的过程当中首先调用了beforeCreate，然后在injections（注射）和reactivity（反应性）的时候，它会再去调用created**
        - 在实例初始化之后，数据观测和暴露了一些有用的实例属性与方法。
        - 在vue的响应式系统中,有数据代理和数据监视
        - 暴露属性和方法——就是vue实例自带的一些属性和方法

   - created(): 

     - 初始化了 `Inject` 、`Provide` 、 `props` 、`methods` 、`data` 、`computed` 和 `watch`，执行 `created` ；

     1. **created()调用后,判断实例是否有el属性** 
        - el属性对生命周期的影响: 若无  el 属性 || vm.$mount(el), 则不会继续执行后续一系列生命周期函数 beforeMount
     2. **有el属性或调用vm.$mount(el)后, 继续判断是否含有'template'选项** 
        - template属性对生命周期的影响: 
          - 在实例内部有template属性的时候，直接用内部的，然后调用render函数去渲染。
          - 在实例内部没有找到template，就调用外部的html。实例内部的template属性比外部的优先级高。
          - 要是前两者都不满足，那么就抛出错误。
          - 调用vm.$mounted(el)方法: 这是template编译的过程，结果是解析成了render函数

     ```
     render (h) {
       return h('div', {}, this.text)
     }
     // render函数里面的传参h就是Vue里面的createElement方法，
     // return返回一个createElement方法，其中要传3个参数，第一个参数就是创建的div标签；第二个参数传了一个对象，对象里面可以是我们组件上面的props，或者是事件之类的东西；第三个参数就是div标签里面的内容，这里我们指向了data里面的text。
     ```

     - 扩展内容
       - 为什么el属性的判断在template之前？ 因为el是一个选择器，比如上述例子中我们用到的最多的是id选择器app，vue实例需要用这个el去template中寻找对应的。
       - 实际上，vue实例中还有一种render选项 `render(){return()}`
       - 上述三者的渲染优先级：render函数 > template属性 > 外部html
       - vue编译过程——把tempalte编译成render函数的过程。
       - 在使用.vue文件开发的过程当中，我们在里面写了template模板，在经过了vue-loader的处理之后，就变成了render function，最终放到了vue-loader解析过的文件里面,原因是由于在解析template变成render function的过程，是一个非常耗时的过程，vue-loader帮我们处理了这些内容之后，当我们在页面上执行vue代码的时候，效率会变得更高。

   - beforeMount(): 

     - 检查是否存在 `el` 属性，存在的话进行渲染 `dom` 操作，执行 `beforeMount`

     1. **beforeMount在有了render function的时候才会执行**

   - mounted()

     - 实例化 `Watcher` ，渲染 `dom`，执行 `mounted`

     1. **当执行完render function之后，就会调用mounted这个钩子，在mounted挂载完毕之后，这个实例初始化就算是走完流程了。**

     - 后续的钩子函数执行的过程都是需要外部的触发才会执行。
     - 创建vue实例的$el，然后用它替代el属性。
     - 应用: 此处执行异步任务,如发ajax请求或启动定时器等

   **更新( n 次)**:

   - beforeUpdate():

     - 在渲染 `dom` 后，执行了 `mounted` 钩子后，在数据更新的时候，执行 `beforeUpdate` 

   - updated(): 

     - 检查当前的 `watcher` 列表中，是否存在当前要更新数据的 `watcher` ，如果存在就执行 `updated`

     1. **当有数据的变化，会调用beforeUpdate，然后经过Virtual DOM，最后updated更新完毕。** 

     - 当一个数据发生改变时，你的视图也将随之改变，整个更新的过程是：数据改变——导致虚拟DOM的改变——调用这两个生命钩子去改变视图
     - 这个数据只有和模版中的数据绑定了才会发生更新

   **死亡( 1 次):**

   - beforeDestory(): 

     - 检查是否已经被卸载，如果已经被卸载，就直接 `return` 出去，否则执行 `beforeDestroy`
     - 应用: 可在此处做收尾工作,如清除定时器

   - destoryed():

     - 把所有有关自己痕迹的地方，都给删除掉；

     1. **当组件被销毁的时候，它会调用beforeDestory，以及destoryed。** 

     - 在beferoDestory生命钩子调用之前，所有实例都可以用，但是当调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

![vue生命周期组件状态](D:\学习\学习资料\study\vue生命周期组件状态.bmp)

1. vue 注意点
   - v-if vs v-show
     - `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
     - `v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
     - 相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
     - 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。
     - v-hsow和v-if的区别： v-show是css切换，v-if是完整的销毁和重新创建。
     - 使用 频繁切换时用v-show，运行时较少改变时用v-if

### 计算属性和 watch 的区别

计算属性是自动监听依赖值的变化，从而动态返回内容，监听是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情。

所以区别来源于用法,当有一些数据需要随着另外一些数据变化时，建议使用computed。

当有一个通用的响应数据变化的时候，要执行一些业务逻辑或异步操作的时候建议使用watch

用反或混用虽然可行，但都是不正确的用法。

### 如何发AJAX请求

利用 AJAX 可以发出 HTTP 请求，得到服务器返回的数据后，再进行处理。

具体来说，AJAX 包括以下几个步骤。

- 创建 `XMLHttpRequest` 实例
- 发出 `HTTP` 请求
- 接收服务器传回的数据
- 更新网页数据

```
button.addEventListener("click", e => {
  let request = new XMLHttpRequest();
  request.open("GET", "/yyzcl"); //配置request
  request.setHeader("yyzcl","OK"); //设置请求头
  request.send("Yyzcl");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      let string = request.responseText;  // 获取服务器的返回值，是一个字符串
      let obj = window.JSON.parse(string);  // 把符合JSON语法的字符串转换为JS对应的值（可以是对象，字符串等）
    }
  };
});
```

AJAX同源策略: AJAX 只能向同源网址（**协议**、**域名**、**端口**都相同）发出 HTTP 请求，如果发出跨域请求，就会报错

AJAX 包括以下几个步骤。

- 创建 `XMLHttpRequest` 实例

  `XMLHttpRequest`对象是浏览器提供的一个API，用来顺畅地向服务器发送请求并解析服务器响应，当然整个过程中，浏览器页面不会被刷新。

- 发出 `HTTP` 请求

  - 我们是要获取数据还是存储数据？ --表现为请求方式的不同：`GET`或`POST`；
  - 向哪里发出请求？ --即相应API地址；
  - 以何种方式等待响应？ --有“**同步**”和“**异步**”两种选择；（网络传输是一个过程，请求和响应不是同时发生的。）

  而XMLHttpRequest实例的`.open()`方法的作用就是用来回答以上三个问题。`.open()`方法接收三个参数：**请求方式**，**请求URL地址**和**是否为异步请求的布尔值**。

  `.open()`方法也同样出色地完成了发送AJAX请求的准备工作。

- 设置请求头

  接收服务器传回的数据每个HTTP请求和响应都会带有相应的头部信息，包含一些与数据，收发者网络环境与状态等相关信息。XMLHttpRequest对象提供的`.setRequestHeader()`方法为开发者提供了一个操作这两种头部信息的方法，并允许开发者自定义请求头的头部信息。

  更新网页数据

- 发送请求

  利用`.open()`方法确定了请求方式，等待响应的方式和请求地址，甚至还通过`.setRequestHeader()`自定义了响应头，接下来就到了最激动人心的时刻：使用`.send()`方法，发送AJAX请求！

- 处理响应

  通过为XMLHTTPRequest实例添加`onreadystatechange`事件处理程序, xhr实例的`readystatechange`事件会监听xhr`.readyState`属性的变化，你可以将这个属性想象为一个计数器，随着AJAX流程的推进而不断累加，其可取的值如下：

  - **0**：未初始化 -- 尚未调用`.open()`方法；
  - **1**：启动 -- 已经调用`.open()`方法，但尚未调用`.send()`方法；
  - **2**：发送 -- 已经调用`.send()`方法，但尚未接收到响应；
  - **3**：接收 -- 已经接收到部分响应数据；
  - **4**：完成 -- 已经接收到全部响应数据，而且已经可以在客户端使用了；

### 补充:

#### XMLHttpRequest

​	XMLHttpRequest本身是一个构造函数，用来初始化一个 XMLHttpRequest 对象。使用XMLHttpRequest (XHR)对象可以与服务器交互。您可以从响应中获取数据，而无需让整个的页面刷新。这使得Web页面可以只更新页面的局部，而不影响用户的操作。XMLHttpRequest在 Ajax 编程中被大量使用。

#### 请求步骤

1. 创建一个请求对象

   ```
   if(window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
       httpRequest = new XMLHttpRequest();
   } else if(window.ActiveXObject) { // IE 6 and older
       httpRequest = newActiveXObject("Microsoft.XMLHTTP");
   }
   ```

2. 初始化请求

```
xhrReq.open(method,url, async)
       XMLHttpRequest.open() 方法初始化一个请求。
```

3. 发送请求:    xhrReq.send()

   XMLHttpRequest.send() 方法用于发送 HTTP 请求。如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回；如果是同步请求，则此方法直到响应到达后才会返回。XMLHttpRequest.send() 方法接受一个可选的参数，其作为请求主体；如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null。如果没有使用setRequestHeader（）方法设置 Accept 头部信息，则会发送带有* / *的Accept 头部。

4. 为异步请求注册注册回调:readyState 属性发生改变时触发 对应的回调

   + XMLHttpRequest.onreadystatechange

   XMLHttpRequest.onreadystatechange 会在 XMLHttpRequest 的readyState 属性发生改变时触发 对应的回调

   语法：

   ```
    XMLHttpRequest.onreadystatechange =callback;
   ```

   + XMLHTTPRequest.readyState

     ```
     0 (未初始化) or (请求还未初始化)
     1 (正在加载) or (已建立服务器链接)
     2 (加载成功) or (请求已接受)
     3 (交互) or (正在处理请求)
     4 (完成) or (请求已完成并且响应已准备好)
     ```

     ​

   + XMLHttpRequest.status

     只读属性 XMLHttpRequest.status 返回了XMLHttpRequest 响应中的数字状态码。status码是标准的HTTP status codes

     XMLHttpRequest.responseText

     XMLHttpRequest.responseText 属性返回一个字符串，它包含对文本请求的响应，如果请求不成功或尚未发送，则返回null。responseText属性在请求完成之前将会得到请求内容

   + XMLHttpRequest. setRequestHeader

     XMLHttpRequest.setRequestHeader() 是设置HTTP请求头部的方法。此方法必须在  open() 方法和 send()   之间调用。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。

     语法：myReq.setRequestHeader(header,value);

     ​	header属性的名称。

     ​	value属性的值

   ![ajax请求](D:\学习\学习资料\study\ajax请求.png)

### vuex

定义: 对vue应用中多个组件的共享状态进行集中式的管理(读/写)

状态自管理应用:

1)state: 驱动应用的数据源

2)view: 以声明方式将state映射到视图

3) actions: 响应在view上的用户输入导致的状态变化(包含n个更新状态的方法)

- state 用来数据共享数据存储

  1) vuex管理的状态对象

  2) 它应该是唯一的

  ```
  const state = {
  	xxx: initValue
  }
  ```

  ​

- mutation 用来注册改变数据状态

  1)        包含多个直接更新state的方法(回调函数)的对象

  2)        谁来触发: action中的commit('mutation名称')

  3)        只能包含同步的代码, 不能写异步代码

  ```
  const mutations = {
      yyy (state, {data1}) { 
          // 更新state的某个属性
      }
  }
  ```

  * mutations对象
    包含个方法: 能直接更新state
    一个方法就是一个mutation
    mutation只能包含更新state的同步代码, 也不会有逻辑
    mutation由action触发调用: commit('mutationName')*



  ​

- getters 用来对共享数据进行过滤操作

  1)        包含多个计算属性(get)的对象

  2)        谁来读取: 组件中: $store.getters.xxx

  ```
  const getters ={
    mmm (state) {
      return ...
    }
  }
  ```

  *getters对象
    包含多个get计算计算属性方法*

- action 解决异步改变共享数据

  1)        包含多个事件回调函数的对象

  2)        通过执行: commit()来触发mutation的调用, 间接更新state

  3)        谁来触发: 组件中: $store.dispatch('action名称', data1)  // 'zzz'

  4)        可以包含异步代码(定时器, ajax)

  ```
  const actions = {
    zzz ({commit, state}, data1) {
    commit('yyy', {data1})
    }
  }
  ```

  **actions对象** 
  ​	 包含个方法: 触发mutation调用, 间接更新state
   	一个方法就是一个action
   	action中可以有逻辑代码和异步代码
  ​	 action由组件来触发调用:
  ​	this.$store.dispatch('actionName')

store对象

1) 所有用vuex管理的组件中都多了一个属性$store, 它就是一个store对象

2) 属性:

state: 注册的state对象

getters: 注册的getters对象

3)方法: dispatch(actionName, data): 分发调用action 

#### 这个四大特征就是核心，如何用怎么用

![vuex](D:\学习\学习资料\study\vuex.png)

