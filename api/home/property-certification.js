import { fetch } from "apiconfig/index";
const certificatApi = {

  // 通过条件查询权属证明
  getCheckCertifies(params) {
    return fetch("checkCertifyController/getCheckCertifies", "get", params);
  },

  // 取消查询权属证明
  cancelCheckCertifies(params) {
    return fetch("checkCertifyController/cancelCheckCertifies", "get", params);
  },

  // 打印权属证明
  printQszm(params) {
    return fetch("estatePrintController/printQszm", "post", params);
  },

  // 根据登记机构获取办事大厅
  findByDjjg(params) {
    return fetch("workOfficeController/findByDjjg", "get", params);
  },

  // 发送验证码
  sendAuthCodeMsg(params) {
    return fetch("thirdServiceController/sendAuthCodeMsg", "post", params);
  },

  // 权属证明查询
  checkCertifyInspect(params) {
    return fetch("checkCertifyController/checkCertifyInspect", "post", params);
  }

};

export default certificatApi;
