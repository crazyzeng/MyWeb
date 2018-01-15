$("#login").on('click',function(){
    const user = $("#user").val();
    const pwd = $("#pwd").val();
    const url = "core/Mongo/loginMongo.php";
    const data = {
        user:user,
        pwd:$.base64.encode(pwd)
        //status:1
    };

    if(user ==""){
        alert("用户名为空");
        return false;
    }else if(pwd ==""){
        alert("密码为空");
        return false;
    }
    _ajax(url,data,function (ret) {

        if(ret == 1){
        	$.cookie('username',user);
            window.location.href="index.html";

        }else if(ret == 2){
            alert("用户名或密码错误")
        }
    });

});
//绑定回车事件，回车事件指向登录按钮
//确定user和pwd都不为空的时候，进行enter触发登录
$(document).keydown(function (event) {
    var user = $("#user").val();
    var pwd = $("#pwd").val();
    if(event.keyCode == 13&&((user!=''&&pwd!=''))){
        $("#login").click();
    }
});
//设置单一的用户的登录，不能同意用户同时登录