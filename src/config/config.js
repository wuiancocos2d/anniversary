const BASE_URL = '/'
const BASE_URL_DEV = '/'
export const env = 'production'

export const devPath = {
    LOAD_USER_INFO: BASE_URL + 'api/userInfo/',//用户基本信息
    USER_LOGIN: BASE_URL + 'api/login/',//用户登陆
    IMAGE_URL: BASE_URL + 'mock/',
    ARTICEL_URL: BASE_URL + 'api/article',
    AUTHORITYList_URL: BASE_URL + 'api/authoList',
    IMGMODAL_URL: BASE_URL + 'api/imgModal',
    IMG_UPLOAD_URL: '/resource/image?',
    RESOURCE_UPDATE: '/resource/update',
    USERUPLOAD_URL: '/resource/submit?/*',
    LOAD_USER_BY_ID: BASE_URL + 'api/getUserById',
    USER_DELET_IMAGE: BASE_URL_DEV + 'api/delete/',
    GET_CHECK_IMAGES: BASE_URL_DEV + 'api/check/',
    GET_IMAGE_BY_TIME: BASE_URL_DEV + 'api/check/',
    RESOURCE_CHECK: BASE_URL_DEV + 'resource/status/check',
    USER_IMAGES: BASE_URL_DEV+ 'api/uid/',
    GET_UNCHECK_IMAGES: 'api/getUncheck/',
    ADD_LIKE_IMAGE: 'api/like/',
    POINT_IMAGE: '/api/point/',
    GET_IMAGE_LIKE_LIST: 'api/like_list/info/'
}

export const production = {
    LOAD_USER_INFO: BASE_URL_DEV + 'user/info/',//用户基本信息
    USER_LOGIN: BASE_URL_DEV + 'user/login?',//用户登陆
    IMAGE_URL: BASE_URL_DEV + 'mock/',
    ARTICEL_URL: BASE_URL_DEV + 'api/article',
    AUTHORITYList_URL: BASE_URL_DEV + 'api/authoList',
    IMG_UPLOAD_URL: 'http://localhost:7777/resource/image',
    USERUPLOAD_URL: BASE_URL_DEV + 'resource/submit?',
    RESOURCE_UPDATE: '/resource/update?',
    LOAD_USER_BY_ID: BASE_URL_DEV + 'api/getUserById',
    USER_DELET_IMAGE: BASE_URL_DEV + 'resource/delete/',
    GET_IMAGE_BY_TIME: BASE_URL_DEV + 'resource/check/',
    RESOURCE_CHECK: BASE_URL_DEV + 'resource/status/check?id=',
    RESOURCE_UNCHECK: BASE_URL_DEV + 'resource/status/check?id=',
    USER_IMAGES: BASE_URL_DEV+ 'resource/uid/',
    //主页图片相关
    GET_UNCHECK_IMAGES: BASE_URL + 'resource/unchecked/',
    GET_CHECK_IMAGES: BASE_URL_DEV + 'resource/check/',
    GET_CANDIDATE_IMAGES: BASE_URL_DEV + 'like/count/30/',
    GET_WINNERS_IMAGES: BASE_URL_DEV + 'resource/winners/',
    ADD_LIKE_IMAGE: BASE_URL_DEV+'like/add/',
    POINT_IMAGE: BASE_URL_DEV+ 'resource/point?',
    GET_IMAGE_LIKE_LIST: BASE_URL_DEV +'like/info/'
}

export const stageCode = {
    "upload": 1,
    "stopuload": 2,
    "approve": 3,
    "like": 4,
    "stopLike": 5,
    "rate": 6,
    "end": 7
}

export const userCode = {
    "normalUser": 0,
    "approver": 1,
    "rater": 2,
    "supperUser": 3
}


export default env === 'dev' ? devPath : production