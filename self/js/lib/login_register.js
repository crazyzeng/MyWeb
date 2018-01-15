/*validataCode*/
var code;
function createCode() {
 code = "";
 var codeLength = 6; //验证码的长度
 var checkCode = document.getElementById("checkCode");
 var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
 for(var i = 0; i < codeLength; i++) {
  var charNum = Math.floor(Math.random() * 62);
  code += codeChars[charNum];
 }
 if(checkCode){
  checkCode.innerHTML = code;
 }
};

function validateCode() {
 var inputCode=document.getElementById("inputCode").value;
 if(inputCode.length <= 0) 
 {
  alert("请输入验证码！");
  return "empty";
 }
 else if(inputCode.toUpperCase() != code.toUpperCase()) 
 {
   alert("验证码输入有误！请重新输入");
   createCode();
   return "wrong";
 }
 else 
 {
  //alert("验证码正确！");
    var name = $.cookie('username',user);
    //alert("asdad");
    window.location.href="index.html";
 }    
}  

/**************/

//正则验证，用户名
function checkUser(str){
  var reg = /^[a-zA-z]\w{3,11}$/;//设置用户名，只支持大小写及数字下划线，4-12位
  if(reg.test(str)){
    //alert("正确");
    return 'success';
  }else{
    alert("用户名应为：4-12位字符，支持大小写，下划线，数字,不支持特殊字符");
    return 'wrong';
  }     
}
//password，验证密码
function checkPwd (str) {
    var reg = /\w{5,11}$/
    if(reg.test(str)){
        return 'success';
    }else{
        alert("密码应为：6-12位字符");
        return 'wrong';
    }
}
$(function () {
  createCode();
    $("#user").focus(function () {
        $(this).css('border','1px solid #307ed3');
    });
    $("#user").blur(function () {
        $(this).css('border','1px solid #ccc');
    });
    $("#pwd").focus(function () {
        $(this).css('border','1px solid #307ed3');
    });
    $("#pwd").blur(function () {
        $(this).css('border','1px solid #ccc');
    });
    $("#login").focus(function () {
        $(this).css('border','1px solid #307ed3');
    });
    $("#login").blur(function () {
        $(this).css('border','1px solid #ccc');
    });
    $("#register").focus(function () {
        $(this).css('border','1px solid #307ed3');
    });
    $("#register").blur(function () {
        $(this).css('border','1px solid #ccc');
    });
    $("#register_login").focus(function () {
        $(this).css('border','1px solid #307ed3');
    });
    $("#register_login").blur(function () {
        $(this).css('border','1px solid #ccc');
    });
});