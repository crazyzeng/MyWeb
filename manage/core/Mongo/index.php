<?php
/*type:添加1，删除2，重置3*/

require_once("../mod/loginbase.php");

$type  = $_POST["type"];
if($type!="0"){
    $username = $_POST["user"];
    $password = $_POST["pwd"];
}

//$order = $_POST["order"];

if($type == 1){
    $result_username = $col->findOne(array("username"=>$username));//findOne()
    /*添加用户*/
    //$result_add_find = $col ->findOne(array("username"=>$username));
    if($result_username){
        echo 2;
    }else{
       /* $myresult=$col->findOne(array("order"=>$order));
        if( ){

        }*/
        $result_add = $col->insert(array("username"=>$username,"password"=>$password));
        echo 1;
    }
}
/*删除用户*/
if($type == 2){
    //先查找是否存在用户，存在则进行删除操作
    $result_username = $col->findOne(array("username"=>$username));//findOne()
    $result_remove = $col->remove(array("username"=>$username));
    if($result_username&&$result_remove){
        echo 1;
    }else{
        echo 2;
    }
}
/*重置密码*/
if($type == 3){
    //先查找是否存在用户，存在则进行重置操作
    $reset_pwd = base64_encode("123");
    $result_reset = $col->update(array("username"=>$username),array('$set'=>array("password"=>$reset_pwd)));
    $result_username = $col->findOne(array("username"=>$username));//findOne()
    if($result_username&&$result_reset){
        echo 1;
    }else{
        echo 2;//qingwu chongfu choingzhi huo zhanghao bu chenzaqi
    }
}
/*输出当前集合的全部数据*/
if($type == 0){
    $result = $col->find();
    foreach ($result as $value){//遍历当前集合中找到的所有用户
        $result_data[]=$value;//存在到$result_data的数组中
    }
    if($result){
        echo json_encode($result_data);//输出，并转json的string
    }
}

?>