/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
const areaTree = {
  //获取地区树
  getGuestNoteList(params) {
    return fetch("uumsController/tree", "get", params);
  }
};
export default areaTree;
