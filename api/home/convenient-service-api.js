/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
const convenientApi = {
  //投诉建议-获取投诉
  getGuestNoteList(params) {
    return fetch("userOperatorController/getGuestNoteList", "get", params);
  },
  // 保存投诉
  saveGuestNote(params) {
    return fetch("userOperatorController/saveGuestNote", "post", params);
  }
};
export default convenientApi;
