<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = 'root';          // mysql用户名密码
$user = $_POST["user"];		//获取前端传来的用户名，id对应   $user为定义的数据库中的列名
$password = $_POST["pwd"];	//获取前端传来的密码，id对应  $password为定义的数据库的列名

//$ret = array();
//function ret (data){
//	echo json_enclode(data);
//}

//json_enclode($ret)//如果前台需要json格式，将数组转换为json格式
//连接数据库过程
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);//连接MySQL数据库
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}

//链接上数据库之后，判断是否存在对应的数据库
//没有数据库则新建一个test1的数据库
$sql = 'CREATE DATABASE IF NOT EXISTS test1';
$retval = mysqli_query($conn,$sql );
if(! $retval )
{
    die('创建数据库失败: ' . mysqli_error($conn));
}
//如果不存在login的表，则新建一个login的表
$sql1 = "CREATE TABLE IF NOT EXISTS login ( ".
    "id INT NOT NULL AUTO_INCREMENT, ".
    "username VARCHAR(100) NOT NULL, ".
    "password VARCHAR(40) NOT NULL, ".
    "submission_date DATE, ".
    "PRIMARY KEY ( id ))ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
mysqli_select_db( $conn, 'test1' );//连接数据库test1
$retval = mysqli_query( $conn, $sql1 );//执行sql语句$conn和$sql,上文用有定义
if(! $retval )//如果上述语句没有执行成功，则1终止并报错
{
    die('数据表创建失败: ' . mysqli_error($conn));
}

$sql_serch = "SELECT * FROM login WHERE (username = '$user')";
$retval = mysqli_query($conn,$sql_serch);
if($retval){
	//echo 2;
	
}
else{
//存在则继续进行
//不存在则新建数据表，在进行新建表和添加表中的内容
$sql2 = "INSERT INTO login ".//创建数据表login
        "(username, password) ".//IF NOT EXISTS $_POST["user"]
        "VALUES ".
        "('$user','$password')";
$retval = mysqli_query($conn,$sql2);//执行创建


// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

//接受ajax请求


//var_dump($retval->num_rows);//->表示. 查询数据类型和值，自带终止执行
//echo不带exit，var_dump带exit

if(! $retval )
{
    die('无法读取数据: ' . mysqli_error($conn));
}

else if ($retval->num_rows > 0)//num_row表示查询的当前表中条数 
{//num_rows当前表中数据的条数
	echo 1;
}

}
// 释放内存
mysqli_free_result($retval);
// 登陆验证完成后，关闭数据库链接，释放内存
mysqli_close($conn);
?>