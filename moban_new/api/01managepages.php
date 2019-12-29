<?php
    /*
        php方式操纵数据库：
            1.连接数据库
            2.书写查询语句->执行语句->得到结果->返回给前端
            3.关闭连接
    */
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    include 'conn.php';//引入外部文件

   // 接收前端传来数据
   $page=isset($_REQUEST['page'])?$_REQUEST['page']:"";//第几页
   $num=isset($_REQUEST['num'])?$_REQUEST['num']:"";//一页显示几条数据
//    echo $page;//1
//    echo $num;//8

    $index=($page - 1) * $num;
    // echo $index;//0
    // var_dump($conn);
    //2.书写查询语句->执行语句->得到结果->返回给前端
    //书写查询语句
    $sql = "SELECT * FROM user LIMIT $index,$num";//记得现在navicat检测没有问题再拿过来用

    //执行语句
    $res = $conn->query($sql);//得到的是结果集，如果想要查询到的数据部分还有继续提取
    // ecoh $res;

    // var_dump($res);
    $arr = $res->fetch_all(MYSQLI_ASSOC);//得到数组  [{},{},{}]

    // var_dump($arr);
    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');



    // 查询总条数
    $sql2="SELECT * FROM user";
    $res2 = $conn->query($sql2);

    // echo $res2;
    // 关联数组，可以一次性返回多个数据
    $list=array(
        'data'=>$arr,   //返回总条数
        'total'=>$res2->num_rows,   //查询到总条数
        'page'=>$page,          //显示第几页
        'num'=>$num             //每页显示多少条数据
    );

    echo json_encode($list);

    //返回给前端
    // echo json_encode($arr);//把数组转成字符串，传给前端
    
    // echo json_encode($res);
    // JSON_UNESCAPED_UNICODE
    //3.关闭连接
    $res->close();//关闭结果集
    $conn->close();//关闭数据库

?>