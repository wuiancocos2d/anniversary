const Mock = require('mockjs')



const postData = function () {
    return {
        "images": [
            {
                "src": "https://i.pinimg.com/236x/68/ed/c0/68edc0c04e09e7bf0ba0c4aa843bf290.jpg?b=t",
                "like": 10,
                "upUser": 'ian'
            },
            {
                "src": "https://i.pinimg.com/236x/77/53/40/77534014785235372db8f52e7206b45b.jpg",
                "like": 2
            },
            {
                "src": "https://i.pinimg.com/236x/eb/9c/00/eb9c00995677f25d7f719a850a950030.jpg",
                "like": 0
            },
            {
                "src": "https://i.pinimg.com/236x/aa/28/48/aa28485fba6dddef9c767b8de873e93e.jpg",
                "like": 0
            },
            {
                "src": "https://i.pinimg.com/236x/0a/cd/77/0acd7797c5ab8ee249dd5a9148e0611d.jpg",
                "like": 20
            },
            {
                "src": "https://i.pinimg.com/236x/04/e8/8a/04e88a48496c743df9744c8e62689cd6.jpg",
                "like": 1
            },
            {
                "src": "https://i.pinimg.com/236x/5a/52/26/5a52264944168672534661f6b02e6368.jpg",
                "like": 1
            },
            {
                "src": "https://i.pinimg.com/236x/ce/40/50/ce4050a03a81a15d2d0126dbe8e425ce.jpg",
                "like": 2
            },
            {
                "src": "https://i.pinimg.com/236x/93/c0/5e/93c05e0908046642545b4c6681108c11.jpg",
                "like": 2
            },
            {
                "src": "https://i.pinimg.com/236x/71/91/af/7191af9abf7d3d6ce2df5de1e0a20304.jpg?b=t",
                "like": 4
            },
            {
                "src": "https://i.pinimg.com/236x/f3/f9/e1/f3f9e151e689ee2298a32ef02d02f032.jpg",
                "like": 4
            },
            {
                "src": "https://i.pinimg.com/236x/29/cc/d7/29ccd787cd004e49db396160925534e6.jpg",
                "like": 4
            },
            {
                "src": "https://i.pinimg.com/236x/0f/24/ec/0f24ec8705375726885f90b7ff6f1745.jpg",
                "like": 30
            },
            {
                "src": "https://i.pinimg.com/236x/c4/1f/1f/c41f1f3aa06d56f49374ec4b3f09b0fc.jpg",
                "like": 300
            },
            {
                "src": "https://i.pinimg.com/236x/3d/73/b7/3d73b79a590d6384206fbba1661a6731.jpg",
                "like": 3000
            },
            {
                "src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",
                "like": 300
            },
        ]
    }
}

const userInfor = function () {
    return {
        userId: 1,
        userName: 'ian',
        authority: 10,
        code : 1
    }
}

const userLogin = function() {
    return {
        userId : 1,
        userName: 'ian',
        authority: 10
    }
}

