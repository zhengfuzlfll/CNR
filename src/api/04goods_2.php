<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    include 'conn.php';
   /* 插入数据 */
    $gid = isset($_REQUEST['gid']) ? $_REQUEST['gid'] : '';//商品id
    $uid = isset($_REQUEST['uid']) ? $_REQUEST['uid'] : '';//用户id
    $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';/* 商品数量 */
    $img = isset($_REQUEST['img']) ? $_REQUEST['img'] : '';/* 商品图片 */
    $title = isset($_REQUEST['title']) ? $_REQUEST['title'] : '';/* 标题 */
    $price = isset($_REQUEST['price']) ? $_REQUEST['price'] : '';/* 单价 */
    $totalprice = isset($_REQUEST['totalprice']) ? $_REQUEST['totalprice'] : '';/* 总价 */
    
    // echo $gid;
    // $sql2="INSERT INTO car(gid,uid,num,img,price,totalprice) VALUES($gid,$uid,$num,'$img','$price','$totalprice');";

    // echo $sql2;

    $sql="SELECT * FROM car WHERE gid=$gid AND uid=$uid";
    $res=$conn->query($sql);/* 数组 */
    // $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);

    // echo $res->num_rows; /* 返回 0或1  */ 

    if($res->num_rows){/* 数据库中有这条信息  更新*/
        // echo '1';
        $sql1="UPDATE car SET num=$num,totalprice=$totalprice WHERE gid=$gid AND uid=$uid";
        $res1=$conn->query($sql1);
        echo '1';
    }else{/* 数据库中没有这条信息   插入*/
        $sql2="INSERT INTO car(gid,uid,num,img,price,totalprice,title) VALUES($gid,$uid,$num,'$img','$price','$totalprice','$title');";
        // echo '0';
        $res2=$conn->query($sql2);
        echo '0';
    }
    


    // $sql="INSERT INTO car(gid,uid,num,img,price,totalprice) VALUES($gid,$uid,$num,'$img','$price','$totalprice');";
    // $res=$conn->query($sql);//执行查询语句



//    $arr = $res->fetch_all(MYSQLI_ASSOC);//得到数组  [{},{},{}]

    //查询前设置编码，防止输出乱码
    // $conn->set_charset('utf8');

    // echo $res;
    //返回给前端
    // echo json_encode($arr);//把数组转成字符串，传给前端

    //3.关闭连接
    // $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>