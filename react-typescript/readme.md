# react + typescript

 ## ts类型约束
  - 在ts里，不需要用prop-types来约束props的类型，因为ts自己就具有类型
  - ts由interface关键字，这是大型项目必备的关键字

 ## 运行 ts + react 项目需要哪些东西
  1. webpack    
  2. babel
  3. 

 ## 下载包
  - yarn add webpack webpack-cli webpack-dev-server
  - yarn add @babel/cli @babel/core @babel/polyfill @babel/preset-env
  - yarn add babel-loader
  - yarn add awesome-typescript-loader
  - yarn add html-webpack-plugin
  - yarn add react react-dom @types/react @types/react-dom  （后面两个是typescript的类型约束文件）
  - yarn add typescript

 ## tsx工作流
  .tsx React组件  ->  webpack.config.js -> awesome-typescript-loader  -> tsconfig.json -> typescript.jsx
   -> babel (polyfill + env + plugin) -> reactDOM -> webpack-dev-server  html-webpack-plugin  footer 
    script bundle.js