const article = function() {
    return {
        'article': '<h1 style="text-align: center;">有哪一瞬间让你为祖国激动得热泪盈眶？</h1>'+
        '<div>作者：匿名用户<br>链接：https://www.zhihu.com/question/276636947/answer/394175032<br>来源：知乎<br>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。<br><br>'+
        '    <div>'+
        '        <p>我国家及我五千年历史之民族，绝不至亡于区区三岛倭奴之手！为国家民族死之决心，海不枯，石不烂，绝不半点改变！——张自忠</p>'+
        '        <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tzu-Chung_Chang.jpg/250px-Tzu-Chung_Chang.jpg" style="max-width:100%;"><br></figure>'+
        '        <p><br>我就是要死守长沙，你们两个（陈诚和白崇禧）是亡国大夫。胜了算我抗命，你们枪毙我。败了我自杀以谢国人！ ----薛岳<br>第三次长沙会战，关系国家存亡。岳抱必死决心、必胜信念。 -----薛岳</p>'+
        '        <figure><noscript><img src="https://pic4.zhimg.com/50/v2-beb64bffe8d43b81342e516905b0ff87_hd.jpg" width="1080"/></noscript><img src="https://pic4.zhimg.com/80/v2-beb64bffe8d43b81342e516905b0ff87_hd.jpg" width="1080"></figure>'+
        '                <p><br>敌人今晨由北门突入以后，即在城内展开巷战。我官兵伤亡殆尽，刻再已无兵可资堵击，职等誓以一死报党国，勉尽军人天职，决不负钧座平生教育至意。此电恐为最后一电，来生再见！”——方先觉</p>'+
        '                <figure><noscript><img src="https://pic3.zhimg.com/50/v2-4c823f7d6c8c242b62a3162cb04a9c50_hd.jpg" width="1080"/></noscript><img src="https://pic3.zhimg.com/80/v2-4c823f7d6c8c242b62a3162cb04a9c50_hd.jpg" width="1080"></figure>'+
        '                        <p><br></p>'+
        '                        <p>稽之往史，我民族若不能立足于中原、偏安江表，称曰南渡。南渡之人，未有能北返者。晋人南渡，其例一也；宋人南渡，其例二也；明人南渡，其例三也。风景不殊，晋人之深悲；还我河山，宋人之虚愿。吾人为第四次之南渡，乃能于不十年间，收恢复之全功，庾信不哀江南，杜甫喜收蓟北，此其可纪念者四也。<br> -----冯友兰</p>'+
        '                        <figure><noscript><img src="https://pic4.zhimg.com/50/v2-544c2fae54d25987d819ac8a45fce79e_hd.jpg" width="276"/></noscript><img src="https://pic4.zhimg.com/80/v2-544c2fae54d25987d819ac8a45fce79e_hd.jpg" width="276"></figure>'+
        '                                <p>咱们多活一个人，中国就多一线希望，你们就是爬也要爬出敌人的包围圈。如果中国人都投降了，还有中国吗？ ---杨靖宇</p>'+
        '                                <figure><noscript><img src="https://pic1.zhimg.com/50/v2-965e4e60efb11024a81cce4ad1c59d16_hd.jpg" width="875"/></noscript><img src="https://pic1.zhimg.com/80/v2-965e4e60efb11024a81cce4ad1c59d16_hd.jpg" width="875"></figure>'+
        '                                        <p><br></p>'+
        '                                        <p>二十年艰难事业，即将彻底完成，忍看功绩辉煌，英名永在，一世忠贞；千万里<a href="https://link.zhihu.com/?target=https%3A//wapbaike.baidu.com/item/%25E5%25B1%25B1%25E6%25B2%25B3%25E7%25A0%25B4%25E7%25A2%258E" target="_blank" rel="nofollow noreferrer">山河破碎</a>，正待从头收拾，孰料血花飞溅，为国牺牲，满腔悲愤，为中华民族悼英雄。 ---悼彭雪枫</p>'+
        '                                        <figure><noscript><img src="https://pic3.zhimg.com/50/v2-669b9b2d3074d535c32a3a59b05d478d_hd.jpg" width="575"/></noscript><img src="https://pic3.zhimg.com/80/v2-669b9b2d3074d535c32a3a59b05d478d_hd.jpg" width="575"></figure>'+
        '                                                <p><br></p>'+
        '                                                <p>恨不抗日死，留作今日羞；国破尚如此，我何惜此头。- ---吉鸿昌</p>'+
        '                                                <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ji_Hongchang.jpg/200px-Ji_Hongchang.jpg" style="max-width:100%;"><br></figure>'+
        '    </div>'+
        '</div>'
    }
}

Mock.mock('/mock/', 'get', postData())
Mock.mock('/api/login', 'post', userLogin())
Mock.mock('/api/userInfo','post',userInfor())
Mock.mock('http://mock/', 'get', postData())
Mock.mock('http://api/login', 'post', userLogin())
Mock.mock('http://api/userInfo','post',userInfor())
Mock.mock('/api/article','get',article())
Mock.mock('http://localhost:8080/mock/', 'get', postData())
Mock.mock('http://localhost:8080/login', 'post', userLogin())
Mock.mock('http://localhost:8080/userInfo','post',userInfor())