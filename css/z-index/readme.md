## 前言
 - 网页是沿着一条Z轴排开的(类似PS图层)

## 层叠上下文形成条件(满足任意一个即可)
 1. position不为static
 2. filter transform perspective 不为 none
 3. will-change 

## 渲染过程
js -> relayout -> repaint -> composite -> GPU

## 提升layers的好处
 - 当前layers变化不会影响其他layers
 - 对于transform，opacity产生变化了，不会经过relayout repaint