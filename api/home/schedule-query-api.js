/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
const scheduleQueryApi = {
  //验证码
  sendAuthCodeMsg(params) {
    return fetch("thirdServiceController/sendAuthCodeMsg", "post", params);
  }
};
export default scheduleQueryApi;
