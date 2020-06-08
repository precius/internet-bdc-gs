/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import {fetch} from 'apiconfig/index'
// 公共接口
const commonApi = {
	getDictTree(params) {
	  return fetch('/uumsController/getDictTree','get', params)
	}
}
export default commonApi
