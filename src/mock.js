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
            resourceUrl: images[i].src,
            resourceLike: Math.floor(Math.random() * (+1000 - +0)) + +0,
            resourceContent: "o values. The returned value is no lower than min or it is the next integer greater than min if min isn’t an integer.It i ",
            resourceTitle: "Asia markets and Dow futures fall as trade war fears persist",
            resourceStatus: Mock.mock({ "boolean|1-2": true }).boolean
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
            "role": [
                {
                    "id": 1,
                    "roleName": "approval",
                    "description": "图片审批"
                },
                {
                    "id": 2,
                    "roleName": "score",
                    "description": "打分"
                }
            ],
            "stage": {
                "stageNo": 1,
                "time": 1563120000000
            },
            "resource": [
                {
                    "id": 68,
                    "userId": 4035,
                    "resourceUrl": "https://i.pinimg.com/564x/0f/5a/35/0f5a353b81318e0bb1ea69d52cf0e244.jpg",
                    "resourceTitle": "sky",
                    "resourceContent": "skey clooud",
                    "resourceStatus": "1",
                    "resourceLike": null,
                    "resourcePoint": null,
                    "pointTheme": null,
                    "pointSkill": null,
                    "pointMind": null,
                    "resourceAward": null,
                    "remark": null,
                    "createTime": "2019-06-05T08:37:10.000+0000",
                    "modifyTime": "2019-06-05T08:37:10.000+0000"
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
        "code": 200,
        "message": "OK",
        "data": {
            "role": [
                {
                    "id": 1,
                    "roleName": "approval",
                    "description": "图片审批"
                },
                {
                    "id": 2,
                    "roleName": "score",
                    "description": "打分"
                }
            ],
            "stage": {
                "stageNo": 1,
                "time": 1563120000000
            },
            "resource": [
                {
                    "id": 6,
                    "userId": 5024,
                    "resourceUrl": "https://i.pinimg.com/564x/fc/43/9f/fc439ff6e50cba9028bc936f29ee64bf.jpg",
                    "resourceTitle": "title 1",
                    "resourceContent": "content 1",
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
                    "resourceTitle": "title 2",
                    "resourceContent": "content 2",
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

const userResource = function () {
    return {
        "code": 200,
        "message": "OK",
        "data": {
            "resourceList": [
                {
                    "id": 68,
                    "userId": 4035,
                    "resourceUrl": "https://i.pinimg.com/236x/0f/5a/35/0f5a353b81318e0bb1ea69d52cf0e244.jpg",
                    "resourceTitle": "sky",
                    "resourceContent": "skey clooud",
                    "resourceStatus": "1",
                    "resourceLike": null,
                    "resourcePoint": null,
                    "pointTheme": null,
                    "pointSkill": null,
                    "pointMind": null,
                    "resourceAward": null,
                    "remark": null,
                    "createTime": "2019-06-05T08:37:10.000+0000",
                    "modifyTime": "2019-06-05T08:37:10.000+0000"
                }
            ],
            "likeList": [
                {
                    "id": 61,
                    "uid": 4035,
                    "rid": 68,
                    "likeTime": "2019-06-06T01:25:06.000+0000"
                }
            ]
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


const userDeletUpload = function () {
    return {
        code: 200,
        message: "ok",
        data: ''
    }
}


const userUpdate = function () {
    return {
        code: 200,
        message: "ok",
        data: ''
    }
}

const resourceCheck = function () {
    return {
        code: 200,
        message: "ok",
        data: ''
    }
}

const sampleImages = function () {
    const imgs =
        [
            {
                "resourceUrl": "http://arenaillustration.com/news/wp-content/uploads/2018/10/dqbed1hxcaawdst-582x827.jpg",

            },
            {
                "resourceUrl": "http://arenaillustration.com/news/wp-content/uploads/2018/11/alex-t-smith-how-winston-powerpoint-09.jpg",

            },
            {
                "resourceUrl": "http://arenaillustration.com/news/wp-content/uploads/2018/11/alex-t-smith-how-winston-powerpoint-10.jpg",
            },
            {
                "resourceUrl": "http://p9.pstatp.com/origin/pgc-image/46573cec16b14e2b85009c6d608d86b5",
            },
            {
                "resourceUrl": "https://i.pinimg.com/236x/4c/c4/c4/4cc4c418fad09c5e065d8ef4035e9520.jpg"
            },
            {
                "resourceUrl": "https://img.zcool.cn/community/01cc465bc81ba2a801213dea1a1ae4.jpg@1280w_1l_2o_100sh.jpg"
            },
            {
                "resourceUrl": "https://i.pinimg.com/originals/99/ad/45/99ad452155ee05129aa95eb2a32d57d7.jpg"
            },
            {
                "resourceUrl": "https://img.zcool.cn/community/0171195bc81bbaa801213dea6746d6.jpg@1280w_1l_2o_100sh.jpg"
            },
            {
                "resourceUrl": "https://img.zcool.cn/community/01bc925a0123efa801216a4bd45ba9.jpg@1280w_1l_2o_100sh.jpg"
            },
            {
                "resourceUrl": "https://img.zcool.cn/community/01cd955a0123dea801216a4baea703.jpg@1280w_1l_2o_100sh.jpg"
            }
        ]
    let returnData = function () {
        let data = []
        for (let i = 0; i < imgs.length; i++) {
            const obj = {
                "id": i,
                "resourceUrl": imgs[i]["resourceUrl"],
                "resourceTitle": Mock.mock('@title(3,5)'),
                "resourceContent": Mock.mock('@cparagraph')
            }
            data.push(obj)
        }
        return data
    }
    return {
        "code": 200,
        "message": "OK",
        "data": returnData()
    }
}

const rateSource = function () {
    const sample = sampleImages()
    let rateResources = {
        "code": 200,
        "message": "OK",
        "data": []
    }
    for (let i = 0; i < sample.data.length; i++) {
        let rateResource = {
            "like": Mock.mock({
                "number|1-100": 100
            }),
            "resource": {
                "id": Mock.mock('@increment'),
                "resourceUrl": sample.data[i]["resourceUrl"],
                "resourceTitle": Mock.mock('@title(3,5)'),
                "resourceContent": Mock.mock('@cparagraph')
            }
        }
        rateResources["data"].push(rateResource)
    }
    return rateResources
}

const userLikeList = function () {
    const likes = function () {
        let arr = []
        for (let i = 0; i < 100; i++) {
            arr.push(i)
        }
        return arr
    }
    return {
        "code": 200,
        "message": "OK",
        "data": [
            likes
        ]
    }
}

const imageLikeList = function () {
    return {
        "code": 200,
        "message": "OK",
        "data": [
            {
                "id": 47,
                "uid": 4035,
                "rid": 14,
                "likeTime": "2019-06-13T06:36:46.000+0000"
            },
            {
                "id": 45,
                "uid": 4035,
                "rid": 14,
                "likeTime": "2019-06-13T06:36:46.000+0000"
            },

        ]
    }
}

const pointList = function () {
    return {
        "code": 200,
        "message": "ok",
        "data": [
            {
                "rid": 1,
                "pointMind": 4,
                "pointSkill": 5,
                "pointTheme": 8
            },
            {
                "rid": 4,
                "pointMind": 10,
                "pointSkill": 4,
                "pointTheme": 6
            },
            {
                "rid": 3,
                "pointMind": 4,
                "pointSkill": 6,
                "pointTheme": 6
            }
        ]
    }
}

const rewards = function () {
    return {
        "code": 200,
        "message": "OK",
        "data": [
            {
                "id": 158,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1562649689191.jpg",
                "resourceTitle": "新机如佳人 远航初弄色",
                "resourceContent": "“美食之都”新机揭幕",
                "resourceStatus": "1",
                "uploadTime": "2019-07-09T06:08:08.000+0000",
                "scoreTheme": 0,
                "scoreSkill": 0,
                "scoreMind": 0,
                "scoreTotal": 0,
                "scoreTime": "2019-08-01T08:12:54.000+0000",
                "total": 55
            },
            {
                "id": 182,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1563527993347.jpg",
                "resourceTitle": "定",
                "resourceContent": "大概做过几年航线的人都会有同样的感慨--雨总在飞机开始闪灯时下得最大！既然避无可避，唯有坚定面对。瓢泼大雨中一人一机的对话，世界仿佛入定。",
                "resourceStatus": "1",
                "uploadTime": "2019-07-19T09:23:22.000+0000",
                "scoreTheme": 8,
                "scoreSkill": 4,
                "scoreMind": 8,
                "scoreTotal": 6,
                "scoreTime": "2019-08-01T08:01:27.000+0000",
                "total": 54
            },
            {
                "id": 122,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1561615600295.jpg",
                "resourceTitle": "Beijing ， I am coming…",
                "resourceContent": "Before landing Beijing",
                "resourceStatus": "1",
                "uploadTime": "2019-06-27T06:08:27.000+0000",
                "scoreTheme": 9,
                "scoreSkill": 7,
                "scoreMind": 9,
                "scoreTotal": 8,
                "scoreTime": "2019-08-01T08:50:34.000+0000",
                "total": 51
            },
            {
                "id": 175,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1563173408219.jpg",
                "resourceTitle": "每次到达都是新的起飞",
                "resourceContent": "希望好天气伴随NX的每一次飞行。",
                "resourceStatus": "1",
                "uploadTime": "2019-07-15T06:52:17.000+0000",
                "scoreTheme": 9,
                "scoreSkill": 9,
                "scoreMind": 9,
                "scoreTotal": 9,
                "scoreTime": "2019-08-01T08:01:35.000+0000",
                "total": 46
            },
            {
                "id": 137,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1562047384765.jpg",
                "resourceTitle": "絢爛",
                "resourceContent": "雨後的天空總是絢爛 總是讓人充滿著希望\n澳門航空載著來自不同的城市 \n懷著不一樣的期待  \n看著不一樣的風景 \n向著不同的目的地的客人出發",
                "resourceStatus": "1",
                "uploadTime": "2019-07-02T06:30:07.000+0000",
                "scoreTheme": 9,
                "scoreSkill": 9,
                "scoreMind": 8,
                "scoreTotal": 8,
                "scoreTime": "2019-08-01T07:48:01.000+0000",
                "total": 45
            },
            {
                "id": 94,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1561364724917.jpg",
                "resourceTitle": "ALL AIR MACAU ALONG THE SEASIDE",
                "resourceContent": "IT'S NOT OFTEN TO SEE ALL AIRCRAFT LIKE THIS",
                "resourceStatus": "1",
                "uploadTime": "2019-06-24T08:27:04.000+0000",
                "scoreTheme": 9,
                "scoreSkill": 8,
                "scoreMind": 9,
                "scoreTotal": 8,
                "scoreTime": "2019-08-01T08:00:57.000+0000",
                "total": 40
            },
            {
                "id": 100,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1561521578196.jpeg",
                "resourceTitle": "Lovely welcome",
                "resourceContent": "Before boarding , 2 cabin crew show their lovely smile and heart sign by  finger . lovely welcome .",
                "resourceStatus": "1",
                "uploadTime": "2019-06-26T04:07:58.000+0000",
                "scoreTheme": 5,
                "scoreSkill": 5,
                "scoreMind": 5,
                "scoreTotal": 5,
                "scoreTime": "2019-08-01T00:01:38.000+0000",
                "total": 31
            },
            {
                "id": 142,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1562167071798.jpeg",
                "resourceTitle": "光芒万丈·飞跃天际",
                "resourceContent": "愿澳航如初升之旭日，朝气蓬勃，光芒万丈，带领澳航人圆梦天空！",
                "resourceStatus": "1",
                "uploadTime": "2019-07-03T15:29:17.000+0000",
                "scoreTheme": 0,
                "scoreSkill": 0,
                "scoreMind": 0,
                "scoreTotal": 0,
                "scoreTime": "2019-08-01T08:00:21.000+0000",
                "total": 31
            },
            {
                "id": 102,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1561523001922.jpeg",
                "resourceTitle": "Working in the sky !",
                "resourceContent": "Cockpit crew are working hard in the sky to keep the flight smoothly and safely.",
                "resourceStatus": "1",
                "uploadTime": "2019-06-26T04:23:41.000+0000",
                "scoreTheme": 0,
                "scoreSkill": 6,
                "scoreMind": 6,
                "scoreTotal": 3,
                "scoreTime": "2019-08-01T08:02:00.000+0000",
                "total": 31
            },
            {
                "id": 177,
                "resourceUrl": "https://nx25th.airmacau.com.cn/activity25/images/1563246111333.JPG",
                "resourceTitle": "飞悦大湾区",
                "resourceContent": "澳航与港珠澳大桥人工岛",
                "resourceStatus": "1",
                "uploadTime": "2019-07-16T03:02:26.000+0000",
                "scoreTheme": 8,
                "scoreSkill": 8,
                "scoreMind": 8,
                "scoreTotal": 8,
                "scoreTime": "2019-08-01T08:02:08.000+0000",
                "total": 31
            }
        ]
    }
}

Mock.mock(devPath.IMAGE_URL, 'get', postData())
Mock.mock(devPath.USER_LOGIN, 'post', userLogin())
Mock.mock(devPath.LOAD_USER_INFO, 'post', userInfor())
Mock.mock(devPath.IMGUPLOAD_URL, 'post', imageUpload())
Mock.mock(devPath.USERUPLOAD_URL, 'post', userUpload())
Mock.mock(devPath.USER_DELET_IMAGE, 'delete', userDeletUpload())
Mock.mock(devPath.USER_UPDATE, 'put', userUpdate())
Mock.mock(devPath.RESOURCE_CHECK, 'put', resourceCheck())
Mock.mock(devPath.GET_UNCHECK_IMAGES, 'get', sampleImages())
Mock.mock(devPath.GET_CHECK_IMAGES, 'get', sampleImages())
Mock.mock(devPath.USER_IMAGES, 'get', userResource())
Mock.mock(devPath.GET_CANDIDATE_IMAGES, 'get', rateSource())
Mock.mock(devPath.GET_USER_LIKE_LIST, 'get', userLikeList())
Mock.mock(devPath.GET_IMAGE_LIKE_LIST, 'get', imageLikeList())
Mock.mock(devPath.GET_USER_POINT, 'get', pointList())
Mock.mock(devPath.GET_REWARED_LIST, 'get',rewards())