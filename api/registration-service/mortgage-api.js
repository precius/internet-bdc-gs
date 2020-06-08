/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import { fetch } from "apiconfig/index";
// 抵押登记
const mortgageApi = {
  //申请人信息
  getProcessInfo(params) {
    return fetch('api/registerflow/getProcessInfo', 'get', params);
  },
  //获取办事大厅列表
  findByDjjg(params) {
    return fetch('workOfficeController/findByDjjg', 'get', params);
  },
  //修改办事大厅
  changeBsdt(params) {
    return fetch('api/registerflow/changeBsdt', 'post', params);
  },
  
  //添加银行

  addRightHolder(params) {
    return fetch('api/registerflow/addRightHolder', 'post', params);
  },
  
  //修改银行获取银行信息
  //根据权利人ID获取权利人信息
  getRightHolder(params) {
    return fetch('api/registerflow/getRightHolder', 'get', params);
  },
  
  //更新银行
  //更新权利人义务
  modifyRightHolder(params) {
    return fetch('api/registerflow/modifyRightHolder', 'post', params);
  },
  
  //删除银行
  //删除指定ID的权利人
  deleteRightHolder(params) {
    return fetch('api/registerflow/deleteRightHolder', 'post', params);
  },
  
  //新增抵押人、债务人
  addObligor(params) {
    return fetch('api/registerflow/addObligor', 'post', params);
  },
  
  //修改抵押人、债务人
  getObligor(params) {
    return fetch('api/registerflow/getObligor', 'get', params);
  },
  
  //更新抵押人、债务人
  modifyObligor(params) {
    return fetch('api/registerflow/modifyObligor', 'post', params);
  },
  
  //删除抵押人
  //删除指定ID的义务人
  deleteObligor(params) {
    return fetch('api/registerflow/deleteObligor', 'post', params);
  },
  getTree(params){
    return fetch('/uumsController/tree', 'get', params); //获取全国区域树
  },
  //根据子流程code获取附件类型列表
  getUploadFileByCode(params){
    return fetch('/flowDefController/getUploadFilesBySubcfgCode', 'get', params); 
  },
  modifyProcessInfo(params){
    return fetch('/api/registerflow/modifyProcessInfo', 'post', params);
  },
  //根据业务号获取所有材料信息
  getUploadFiles(params){
    return fetch('/fileUploadController/getUploadFiles', 'post', params);
  },
  //上传单张照片到服务器
  uploadOnePhotoToServer(params){
    return fetch('/fms-server/file/uploadFileByBase64', 'post', params);
  },
//获取当前时间
getSystemTime(params){
   return fetch('/uumsController/getSystemTime', 'get', params);
},
//上传图片信息(会删除同名文件)
saveFileUploadInfo(params){
    return fetch('/fileUploadController/saveFileUploadInfo', 'post', params);
  },
  
  //判断是否有数字
    hasNum:function(value){
        var p = /[0-9]/;
        var result = p.test(value);//true,说明有数字
        return result;
    },
    /**
     * @member NgModule.validation.rule
     * @method idcard 身份证验证
     * @param {String} param
     */
    idcard: function (value) {
        var idcard, Y, JYM, ereg;
        idcard = value;
        if (idcard == null || idcard === '') {
            return false;
        }
        var Errors = [true, false, false, false, false];
        var S, M;
        var idcardArray = [];
        idcardArray = idcard.split('');
        //地区检验
        //if(area[parseInt(idcard.substr(0,2))]==null) return Errors[4];
        //身份号码位数及格式检验
        switch (idcard.length) {
        case 15:
            if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 === 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0)) {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性
            } else {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性
            }
            if (ereg.test(idcard)) return Errors[0];
            else return Errors[2];
        case 18:
            //18 位身份号码检测
            //出生日期的合法性检查
            //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
            //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
            if (parseInt(idcard.substr(6, 4)) % 4 === 0 || (parseInt(idcard.substr(6, 4)) % 100 === 0 && parseInt(idcard.substr(6, 4)) % 4 === 0)) {
                ereg = /^[1-9][0-9]{7}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
            } else {
                ereg = /^[1-9][0-9]{7}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式
            }
            if (ereg.test(idcard)) { //测试出生日期的合法性
                //计算校验位
                S = (parseInt(idcardArray[0]) + parseInt(idcardArray[10])) * 7 +
                        (parseInt(idcardArray[1]) + parseInt(idcardArray[11])) * 9 +
                        (parseInt(idcardArray[2]) + parseInt(idcardArray[12])) * 10 +
                        (parseInt(idcardArray[3]) + parseInt(idcardArray[13])) * 5 +
                        (parseInt(idcardArray[4]) + parseInt(idcardArray[14])) * 8 +
                        (parseInt(idcardArray[5]) + parseInt(idcardArray[15])) * 4 +
                        (parseInt(idcardArray[6]) + parseInt(idcardArray[16])) * 2 +
                        parseInt(idcardArray[7]) * 1 +
                        parseInt(idcardArray[8]) * 6 +
                        parseInt(idcardArray[9]) * 3;
                Y = S % 11;
                M = 'F';
                JYM = '10X98765432';
                M = JYM.substr(Y, 1); //判断校验位
                if (M === idcardArray[17]) return Errors[0]; //检测ID的校验位
                else return Errors[3];
            } else return Errors[2];
        case 10:
            //香港身份证
            ereg = /^[A-Z]\d{6}[(|(]\d[)|)]$/g;
            if (ereg.test(idcard)) {
                return Errors[0];
            } else {
                return false;
            }
        default:
            return Errors[1];
        }
    },
   /**
     * @member NgModule.validation.rule
     * @method gaIdcard 港澳台身份证
     * @param {String} param
     */
    gaIdcard: function (value, scope, element, attrs, param) {
        // 港澳居民来往内地通行证
        // 规则： H/M + 10位或6位数字
        // 样本： H1234567890
        var re1 = /^([A-Z]\d{6,10}(\(\w{1}\))?)$/;
        // 台湾居民来往大陆通行证
        // 规则： 新版8位或18位数字， 旧版10位数字 + 英文字母
        // 样本： 12345678 或 1234567890B
        var re2 = /^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/;
        var bRt = (re2.test(value)) || re1.test(value);
        return bRt;
    },
    /**
     * @member NgModule.validation.rule
     * @method gaIdcard 护照
     * @param {String} param
     */        
    isPassPortCard(card) {
      // 护照
      // 规则： 14/15开头 + 7位数字, G + 8位数字, P + 7位数字, S/D + 7或8位数字,等
      // 样本： 141234567, G12345678, P1234567
      var isRight = false;
      var reg = /^([a-zA-z]|[0-9]){5,17}$/;
      if (reg.test(card) === false) {
        isRight = false;
      } else {
        isRight = true;
      }
    },   
     /**
     * @member NgModule.validation.rule
     * @method gaIdcard 户口本
     * @param {String} param
     */        
    isAccountCard(card) {
      var isRight = false;
      // 户口本
      // 规则： 15位数字, 18位数字, 17位数字 + X
      // 样本： 441421999707223115
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (reg.test(card) === false) {
        isRight = false;
      } else {
        isRight = true;
      }
     return isRight;
    },        
     /**
     * @member NgModule.validation.rule
     * @method gaIdcard 军官
     * @param {String} param
     */          
    isOfficerCard(card) {
      // 军官证
      // 规则： 军/兵/士/文/职/广/（其他中文） + "字第" + 4到8位字母或数字 + "号"
      // 样本： 军字第2001988号, 士字第P011816X号
      var isRight = false;
      var reg = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/;
      if (reg.test(card) === false) {
        isRight = false;
      } else {
        isRight = true;
      }
    },        
     /**
     * @member NgModule.validation.rule
     * @method gaIdcard 护照
     * @param {String} param
     */        
    isPassPortCard(card) {
      // 护照
      // 规则： 14/15开头 + 7位数字, G + 8位数字, P + 7位数字, S/D + 7或8位数字,等
      // 样本： 141234567, G12345678, P1234567
      var isRight = false;
      var reg = /^([a-zA-z]|[0-9]){5,17}$/;
      if (reg.test(card) === false) {
        isRight = false;
      } else {
        isRight = true;
      }
    },
    /**
    *   验证组织机构代码是否合法：组织机构代码为8位数字或者拉丁字母+“-”+1位校验码。
    *   验证最后那位校验码是否与根据公式计算的结果相符。
    *   编码规则请参看
    *   http://wenku.baidu.com/view/d615800216fc700abb68fc35.html
    */
    orgcodevalidate(value){
        var isRight = false;
        if(value!=""){
            var reg = /^([0-9ABCDEFGHJKLMNPQRTUWXY]){9}$/;
            if(reg.test(value)){
                isRight = true;
            }
        }
        return isRight;
    },
    /**
    *验证营业执照是否合法：营业执照长度须为15位数字，前14位为顺序码，
    *最后一位为根据GB/T 17710 1999(ISO 7064:1993)的混合系统校验位生成算法
    *计算得出。此方法即是根据此算法来验证最后一位校验位是否政正确。如果
    *最后一位校验位不正确，则认为此营业执照号不正确(不符合编码规则)。
    *以下说明来自于网络:
    *我国现行的营业执照上的注册号都是15位的，不存在13位的，从07年开始国
    *家进行了全面的注册号升级就全部都是15位的了，如果你看见的是13位的注
    *册号那肯定是假的。
    *15位数字的含义，代码结构工商注册号由14位数字本体码和1位数字校验码
    *组成，其中本体码从左至右依次为：6位首次登记机关码、8位顺序码。
    * 一、前六位代表的是工商行政管理机关的代码，国家工商行政管理总局用
    * “100000”表示，省级、地市级、区县级登记机关代码分别使用6位行
    * 政区划代码表示。设立在经济技术开发区、高新技术开发区和保税区
    * 的工商行政管理机关（县级或县级以上）或者各类专业分局应由批准
    * 设立的上级机关统一赋予工商行政管理机关代码，并报国家工商行政
    * 管理总局信息化管理部门备案。
    * 二、顺序码是7-14位，顺序码指工商行政管理机关在其管辖范围内按照先
    * 后次序为申请登记注册的市场主体所分配的顺序号。为了便于管理和
    * 赋码，8位顺序码中的第1位（自左至右）采用以下分配规则：
    *　　 1）内资各类企业使用“0”、“1”、“2”、“3”；
    *　　 2）外资企业使用“4”、“5”；
    *　　 3）个体工商户使用“6”、“7”、“8”、“9”。
    * 顺序码是系统根据企业性质情况自动生成的。
    *三、校验码是最后一位，校验码用于检验本体码的正确性
    */
    checkLicense(code){
        var tip = "OK";
        var pass= true;
    
        if(code.length != 18){
            tip = "社会信用代码长度错误！";
            pass = false;
        }
        var reg = /^([159Y]{1})([1239]{1})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9ABCDEFGHJKLMNPQRTUWXY]{1})$/;
        if(!reg.test(code)){
            tip = "社会信用代码校验错误！";
            pass = false;
        }
        //不用I、O、S、V、Z
        var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
        var ws =[1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28];
    
        var codes  = new Array();
        var sum = 0;
        codes[0] = code.substr(0,code.length-1);
        codes[1] = code.substr(code.length-1,code.length);
    
        for(var i=0;i<codes[0].length;i++){
            var Ancode = codes[0].charAt(i);
            var Ancodevalue = str.indexOf(Ancode);
            sum += Ancodevalue * ws[i];
        }
        var indexOfc18 = 31 - (sum % 31);
        var c18 = str.charAt(indexOfc18);
        if(c18 != codes[1]){
            tip = "社会信用代码有误！";
            pass = false;
        }
    
        return pass;
    },
    /**
     * @member NgModule.validation.rule
     * @method phone 电话号码，包括座机和手机验证
     * @param {String} param 电话号码
     */
    phone: function (value) {
        var isPhone = false;
         if((/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value))){ 
            isPhone = true;
         }
         return isPhone;
    }, 
    /**
     * @member NgModule.validation.rule
     * @method number 数值验证
     * @param {Number} param 数值
     */
    number: function (value) {
        var re = /^\d*(\.\d+)?$/g;
        var bRt = re.test(value);
        return bRt;
    },
};
export default mortgageApi;
