define(function(){
require.config({
	baseUrl:'../js',
	waitSeconds:20,
	paths: {
	　	"jquery": 'lib/jquery-1.11.0',
		'cookies': 'lib/jquery.cookies',
		'fun_ajax':'lib/fun_ajax',
		'base64': 'lib/jquery.base64',
		'login_register': 'lib/login_register',
		'index': 'app/index',//定义index.js的文件路径,定义其他的文件和路径如此设置
		//'login': 'app/login',
		'register':'app/register',
		//'bootstr':'bootstrap.min'
　　},
	shim:{
		'index':{//设置index.js的依赖关系，并输出(回调)给index.js文件
			deps:['jquery','cookies'],
			exports:'index'
		},
		'register':{
			deps:['jquery','fun_ajax','cookies','base64','login_register'],//不要添加自己的js，下面的已经输出了
			exports:'register'
		},
		// 'login_register':{
		// 	deps:['jquery'],
		// 	exports:'login_register'
		// }
	}
});
});