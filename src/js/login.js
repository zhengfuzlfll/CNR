// $("login-tabs-nav")
// console.log($(".login-tabs-nav"));
// console.log($(".login-tabs-nav li"));
/* 切换表单 */
$(".login-tabs-nav li").click(function () {
    // console.log($(this));
    $(this).addClass("active").siblings().removeClass("active");
    // if ()
    // console.log($(this));
    if ($(this).hasClass("mobilePhoneLogin")) {
        /* 动态码登录显示，密码登录隐藏 */
        $("#mobileModule").css("display", "block"); /* 密码登录 */
        $(".commonModule").css("display", "none"); /* 动态码 */
    } else if ($(this).hasClass("userLogin")) {
        /* 动态码登录隐藏，密码登录显示 */
        $("#mobileModule").css("display", "none"); /* 动态码 */
        $(".commonModule").css("display", "block"); /* 密码登录 */
    }

})

/* 登录验证 */
$(".slide-imgver-btn1").click(function () {
    // console.log(666);
    let loginName = $("#loginName").val().trim(); /* 用户名 */
    let loginNameReg = /^1[3-9]\d{9}$/

    /* 密码 */
    let memberPwd = $("#memberPwd").val().trim();
    let memberPwdReg = /[a-zA-Z\d]{6,20}/;

    console.log("用户名=" + loginName); /* 用户名 */
    console.log("密码=" + memberPwd);

    /* 用户名 */
    if (loginName) {
        if (loginNameReg.test(loginName)) {
            // console.log(666);
            $("#userLoginError").css("display", "none");
            $("#userLoginError").parent().parent().addClass("cur");
            /* 验证数据库中是否存在此手机号 */
            $.ajax({
                type: "post",
                url: "../api/02login.php",
                data: {
                    loginName: loginName
                },
                // dataType: "dataType",
                success: function (response) {
                    console.log(response);
                    if (response == 0) {
                        $("#userLoginError").css("display", "none");
                        // $("#userLoginError").html(`<i class="iconfont icon-jinggao"> </i>请检查手机号输入是否有误`);
                    } else {
                        $("#userLoginError").css("display", "block");
                        $("#userLoginError").html(`<i class="iconfont icon-jinggao"> </i>该账号不存在`);
                    }

                }
            });
        } else {
            // $("#userLoginError").css("display", "none");
            // $("#userLoginError").html(`<i class="iconfont icon-jinggao"></i>请检查手机号输入是否有误`);
            // console.log(222222222222);
            $("#userLoginError").css("display", "block");
            $("#userLoginError").html(`<i class="iconfont icon-jinggao"> </i>请检查手机号输入是否有误`);
            $("#userLoginError").parent().parent().removeClass("cur");
        }
    } else {
        $("#userLoginError").css("display", "block").html(`<i class="iconfont icon-jinggao"> </i>用户名不能为空`);
        $("#userLoginError").parent().parent().removeClass("cur");
    }

    /* 密码 */
    if (memberPwd) {
        if (memberPwdReg.test(memberPwd)) {
            // console.log(11111111);   
            $("#pweError").css("display", "none");
            $("#pweError").parent().addClass("cur");
        } else {
            // console.log(666666);

            $("#pweError").css("display", "block");
            $("#pweError").html(`<i class="iconfont icon-jinggao"> </i>请检查密码输入是否有误`);
            $("#pweError").parent().removeClass("cur")
        }
    } else {
        $("#pweError").css("display", "block").html(`<i class="iconfont icon-jinggao"> </i>密码不能为空`);
        $("#pweError").parent().removeClass("cur")
    }

    if ($("#userLoginError").parent().parent().hasClass("cur") && $("#pweError").parent().hasClass("cur")) {
        $.ajax({
            type: "post",
            url: "../api/02login_2.php",
            data: {
                loginName: loginName,
                memberPwd: memberPwd
            },
            // dataType: "dataType",
            success: function (response) {
                console.log(response);
                if (response == 0) {
                    if ($("#autoLogin").prop("checked")) {
                        /* 七天免登录 */
                        setCookie('loginName', loginName, 7);
                    }

                    /* 存cookie */
                    setCookie('loginName', loginName);
                    // alert("即将跳转至首页")
                    window.location.href = "./homepage.html";
                } else {
                    alert("登录失败，请重新登陆");
                }

            }
        });
        // if()
    } else {
        alert("请检查信息填写是否有误！")
    }

})

