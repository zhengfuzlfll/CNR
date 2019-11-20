(function () {
    $(() => {
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
        //     let ipage = 1; //第一页数据
        //     let num = 5; //每页显示5条

        //     $.ajax({
        //         type: "get",
        //         url: "../api/03list.php",
        //         data: {
        //             page: ipage,
        //             num: num
        //         },
        //         // dataType: "json",
        //         success: function (response) {
        //             // console.log(response);
        //             // let str = JSON.parse(response);
        //             // console.log(response);
        //             // createItem(response);
        //             console.log(JSON.parse(response));
        //             create(JSON.parse(response))




        //         }
        //     });

        //     function create(res) {
        //         let str = res.map(function (item) {
        //             console.log(item);
        //             return `
        //     <li class="item" data-id="${item.id}">
        //     <div class="goods-content" goods-item="">
        //         <!--商品大图-->
        //         <div class="goods-pic"> <a href="/goods/107670" target="_blank" title="${item.dtala}"> 
        //         <img src="${item.imga}"
        //                     nc-goods-pic="" title="${item.dtala}" alt="${item.dtala}"> </a> </div>

        //         <!--商品详细信息-->
        //         <div class="goods-info">
        //             <!-- 价格 -->
        //             <div class="goods-price-deal offer-1">
        //                 <!--该商品如果是批发模式-->
        //                 <div class="goods-price-offer retail_goods_price">
        //                     <span class="number number-20 number-thin sale-price" title="商城价：￥129.00">
        //                         <span class="yuan">￥</span>
        //                         <span class="integer">${item.integera}.${item.decimala}</span>
        //                     </span>

        //                     <!-- 限时折扣 -->
        //                     ${item.disa?`<i>${item.disa}</i>`:""}
        //                 </div>
        //             </div>

        //             <!-- 标题 -->
        //             <div class="p-name">
        //                 <a href="./goods.html" target="_blank" title="中国地理标志产品 营养丰富 有益健康">
        //                     <p>
        //                         <span class="span1">${item.dtala}</span>
        //                         <span class="span2">${item.detaila}</span>
        //                     </p>
        //                 </a>
        //             </div>

        //             <!-- 成交、评论 -->
        //             <div class="p-commit">
        //                 <!-- 成交 -->
        //                 <strong class="m-r-20">
        //                     <a href="/goods/68476#ncGoodsRate" class="num" target="_blank" title="成交量">
        //                        ${item.numa}
        //                     </a>
        //                     笔成交
        //                 </strong>

        //                 <!-- 评论 -->
        //                 <strong class="m-r-10">
        //                     <a href="/goods/68476#ncGoodsRate" class="num" target="_blank" title="评论数">
        //                        ${item.stria}
        //                     </a>
        //                     条评论
        //                 </strong>
        //             </div>


        //             <!-- 官方店铺 -->
        //             <div class="p-shop">
        //                 <span>
        //                     <a title="${item.namea}" class="name">${item.namea}</a>
        //                 </span>
        //             </div>

        //             <!-- 自营 -->
        //             <div class="p-icons">
        //                 ${item.shoppa?`<i class="goods-icons">${item.shoppa}</i>`:""}
        //             </div>


        //             <!-- S 添加到购物车区域-->
        //             <div class="p-operate">
        //                 <!-- 收藏 -->
        //                 <div class="p-o-btn focus" id="favoriteBtn107670">
        //                     <a nc_type="goodsFavoritesBtn">
        //                         <i class="iconfont icon-xinaixin"></i>
        //                         收藏
        //                     </a>

        //                     <a nc_type="favorited" style="display: none;">
        //                         <span class="fa fa-star"
        //                             style="font-size:16px; margin-right:4px; vertical-align:middle">
        //                         </span>
        //                         已收藏
        //                     </a>
        //                 </div>

        //                 <!-- S 加入购物车等按钮区域-->
        //                 <div class="p-o-btn addcart">
        //                     <a class="" href="javascript:;">
        //                         <i class="iconfont icon-jiarugouwuche"> </i>
        //                         加入购物车
        //                     </a>
        //                 </div>
        //                 <!-- E 加入购物车等按钮区域-->

        //             </div>
        //             <!-- S 添加到购物车区域-->

        //         </div>
        //     </div>
        //     <div class="clear"></div>
        // </li>
        //     `
        //         }).join("")

        //         $(".list_pic").html(str)
        //     }

        $(".pagination").on("click", "li", function () {
            console.log($(this));
            $(this).addClass("active").siblings().removeClass("active");

        })








    });
})()