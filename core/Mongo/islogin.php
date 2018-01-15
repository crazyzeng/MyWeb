<?php
$mongo = new MongoClient("127.0.0.1");
$db = $mongo->test1;
$col = $db->forbidden;
$noLogin = $_POST["noLogin"];

$find_result_1 = $col->findOne(array("noLogin"=>"1"));
$find_result_0 = $col->findOne(array("noLogin"=>"0"));
if(!$find_result_1&&!$find_result_0){
	 echo "insert 0";
	 $result = $col->insert(array("noLogin"=>"0"));	
};
if($find_result_1||$find_result_0){
//查询值，并输出，给前台
	if($find_result_0){
		echo "login";
	}
	if ($find_result_1) {
		echo "noLogin";
	}
};
//添加字段判断登录状态，如果有登录状态则，返回一个字段，防止同一用户重复登录


?>