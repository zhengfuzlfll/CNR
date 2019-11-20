<?php
    // header("Content-type:text/html;charset=utf-8");//防止中文乱码
    include 'conn.php';
    // var_dump($conn);/* 连接成功 */
    // $loginName = isset($_REQUEST['loginName']) ? $_REQUEST['loginName'] : '';//用户名
    $page = isset($_REQUEST['page']) ? $_REQUEST['page'] : '';//第几页
    $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';//每页几条数据

    /*
        SELECT * FROM goodslist LIMIT 0,5

        page（第几页）  num（每页显示条数）  index（下标）
        1              5                   0
        2              5                   5
        3              5                   10
        4              5                   15
    
        推导公式：index==(page - 1) * num
    */


    //书写查询语句
    $index = ($page - 1) * $num;


    $sql="SELECT * FROM listpages LIMIT $index,$num";/* 查注册表中是否存在数据 */

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    $res=$conn->query($sql);//执行查询语句
    // var_dump($res);

    // $row = $res->fetch_all(MYSQLI_ASSOC);/* 获取结果集 */

    $arr = $res->fetch_all(MYSQLI_ASSOC);//得到数组  [{},{},{}]
    
    // var_dump($row);
    // echo json_encode($row);
    
    // if($res->num_rows){
    //     // 登录成功yes  数据库中存在此数据
    //     echo '0';
    // }else{
    //     // 登录失败no
    //     echo '1';
    // }
    // $row->close();
    // $conn->close();//关闭数据库

    //查询总条数
    $sql2 = 'SELECT * FROM goodslist';
    $res2 = $conn->query($sql2);

    //关联数组，可以一次性返回多个数据
    $list = array(
        'data' => $arr,
        'total' => $res2->num_rows,
        'page' => $page,
        'num' => $num
    );
    // echo $res2->num_rows;

    //返回给前端
    echo json_encode($list);//把数组转成字符串，传给前端
    // JSON_UNESCAPED_UNICODE

    //3.关闭连接
    $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>