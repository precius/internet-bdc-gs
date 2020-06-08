/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
const certificateApi = {
  //获取证书证明列表
  getCheckCertifies(params) {
    return fetch("checkCertifyController/getCheckCertifies", "get", params);
  }
};
export default certificateApi;
