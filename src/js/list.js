(function () {
    $(() => {

        /* -------加载头部--- */
        $("#head").load("head_page.html", function () {
            /* 下拉列表隐藏 */
            $(".list-all").css("display", "none")
            /* 划过下拉列表，显示下拉列表，移出隐藏下拉列表 */
            $(".sort").hover(function () {
                $(".list-all").css("display", "block")
            }, function () {
                $(".list-all").css("display", "none")

            })
            // console.log($("#head").height());/* 加载过来的头部的高度 */
            // console.log($(".other").height());/* 列表页的头部 */
            // console.log($(".bottom").height());/*    吸顶的那一块的高度  */

            /* 判断 吸顶的高度 */
            // console.log($("#head").height() + $(".other").height() - $(".bottom").height());//319
            let ih = $("#head").height() + $(".other").height() - $(".bottom").height();

            /* 吸顶效果 */
            $(window).scroll(function () {
                // console.log(666);
                // console.log($(window).scrollTop());/* 页面滚动的距离 */
                // console.log($("#bottom").scrollTop());

                if ($(window).scrollTop() >= ih) {
                    $(".bottom").css("position", "fixed");
                    $(".bottom").css("margin", "auto");
                    $(".bottom").css("top", "0");
                    $(".bottom").css("z-index", "5");
                } else {

                    $(".bottom").css("position", "static");
                    // $(".bottom").css("height", 100);
                    // $(".bottom").css("width", 1210);
                    // $(".bottom").css("left", "0");
                    // $(".bottom").css("top", "0");
                    // $(".bottom").css("z-index", "5");
                }
            });
        })


        /* 列表页数据渲染 +分页*/
        let ipage = 1; //第一页数据
        let num = 20; //每页显示20条
        function init() {
            $.ajax({
                type: "get",
                url: "../api/03list.php",
                data: {
                    page: ipage,
                    num: num
                },
                dataType: "json",
                success: function (response) {

                    console.log(response); /* 获取所有的数据 */
                    create(response);


                }
            });
        }
        init();

        function create(arr) {
            /* 渲染数据 */
            let str = arr.data.map(function (item) {
                // console.log(item);
                return `
                        <li class="item" data-id="${item.id}">
                            <div class="goods-content" goods-item="">
                                <!--商品大图-->
                                <div class="goods-pic"> 
                                <a title="${item.dtala}"> 
                                <img src="${item.imga}" nc-goods-pic="" title="${item.dtala}" alt="${item.dtala}"> 
                                            </a> 
                            </div>

                            <!--商品详细信息-->
                            <div class="goods-info">
                                <!-- 价格 -->
                                <div class="goods-price-deal offer-1">
                                    <!--该商品如果是批发模式-->
                                    <div class="goods-price-offer retail_goods_price">
                                        <span class="number number-20 number-thin sale-price" title="商城价：￥129.00">
                                            <span class="yuan">￥</span>
                                            <span class="integer">${item.integera}.${item.decimala}</span>
                                        </span>

                                        <!-- 限时折扣 -->
                                        ${item.disa?`<i>${item.disa}</i>`:""}
                                    </div>
                                </div>

                                <!-- 标题 -->
                                <div class="p-name">
                                    <a  title="中国地理标志产品 营养丰富 有益健康">
                                        <p>
                                            <span class="span1">${item.dtala}</span>
                                            <span class="span2">${item.detaila}</span>
                                        </p>
                                    </a>
                                </div>

                                <!-- 成交、评论 -->
                                <div class="p-commit">
                                    <!-- 成交 -->
                                    <strong class="m-r-20">
                                        <a href="/goods/68476#ncGoodsRate" class="num" target="_blank" title="成交量">
                                        ${item.numa}
                                        </a>
                                        笔成交
                                    </strong>

                                    <!-- 评论 -->
                                    <strong class="m-r-10">
                                        <a href="/goods/68476#ncGoodsRate" class="num" target="_blank" title="评论数">
                                        ${item.stria}
                                        </a>
                                        条评论
                                    </strong>
                                </div>


                                <!-- 官方店铺 -->
                                <div class="p-shop">
                                    <span>
                                        <a title="${item.namea}" class="name">${item.namea}</a>
                                    </span>
                                </div>

                                <!-- 自营 -->
                                <div class="p-icons">
                                    ${item.shoppa?`<i class="goods-icons">${item.shoppa}</i>`:""}
                                </div>


                                <!-- S 添加到购物车区域-->
                                <div class="p-operate">
                                    <!-- 收藏 -->
                                    <div class="p-o-btn focus" id="favoriteBtn107670">
                                        <a nc_type="goodsFavoritesBtn">
                                            <i class="iconfont icon-xinaixin"></i>
                                            收藏
                                        </a>

                                        <a nc_type="favorited" style="display: none;">
                                            <span class="fa fa-star"
                                                style="font-size:16px; margin-right:4px; vertical-align:middle">
                                            </span>
                                            已收藏
                                        </a>
                                    </div>

                                    <!-- S 加入购物车等按钮区域-->
                                    <div class="p-o-btn addcart">
                                        <a class="" href="javascript:;">
                                            <i class="iconfont icon-jiarugouwuche"> </i>
                                            加入购物车
                                        </a>
                                    </div>
                                    <!-- E 加入购物车等按钮区域-->

                                </div>
                                <!-- S 添加到购物车区域-->

                            </div>
                        </div>
                        <div class="clear"></div>
                    </li>
                        `
            }).join("")

            /* 插入到ul */
            $(".list_pic").html(str)

            /*分页  */
            /* 计算页码 */

            let total = Math.ceil(arr.total / arr.num);

            function page() {


                // console.log(total);/* 总页数 */
                // $(".list_pic").html('');
                // $("#prev").after('');
                // $("#prev").nextUntil("li:eq(2)").remove();
                // $("#prev").parent().children("tr:last").prevAll().remove();
                // $(".list_pic").find(".page").remove();

                /* 判断页面中是否有  页码  的标签，有则删除（防止点击后叠加），没有则插入渲染*/
                /* 如果有页码标签，则返回true */

                if ($("#paging").children().children().hasClass("pageAll")) {
                    $("#paging").children().children().hasClass("pageAll").remove();
                } else {
                    let pages = '';
                    for (let i = 0; i < total; i++) {
                        pages += `<li class="pageAll" data-page="${i+1}"><a class="demo page${i+1} page"><span>${i+1}</span></a></li>`
                    }
                    /* 将页码节点插入到  上一页  的后面 */
                    $("#prev").after(pages);
                    // page();
                }

            }
            page();
            console.log($("#paging").children().children().hasClass("pageAll"))



            $(".page1").parent().addClass("active"); /* 默认第一个高亮 */
            /* 点击对应高亮 */
            function lineheight() {
                $(".pagination").on("click", ".pageAll", function () {
                    // console.log($(this));/* 当前li标签 */
                    $(this).addClass("active").siblings().removeClass("active");

                    if ($(this).hasClass("pageAll")) {
                        // ipage = $(this).chidren().html;
                        console.log($(this).data("pageAll")); /* 获取自定义属性 */
                        // if($(this).data("page"))
                        ipage = $(this).data("page");
                        // create(arr);
                        // page();
                        // page();
                        init();
                    }

                })
            }
            lineheight();


            // /* ---------下一页 -----------*/
            let next = $("#next");
            console.log(next);
            $("#next").click(function () {
                // console.log(666);
                if (ipage >= total) {
                    // ipage = 0;
                    // DataTables_Table_0_next.style = "displ
                    // alert("将返回第一页！");
                    $(".pageAll").eq(0).addClass("active").siblings().removeClass("active");
                    ipage = 0;

                }
                // $(".pageAll").addClass("active").siblings().removeClass("active");
                // lineheight();

                ipage++;
                $(".pageAll").eq(ipage - 1).addClass("active").siblings().removeClass("active");
                init();


            })

            /* ------------上一页 -------------*/
            $("#prev").click(function () {
                // if (ipage <= total) {
                //     // ipage = 0;
                //     // DataTables_Table_0_next.style = "displ
                //     alert("将到达第一页");
                //     $(".pageAll").eq(0).addClass("active").siblings().removeClass("active");
                //     ipage = 0;

                // }
                // // $(".pageAll").addClass("active").siblings().removeClass("active");
                // // lineheight();

                // ipage--;
                // $(".pageAll").eq(ipage).addClass("active").siblings().removeClass("active");
                // init();
                console.log("上一页");

                if (ipage <= 1) {
                    // ipage = 0;
                    // DataTables_Table_0_next.style = "display:none";
                    // alert("将到达最后一页！");
                    $(".pageAll").eq(total - 1).addClass("active").siblings().removeClass("active");
                    ipage = total + 1;
                    init();
                }
                ipage--;
                $(".pageAll").eq(ipage - 1).addClass("active").siblings().removeClass("active");
                init();

            })

            /* ----------首页=--------- */
            $("#homepage").click(function () {
                if (ipage == 1) {
                    // alert("当前页已为第一页！")

                } else {
                    ipage = 1;
                    $(".pageAll").eq(0).addClass("active").siblings().removeClass("active");
                    init();
                }
                // }) {
                // console.log(66);

            })

            /* ------尾页-------- */
            $("#lastpage").click(function () {
                if (ipage == total) {
                    // alert("当前页已为最后一页！")
                } else {
                    ipage = total;
                    $(".pageAll").eq(total - 1).addClass("active").siblings().removeClass("active");
                    init();
                }
            })

            /*----- 默认排序------ */

            $(".selected").click(function () {
                // console.log(666);
                create(arr)

            })

            /* ---------成交量-------- */
            // $(".turnover").click(() => {
            //     // console.log(666);
            //     $.ajax({
            //         type: "post",
            //         url: "../api/03list_turnover.php",
            //         // data: "data",
            //         dataType: "json",
            //         success: function (response) {
            //             console.log(response);

            //         }
            //     });

            // })

            // console.log(arr.deal);




            /* 查找价格范围 */
            $(".item3").find("input").click(function () {
                // console.log(666);
                // $("a").css("display", "block");
                $(this).siblings(".btn").css("display", "block");
                console.log($(this).siblings(".btn"));

                $(this).parent().parent().css("background", "white");
                $(this).siblings(".btn").click(function () {
                    $(this).css("display", "none");
                    $(this).parent().parent().css("background", "#F1F1F1");

                })
            })

            /* ----点击跳转详情页---- */
            $(".list_pic").on("click", "li", function () {
                // console.log(666);
                // $(this).data("id")
                console.log($(this).data("id"));
                let id = $(this).data("id")
                window.location.href = `./goods.html`;
                setCookie("gid", id);

            })



            
        }


        /* 加载底部 */
        $("#foot").load("./footer_page.html");
    });
})()