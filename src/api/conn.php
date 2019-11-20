<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    $severname="127.0.0.1";
    $username="root";
    $password="";
    $dbname="cnr";

    $conn = new mysqli($severname,$username,$password,$dbname);
    mysqli_query($conn, "set names 'utf8'");

    
    //获取对象的属性：js中arr.length;php用->获取属性和方法 $con->属性名；$conn->方法名();
    if($conn->connect_error) {
        //连接失败
        die('失败的原因'.$conn->connect_error);
    }else{
        // echo '连接成功';//检测成功后就可以注释了
    }



?>