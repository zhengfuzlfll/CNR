(function () {
    $(() => {
        /* 加载头部 */
        $("#head").load("head_page.html", function () {
            $(".list-all").css("display", "none")
            /* 划过下拉列表，显示下拉列表，移出隐藏下拉列表 */
            $(".sort").hover(function () {
                $(".list-all").css("display", "block")
            }, function () {
                $(".list-all").css("display", "none")
            })
        })

        /* 底部 剩余区域 */
        $(".right li").eq(0).children().css("display", "block");
        $(".right li").eq(0).css("color", "red");
        console.log($(".right li").eq(0));
        $(".right ul").on("click", "li", function () {
            $(this).children().css("display", "block").siblings().css("display", "none");

            /* -- 注意点------*/
            $(this).children().css("z-index", "2").parent().siblings().children().css("z-index", "0");
            // console.log();

            // $(this).addClass("act").siblings().removeClass("act");
            $(this).css("color", "red").siblings().css("color", "black");
            console.log($(this), $(this).children());
            // data("id")
        })


        /* 根据存的商品id 取  cookie */
        console.log(getCookie("gid"));
        let gid = getCookie("gid");
        $.ajax({
            type: "get",
            url: "../api/04goods.php",
            data: {
                gid: gid
            },
            dataType: "json",
            success: function (response) {
                // console.log(response[0]);
                creat(response)
            }
        });


        /*  mouseover() 鼠标进入（进入子元素也触发）
            mouseout() 鼠标离开（离开子元素也触发）
            mouseenter() 鼠标进入（进入子元素不触发） -----------
            mouseleave() 鼠标离开（离开子元素不触发）
        */


        /* ------------渲染有误------- */
        function creat_A(res) {
            console.log(res);
            /* 数据渲染 */
            let str = res.map(function (item) {
                return `<div class="ncsGoodsPicture">
                        <!-- 大图 -->
                        <a id="Zoomer" class="wrap">
                            <!-- 右边 放大图 -->
                            <div class="MagicZoomBigImageCont biger">
                            <img src="" alt="">
                           
                            </div>
                            <!--左边 中图+遮罩 -->
                            <div id="bigimg" class="imgs main">
                                <<img src="" alt="">
                               
                                <div class="mask"></div><!-- 遮罩 -->
                            </div>
                        </a>

                        <!-- 小图 -->
                        <div class="controller">
                            <div class="goods-pic-box">
                                <ul class="ncsGoodsPicList">
                                    <li><a><img src="${item.imga}" alt=""></a></li>
                                    <li><a><img src="${item.img2}" alt=""></a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- 分享 -->
                        <div id="content" class="ncs-handle">
                            <ul>
                                <li class="item">
                                    <span class="iconfont icon-shoucang"></span>
                                    <span>收藏商品</span>
                                    <span>0</span>
                                </li>
                                <li class="item item2">
                                    <span class="iconfont icon-fenxiang3"></span>
                                    <span>分享</span>
                                    <span class="iconfont icon-xiajiantoushixinxiao
                                    "></span>
                                    <ul>
                                        <li class="list2">新浪</li>
                                        <li class="list2">微信</li>
                                    </ul>
                                </li>
                                <li class="item item3">
                                    <span class="iconfot icon-erweima"></span>
                                    <span>移动端购买</span>
                                    <img src="../img/06goods/68861.gif" alt="">
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div class="ncs-goods-summary">
                        <!-- 标题 -->
                        <div class="ncs-goods-name">
                            <h1>${item.dtala}</h1>
                        </div>
                        <!-- 价格 -->
                        <div class="ncs-meta">
                            <dl id="goodsPriceHtml">
                                <dt>价格</dt>
                                <dd>
                                    <span class="goods-price-real">
                                        <strong id="rmPrice" class="number number-thin">
                                            <span class="yuan">￥</span>
                                            <span class="integer">${item.integera}</span>
                                            <span class="pointer">.</span>
                                            <span class="decimal">${item.decimala}</span>
                                        </strong>
                                    </span>
                                </dd>
                            </dl>
                        </div>
    
                        <!-- 物流 -->
                        <div class="ncs-logistics">
                            <dl id="ncs-freight" class="ncs-freight">
                                <dt>物流</dt>
                                <dd class="ncs-freight_box">
                                    <div class="fl m-r-5">配送至</div>
                                    <div id="ncsFreightSelector" class="ncs-freight-select">
                                        <div class="text">
                                            <div id="areaInfoText">广东省广州市荔湾区</div>
                                            <b>∨</b>
                                        </div>
                                        <div class="content" style="display: none;">
                                            <div id="ncs-stock" class="ncs-stock" data-widget="tabs">
                                                <div class="mt">
                                                    <ul class="tab" id="ncsTopTabs">
                                                        <li data-index="0" data-widget="tab-item" class=""> <a href="#none"
                                                                class="hover"><em>广东省</em><i> ∨</i></a> </li>
                                                        <li data-index="1" data-widget="tab-item" class=""><a
                                                                href="javascript:;" class="hover"><em>广州市</em><i> ∨</i></a>
                                                        </li>
                                                        <li data-index="2" data-widget="tab-item" class=""><a
                                                                href="javascript:;" class="hover"><em>荔湾区</em><i> ∨</i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                
                                                
                                                
                                            </div>
                                        </div>
                                        <!--<a href="javascript:;" class="close" id="areaPanelClose">关闭</a>-->
                                    </div>
                                    <div id="ncs-freight-prompt"><strong>有货</strong><span>免运费</span></div>
                                </dd>
                            </dl>
                        </div>
    
                        <!-- 服务 -->
                        <div class="ncs-service">
                            <dl>
                                <dt>服务</dt>
                                <dd>
                                    非自营&nbsp;由&nbsp;&nbsp;
                                    <a target="_blank">
                                        <span class="service-name">边走边淘食品旗舰店&nbsp;&nbsp;</span>
                                    </a>
                                    发货，并提供售后服务。
                                </dd>
                            </dl>
                        </div>
    
                        <!-- 加入购物车 -->
                        <div class="ncs-key" id="nc-spec-panel">
                            <div id="modalNullPanel">
                                <div class="ncs-retail-modal">
    
                                    <dl>
                                        <dt class="ncs-number">数量</dt>
                                        <dd>
                                            <div id="rmNumValuePanel" class="amount" style="display: block; ">
                                                <span id="mnBuyNumCutBtn" class="minus crisis" title="减少">-</span>
                                                <input type="text" name="" id="mnBuyNumInput" value="1">
                                                <span id="mnBuyNumAddBtn" class="plus" title="增加"> + </span>
                                            </div>
                                            <!-- S 库存提示-->
                                            <div class="m-l-10 fl" id="storageHint">（库存<span
                                                    nctype="goods_stock">4512</span>
                                                <!--by[szq] 修改商品单位显示 -->
                                                <!--by[szq] 修改商品单位显示 -->）</div>
                                            <!-- E 库存提示-->
                                        </dd>
                                    </dl>
                                </div>
                                <div class="ncs-buy">
                                    <!-- S 购买按钮组-->
                                    <div class="ncs-btn">
                                        <!-- 立即购买-->
                                        <a href="javascript:void(0);" id="buyNowSubmitBtn" class="buynow"
                                            title="立即购买">立即购买</a>
                                        <!-- 加入购物车-->
                                        <a href="javascript:void(0);" id="addCartBtn" class="addcart" title="加入购物车">
                                            <i class="iconfont icon-jiarugouwuche"></i>加入购物车 </a>
                                    </div>
                                    <!-- S 购买按钮组-->
                                </div>
                            </div>
                        </div>
                        <!-- 温馨提示 -->
                        <div class="ncs-cti m-t-10">
                            <dl>
                                <dt>温馨提示</dt>
                                <dd>
                                    <p style="color:#999">国家药监局提示您：如您购买化妆品类商品，请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                        
                        `
            }).join("");
            $(".ncs-detail").prepend(str);

            /* 小图高亮 */
            /* 默认第一个显示 */
            $(".ncs-detail .ncsGoodsPicList").find("a").eq(0).css("border-color", "red"); /* 高亮 */
            $('.ncs-detail .bigimg')[0].src = $(".ncsGoodsPicList").children().eq(0).find("img")[0].src; /*中图 图片地址 */
            $(".ncs-detail .maximg")[0].src = $(".ncsGoodsPicList").find('img')[0].src; /* 大图 */

            // console.log($(".ncs-detail .ncsGoodsPicList").find("a").eq(0));


            $(".ncsGoodsPicList").on("mouseenter", "li", function () {
                console.log($(this));

                $(this).find("a").css("border-color", "red").siblings().css("border-color", "white");
                // console.log($(this).children()); /* a标签 */
                // console.log($(this).find("a"));

                $('.bigimg')[0].src = $(this).find('img')[0].src; /*小图切换 大图跟着切换 */
                $(".maximg")[0].src = $(this).find('img')[0].src;
                // console.log($('.bigimg')[0].src);
            })



            let bigimg = $("#bigimg"); /* 遮罩+左边原图的外层标签 */
            let mask = $(".mask") /* 遮罩 */

            let bigpicMove = $(".maximg"); /* 大图 */
            let biger = $(".biger") /* 大图 外层*/

            bigimg.mouseenter(function () {
                mask.css("display", "block");
            })
            bigimg.mouseleave(function () {
                mask.css("display", "none");

            })
            // console.log(bigpicMove);
            // 
            // console.log(mask.height());
            // console.log($("#Zoomer").height());
            /* 
                获取页面某一元素的绝对X,Y坐标，可以用offset()：
                var X = $(‘#DivID’).offset().top;
                var Y = $(‘#DivID’).offset().left;
    
                获取相对(父元素)位置:
                var X = $(‘#DivID’).position().top;
                var Y = $(‘#DivID’).position().left;
    
                通过getBoundingClientRect方法获取对象位置，包含： left , top , right , bottom 4个参数值。
            */
            /* 放大镜 遮罩 */
            bigimg.mousemove(function (ev) {
                // console.log(66);
                let left = ev.pageX - $("#Zoomer").offset().left - mask.width() / 2;
                let top = ev.pageY - $("#Zoomer").offset().top - mask.height() / 2;
                // console.log(left, top);
                // console.log(ev.pageX);

                // console.log();

                /*遮罩 水平临界点 */
                if (left <= 0) {
                    left = 0;
                } else if (left >= (bigimg.width() - mask.width())) {
                    left = bigimg.width() - mask.width();
                }
                /*遮罩 垂直临界点 */
                if (top <= 0) {
                    top = 0;
                } else if (top >= bigimg.height() - mask.height()) {
                    top = bigimg.height() - mask.height();
                }

                mask.css("left", left);
                mask.css("top", top)



                /* 比例系数 */
                // var scalX = left / (bigimg.width() - mask.width());
                // var scalY = top / (bigimg.height() - mask.height());
                // var scalX=

                // 大图运动计算公式
                var iLeft = (biger.width() - bigpicMove.width()) * scalX;
                var iTop = (biger.height() - bigpicMove.height()) * scalY;
                // bigpicMove.style.left = iLeft + 'px';
                // bigpicMove.style.top = iTop + 'px';
                bigpicMove.css("left", iLeft + "px");
                bigpicMove.css("top", iTop + "px");
            });
        }



        /* 渲染数据   重新渲染---------------  */
        function creat(str) {
            console.log(str);
            let goods = str.map(item => {
                return `   
                <!-- 放大镜 -->
                <div class="ncsGoodsPicture">
                    <!-- 大图 -->
                    <a id="Zoomer" class="wrap">
                        <!-- 右边 放大图 -->
                        <div class="MagicZoomBigImageCont biger">
                            <img class="maximg" class="" src="" alt="">
                        </div>
                        <!--左边 中图+遮罩 -->
                        <div id="bigimg" class="imgs main">
                            <img class="bigimg" src="" alt=""><!-- 原图 -->
                            <div class="mask"></div><!-- 遮罩 -->
                        </div>
                    </a>

                    <!-- 小图 -->
                    <div class="controller">
                        <div class="goods-pic-box">
                            <ul class="ncsGoodsPicList">
                                <li><a><img class="img1" src="${item.imga}" alt=""></a></li>
                                <li><a><img src="${item.img2}" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- 分享 -->
                    <div id="content" class="ncs-handle">
                        <ul>
                            <li class="item">
                                <span class="iconfont icon-shoucang"></span>
                                <span>收藏商品</span>
                                <span>0</span>
                            </li>
                            <li class="item item2">
                                <span class="iconfont icon-fenxiang3"></span>
                                <span>分享</span>
                                <span class="iconfont icon-xiajiantoushixinxiao
                                "></span>
                                <ul>
                                    <li class="list2">新浪</li>
                                    <li class="list2">微信</li>
                                </ul>
                            </li>
                            <li class="item item3">
                                <span class="iconfot icon-erweima1"></span>
                                <span>移动端购买</span>
                                <img src="../img/06goods/68861.gif" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 添加购物车 -->
                <div class="ncs-goods-summary">
                    <!-- 标题 -->
                    <div class="ncs-goods-name">
                        <h1>${item.detaila}</h1>
                    </div>
                    <!-- 价格 -->
                    <div class="ncs-meta">
                        <dl id="goodsPriceHtml">
                            <dt>价格</dt>
                            <dd>
                                <span class="goods-price-real">
                                    <strong id="rmPrice" class="number number-thin">
                                        <span class="yuan">￥</span>
                                        <span class="integer">${item.integera}</span>
                                        <span class="pointer">.</span>
                                        <span class="decimal">${item.decimala}</span>
                                    </strong>
                                </span>
                            </dd>
                        </dl>
                    </div>

                    <!-- 物流 -->
                    <div class="ncs-logistics">
                        <dl id="ncs-freight" class="ncs-freight">
                            <dt>物流</dt>
                            <dd class="ncs-freight_box">
                                <div class="fl m-r-5">配送至</div>
                                <div id="ncsFreightSelector" class="ncs-freight-select">
                                    <div class="text">
                                        <div id="areaInfoText">广东省广州市荔湾区</div>
                                        <b>∨</b>
                                    </div>
                                </div>
                                <div id="ncs-freight-prompt"><strong>有货</strong><span>免运费</span></div>
                            </dd>
                        </dl>
                    </div>

                    <!-- 服务 -->
                    <div class="ncs-service">
                        <dl>
                            <dt>服务</dt>
                            <dd>
                                非自营&nbsp;由&nbsp;&nbsp;
                                <a target="_blank">
                                    <span class="service-name">边走边淘食品旗舰店&nbsp;&nbsp;</span>
                                </a>
                                发货，并提供售后服务。
                            </dd>
                        </dl>
                    </div>

                    <!-- 加入购物车 -->
                    <div class="ncs-key" id="nc-spec-panel">
                        <div id="modalNullPanel">
                            <div class="ncs-retail-modal">

                                <dl>
                                    <dt class="ncs-number">数量</dt>
                                    <dd>
                                        <div id="rmNumValuePanel" class="amount" style="display: block; ">
                                            <span id="mnBuyNumCutBtn" class="minus crisis" title="减少">-</span>
                                            <input type="text" name="" id="mnBuyNumInput" value="1">
                                            <span id="mnBuyNumAddBtn" class="plus" title="增加"> + </span>
                                        </div>
                                        <!-- S 库存提示-->
                                        <div class="m-l-10 fl" id="storageHint">（库存<span
                                                nctype="goods_stock">4512</span>
                                            <!--by[szq] 修改商品单位显示 -->
                                            <!--by[szq] 修改商品单位显示 -->）</div>
                                        <!-- E 库存提示-->
                                    </dd>
                                </dl>
                            </div>
                            <div class="ncs-buy">
                                <!-- S 购买按钮组-->
                                <div class="ncs-btn">
                                    <!-- 立即购买-->
                                    <a href="javascript:void(0);" id="buyNowSubmitBtn" class="buynow"
                                        title="立即购买">立即购买</a>
                                    <!-- 加入购物车-->
                                    <a href="javascript:void(0);" id="addCartBtn" class="addcart" title="加入购物车">
                                        <i class="iconfont icon-jiarugouwuche"></i>加入购物车 </a>
                                </div>
                                <!-- S 购买按钮组-->
                            </div>
                        </div>
                    </div>
                    <!-- 温馨提示 -->
                    <div class="ncs-cti m-t-10">
                        <dl>
                            <dt>温馨提示</dt>
                            <dd>
                                <p style="color:#999">国家药监局提示您：如您购买化妆品类商品，请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病</p>
                            </dd>
                        </dl>
                    </div>


                </div>

                `
            })
            /* ---插入到标签下作为第一个子节点-- */
            $(".ncs-detail2").prepend(goods);

            // let price = ($(".integer").html() + $(".pointer").html() + $(".decimal").html()) * 1;
            // let price = $(".integer" + )
            // console.log(price);


            /* 小图高亮 */
            /* 默认第一个显示 */
            $(".ncs-detail .ncsGoodsPicList").find("a").eq(0).css("border-color", "red"); /* 高亮 */
            $('.ncs-detail .bigimg')[0].src = $(".ncsGoodsPicList").children().eq(0).find("img")[0].src; /*中图 图片地址 */
            $(".ncs-detail .maximg")[0].src = $(".ncsGoodsPicList").find('img')[0].src; /* 大图 */
            $(".ncsGoodsPicList").on("mouseenter", "li", function () {
                console.log($(this));

                $(this).find("a").css("border-color", "red").parent().siblings().find("a").css("border-color", "white");
                // console.log($(this).children()); /* a标签 */
                // console.log($(this).find("a"));

                $('.bigimg')[0].src = $(this).find('img')[0].src; /*小图切换 大图跟着切换 */
                $(".maximg")[0].src = $(this).find('img')[0].src;
                // console.log($('.bigimg')[0].src);
            })


            /* -------放大镜-------- */
            let bigimg = $("#bigimg"); /* 遮罩+左边原图的外层标签 */
            let mask = $(".mask") /* 遮罩 */
            let bigpicMove = $(".maximg"); /* 右边大图的图标签 */
            let biger = $(".biger"); /* 右边大图的外层标签 */
            /* 移入原图显示遮罩和大图，移出隐藏 */
            bigimg.mouseenter(function () {
                mask.css("display", "block");
                biger.css("display", "block");
            })
            bigimg.mouseleave(function () {
                mask.css("display", "none");
                biger.css("display", "none");
            })
            /*遮罩+大图 运动 */
            bigimg.mousemove(function (ev) {
                // console.log(66);
                let left = ev.pageX - $("#Zoomer").offset().left - mask.width() / 2;
                let top = ev.pageY - $("#Zoomer").offset().top - mask.height() / 2;
                // console.log(left, top);
                // console.log(ev.pageX);

                // console.log();

                /*遮罩 水平临界点 */
                if (left <= 0) {
                    left = 0;
                } else if (left >= (bigimg.width() - mask.width())) {
                    left = bigimg.width() - mask.width();
                }
                /*遮罩 垂直临界点 */
                if (top <= 0) {
                    top = 0;
                } else if (top >= bigimg.height() - mask.height()) {
                    top = bigimg.height() - mask.height();
                }

                mask.css("left", left);
                mask.css("top", top)


                /* 比例系数 */
                var scalX = left / (bigpicMove.width() - mask.width());
                var scalY = top / (bigpicMove.height() - mask.height());

                // 大图运动计算公式
                var iLeft = (biger.width() - bigpicMove.width()) * scalX;
                var iTop = (biger.height() - bigpicMove.height()) * scalY;

                bigpicMove.css("left", iLeft);
                bigpicMove.css("top", iTop);
            });

            /*订单数量值  */
            // let num = $("#mnBuyNumInput").val();
            /* 添加购物车 */
            $("#addCartBtn").on("click", function () {
                let num = $("#mnBuyNumInput").val();
                // console.log(666);
                if (num && num != 0) {
                    num == $("#mnBuyNumInput").val() * 1;
                    let gid = getCookie("gid") * 1; /* 商品id */
                    let uid = getCookie("uid") * 1; /* 用户id */
                    let img = $(".img1")[0].src; /* 图片路径 */
                    // console.log($(".img1")[0].src);
                    // let price = $(".integer" + $(".pointer").$(".decimal"))
                    // let totalprice=
                    let price = (($(".integer").html() + $(".pointer").html() + $(".decimal").html()) * 1).toFixed(2); /* 单价  保留两位小数 */
                    // console.log(price);
                    let totalprice = price * num; /* 总价 */
                    let title = $(".ncs-goods-name h1").html(); /* 标题 */

                    let loginName = getCookie("loginName");
                    console.log(loginName);

                    if (loginName == undefined) {
                        if (confirm("请先登录")) {
                            window.location.href = "./login.html";
                        }

                    } else if (confirm(`您已添加${num}件商品,去结算？`)) {

                        // console.log(confirm() == true);

                        $.ajax({
                            type: "post",
                            url: "../api/04goods_2.php",
                            data: {
                                /*商品id  */
                                gid: gid,
                                /* 用户id */
                                uid: uid,
                                /* 商品数量 */
                                num: num,
                                /* 图片 */
                                img: img,
                                /* 标题 */
                                title: title,
                                /* 单价 */
                                price: price,
                                /* 总价 */
                                totalprice: totalprice
                            },
                            dataType: "json",
                            success: function (response) {
                                console.log(response);
                                window.location.href = "./car.html";

                            }
                        });
                        // window.location.href = "./car.html";
                    }
                    // if (confirm("请先登录")) {
                    //     window.location.href = "./login.html";
                    // } else {

                    // }
                    // alert("请先登录！");
                    // if (confirm("请先登录")) {
                    //     window.location.href = "./login.html";
                    // }
                    // if (confirm(`您已添加${num}件商品,去结算？`)) {
                    //     console.log(uid);

                    // } else {

                    // }
                } else {
                    alert("商品不能为空!")
                    $("#mnBuyNumInput").val("1")
                }
                // console.log(num);
                //    

            })
            // console.log(num);

            /* 减少数量 */
            $("#mnBuyNumCutBtn").on("click", function () {
                let num = $("#mnBuyNumInput").val();
                // console.log(666);
                if (num <= 1) {
                    $("#mnBuyNumInput").val("1");
                } else {
                    num--;
                    $("#mnBuyNumInput").val(num);
                    console.log(num);


                }

            })

            /*增加数量 */
            $("#mnBuyNumAddBtn").on("click", function () {
                let num = $("#mnBuyNumInput").val();
                // console.log(666);
                // if (num <= 1) {
                //     $("#mnBuyNumInput").val("1");
                // } else {
                num++;
                $("#mnBuyNumInput").val(num);
                console.log(num);

                // }

            })



        }



        /* ------加载底部---- */
        $("#foot").load("./footer_page.html")
    })

})()