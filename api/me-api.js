/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import {fetch} from 'apiconfig/index'
// 登录接口
export function getFormConstants(params) {
  return fetch('/form/getFormConstants','post', params)
}
