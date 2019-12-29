<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    $servername='127.0.0.1';//主机名
    $username='root';//用户名
    $password='';//密码
    $dbname='admin';//数据库名字
    // 连接数据库
    $conn=new mysqli($servername,$username,$password,$dbname);
    // var_dump($conn);    //检查数据库是否连接成功
    if($conn->connect_error){
        die($conn->connect_error);
    }else{
        // echo "连接成功！";
    }
?>