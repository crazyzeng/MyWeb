<?php
/*添加1，删除2，重置3*/
require_once("mod/loginbase.php");

$username = $_POST["user"];
$password = $_POST["pwd"];
$type  = $_POST["type"];
$order = $_POST["order"];


//if($order = ""){
//
//    $col->update(array("username"=>$username),array($set=>array("order"=>0)));
//
//}
$result_username = $col->findOne(array("username"=>$username));//findOne()
//排序
//$result_order = $col->find(array("username"+$username))->sort(array("order"=>-1));
//$result_username ;

/*
 
 //首先创建一个自动增长id集合 ids
>db.ids.save({name:"user", id:0});
//可以查看一下是否成功
> db.ids.find();
{ "_id" : ObjectId("4c637dbd900f00000000686c"), "name" : "user", "id" : 0 }
//然后每次添加新用户之前自增一下 ids集合 获得id
>userid = db.ids.findAndModify({update:{$inc:{'id':1}}, query:{"name":"user"}, new:true});
{ "_id" : ObjectId("4c637dbd900f00000000686c"), "name" : "user", "id" : 1 }
//注：因为findAndModify是一个方法完成更新查找两个操作，所以具有原子性，多线程不会冲突。
//然后保存相应的数据
>db.user.save({uid:userid.id, username:"kekeles", password:"kekeles", info:"http://www.jb51.net/ "});
//查看结果
> db.user.find();

 
 */


if($type == 1){
    /*添加用户*/
    //$result_add_find = $col ->findOne(array("username"=>$username));
    if($result_username){
        echo 2;
    }else{
       /* $myresult=$col->findOne(array("order"=>$order));
        if( ){

        }*/
        $result_add = $col->insert(array("username"=>$username,"password"=>$password,"order"=>0));
        echo 1;
    }
}
/*删除用户*/
if($type == 2){
    //先查找是否存在用户，存在则进行删除操作
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
    $result_reset = $col->update(array("username"=>$username),array('$set'=>array("password"=>"123")));
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