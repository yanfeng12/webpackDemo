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
}
