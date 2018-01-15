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
		echo "0";
	}
	if ($find_result_1) {
		echo "1";
	}
};	
?>