$("#header").load("head.html"); /* 加载头部 */
$("#footer").load("foot.html"); /* 加载底部 */

/*手机号验证  */
$(".regist-slide").click(() => {


    if ($("#mobileAgreeClause").prop("checked")) {
        $("#agreeClause").css('display', 'none');
        // $(".clause-div").addClass("act");

    } else {
        $("#agreeClause").css('display', 'block').html('<i class="iconfont icon-jinggao"></i>&nbsp;&nbsp;' +
            "请勾选服务协议");
        // isok = false;
    }

    // console.log($("#mobile").val().trim());
    let phoneReg = /^1[3-9]\d{9}$/; /* 手机验证码 */
    let phone = $("#mobile").val().trim();
    if (phone) {
        if (phoneReg.test(phone)) {

            $.ajax({
                type: "post",
                url: "../api/01reg_1.php",
                data: {
                    phone: phone
                },
                // dataType: "dataType",
                success: function (response) {
                    // console.log(response);
                    console.log(response);

                    if (response == 1) {
                        /* 数据库没有数据 */
                        $(".mobileerror").css("display", "none");
                        $("#slider").css("display", "block");
                        var slider = new SliderUnlock('#slider', {
                            successLabelTip: '验证通过'
                        }, function () {
                            alert("验证成功");
                            // if(confirm())
                            $("#slider").css("display", "none");
                            $(".mobileFormFirst").css("display", "none");
                            $("#mobileFormSecond").css("display", "block");
                            setCookie("phone", phone);
                            let phoneCookie = getCookie("phone");
                            let str2 = phoneCookie.replace(phoneCookie.slice(3, 7),
                                "****")
                            $(".phonemsg").html(str2);

                            /* -----60秒倒计时----- */
                            let countDown = 60;
                            let timer = setInterval(function () {
                                if (countDown < 0) {
                                    clearInterval(timer);
                                    $("#first-code").css("display", "none");
                                    $(".send-code").css("display",
                                        "block");
                                } else {

                                    $("#cutdown").html(countDown);
                                    countDown--;
                                }

                            }, 1000)
                        });
                        slider.init();

                    } else if (response == 0) {
                        /* 数据库中有此数据 */
                        $(".mobileerror").css("display", "block").html(
                            '<i class="iconfont icon-jinggao"></i>&nbsp;&nbsp;' +
                            "该手机号已注册");

                    }

                }
            });
        } else {
            $(".mobileerror").css("display", "block").html(
                '<i class="iconfont icon-jinggao"></i>&nbsp;&nbsp;' +
                "请输入正确的手机号");
        }

    } else {
        $(".mobileerror").css("display", "block").html('<i class="iconfont icon-jinggao"></i>&nbsp;&nbsp;' +
            "手机号不能为空");
    }



})
/* -----注册按钮 ------*/
/* 注册 */
$(".submit-div").click(() => {
    // console.log(666666);
    // $(".pwdTip").append()
    // console.log(666);
    let phone = $("#mobile").val().trim();

    let code = $("#authCode").val().trim(); /* 动态码 */
    let mobileMemberPwd = $("#mobileMemberPwd").val().trim(); /* 设置密码 */
    let mobileRepeatMemberPwd = $("#mobileRepeatMemberPwd").val().trim(); /* 重复密码 */
    console.log(code + "=动态码");
    console.log(mobileMemberPwd + "=设置密码");
    console.log(mobileRepeatMemberPwd + "=重复密码");


    let codeReg = /\d{6}/; /* 动态码 */
    let passwordReg = /[0-9a-zA-Z]{6,20}/; /* 设置密码 */

    /* 动态码 */
    if (code) {
        if (codeReg.test(code)) {
            $("#code #agreeClause").css("display", "none");
            $("#code").parent().addClass("act");
        } else {
            $("#code").append(`<label for="agreeClause" class="error" id="agreeClause">
            <i class="iconfont icon-jinggao"></i>&nbsp;&nbsp; 短信动态码错误
            </label>`)
        }
    } else {
        $("#code").append(`<label for="agreeClause" class="error" id="agreeClause">
        <i class="iconfont icon-jinggao"></i>&nbsp;&nbsp; 短信动态不能为空
        </label>`)
    }

    /* 设置密码 */
    if (mobileMemberPwd) {
        // console.log(6666666666);
        if (passwordReg.test(mobileMemberPwd)) {
            $("#password #agreeClause").css("display", "none")
            $("#password").parent().addClass("act");
        } else {
            $("#password").append(`<label for="agreeClause" class="error" id="agreeClause">
            <i class="iconfont icon-jinggao"></i>&nbsp;&nbsp;密码为6-20个字符
            </label>`)
        }

    } else {
        $("#password").append(`<label for="agreeClause" class="error" id="agreeClause">
            <i class="iconfont icon-jinggao"></i>&nbsp;&nbsp; 密码不能为空
            </label>`)
    }


    /* 重复密码 */
    if (mobileRepeatMemberPwd) {
        if (mobileRepeatMemberPwd == mobileMemberPwd) {
            $("#pwd_repeat .error").css("display", "none")
            $("#pwd_repeat").parent().addClass("act");
        } else {
            $("#pwd_repeat").append(`<label for="agreeClause" class="error" id="agreeClause">
            <i class="iconfont icon-jinggao"></i>&nbsp;&nbsp;密码不一致
            </label>`)
        }
    } else {
        $("#pwd_repeat").append(`<label for="agreeClause" class="error" id="agreeClause">
        <i class="iconfont icon-jinggao"></i>&nbsp;&nbsp;请再次输入密码
        </label>`)
    }

    /* 注册成功跳转 */
    if ($("#code").parent().hasClass("act") && $("#password").parent().hasClass("act") && $("#pwd_repeat").parent().hasClass("act")) {
        //    alert
        // let phone

        $.ajax({
            type: "post",
            url: "../api/01reg_2.php",
            data: {
                phone: phone,
                password: mobileMemberPwd
            },
            dataType: "dataType",
            success: function (response) {

            }
        });

        window.location.href = "./login.html"

    } else {
        alert("请检查信息填写是否有误");
    }
})