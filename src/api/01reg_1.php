<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    include 'conn.php';
    // var_dump($conn);/* 连接成功 */
    $phone = isset($_REQUEST['phone']) ? $_REQUEST['phone'] : '';//用户名

    $sql="SELECT *FROM reg WHERE phone='$phone'";
    $res=$conn->query($sql);//执行查询语句
    
    if($res->num_rows){
        // 登录成功yes  数据库中存在此数据
        echo '0';
    }else{
        // 登录失败no
        echo '1';
    }
    $conn->close();//关闭数据库
?>