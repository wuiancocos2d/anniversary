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
        'title': '艺术是可以超越时代的，还是可以过时的？艺术和时代性的关系是什么？',
        'article': '<div>'+
        '    <p>可能主要是因为我看到的技术流大神太多了，wlop这种水准在我眼里很难说封神，你说他画的好，我是不会质疑的，但是要是说他画技怎么怎么厉害，我就没法跟着吹了，他的画细节我觉得做的不够到位，和诸位巨佬比起来……以至于我没存过他任何一张画。</p>'+
        '    <p><br></p>'+
        '    <p>我不是觉得他画的不好，只不过我眼中画技好的标准特别高。</p>'+
        '    <p>眼高手低说的就是我这种人了，反正我觉得他画的不错，属于画面还是赏心悦目但实际上塑造部分就比较薄弱，颜色上也没什么新意的类型，然后放几张我喜欢的老师的画。</p>'+
        '</div><img src="https://pic1.zhimg.com/80/v2-f64b5084591e5d58121aa78e2e792f57_hd.jpg" style="max-width:100%;"><br><img src="https://pic1.zhimg.com/80/v2-6de1a431a8efacc4ccb9831cb0d7e3fe_hd.jpg" style="max-width:100%;"><br>俊西老师的ghost系列，他出了画集，我买了，敲碗等五月发货。<br>'+
        '<div><img src="https://pic1.zhimg.com/80/v2-13cfe475f6eb4bd89ca0ebf1fe1ccf9a_hd.jpg" style="max-width: 100%;"></div>'+
        '<div><br></div>'+
        '<div><br>'+
        '    <div>'+
        '        <p>有一位31岁的日本画家，来自日本。他留下<b>超过200幅</b>惊世画作；他的遗作拍出过<b>353万人民币</b>，更是<b>阿信、蔡康永</b>等众多创意人的最爱。</p>'+
        '        <p>这位画家的死亡，被传为<b>自杀</b>，给世界留下了未知的传奇；他的作品，频频在网上刷屏式传播，他在离世<b>14年后</b>，仍旧让人记忆犹新。</p>'+
        '        <p>他就是<b>石田彻也</b>，在日本艺术界公认的奇才，他难见的艺术渲染力，冲击着每个活在当代都市文明的人。</p>'+
        '        <p>他把少年和教学楼合为一体，</p>'+
        '        <p><img src="https://pic1.zhimg.com/80/v2-a607e373e3762b9be6cd95d1de344f9a_hd.jpg" style="max-width:100%;"><br></p>'+
        '        <div>'+
        '            <div>'+
        '                <p>对社会现实的洞察，让很多人将石田彻也称为「日本的卡夫卡」。</p>'+
        '                <p>其实，这也源于石田彻也出生的年代。</p>'+
        '                <p>他出生于日本<b>第二代婴儿潮（1971－1974）</b>，这群人他在经济高度成长的丧钟声中长大，在泡沫经济崩溃后的<b>「就职冰河期」</b>中走入社会。</p>'+
        '                <p>这种激烈跌宕的经验，给了这一代人独特的思维方式。</p>'+
        '            </div>'+
        '            <div>'+
        '                <div>'+
        '                    <p>大尺幅作品要画好几个月</p>'+
        '                    <p>最久一次画了七个月</p>'+
        '                    <p>长时间保持一个艺术状态也不容易</p>'+
        '                    <p>越到后期越要画得愉快和保持表达的欲望</p>'+
        '                    <p>只有这样的状态才能充分发挥自己的能力</p>'+
        '                    <p>画出好的作品</p>'+
        '                    <p>这就是冷军要求的极致</p>'+
        '                    <p>他的一幅画拍出6000万</p>'+
        '                    <p>6000万的意义在哪？</p>'+
        '                    <p><b>意义就在于极致</b></p>'+
        '                    <p><b>他在做人类绘画的极致</b></p>'+
        '                    <p><b>在突破绘画史的极致</b></p>'+
        '                    <p><b>极致之画功，极致之艺术</b></p>'+
        '                </div><br><br>'+
        '            </div>'+
        '        </div>'+
        '        <p><br></p>'+
        '        <figure><noscript><img src="https://pic1.zhimg.com/50/v2-a607e373e3762b9be6cd95d1de344f9a_b.jpg" https://pic4.zhimg.com/50/v2-d0460f1471c6d807ffad79d13fd748f5_b.jpg" width="1064"></noscript></figure>'+
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