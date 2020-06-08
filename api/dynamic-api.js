/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
const dynamicApi = {
  getArticleByQuery(params) {
    return fetch("articleController/getArticleByQuery", "get", params);
  },
  viewArticle(params) {
    return fetch("articleController/viewArticle", "get", params);
  }
};
export default dynamicApi;
