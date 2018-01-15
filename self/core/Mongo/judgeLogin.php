<?php
// session_start();
require_once("../mod/loginbase.php");

//$loginStatus = $_POST["loginStatus"];
//利用cookie获取username

$username = $_POST["user"];	
    if(!$username){
    	echo "nouser";
    	return false;
    }

    $find_login = $col->findOne(array('username'=>$username));
    
    if(isset($find_login)){
    	//echo $username." logined";
        $setLoginStatus = $col->update(array('username'=>$username),array('$set'=>array("loginStatus"=>"")));
        //echo $username." logined";
    }


?>