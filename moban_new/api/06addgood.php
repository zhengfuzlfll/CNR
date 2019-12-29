<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    //连接数据库
    include 'conn.php';

    $password=isset($_REQUEST['password'])?$_REQUEST['password']:"";
    // $password_2=isset($_REQUEST['password_2'])?$_REQUEST['password_2']:"";
    // $email=isset($_REQUEST['email'])?$_REQUEST['email']:"";
    $goodname=isset($_REQUEST['goodname'])?$_REQUEST['goodname']:"";
    $price=isset($_REQUEST['price'])?$_REQUEST['price']:"";
    $num=isset($_REQUEST['num'])?$_REQUEST['num']:"";
    $totalprice=isset($_REQUEST['totalprice'])?$_REQUEST['totalprice']:"";
    $kucun=isset($_REQUEST['kucun'])?$_REQUEST['kucun']:"";
    $img=isset($_REQUEST['img'])?$_REQUEST['img']:"";

    $sql="INSERT INTO goodlist(goodname,price,num,totalprice,kucun,img) VALUES('$goodname','$price','$num','$totalprice','$kucun','$img')";//查询语句
    $res=$conn->query($sql);//执行查询语句

    // $arr=$res->fetch_all(MYSQL_ASSOC);//得到所有结果

    // var_dump($res);//true  1
    // print_r($res);
    // echo $res;//返回布尔值
    // if($res->num_rows){
    //     // 非0，说明数据库已有值
    //     echo '1';
    // }else{
    //     //0，数据库无此值
    //     echo '0';
    // }
    echo $res;

    // 关闭连接
    // $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>  