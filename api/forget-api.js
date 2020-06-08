/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
// 忘记密码获取列表接口
const forgetApi = {
 //发送验证码
  sendAuthCodeMsg(params) {
    return fetch('thirdServiceController/sendAuthCodeMsg', 'post', params);
  },
  //修改密码
  modifyUserinfoByTel(params) {
    return fetch('/userInfoController/modifyUserinfoByTel', 'post', params);
  },
   //从MongoDB中获取个人信息实名认证
  findUser(params) {
    return fetch("userInfoController/findUser", "get", params); 
  },
};
export default forgetApi;
