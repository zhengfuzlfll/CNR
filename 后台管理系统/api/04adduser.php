<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    //连接数据库
    include 'conn.php';

    $username=isset($_REQUEST['username'])?$_REQUEST['username']:"";
    // $id=isset($_REQUEST['id'])?$_REQUEST['id']:"";
    // $id=isset($_REQUEST['id'])?$_REQUEST['id']:"";



    $sql="SELECT * FROM user WHERE username='$username'";//查询语句
    $res=$conn->query($sql);//执行查询语句

    // $arr=$res->fetch_all(MYSQL_ASSOC);//得到所有结果

    // var_dump($res);//true  1
    // print_r($res);
    // echo $res;//返回布尔值
    if($res->num_rows){
        // 非0，说明数据库已有值
        echo '1';
    }else{
        //0，数据库无此值
        echo '0';
    }


    // 关闭连接
    $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>  