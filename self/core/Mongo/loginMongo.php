<?php
// session_start();
require_once("../mod/loginbase.php");

$username = $_POST["user"];		//获取前端传来的用户名，id对应
$password = $_POST["pwd"];	//获取前端传来的密码，id对应
//$loginStatus = $_POST["loginStatus"];

$result = $col->findOne(array('username'=>$username,'password'=>$password));
if(isset($result)){
        	echo 1;
        //$_SESSION['user_id'] = $username;
    	}else{
        	echo 2;
    	}
/*暂时去掉登录状态的字段
//
$find_login = $col->findOne(array('username'=>$username,'loginStatus'=>$username." logined"));
    //后续登录，如果找到重复登录
    if(isset($find_login)){
    	echo $username." logined";
    	return false;
    };
*/
//    
    /*
    //第一个用户登录时，以及第一次登录
    if($loginStatus == ""){
    	$setLoginStatus = $col->update(array('username'=>$username),array('$set'=>array("loginStatus"=>$username." logined")));
    	//此处可以输出一个值，前端获取，是否登陆的状态
    	if(isset($result)){
        	echo 1;
        //$_SESSION['user_id'] = $username;
    	}else{
        	echo 2;
    	}
	}
    
*/
    /*******************/
//后续登录，如果存在对应的登录则，静止登录

    //echo $status;
//$result_username = $col->findOne(array('username'=>$username));

//var_dump($result); //断点输出

    
//}


/*****增*******/
//$username = array(
//	"username"=>"cwd",
//	"password"=>"cwd"
//);
//$result = $col->insert($username);//接受值
/******************/
//if($result){
//	echo 1;
//}
/*******************/

/******查询*****/

//$result = $col->find(array("username"=>$username,"password"=>$password));//
//if($result){
//	echo 1;
//}
/**************/

/******改*******/

//$result = $col->update(array("username"=>"cwd"),array('$set' =>array("password"=>"cwd1")));//set等mongo操作，用单引号''
//if($result){
//	echo 1;
//}

/************/


/******删除*******/

//$result = $col->remove(array("username"=>"cwd"));
//if($result){
//	echo 1;
//}

/**************/

?>