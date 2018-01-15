    var username = '';
         $("#users").delegate('li','click',function () {
            $(this).toggleClass("is_show");
            $(this).siblings('li').removeClass("is_show");
            //此处显示的内容就是用户名，传入直接进行操作
            if($(this).hasClass("is_show")){
                var user_name = $(this).text();
                //console.log(user_name);
                username=user_name;
            }else{
                username = '';
            }
        });
    show_user();

    function show_user() {
        const url = "core/Mongo/index.php";
        const data = {
            type:0
        };
        _ajax(url,data,function (ret) {
            ret = eval(ret);//将string转换成object
            if(ret.length){
                const n = ret.length;
                $("#users").html("");
                for(var i = 0;i<n;i++){
                    $("#users").append("<li></li>");
                }
                for(var i in ret){
                    $("#users>li")[i].innerHTML=ret[i].username;
                }
            }
        })
    }

    function add() {
        const user = $("#user").val();
        const pwd = $("#pwd").val();
        const url = "core/Mongo/index.php";
        const order = $("#order").val();
        const data = {
            user : user,
            pwd : $.base64.encode(pwd),
            type: 1,
            //order : order
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
                alert("添加成功");
                show_user();
                return false;
            }else if(ret == 2){
                alert("添加失败,用户名已存在");
                return false;
            }
        })

    }

    function del() {
        const user = $("#user").val();
        const pwd = $("#pwd").val();
        const url = "core/Mongo/index.php";
        const postData ={
            user : username,
            pwd : pwd,
            type: 2
        };
        if(username = ""){
            alert("没有选择用户");
        }else{
            _ajax(url,postData,function (ret) {
                if(ret == 1){
                    alert("删除成功");
                    show_user();
                }else{
                    alert("删除失败");
                    //不存在此用户
                }
            })
        }
    }
    //密码重置应该参照，删除，进行
    function reset() {
        const user = $("#user").val();
        const pwd = $("#pwd").val();
        const url = "core/Mongo/index.php";
        const postData ={
            user : username,
            pwd : pwd,
            type: 3
        };
        if(username = ""){
            alert("没有选择用户");
        }else{
            _ajax(url,postData,function (ret) {
                if(ret == 1){
                    alert("重置成功");
                    //show_user();
                    $("#users li").removeClass("is_show");
                }else{
                    alert("重置失败");
                }
            })
        }
    }

/***********添加用户，取消button*************/
    function show_add() {
        $("#add_users").toggle();
        $("#add_users").find("input").last().css('margin-bottom','14px');
    }
    function hide_add() {
        $("#add_users").toggle();
        //点击取消的时候，清空输入框的值
        $("#user").val('');
        $("#pwd").val('');
    }
/***********************************************************************************************************/
    
    function noRegister() {
        const no_register = $("#noRegister");
        const url= "core/Mongo/noRegister.php" ;
        if(no_register.is(':checked')){
            //console.log("noRegister");
            const postData = {
                noRegister:1
            };
            _ajax(url,postData,function (ret) {
                alert("已开启禁止注册！");
            })
        }else{
            const postData = {
                noRegister:0
            };
            _ajax(url,postData,function (ret) {
                //alert("用户可自由注册！");
            })
        }
    }
    function noLogin() {
        const no_login = $("#noLogin");
        const url= "core/Mongo/noLogin.php" ;
        if(no_login.is(':checked')){
            //console.log('noLogin');
            const postData = {
                noLogin:1
            };
            _ajax(url,postData,function (ret) {
                alert("已开启禁止登录！");
            })
        }else{
            const postData = {
                noLogin:0
            }
            _ajax(url,postData,function (ret) {
                //alert("用户可自由登录！");
            })
        }
    };
//CheckBox初始化
    function isNoLogin(){
        const no_login = $("#noLogin");
        const url= "core/Mongo/isLogin.php" ;
        const postData = {
            noLogin:""
        };
        _ajax(url,postData,function(ret){
            if (ret == "1") {
                no_login.attr("checked",true);
            };
            if(ret == "0"){
                no_login.attr("checked",false);
            };
        });
    };
    
    function isNoegister(){
        const no_register = $("#noRegister");
        const url= "core/Mongo/isRegister.php" ;
        const postdata = {
            noRegister:""
        }
        _ajax(url,postdata,function(ret){
             if (ret == "1") {
                no_register.attr("checked",true);
            };
            if(ret == "0"){
                no_register.attr("checked",false);
            };
        });
    };

/*******************************************************************************************************/
window.onload=function()//用window的onload事件，窗体加载完毕的时候
{
//do something
 // const cookie_name = $.cookie('username');
 //        const sysadmin = $('.login_status');
 //        //console.log(cookie_name);
 //        if(!cookie_name){
 //            window.location.href="login.html"
 //        }
}
   

$(function () {
    isNoegister();
    isNoLogin();
    //cookie验证
    const cookie_name = $.cookie('username');
    const sysadmin = $('.login_status');
    //console.log(cookie_name);
    // if(!cookie_name){
    //     window.location.href="login.html"
    // }
    if(cookie_name == "sysadmin"){
        sysadmin.html("系统管理员");
    };
    sysadmin.on('click',function(){
        const r = confirm("确认注销当前用户");
        if(r==true){
            //清除cookie
            $.cookie('username', '', { express: -1 });
            window.location.href = 'login.html';
        }
    })
/*****/
    var left_li=$(".nav_left_side li");
    /**刚登录的时候判断，默认选中左边栏，第一项**/
    $(".nav_left_side li:first-child").addClass('active');
    $("#managePage").children('div').css('display','none');
    /**userManage**/

    left_li.on('click',function(){
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
        var addr= ($(this).removeClass('active').attr('class')) ;
        $('\#'+addr).show().siblings('div').hide();
        $(this).addClass('active');
    });
    $(".nav_left_side li:first-child").trigger('click');
    //这种写法，在页面渲染的时候，有明显的二次渲染的迹象，建议直接在原div中设置class属性比较直接
    // $("#managePage").children('div').addClass('managePage_childen')

});


/*************************************************************************************************************/
