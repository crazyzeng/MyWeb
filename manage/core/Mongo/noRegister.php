<?php
$mongo = new MongoClient("127.0.0.1");
$db = $mongo->test1;
$col = $db->forbidden;
$noRegister = $_POST["noRegister"];

$find_result_0 = $col->findOne(array("noRegister"=>"0"));
$find_result_1 = $col->findOne(array("noRegister"=>"1"));

if(!$find_result_0&&!$find_result_1){
	echo "insert";
	$reult = $col->insert(array("noRegister"=>$noRegister));
};
if($find_result_0){
	echo "turn 1";
	$noRegister_change_1 = $col->update(array("noRegister"=>"0"),array('$set'=>array("noRegister"=>"1")));
}
if($find_result_1){
	echo "turn 0";
	$noRegister_change_0 = $col->update(array("noRegister"=>"1"),array('$set'=>array("noRegister"=>"0"))) ;
}

?>