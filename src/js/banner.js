//轮播图插件-面向对象开发的插件
class Lunbo {
    constructor(opt) {
        this.defaultOpt = { //默认参数
            iw: 810,
            ih: 320,
            speed: 2,
            btnHide: false
        }
        this.now = 0;
        //替补方案
        Object.assign(this.defaultOpt, opt); //使用默认的参数
    }

    init() {
        //查找节点，绑定事件
        this.box = document.querySelector(this.defaultOpt.ele);
        this.ul = this.box.querySelector('ul');
        this.page = this.box.querySelector('.page');
        this.prevbtn = this.box.querySelector('.btn-prev');
        this.nextbtn = this.box.querySelector('.btn-next');
        this.timer = null; //初始化定时器
        this.creat(); //渲染数据
        this.setData(); //设置参数
        this.move(); //自动轮播
        this.stop(); //鼠标移入停止，鼠标移出继续运动
        //绑定事件
        this.nextbtn.onclick = () => {
            this.next();
        }
        this.prevbtn.onclick = () => {
            this.prev();
        }
        this.page.onclick = ev => {
            this.change(ev.target);
        }
    }

    creat() {
        //渲染数据
        let str = ''; //li字符串
        let str2 = ''; //span字符串
        this.defaultOpt.imglist.forEach((item, index) => {
            str += `<li data-index="${index}"><img style="width:${this.defaultOpt.iw}px;height:${this.defaultOpt.ih}px" src="${item}"></li>`;
            str2 += `<span class="">${index + 1}</span>`;
        });
        this.ul.innerHTML = str;
        this.page.innerHTML = str2;
    }

    setData() { //配置数据
        //拼接一个图片在末尾，设置ul宽度
        let firstLi = this.ul.children[0].cloneNode(true);
        this.ul.appendChild(firstLi);
        this.ul.style.width = this.ul.children[0].offsetWidth * this.ul.children.length + 'px';
        this.box.style.width = this.defaultOpt.iw + 'px';
        this.box.style.height = this.defaultOpt.ih + 'px';
        this.page.children[0].className = 'active';
    }

    move() { //运动

        this.timer = setInterval(() => {
            this.next();
        }, this.defaultOpt.speed * 1000);
    }

    next() { //下一张
        this.now++;
        this.tab();
    }

    prev() { //上一张
        this.now--;
        this.tab();
    }

    tab() {
        let iw = this.ul.children[0].offsetWidth;
        if (this.now > this.ul.children.length - 1) { //关键代码
            this.now = 1;
            this.ul.style.left = 0;
        }
        if (this.now < 0) {
            this.now = this.ul.children.length - 2;
            this.ul.style.left = (this.ul.children.length - 1) * -iw + 'px';
        }

        startMove(this.ul, {
            'left': this.now * -iw
        });
        this.lignt(); //焦点跟随
    }

    stop() {
        this.box.onmouseover = () => {
            clearInterval(this.timer);
        }
        this.box.onmouseout = () => {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.next();
            }, this.defaultOpt.speed * 1000);
        }
    }

    lignt() {
        for (let ele of this.page.children) {
            ele.className = '';
        }
        let index = this.ul.children[this.now].dataset.index;
        this.page.children[index].className = 'active';
    }

    change(target) {
        if (target.tagName == 'SPAN') {
            // console.log(ev.target.innerHTML - 1);
            this.now = target.innerHTML - 1;
            this.tab();
        }
    }
}