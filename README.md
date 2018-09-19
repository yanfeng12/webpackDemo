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


## 三.webpack-dev-server
### 1.webpack-dev-server一个能随时重加载的服务器
### 2.安装npm install webpack-dev-server --save-dev
### 3.修改package.json
```
{
  "name": "webpackDemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node_modules/.bin/webpack",
    "start": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.19.0",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.8"
  }
}
```
### 4.让⼯具⾃动给我们打开服务器地址,修改端口，默认访问目录
```
	devServer:{
		//自动打开服务器地址
		open:true,
		//修改端口
		// port:8090,
		//默认地址
		contentBase:"./dist"
	},
```
### 5.运行npm start


## 四.loader
### 1.有了loader，webpack就会把⾮js⽂件也看成是模块，并且可以引⽤它
### 2.支持css打包,安装css-loader.运行npm	install	css-loader	--save-dev
### 3.修改webpack.config.js⽂件，添加css-loader配置项
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
			filename:"main.html",
		})
	],
	//webpack-dev-server,把资源打包到内存，提供实时刷新
	devServer:{
		//自动打开服务器地址
		open:true,
		//修改端口
		// port:8090,
		//默认地址
		contentBase:"./dist"
	},
	module:{
		rules:[
			{
				//正则表达式:以.css结尾
				test:/\.css$/,
				//先写"style-loader"
				use:["style-loader","css-loader"]
			}
		]
	}
}
```
### 4.测试。新建index.css
```
body{
	background-color: aliceblue;
}
```
### 5.index.js中引入index.css
```
import m1 from './module1'
import m2 from './module2'
import m3 from './module3'

m1()
m2()
m3()
//测试webpack-dev-server服务器
document.write("hello world!!!!!")
//测试CSS是否可以被引用,使用import
import "./index.css"


```
### 6.引⼊style-loader,运行npm install style-loader	--save-dev
### 7.修改webpack.config.js⽂件
```
	module:{
		rules:[
			{
				//正则表达式:以.css结尾
				test:/\.css$/,
				//先写"style-loader"
				use:["style-loader","css-loader"]
			}
		]
	}
```
### 8.运行npm start


## 五.file-loader支持多种格式图片
### 1.在src⽬录下新建css⽂件夹，并且在css⽂件夹下创建app.css⽂件，在src⽬录下新建images⽂件夹， 放⼊不同格式图⽚，在app.css中引⼊这张图⽚
```
#app{
	width: 150px;
	height: 300px;
	border: 3px solid red;
	background: url(../images/215.jpg);
}

#box{
	width: 500px;
	height: 500px;
	border: 3px solid red;
	background: url(../images/12345.png);
}
```
### 2.在index.js⽂件中引⼊app.css
```
import m1 from './module1'
import m2 from './module2'
import m3 from './module3'

m1()
m2()
m3()
//测试webpack-dev-server服务器
//document.write("hello world!!!!!")


//测试CSS是否可以被引用,使用import
//import "./index.css"


//用来测试图片是否可以引入
import "./css/app.css"


//可以直接引入图片
import imgSrc from "./images/215.jpg"
console.log(imgSrc)
```
### 3.安装file-loader.运行npm	install	file-loader	--save-dev
### 4.修改webpack.config.js
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
		//添加插件
		new HtmlWebpackPlugin({
			//自定义生成的文件名字
			filename:"main1.html",
			//指定模板
			template:"src/index.html"
		})
	],
	//webpack-dev-server,把资源打包到内存，提供实时刷新
	devServer:{
		//自动打开服务器地址
		open:true,
		//修改端口
		// port:8090,
		//默认地址
		contentBase:"./dist"
	},
	module:{
		rules:[
			//匹配css文件
			{
				//正则表达式:以.css结尾
				test:/\.css$/,
				//先写"style-loader"
				use:["style-loader","css-loader"]
			},
			//匹配图片文件
			{
				test:/\.(jpg|png|webp|gif|bmp)$/,
				use:["file-loader"]
			}
		]
	}
}

```
### 5.运行npm start


## 六.url-loader
### 修改webpack.config.js
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
		//添加插件
		new HtmlWebpackPlugin({
			//自定义生成的文件名字
			filename:"main1.html",
			//指定模板
			template:"src/index.html"
		})
	],
	//webpack-dev-server,把资源打包到内存，提供实时刷新
	devServer:{
		//自动打开服务器地址
		open:true,
		//修改端口
		// port:8090,
		//默认地址
		contentBase:"./dist"
	},
	module:{
		rules:[
			//匹配css文件
			{
				//正则表达式:以.css结尾
				test:/\.css$/,
				//先写"style-loader"
				use:["style-loader","css-loader"]
			},
			//匹配图片文件
			{
				test:/\.(jpg|png|webp|gif|bmp)$/,
				//base64适合小图片
				//use:["url-loader"]
				use:[{
					loader:'url-loader',
					options:{
						//8K
						//图片小于8192时转换base64
						limit:8192
					}
				}]
			}
		]
	}
}

