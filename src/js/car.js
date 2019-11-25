(function () {
    $(() => {
        console.log(getCookie("loginName"));

        if (getCookie("loginName") == undefined) {
            $(".loginName").click(function () {
                window.location.href = "./login.html"
            })
        } else {
            $(".loginName").html(getCookie("loginName"))
            $(".loginName").hover(function () {
                // over
                if (getCookie("loginName") != undefined) {
                    $(".loginName").html("退出");
                    $(".loginName").click(function () {
                        if (confirm("确定退出？")) {
                            removeCookie("loginName");
                            $(".loginName").html(
                                `<span>你好，请登录</span>&nbsp;<span>免费注册</span>`)
                        } else {
                            $(".loginName").html(getCookie("loginName"))
                        }
                    })
                }


            }, function () {
                // out
                $(".loginName").html(getCookie("loginName"))
            });
        }


        let p1 = new Promise(resolve => {
            /* 数据渲染 */
            let uid = getCookie("uid");
            console.log(uid);

            $.ajax({
                type: "post",
                url: "../api/05car.php",
                data: {
                    uid: uid
                },
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    creat(response)
                }
            });

            function creat(data) {
                let str = data.map((item) => {
                    return ` <div class="goods-zone" data-gid="${item.gid}">
                <input type="checkbox" class="goodCheckbox">
                <img src="${item.img}" alt="">
                <p class="p1">${item.title}</p>
                <p class="p2">
                    <span class="cutBtn">-</span>
                    <input type="text" class="numtotal" value="${item.num}">
                    <span class="addBtn ">+</span></p>
                <p class="p3">￥${item.price}</p>
                <p class="p4">￥${item.totalprice}</p>
                <ul>
                    <li class="iconfont icon-shoucang"></li>
                    <li class="iconfont icon-shanchu" data-did="${item.did}"></li>
                </ul>
            </div>`
                }).join('');
                /* 插入 兄弟节点 */
                $("#ncc-mod-thead").after(str);


                //全选
                $('.checkbox1').click(function () {
                    let isok = $(this).prop('checked'); //获取全选复选框的状态
                    console.log(isok);
                    $('.goodCheckbox').prop('checked', isok); /* 顶部全选框 */

                    $('.checkbox2').prop('checked', isok); /* 底部全选框 */

                    $("#kindsTotal").html($('.goodCheckbox').size()); /* 商品种类 */

                });

                $('.checkbox2').click(function () {
                    let isok = $(this).prop('checked'); //获取 全选 复选框的状态

                    console.log(isok);
                    $('.goodCheckbox').prop('checked', isok);

                    $('.checkbox1').prop('checked', isok);


                    if ($('.checkbox1').prop('checked', isok)) {
                        $("#kindsTotal").html($('.goodCheckbox').size());
                    } else {
                        $("#kindsTotal").html(0);

                    }


                });

                // function checkall() {
                // Nunbet(res);
                let a = '';
                let b = Number(a); /* 定义 数值 型 */
                let c = ''
                let tolprice = Number(c);
                $('.goodCheckbox').click(function () {
                    let total = $('.goodCheckbox').size(); //复选框的总个数
                    let num = $('.goodCheckbox:checked').size(); /* 勾选的个数 */
                    console.log(num);

                    if (total == num) {
                        // return true;
                        $('.checkbox1').prop('checked', true);
                        $('.checkbox2').prop('checked', true);

                    } else {
                        // return false;
                        $('.checkbox1').prop('checked', false);
                        $('.checkbox2').prop('checked', false);
                    }


                    $("#kindsTotal").html(num); /* 选购 商品 种类 ==复选框的个数*/

                    /* 选购数量总计 */
                    b += $(this).parent().find(".numtotal").val() * 1;
                    $("#quantityTotal").html(b);

                    /* 商品金额总计 */
                    tolprice += ($(this).parent().find(".p4").html() * 1).toFixed(2);
                    $("#amountTotal").find("span").html("￥" + tolprice);
                    // console.log($("#amountTotal").find("span"));
                    console.log();



                })


                let uid = getCookie("uid");
                // let gid = getCookie("gid");
                // console.log(uid,gid);

                /* 减少数量 */
                $(".cutBtn").on("click", function () {
                    let gid = $(this).parent().parent().data("gid"); /* 当前商品id */
                    console.log(gid);

                    let num = $(this).next().val();
                    if (num <= 1) {
                        num = 1;
                        $(this).next().val(1)
                        // totalprice(num2)
                    } else {
                        num--;
                        $(this).next().val(num); /* 页面显示数量 */
                        // totalprice($(this).next().val(num))

                        let danjia = $(this).parent().parent().find(".p3").html().slice(1) * 1;
                        let zongjia = danjia * num.toFixed(2);
                        $(this).parent().parent().find(".p4").html("￥" + zongjia);
                        // return zongjia;
                        console.log(zongjia);

                        $.ajax({
                            type: "post",
                            url: "../api/05car_2.php",
                            data: {
                                uid: uid,
                                gid: gid,
                                num: num,
                                totalprice: zongjia
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response);

                            }
                        });
                    }
                    // console.log(zongjia);




                })

                /* 增加数量 */

                $(".addBtn").on("click", function () {
                    let gid = $(this).parent().parent().data("gid");

                    let num = $(this).prev().val(); /* 获取数量 */
                    if (num >= 4512) {
                        alert("已达到库存量")
                        num = 4512;
                        val(4512);
                    } else {
                        num++;
                        $(this).prev().val(num);

                        /* 单价 */
                        let danjia = $(this).parent().parent().find(".p3").html().slice(1) * 1;
                        let zongjia = (danjia * num).toFixed(2);
                        $(this).parent().parent().find(".p4").html("￥" + zongjia);

                        $.ajax({
                            type: "post",
                            /* 公用接口 */
                            url: "../api/05car_2.php",
                            data: {
                                uid: uid,
                                gid: gid,
                                num: num,
                                totalprice: zongjia
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response);

                            }
                        });
                    }

                })

                /* 删除 */
                $(".icon-shanchu").click(function () {
                    let did = $(this).data("did");
                    // console.log(666);
                    console.log($(this).parent().parent());
                    if (confirm("确定删除？")) {
                        $(this).parent().parent().remove();
                        $.ajax({
                            type: "post",
                            url: "../api/05car_3.php",
                            data: {
                                did: did
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response);
                            }
                        });

                    }


                })
                /* 收藏 */
                // $(".icon-shoucang").click(function () {
                //     $(this).css("color", "red")
                // })



            }


            /* 底部 */
            // $(".goodCheckbox").click(function () {
            //     console.log(666);

            // })

        })

        p1.then(function () {

            /* 加载底部 */
            $("#foot").load("./foot.html")
        })





    })



})()