import { devPath } from './config/config'
const Mock = require('mockjs')

Mock.setup({
    timeout: '500-1000'
})

const postData = function () {

    const images = [
        {
            "src": "https://i.pinimg.com/236x/68/ed/c0/68edc0c04e09e7bf0ba0c4aa843bf290.jpg?b=t",
        },
        {
            "src": "https://i.pinimg.com/236x/77/53/40/77534014785235372db8f52e7206b45b.jpg",

        },
        {
            "src": "https://i.pinimg.com/236x/eb/9c/00/eb9c00995677f25d7f719a850a950030.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/aa/28/48/aa28485fba6dddef9c767b8de873e93e.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/0a/cd/77/0acd7797c5ab8ee249dd5a9148e0611d.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/04/e8/8a/04e88a48496c743df9744c8e62689cd6.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/5a/52/26/5a52264944168672534661f6b02e6368.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/ce/40/50/ce4050a03a81a15d2d0126dbe8e425ce.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/93/c0/5e/93c05e0908046642545b4c6681108c11.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/71/91/af/7191af9abf7d3d6ce2df5de1e0a20304.jpg?b=t",
        },
        {
            "src": "https://i.pinimg.com/236x/f3/f9/e1/f3f9e151e689ee2298a32ef02d02f032.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/29/cc/d7/29ccd787cd004e49db396160925534e6.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/0f/24/ec/0f24ec8705375726885f90b7ff6f1745.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/c4/1f/1f/c41f1f3aa06d56f49374ec4b3f09b0fc.jpg",
        },
        {
            "src": "https://i.pinimg.com/236x/3d/73/b7/3d73b79a590d6384206fbba1661a6731.jpg",
        },
        {
            "src": "https://lfyfly.github.io/vue-waterfall-easy/demo/static/img/1.jpg",
        },
    ]

    let imagesData = []
    for (let i = 0; i < images.length; i++) {
        let image = {
            id: i,
            src: images[i].src,
            like: Math.floor(Math.random() * (+1000 - +0)) + +0,
            discription: "o values. The returned value is no lower than min or it is the next integer greater than min if min isn’t an integer.It i ",
            title: "Asia markets and Dow futures fall as trade war fears persist",
            status: Mock.mock({ "boolean|1-2": true }).boolean
        }
        imagesData.push(image)
    }
    return imagesData
}
const userInfor = function () {
    return {
        "code": 200,
        "message": "OK",
        "data": {
            "role": [],
            "stage": {
                "stageNo": 1,
                "time": 1563120000000
            },
            "resource": [
                {
                    "id": 6,
                    "userId": 5024,
                    "resourceUrl": "https://i.pinimg.com/564x/fc/43/9f/fc439ff6e50cba9028bc936f29ee64bf.jpg",
                    "resourceTitle": "123123123",
                    "resourceContent": "123123",
                    "resourceStatus": null,
                    "resourceLike": 123123,
                    "resourcePoint": 123123,
                    "pointTheme": 123123,
                    "pointSkill": 123123,
                    "pointMind": 123123,
                    "resourceAward": "123123",
                    "remark": "123123",
                    "createTime": "2019-05-21T16:29:08.000+0000",
                    "modifyTime": "2019-05-21T16:29:08.000+0000"
                },
                {
                    "id": 7,
                    "userId": 5024,
                    "resourceUrl": "https://i.pinimg.com/564x/b5/f7/ce/b5f7cec6327a00929b5362e83347532f.jpg",
                    "resourceTitle": "123123123",
                    "resourceContent": "123123",
                    "resourceStatus": null,
                    "resourceLike": 123123,
                    "resourcePoint": 123123,
                    "pointTheme": 123123,
                    "pointSkill": 123123,
                    "pointMind": 123123,
                    "resourceAward": "123123",
                    "remark": "123123",
                    "createTime": "2019-05-21T16:29:09.000+0000",
                    "modifyTime": "2019-05-21T16:29:09.000+0000"
                }
            ],
            "user": {
                "userNo": 4035,
                "userNm": "Wu Yiyan,Ian",
                "pwd": null,
                "jobTitle": "Assistant IT Operation Maintenance Engineer",
                "department": "General Affairs Department",
                "location": "NX",
                "division": "Information Technology",
                "emailAddrs": "ian.wu@airmacau.com.mo",
                "busnPhone": "8396 6691",
                "updateDt": "2019-05-13T15:00:01.000+0000",
                "birthDay": null,
                "userStatus": null
            }
        }
    }
}

const userLogin = function () {
    return {
        code: 200,
        message: '',
        data: {
            "userNo": 4035,
            "userNm": "Wu Yiyan,Ian",
            "pwd": null,
            "jobTitle": "Assistant IT Operation Maintenance Engineer",
            "department": "General Affairs Department",
            "location": "NX",
            "division": "Information Technology",
            "emailAddrs": "ian.wu@airmacau.com.mo",
            "busnPhone": "8396 6691",
            "updateDt": "2019-05-13T15:00:01.000+0000",
            "birthDay": null,
            "userStatus": null
        }
    }
}

const imageUpload = function () {

    return {
        code: 200,
        message: "ok",
        data: "https://i.pinimg.com/564x/7b/b9/49/7bb94942a001c923611ebbf97e00b83d.jpg"
    }

}

const userUpload = function () {
    return {
        code: 200,
        message: "ok",
        data: 10
    }
}




Mock.mock(devPath.IMAGE_URL, 'get', postData())
Mock.mock(devPath.USER_LOGIN, 'post', userLogin())
Mock.mock(devPath.LOAD_USER_INFO, 'post', userInfor())
Mock.mock(devPath.IMGUPLOAD_URL, 'post', imageUpload())
Mock.mock(devPath.USERUPLOAD_URL, 'post', userUpload())
