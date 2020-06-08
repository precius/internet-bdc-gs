const dictUtils = {
  //判断是否已经登录
  isLogin: function(userData){
  	var isLogin = false;
  	if(userData != null && userData.data != undefined && userData.data.loginName != undefined){
  		isLogin = true;
  	}
  	return isLogin;
  },
  //判断是否进行了实名认证
  isCertification: function(mongoDbUserInfoFather){
  	var isCertification = false;
  	if(mongoDbUserInfoFather != null && mongoDbUserInfoFather.authName != false && mongoDbUserInfoFather.authName != undefined){
  		isCertification = true;
  	}
  	return isCertification;
  },
  getCertificationStatus :function(mongoDbUserInfoFather){
  	var status = "未认证";
  	if(mongoDbUserInfoFather != null && mongoDbUserInfoFather.authName != false && mongoDbUserInfoFather.authName != undefined){
  		status = "已认证";
  	}
  	return status;
  },
}
export default dictUtils;
