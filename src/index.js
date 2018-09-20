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
//import "./css/app.css"
import styles from "../css/app.css"

//可以直接引入图片
import imgSrc from "../images/215.jpg"
console.log(imgSrc)


//测试是否可以使用字体
import "font-awesome/css/font-awesome.css"


//测试Babel
()	=>	console.log("hello world")
class demo{}