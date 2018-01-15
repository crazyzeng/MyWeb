<?php
$mongo = new MongoClient("127.0.0.1");
$db = $mongo->test1;
$col = $db->forbidden;
$noLogin = $_POST["noLogin"];

$find_result_1 = $col->findOne(array("noLogin"=>"1"));
$find_result_0 = $col->findOne(array("noLogin"=>"0"));
if(!$find_result_1&&!$find_result_0){
	 echo "insert";
	 $result = $col->insert(array("noLogin"=>"0"));	
};
if($find_result_1){
	echo "turn 0";
	$noLoginChange_0 = $col->update(array("noLogin"=>"1"),array('$set'=>array("noLogin"=>"0")));
};
if($find_result_0){
	echo "turn 1";
	$noLoginChange_1 = $col->update(array("noLogin"=>"0"),array('$set'=>array("noLogin"=>"1")));
};
	
?>