<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    //连接数据库
    include 'conn.php';

    $id=isset($_REQUEST['id'])?$_REQUEST['id']:"";




    $sql="DELETE FROM user WHERE id='$id'";//删除语句
    $res=$conn->query($sql);//执行删除语句

    // $arr=$res->fetch_all(MYSQL_ASSOC);//得到所有结果

    // var_dump($res);//true  1
    // print_r($res);
    echo $res;//返回1 即为删除成功      
    // echo json_encode($arr);
    // var_dump($arr);
    // JSON_UNESCAPED_UNICODE

    // 关闭连接
    // $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>  