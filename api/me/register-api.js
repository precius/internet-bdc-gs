/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
const regApi = {
    //发送手机验证码
    sendAuthCodeMsg (params) {
        return fetch("thirdServiceController/sendAuthCodeMsg", "post", params);
    },
    registerUserinfo (params) {
        return fetch("userInfoController/registerUserinfo", "post", params);
    },
    //测试获取验证码
    addAuthCodeSample (params) {
        return fetch("thirdServiceController/addAuthCodeSample", "get", params);
    }
};
export default regApi;
