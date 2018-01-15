<?php
$mongo = new MongoClient("127.0.0.1");
$db = $mongo->test1;
$col = $db->forbidden;
$noRegister = $_POST["noRegister"];

$find_result_0 = $col->findOne(array("noRegister"=>"0"));
$find_result_1 = $col->findOne(array("noRegister"=>"1"));

if(!$find_result_0&&!$find_result_1){
	echo "insert 0";
	$reult = $col->insert(array("noRegister"=>"0"));
};
if($find_result_1||$find_result_0){
	if ($find_result_0) {
		echo "register";
	};
	if ($find_result_1) {
		echo "noRegister";
	};
};

?>