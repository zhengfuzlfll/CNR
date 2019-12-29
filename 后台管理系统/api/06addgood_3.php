<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    //连接数据库
    include 'conn.php';
    $gid=isset($_REQUEST['gid'])?$_REQUEST['gid']:"";

    $sql="DELETE FROM goodlist WHERE gid=$gid";//查询语句
    $res=$conn->query($sql);//执行查询语句

  
    echo $res;//返回1 则为删除成功
    // echo json_encode($arr);
    // var_dump($arr);
    // JSON_UNESCAPED_UNICODE

    // 关闭连接
    // $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>  