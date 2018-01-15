<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = 'root';          // mysql用户名密码
$user = $_POST["user"];		//获取前端传来的用户名，id对应
$password = $_POST["pwd"];	//获取前端传来的密码，id对应

$conn = mysqli_connect($dbhost, $dbuser, $dbpass);//连接MySQL数据库
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
//连接数据库过程end

// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

//接受ajax请求

$sql = "SELECT * FROM login WHERE (username='$user') AND (password='$password')";

mysqli_select_db( $conn, 'test1' );

$retval = mysqli_query( $conn, $sql );//执行sql

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

// 释放内存
mysqli_free_result($retval);
// 登陆验证完成后，关闭数据库链接，释放内存
mysqli_close($conn);
?>