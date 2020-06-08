/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
const ownershipCheckQuery = {
  //验证码
  getCertifiesTureOrNot(params) {
    return fetch("checkCertifyController/getCertifiesTureOrNot", "get", params);
  }
};
export default ownershipCheckQuery;
