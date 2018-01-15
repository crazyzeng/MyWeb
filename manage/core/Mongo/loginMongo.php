<?php
$mongo=new MongoClient("127.0.0.1");
$db=$mongo->test1;
$col=$db->testsystem1;

$username = $_POST["user"];	
$password = $_POST["pwd"];
/*****************用户和密码认证******************/
//做到第一次使用的时候，管理员与密码存入数据库
$findSysadmin = $col->findOne(array('username'=>"sysadmin"));
if(!$findSysadmin&&$username=="sysadmin"){
	$manage_register = array('username' => $username,'password'=>$password );
	$result = $col->insert($manage_register);
}

$result =$col->findOne(array('username' => $username,'password'=>$password));
if($result){
	echo "1";
}else{
	echo "2";
}








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