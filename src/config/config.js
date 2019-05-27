const BASE_URL = '/'
const BASE_URL_DEV = '/'

export const devPath = {
    LOAD_USER_INFO: BASE_URL+'api/userInfo',//用户基本信息
    USER_LOGIN: BASE_URL+'api/login/',//用户登陆
    IMAGE_URL: BASE_URL+'mock/',
    ARTICEL_URL: BASE_URL + 'api/article',
    AUTHORITYList_URL: BASE_URL+ 'api/authoList',
    IMGMODAL_URL:  BASE_URL+'api/imgModal',
    IMGUPLOAD_URL:'http://192.168.110.93:7777/resource/submit?',
    USERUPLOAD_URL: 'http://192.168.110.93:7777/resource/submit?/*',
    LOAD_USER_BY_ID: BASE_URL+'api/getUserById',
    USER_DELET_IMAGE: BASE_URL_DEV+'api/delet'
}

export const production = {
    LOAD_USER_INFO: BASE_URL_DEV +'user/info/',//用户基本信息
    USER_LOGIN: BASE_URL_DEV +'user/login?',//用户登陆
    IMAGE_URL: BASE_URL_DEV+'mock/',
    ARTICEL_URL: BASE_URL_DEV + 'api/article',
    AUTHORITYList_URL: BASE_URL_DEV+ 'api/authoList',
    IMGMODAL_URL:  BASE_URL_DEV+'api/imgModal',
    IMGUPLOAD_URL:BASE_URL_DEV+'/resource/submit?',
    USERUPLOAD_URL: BASE_URL_DEV+'resource/submit?/*',
    LOAD_USER_BY_ID: BASE_URL_DEV+'api/getUserById',
    USER_DELET_IMAGE: BASE_URL_DEV+'api/delet'
}

export default devPath