/* 七天免登录 */
$("#autoLogin").click(function () {
    // console.log(666);
    if ($("#autoLogin").prop("checked")) {
        /* 勾选 */
        $("#sevenDay").css("display", "block")
        // setCookie()

    } else {
        $("#sevenDay").css("display", "none")
    }
})

/* 手机动态码登录 */
$(".slide-imgver-btn2").click(function () {
    // console.log(666);
    let loginName2 = $(".loginName2").val().trim(); /* 用户名 */
    let loginNameReg2 = /^1[3-9]\d{9}$/
    console.log(loginName2);
    if (loginName2) {
        if (loginNameReg2.test(loginName2)) {
            $(".loginNameError2").css("display", "none");
            $(".loginNameError2").parent().parent().addClass("cur");
            $.ajax({
                type: "post",
                /* 公用同一个接口 */
                url: "../api/02login.php",

                data: {
                    loginName: loginName2
                },
                // dataType: "dataType",
                success: function (response) {
                    console.log(response);
                    if (response == 0) {
                        /* 数据库中有数据，证明已经注册 */
                        $("#userLoginError").css("display", "none"); /* 出现错误的提示框隐藏 */
                        $(".slide-imgver-btn2").css("display", "none"); /* 点击发送验证码的按钮 隐藏*/
                        // $("#userLoginError").html(`<i class="iconfont icon-jinggao"> </i>请检查手机号输入是否有误`);
                        $("#successPass").css("display", "block"); /* 验证通过的显示 */
                        $("#sent").css("display", "block"); /* 已发送验证码的提示 */
                        $("#cutDown").css("display", "block"); /* 倒计时显示 */
                        /* 60秒倒计时 */
                        let countDown = 60;
                        let timer = setInterval(function () {
                            if (countDown < 1) {
                                clearInterval(timer);
                                $("#cutDown").css("display", "none");
                                $("#successPass").css("display", "none");
                                $(".slide-imgver-btn2").css("display", "block");
                                $("#sent").css("display", "none");
                            } else {

                                $(".cutDown").html(countDown);
                                countDown--;
                            }

                        }, 1000)




                    } else {
                        // console.log(666666);
                        /* 未注册   提示账号不存在*/
                        $(".loginNameError2").css("display", "block");
                        $(".loginNameError2").html(`<i class="iconfont icon-jinggao"> </i>该账号不存在`);
                    }

                }
            });

        } else {
            $(".loginNameError2").css("display", "block");
            $(".loginNameError2").html(`<i class="iconfont icon-jinggao"> </i>请检查手机号输入是否有误`);
            $(".loginNameError2").parent().parent().removeClass("cur");
        }
    } else {
        $(".loginNameError2").css("display", "block").html(`<i class="iconfont icon-jinggao"> </i>手机号不能为空`);
        $(".loginNameError2").parent().parent().removeClass("cur");
    }
})



/* 手机动态码 ----- 登录按钮 */
$(".item-fore-logoin").click(function () {
    // console.log(666);

    let loginName3 = $("#loginName3").val().trim();
    // console.log(loginName3);

    let loginName3Reg = /^\d{6}$/;
    // console.log($("#loginNameError2"));
    if (loginName3) {
        if (loginName3Reg.test(loginName3)) {
            // console.log(7777);
            $("#loginNameError3").css("display", "none");
            if ($(".loginNameError2").parent().parent().hasClass("cur")) {
                setCookie("username", loginName3);
                window.location.href = "./homepage.html";
            }
        } else {
            $("#loginNameError3").css("display", "block").html(`<i class="iconfont icon-jinggao"> </i>验证码错误`);
            $("#loginNameError3").parent().parent().removeClass("cur");
        }


    } else {
        $("#loginNameError3").css("display", "block").html(`<i class="iconfont icon-jinggao"> </i>验证码不能为空`);
        $("#loginNameError3").parent().parent().removeClass("cur");
    }


})
// let loginNameError3 = $("#loginNameError3").val().trim();
// console.log(loginNameError3);