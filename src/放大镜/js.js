// window.onload(function () {
var wrap = document.querySelector(".wrap");
var main = document.querySelector(".main");
var biger = document.querySelector(".biger");
var mask = document.querySelector(".mask");
// var prev =
console.log(main);

//01- 移入显示遮罩和大图
main.onmouseenter = function () {
    biger.style.display = "block";
    mask.style.display = "block";
}
main.onmouseleave = function () {
    biger.style.display = "none";
    mask.style.display = "none";
}

// 02-遮罩运动
for (var i = 0, len = biger.children.length; i < len; i++) {
    var bigpicMove = biger.children[i]; //大图
    biger.children[i].x = i;

    main.onmousemove = function (ev) {
        var left = ev.pageX - wrap.offsetLeft - mask.offsetWidth / 2;
        var top = ev.pageY - wrap.offsetTop - mask.offsetHeight / 2;

        if (left <= 0) { //水平临界点
            left = 0;
        } else if (left >= (main.offsetWidth - mask.offsetWidth)) {
            left = main.offsetWidth - mask.offsetWidth;
        }

        if (top <= 0) { //垂直临界点
            top = 0;
        } else if (top >= (main.offsetHeight - mask.offsetHeight)) {
            top = main.offsetHeight - mask.offsetHeight;
        }

        mask.style.left = left + 'px';
        mask.style.top = top + 'px';

        // console.log(biger.children[this.x]); 
        // for (var k = 0, len = biger.children.length; k < len; k++) {
        //     biger.children[k] = "z-index: 0;"
        // }
        // biger.children[this.x] = "z-index: 2;"

        /*//5.难点：遮罩mark在运动的时候，大图bigpic里面的图片要跟着运动，
        用比例系数约束；大图运动是朝着左上角运动，所以left和top值都是负数；
        运动计算公式：var left = (大图盒子宽度 - 里面图片宽) * 比例系数；
        比例系数：var scal = 遮罩的left / 遮罩最大运动距离；*/

        // 比例系数
        var scalX = left / (main.offsetWidth - mask.offsetWidth);
        var scalY = top / (main.offsetHeight - mask.offsetHeight);

        // 大图运动计算公式
        var iLeft = (biger.offsetWidth - bigpicMove.offsetWidth) * scalX;
        var iTop = (biger.offsetHeight - bigpicMove.offsetHeight) * scalY;

        bigpicMove.style.left = iLeft + 'px';
        bigpicMove.style.top = iTop + 'px';
    }

}

var lis = document.querySelectorAll(".smaller li");
var imgs = document.querySelectorAll(".smaller img") //img
console.log(lis);

console.log(main.children[0].src);
console.log(imgs[0].src);

// 小图的框
for (var i = 0, len = lis.length; i < len; i++) {
    lis[i].x = i;

    lis[i].onmouseenter = function () {
        for (var k = 0, len = lis.length; k < len; k++) {
            lis[k].className = '';
            // biger.children[k] = "z-index: 0;"
        }
        lis[this.x].className = "active";
        // biger.children[this.y] = "z-index: 2;"
        // console.log(this.x);
        // console.log(this.y);

    }
}

// img切换------切换src
for (var i = 0, len = imgs.length; i < len; i++) {
    imgs[i].x = i;
    imgs[i].onmouseenter = function () {
        console.log(this.src);
        main.children[0].src = this.src; //原图
        biger.children[0].src = this.src; //放大图
    }
}



// })