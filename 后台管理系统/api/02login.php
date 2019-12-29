<?php
 header("Content-type:text/html;charset=utf-8");//防止中文乱码
    // $servername='127.0.0.1';//主机名
    // $username='root';//用户名
    // $password='';//密码
    // $dbname='admin';//数据库名字
    // // 连接数据库
    // $conn=new mysqli($servername,$username,$password,$dbname);
    // // var_dump($conn);    //检查数据库是否连接成功
    // if($conn->connect_error){
    //     // 连接失败
    //     die($conn->connect_error);
    // }else{
    //     echo "连接成功！";

    // }


    //连接数据库
    include 'conn.php';

    // 接收参数
    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';//用户名
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';//密码
    // echo $password;


    $sql="SELECT * FROM adminlogin WHERE username='$username' AND passwd='$password'";//查询语句
    $res=$conn->query($sql);//执行查询语句
    // var_dump($res);//打印结果集
    if($res->num_rows){
        // 登录成功yes
        echo '0';
    }else{
        // 登录失败no
        echo '1';
    }
    // var_dump($res);
    // echo json_encode($res);

    // // // 关闭连接
    $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>  