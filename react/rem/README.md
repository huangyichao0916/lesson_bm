# em 和 rem
 1. e,相对于自己的font-size,不是相对于父元素
 2. rem,相对于html元素的font-size
 3. DPR,设备像素比,1px被渲染为2px

# 想要1px
 1. <meta name="viewport" content="width=device-width, initial-scale=0.5" />
    把initial-scale从1设置成了0.5，所有的元素都将缩小为原来的1/2