```
## 七.webpack和babel
### 1.修改index.js
```
//测试Babel
()	=>	console.log("hello world")
class demo{}
```
### 2.安装babel-core,babel-loader,babel-preset-env.运行npm	 install	babel-loader	babel-core	babel-preset-env	--save-dev
### 3.注意：如果打包时出现Error: Cannot find module '@babel/core'错误。
```
npm uninstall babel-loader
npm install babel-loader@7.1.5
```
### 4.新建.babelrc⽂件
```
{
	"presets":["env"]
}
```
### 5.修改在webpack.config.js,在rules规则数字中增加下⾯代码
```
//es6转换
			{				
				test:/\.js$/,				
				use:['babel-loader'] 
			}
```
### 6.优化打包时间
```
			//es6转换
			{				
				test:/\.js$/,				
				use:['babel-loader'] ,
				//排除node_modules这个⽂件夹，因为这个⽂件夹下放的都是第三⽅包，并不需要我们再次⽤babel去编译了
				exclude:path.resolve(__dirname,	'node_modules')
			}
```
### 7.运⾏npm	run	dev


## 八.路径优化
### 1.先建⽴起这样⼀个⽬录结构
```
├──	node_modules 
├──	src 
|			├──	assets 
|							└──	css 
|											└──	index.css
|											└──	app.css
|							└──	img 
|												└──	1.jpg 
|												└──	215.jpg 
|												└──	12345.png 
|							└──	js 
|												└──	index.js 
|												└──	module1.js 
|												└──	module2.js 
|												└──	module3.js 
|			└──	index.html 
├──	.babelrc 
├──	package-lock.json 
├──	package.json 
├──	webpack.config.js 
└──	dist

```
### 2.修改index.js和webpack.config.js中对应路径
### 3.修改js文件路径,更改webpack.config.js
```
//配置输出目录以及输出文件名字
	output: {
		path: path.resolve(__dirname, 'dist/assets'),
		filename: 'js/app.js'
	},
```
### 4.自动删除上次打包的文件
### 安装clean-webpack-plugin插件
```
npm	install	clean-webpack-plugin	--save
```
### 修改webpack.config.js，引入插件
```
//引入清除插件
const CleanWebpackPlugin = require('clean-webpack-plugin')
```
```
plugins:[
		//添加插件
		new HtmlWebpackPlugin({
			//自定义生成的文件名字
			filename:"../index.html",
			//指定模板
			template:"src/index.html"
		}),
		new CleanWebpackPlugin(['dist'])
	],
```
### 5.修改index.html被输出的路径
```
	plugins:[
		//添加插件
		new HtmlWebpackPlugin({
			//自定义生成的文件名字
			filename:"../index.html",
			//指定模板
			template:"src/index.html"
		}),
		new CleanWebpackPlugin(['dist'])
	],
```
### 7.把字体⽂件分类
```
//匹配字体文件
			{
				test:/\.(eot|svg|ttf|woff|woff2)$/,
				use:[{
					loader:'file-loader',
					options:{
						name:'fonts/[name].[hash:8].[ext]'
					}
				}]
			},
```
### 8.把图⽚⽂件分类
```
//匹配图片文件
			{
				test:/\.(jpg|png|webp|gif|bmp)$/,
				//base64适合小图片
				//use:["url-loader"]
				use:[{
					loader:'url-loader',
					options:{
						//8K
						//图片小于8192时转换base64
						limit:8192,
						//[ext]表示文件后缀
						name:'img/[name].[hash:8][ext]'
					}
				}]
			},

```
## 九。CSS分类路径
### 1.安装插件，extract-text-webpackplugin
```
npm	install	extract-text-webpack-plugin	--save-dev

```
### 2.如果最后运行时摆错： Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
```
npm install --save-dev extract-text-webpack-plugin@next
```
### 3.修改webpack.config.js，引入插件
```
const	ExtractTextWebpackPlugin	=	require("extract-text-webpack-plugin")

```
### 4.实例化对象
```
const extractcss = new ExtractTextWebpackPlugin({			
	//打包输出的路径
	filename:'css/app.css' ,
	})

