<?php
//$mongo=new Mongo("127.0.0.1");//高版本mongo使用MongoClient
$mongo=new MongoClient("127.0.0.1");
$db=$mongo->test1;//
$col=$db->test1;//连接集合没有集合会自动创建一个集合，mysql中是表，mongo中是集合

$username = $_POST["user"];		//获取前端传来的用户名，id对应
$password = $_POST["pwd"];	//获取前端传来的密码，id对应
//$validataCode = $_POST["jd"]
$result=$col->findOne(array("username"=>$username));//findOne低版本mongo使用findOne,之前时直接使用的find()
if($result){
	//die("用户名已存在");
	echo 2;//中断并给提示，用户名已存在
}else{
	echo 1;
	//在发一次请求，如果验证码正确，则在数据库中注册，否则false
	$user_register = array("username"=>$username,"password"=>"$password");
	$result = $col->insert($user_register);
	
}

?>
