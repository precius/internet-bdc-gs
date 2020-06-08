/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
// 办事指南获取列表接口
const guideApi = {
  getFlowDefConfigPhone(params) {
    return fetch('/flowDefController/getFlowDefConfigPhone', 'get', params);
  },
  getFlowGuidanceBySubcfgId(params) {
    return fetch('flowDefController/getFlowGuidanceBySubcfgId', 'get', params);
  },
  getUploadFilesBySubcfgId(params) {
    return fetch('flowDefController/getUploadFilesBySubcfgId', 'get', params);
  },
};
export default guideApi;
