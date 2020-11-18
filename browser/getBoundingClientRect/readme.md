# getBoundingClientRect
## width height
- 如果是content-box,width = width + padding + border
- 如果是border-box,width = width
- 其实，无论是content-box还是border-box，getBoundingClientRect的width属性都是等于
  **除了margin以外的另外3个属性的值的和**

## left  right  top  bottom
- 相对于浏览器左上角的**原点**进行计算
- 计算的时候，是以**border或者border以内的东西**作为左边缘的
- x,y相当于left，top，不过有的浏览器不支持x，y