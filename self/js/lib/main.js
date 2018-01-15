require(['config'],function(){//先响应config.js
	require(['jquery','index'],function($){//在config中定义了jQuery和index等js文件的路径，在此设置并引入，按需加载
											//括号()中为回调时需要用到的变量或是对象，目前我觉得require还是用于SPA
	})

})