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
			},
			//匹配字体文件
			{
				test:/\.(eot|svg|ttf|woff|woff2)$/,
				use:['file-loader']
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
