const Mock = require('mockjs')



const postData = function () {
    return {
        "images": [
            {
                "src": "https://i.pinimg.com/236x/68/ed/c0/68edc0c04e09e7bf0ba0c4aa843bf290.jpg?b=t",
                "like": 10,

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
        success: true,
        name: 'ian'

    }
}

const userIsLogin = function() {
    return {
        error: false
    }
}

Mock.mock('/mock/', 'get', postData())
Mock.mock('/api/login', 'post', userInfor())
Mock.mock('/api/userIsLogin','get',userIsLogin())