<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    include 'conn.php';
   
    $uid = isset($_REQUEST['uid']) ? $_REQUEST['uid'] : '';//第i个id

    $sql="SELECT * FROM car WHERE uid=$uid";
    $res=$conn->query($sql);//执行查询语句

   $arr = $res->fetch_all(MYSQLI_ASSOC);//得到数组  [{},{},{}]

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    // echo $res;
    //返回给前端
    echo json_encode($arr);//把数组转成字符串，传给前端,前端拿到数组对象，进行渲染

    //3.关闭连接
    // $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>