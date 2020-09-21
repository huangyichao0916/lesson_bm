## react 16 suspense
1. suspense的核心是catch抛出的promise
2. 执行到throw的时候，suspense就会将组件函数断掉，然后等待promise完成，完成之后重新执行组件函数
3. suspense也有一定的性能优化，因为它可以在组件挂载之前就开始loading

4. suspense跟react的fiber一样达到了错误边界的效果

5. suspense还可以配合react的lazy来使用，这样的话使用react-router的时候，组件会在要用到的时候才被引入进来，也达到了
   性能优化的作用。

```js
    //神三元的项目中的例子
    const RecommendComponent = lazy(() => import("../application/Recommend/"));


    const SuspenseComponent = Component => props => {
        return (
            <Suspense fallback={null}>
                <Component {...props}></Component>
            </Suspense>
        )
    }

    {
        path: "/recommend",
        component: SuspenseComponent(RecommendComponent),
        routes: [
            {
                path: "/recommend/:id",
                component: SuspenseComponent(AlbumComponent)
            }
        ]
    },
}
```