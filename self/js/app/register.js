$("#register_login").on('click',function () {
    const user = $("#user").val();
    const pwd = $("#pwd").val();
    const Cpwd = $("#Cpwd").val();
    if(pwd!=Cpwd){
        alert("两次输入的密码不一致");
        $("#pwd").val("");
        $("#Cpwd").val("");
        return false;
    }
    //checkUser(user);
    const data = {
        user: user,
        pwd: $.base64.encode(pwd)
    };
    const url = "../core/Mongo/registerMongo.php";
    if(user ==""){
        alert("用户名为空");
        return false;
    }else if(pwd ==""){
        alert("密码为空");
        return false;
    }
    //判断函数的返回值，进行是否中断的判断
    //如果验证码错误，中断
    
    //如果用户名不合规，中断
    //checkUser(user);
    if(checkUser(user) == 'wrong'){
        return false;
    }
    //密码过长，中断
    if(checkPwd(pwd)=='wrong'){
        return false;
    }

    // validateCode();
    // var name = $.cookie('username',user);
    if(validateCode()=="empty"){
        return false;
    }
    if(validateCode()=="wrong"){
        //将alert转过来
        return false;
    }

    _ajax(url,data,function (ret) {
        if(ret == 1){
            var name = $.cookie('username',user);
            window.location.href="../pages/index.html";
        }
        if(ret ==2){
            alert("用户名已存在")
        }
    })
});

$(document).keydown(function (event) {
    if(event.keyCode == 13){
        $("#register_login").click();
    }
});

$(function(){
    createCode();
})
