/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
// import { fetch } from "apiconfig/index";
// 办事指南获取列表接口
const loginApi = {
  existsUserByNameOrPhone(params) {
    return fetch("/userInfoController/existsUserByNameOrPhone", "get", params); //根据手机号或用户名判断是否已经注册
  },
  getLoginUser(params) {
    return fetch("/userInfoController/getLoginUser", "get", params); // 登录
  },
  findUser(params) {
    return fetch("userInfoController/findUser", "get", params);  //从MongoDB中获取个人信息实名认证
  },
  getDictTree(params) {
    return fetch("/uumsController/getDictTree", "get", params);
  },
  getTree(params){
    return fetch("/uumsController/tree", "get", params); //获取全国区域树
  },
  getPermByAreaCode(params){
    return fetch("/uumsController/getPermByAreaCode", "get", params); //根据区域代码和用户ID获取对应的功能权限
  },
  getFaceVerifyResult(params) {
    return fetch("/faceverify/getFaceVerifyResult", "get", params); //身份认证结果（true or false）
  },
  appNewAndValid(params) {
    return fetch("fileUploadController/appNewAndValid", "get", params); //获取服务器版本信息
  }
};
export default loginApi;
