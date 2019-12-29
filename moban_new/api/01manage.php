<?php
    header("Content-type:text/html;charset=utf-8");//防止中文乱码
    //连接数据库
    include 'conn.php';

   
    $sql="SELECT * FROM user";//查询语句
    $res=$conn->query($sql);//执行查询语句

    $arr=$res->fetch_all(MYSQL_ASSOC);//得到所有结果
    // if($res->num_rows){
    //     echo json_encode($res);
    // }else{
    //     echo "yes";
    // }
    // var_dump($res);

    // function json_encode_ex($value)
    // {
    //  if (version_compare(PHP_VERSION,'5.4.0','<'))
    //  {
    //   $str = json_encode($value);
    //   $str = preg_replace_callback(
    //          "#\\\u([0-9a-f]{4})#i",
    //          function($matchs)
    //          {
    //            return iconv('UCS-2BE', 'UTF-8', pack('H4', $matchs[1]));
    //          },
    //           $str
    //          );
    //   return $str;
    //  }
    //  else
    //  {
    //   return json_encode($value, JSON_UNESCAPED_UNICODE);
    //  }
    // }


    

    // function encode_json($str) {  
    //     return urldecode(json_encode(url_encode($str)));      
    // }  
      




    /** 
     *  
     */  
    // function url_encode($str) {  
    //     if(is_array($str)) {  
    //         foreach($str as $key=>$value) {  
    //             $str[urlencode($key)] = url_encode($value);  
    //         }  
    //     } else {  
    //         $str = urlencode($str);  
    //     }  
          
    //     return $str;  
    // }

//     function json_encode_ex($value)
// {
//  if (version_compare(PHP_VERSION,'5.4.0','<'))
//  {
//   $str = json_encode($value);
//   $str = preg_replace_callback(
//          "#\\\u([0-9a-f]{4})#i",
//          function($matchs)
//          {
//            return iconv('UCS-2BE', 'UTF-8', pack('H4', $matchs[1]));
//          },
//           $str
//          );
//   return $str;
//  }
//  else
//  {
//   return json_encode($value, JSON_UNESCAPED_UNICODE);
//  }
// }

    echo json_encode($arr);
    // var_dump($arr);
// JSON_UNESCAPED_UNICODE

    // 关闭连接
    // $res->close();//关闭结果集
    $conn->close();//关闭数据库
?>  