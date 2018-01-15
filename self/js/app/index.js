function changeStatus () {
	//注销时点击，则 drop cookie，
	//Turnning to lognin.html ,when the input's value is login 
	const cs = $("#changeStatus").html();
	console.log(cs);
	if(cs == "请先登录"){
		window.location.href="login.html";
	}
	if(cs == "注销当前用户"){
		const r = confirm("确认注销当前用户");
        if(r==true){
            $.removeCookie('username',{path:'/'});///loginWithPHP-master/self/pages
            //注销之后显示登录和注册的li
            $("#changeStatus").html('请先登录');
            window.location.reload();
        }
	}
}
	//仅仅是coolie判断
function judgeLogin (){
	var name=$.cookie('username');
	if (!name){
	//const nologin_doc = "用户名"
	$("#changeStatus").html("请先登录");
	//$("#login_user").html(nologin_doc);
	}else{
	$("#changeStatus").html("注销当前用户");
	$("#login_user").html(name);
	$("#index_register").hide();
	}
}
	/*rt_fixed*/
	function goTop(){
            var timer  = null;
            cancelAnimationFrame(timer);//取消帧动画
            timer = requestAnimationFrame(function fn(){//请求帧动画
                var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(oTop > 0){
                    document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;//每次移动50px
                    timer = requestAnimationFrame(fn);
                }else{
                    cancelAnimationFrame(timer);
                }    
            });
        }
function toDownload () {
	//在此先判断是否有cookie，没有则alert提示请先登录
	//有的话则，进行正常的页面跳转
	var name = $.cookie('username');
	$("#downLoad").on('click',function(){
		if(!name){
			alert("请登录后下载");
		}else{
			window.open("downLoad.html","_blank");
			//默认第一个参数为_blank,可修改为_self和_seach,分别为在本业打开和在搜索栏打开
		}
		
	})
}
        $("#rt_fixed ul li a").on('click',function(){
    		$(this).siblings("div").toggle(500);
    		$(this).parent().siblings().find("div").css('display','none');
		});
		//添加属性，鼠标点击其他位置时，弹出的div收回
$(function(){
	judgeLogin();
	//goTop();//可加可不加，平稳从当前位置回到顶部
	//进行bootstrap的栅格布局

})
// })
	
// })
