function islogin(){
        const url = "../../core/Mongo/islogin.php";
        const postData = {
            noLogin:""
        };
        _ajax(url,postData,function(ret){
            if( ret == "noLogin"){
                $("#login").attr("disable","disable");
            }
            if ( ret == "login") {
                $("#login").removeAttr("disable");
            }
                
            
        });
    }
    function isregister(){
        const url = "../core/Mongo/isregister.php";
        const postData = {
            noRegister:""
        };
        _ajax(url,postData,function(ret){
             if( ret == "noRegister"){
                $("#register").attr("disable","disable");
            }else{
                $("#register").attr("disable","false");
            }
        })
    }
//登录
function login () {
    const user = $("#user").val();
    const pwd = $("#pwd").val();
    const url = "../core/Mongo/loginMongo.php";
    const data = {
        user :user,
        pwd:$.base64.encode(pwd)
    };
    if($("#login").attr("disable") == "disable"){
        alert("管理员已禁用登录")
        return false;
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
            validateCode();
            var name = $.cookie('username',user);
        }else if(ret == 2){
            alert("用户名或密码错误")
        }
    });
}
//注册
function register () {
    if($("#register").attr("disable") == "disable"){
        alert("管理员已禁用注册");
        return false;
    }
    window.location.href='register.html'
}

$(function () {
    islogin();
    isregister();

    //绑定回车事件，回车事件指向登录按钮，但是注册没有绑定回车事件
    $(document).keydown(function (event) {
        var user = $("#user").val();
        var pwd = $("#pwd").val();
        if(event.keyCode == 13&&((user!=''&&pwd!='')&&$("#register").blur)){
            $("#login").click();
        }
    });

    $("#inputCode").focus(function(){
        createCode();
    });
});

//是否在登录页请求cookie，如果存在则一直保存登录状态，知道浏览器关闭