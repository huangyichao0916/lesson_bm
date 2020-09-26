# 浏览器的重排与重绘

## 网页生成过程
1. HTML被HTML解析器解析成DOM 树
2. css则被css解析器解析成CSSOM 树
3. 结合DOM树和CSSOM树，生成一棵渲染树(Render Tree)
4. 生成布局（flow），即将所有渲染树的所有节点进行平面合成
5. 将布局绘制（paint）在屏幕上
- 第四步和第五步是最耗时的部分，这两步合起来，就是我们通常所说的**渲染**
- "重绘"不一定会出现"重排"，"重排"必然会出现"重绘"

- 任何会改变元素几何信息(元素的位置和尺寸大小)的操作，都会触发重排

## 常见的引起重排属性和方法
1. 添加或者删除可见的DOM元素；
2. 元素尺寸改变——边距、填充、边框、宽度和高度
3. 内容变化，比如用户在input框中输入文字
4. 浏览器窗口尺寸改变——resize事件发生时
5. 计算 offsetWidth 和 offsetHeight 属性
6. 设置 style 属性的值

## 重绘
当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘


## 浏览器的渲染队列机制
- 当我们修改了元素的几何属性，导致浏览器触发重排或重绘时，他不会立即执行，而是把该操作放进**渲染队列**，
  等到队列中的操作到了一定的数量或者到了一定的时间间隔时，浏览器就会批量执行这些操作。
    ```js
        div.style.left = '10px';
        div.style.top = '10px';
        div.style.width = '20px';
        div.style.height = '20px';
        //实际上只出发了一次重排
    ```
- 强制刷新队列
    ```js
        div.style.left = '10px';
        console.log(div.offsetLeft);//立即进行重排(清空渲染队列)，此时输出的div的offsetLeft值为10px
        div.style.top = '10px';
        console.log(div.offsetTop);
        div.style.width = '20px';
        console.log(div.offsetWidth);
        div.style.height = '20px';
        console.log(div.offsetHeight);
        /**
         * 触发了4次 重排+重绘
         * 因为请求了这几个样式信息,浏览器会立即执行渲染队列的任务(因为队列中
         * ，可能会有影响到这些值的操作，为了给我们最精确的值，浏览器会立即重排+重绘。)
        /
    ```


## 重排优化
1. 分离读写操作
    ```js
    div.style.left = '10px';
    div.style.top = '10px';
    div.style.width = '20px';
    div.style.height = '20px';
    console.log(div.offsetLeft);
    console.log(div.offsetTop);
    console.log(div.offsetWidth);
    console.log(div.offsetHeight);
    /**
     * 还是上面触发4次重排+重绘的代码，这次只触发了一次重排,
     * 在第一个console的时候，浏览器把之前上面四个写操作的渲染队列都给清空了。
     * 剩下的console，因为渲染队列本来就是空的，所以并没有触发重排，仅仅拿值而已。
    /
    ```

2. 样式集中改变
    ```js
        div.style.left = '10px';
        div.style.top = '10px';
        div.style.width = '20px';
        div.style.height = '20px';
    ```
 - 建议通过改变class或者csstext属性集中改变样式

3. 缓存布局信息
    ```js
        // bad 强制刷新 触发两次重排
        div.style.left = div.offsetLeft + 1 + 'px';
        div.style.top = div.offsetTop + 1 + 'px';

        // good 缓存布局信息 相当于读写分离
        var curLeft = div.offsetLeft;
        var curTop = div.offsetTop;
        div.style.left = curLeft + 1 + 'px';
        div.style.top = curTop + 1 + 'px';
    ```

4. 离线改变dom
 - 隐藏要操作的dom
  在要操作dom之前，通过display隐藏dom，当操作完成之后，才将元素的display属性为可见，因为不可见的元素不会触发重排和重绘。
  ```js
  dom.display = 'none'
  // 修改dom样式
  dom.display = 'block'
  ```

 - 通过使用DocumentFragment创建一个dom碎片,在它上面批量操作dom，操作完成之后，再添加到文档中，这样只会触发一次重排。

 - 复制节点，在副本上工作，然后替换它！

5. position属性为absolute或fixed
 - position属性为absolute或fixed的元素，重排开销比较小，不用考虑它对其他元素的影响

6. 优化动画
 - 可以把动画效果应用到position属性为absolute或fixed的元素上，这样对其他元素影响较小
 - GPU加速
   GPU 加速通常包括以下几个部分：Canvas2D，布局合成, CSS3转换（transitions），CSS3 3D变换（**transforms**），WebGL和视频(video)。