# webpackDemo
## 一.webpack打包
### 注意
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
### 1.全局安装webpack和webpack-cli。
### 2.cd到项目目录，npm init -y初始化。局部安装webpack。webpack4.0以后必须分别安装webpack和webpack-cli。
### 3.mode是webpack4新增配置项。
```
module.exports={
    //其他参数
    mode: 'development',
    devServer: {
        //其他配置
        
    } 
}
```
### 4.在webpack-demo⽬录下创建对应的⽬录src和index.js,moudule1.js,moudule2.js,moudule3.js⽂件
### 5.index.js⽂件内容
```
import m1 from './module1'
import m2 from './module2'
import m3 from './module3'

m1()
m2()
m3()
```
### 6.module1.js⽂件内容
```
export default function m1() {
  console.log("hello m1!!!")
}
```
### 7.在项目根目录创建touch	webpack.config.js
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
### 8.执行node_modules/.bin/webpack
### 9.index.html添加app.js
### 10.运行index.html

## 二.html-webpack-plugin插件
### 1.安装npm	install	html-webpack-plugin	--save-dev
### 2.修改webpack配置，让插件⽣效
```
const path = require('path') 

//引入插件，作用:自动创建一个html文件，并且把打包好的js文件加入到HTML中
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	//webpack4.0以后加上mode
	mode: 'development',
	//webpack的入口
	entry: './src/index.js',
	//配置输出目录以及输出文件名字
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js'
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:"main.html"
		})
	]
```
### 3.(简便方法运行webpack)
### 修改package.json的"scripts"
```
{
  "name": "webpackDemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
		//添加快捷操作
	  "dev":"node_modules/.bin/webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.19.0",
    "webpack-cli": "^3.1.0"
  }
}

```
### 4.运行npm run dev(或者)node_modules/.bin/webpack