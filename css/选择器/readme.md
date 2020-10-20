1. 直接子元素选择器
```css
    div>p{
        margin: 0;
        padding: 0;
    }
```

2. 兄弟选择器
作用于**往下**的所有兄弟模块
```css
    .two~p{
        margin: 0;
        padding: 0;
    }
```

3. 相邻选择器
作用于往下的**第一个**相邻的模块
```css
    .first+p{
        margin: 0;
        padding: 0;
    }
```

4. 属性选择器
修饰属性为某某的模块
```css
    [type=text]{
        margin: 0;
        padding: 0;
    }
```