```
### 5.加入plugins
```
	plugins:[
		//添加插件
		new HtmlWebpackPlugin({
			//自定义生成的文件名字
			filename:"../index.html",
			//指定模板
			template:"src/index.html"
		}),
		new CleanWebpackPlugin(['dist']),
			//	这⾥是前⾯实例化得到的对象								
			extractcss
	],
```
### 6.修改css输出规则
```
			{
				//正则表达式:以.css结尾
				test:/\.css$/,
				//先写"style-loader"
				// use:["style-loader","css-loader"]
				use: extractcss.extract({
					fallback:'style-loader',	
					use:['css-loader']	,
				})
			},
```

## 十.修正url地址
### 1.分类好各种资源后，webpack-dev-server运行后，各种资源还是没法正常加载。
### 2.注意：webpack-dev-server是打包在内存中的，clean-webpack-plugin插件删除dist不影响webpack-dev-server。
### 3.修改webpack.config.js，⽤output配置项下的	publicPath来修正⼀下
```
output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/app.js',
		//资源的基础路径，设置什么值就会在原来的路径前面加上这个值
		//注意：不是在打包输出的文件夹前面加而是资源在最终访问的时候加
		publicPath: "/"
	},
devServer:	{	
	open:	true,
	publicPath:	'/'	
				},
```
### 4.publicPath设置的是所有静态资源的基础⽬录，要快速理解它，可以记住下⾯的公式
### 静态资源最终访问路径	=	output.publicPath	+	资源loader或插件等配置路径
### 5.比如说：
```
//	css输出路径 
name:	'css/[name]_[hash:4].[ext]' 
//	图⽚输出路径 name:	'img/[name]_[hash:4].[ext]' 
//	字体⽂件输出路径 name:	'fonts/[name]_[hash:4].[ext]' 
//	js⽂件输出路径 filename:	'js/app.js'
```
### 如果设置的publicPath为	"assets/",	那么最终的访问路径就是	publicPath/loader设置的路径，例如图⽚路径 就会是	assets/img/[name]_[hash:4].[ext]
### 6.完整的webpack配置
```
const path = require('path') 

//引入插件，作用:自动创建一个html文件，并且把打包好的js文件加入到HTML中
const HtmlWebpackPlugin = require('html-webpack-plugin')

//引入清除插件
const CleanWebpackPlugin = require('clean-webpack-plugin')

//引入插件
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

const extractcss = new ExtractTextWebpackPlugin({			
	//打包输出的路径
	filename:'assets/css/app.css' ,
	})
module.exports = {
	//webpack4.0以后加上mode
	mode: 'development',
	//webpack的入口
	entry: './src/assets/js/index.js',
	//配置输出目录以及输出文件名字
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'assets/js/app.js',
		//资源的基础路径，设置什么值就会在原来的路径前面加上这个值
		//注意：不是在打包输出的文件夹前面加而是资源在最终访问的时候加
		publicPath: "/"
	},
	plugins:[
		//添加插件
		new HtmlWebpackPlugin({
			//自定义生成的文件名字
			filename:"./index.html",
			//指定模板
			template:"src/index.html"
		}),
		new CleanWebpackPlugin(['dist']),
			//	这⾥是前⾯实例化得到的对象								
			extractcss
	],
	//webpack-dev-server,把资源打包到内存，提供实时刷新
	devServer:{
		//自动打开服务器地址
		open:true,
		//修改端口
		// port:8090,
		//默认地址
		contentBase:"./",
		publicPath: '/'
	},
	module:{
		rules:[
			//匹配css文件
			{
				//正则表达式:以.css结尾
				test:/\.css$/,
				//先写"style-loader"
				// use:["style-loader","css-loader"]
				use: extractcss.extract({
					fallback:'style-loader',	
					use:['css-loader']	,
				})
			},
			//匹配图片文件
			{
				test:/\.(jpg|png|webp|gif|bmp)$/,
				//base64适合小图片
				//use:["url-loader"]
				use:[{
					loader:'url-loader',
					options:{
						//8K
						//图片小于8192时转换base64
						limit:8192,
						//[ext]表示文件后缀
						name:'assets/images/[name].[hash:8].[ext]'
					}
				}]
			},
			//匹配字体文件
			{
				test:/\.(eot|svg|ttf|woff|woff2)$/,
				use:[{
					loader:'file-loader',
					options:{
						name:'assets/fonts/[name].[hash:8].[ext]'
					}
				}]
			},
			//es6转换
			{				
				test:/\.js$/,				
				use:['babel-loader'] ,
				//排除node_modules这个⽂件夹，因为这个⽂件夹下放的都是第三⽅包，并不需要我们再次⽤babel去编译了
				exclude:path.resolve(__dirname,	'node_modules')
			}
		]
	}
}

```