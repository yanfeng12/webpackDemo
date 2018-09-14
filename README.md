# webpackDemo
# webpack打包
# 注意
先全局安装webpack和webpack-cli
```
npm install webpack -g
npm install webpack-cli -g
```
再局部安装webpack和webpack-cli
```
npm install webpack --save-dev
npm install webpack-cli --save-dev
```
# 1.全局安装webpack和webpack-cli。
# 2.cd到项目目录，npm init -y初始化。局部安装webpack。webpack4.0以后必须分别安装webpack和webpack-cli。
# 3.mode是webpack4新增配置项。
```
module.exports={
    //其他参数
    mode: 'development',
    devServer: {
        //其他配置
        
    } 
}
```
# 4.在webpack-demo⽬录下创建对应的⽬录src和index.js,moudule1.js,moudule2.js,moudule3.js⽂件
# 5.index.js⽂件内容
```
import m1 from './module1'
import m2 from './module2'
import m3 from './module3'

m1()
m2()
m3()
```
# 6.module1.js⽂件内容
```
export default function m1() {
  console.log("hello m1!!!")
}
```
# 7.在项目根目录创建touch	webpack.config.js
```
const path = require('path') 
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	}
}

```
# 8.执行node_modules/.bin/webpack
# 9.index.html添加app.js
# 10.运行index.html