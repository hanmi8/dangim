<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<script type="text/javascript">

	var	GLOBAL_WEB_ROOT					= '${WEB_ROOT}';
	var	GLOBAL_IMG_UPLOAD_URL			= '${IMG_UPLOAD_URL}';
	var	GLOBAL_WEB_URL					= '${WEB_URL}';
	var	GLOBAL_SSL_URL					= '${SSL_URL}';
	var	GLOBAL_SITE_URL					= '${SITE_URL}';
	var	GLOBAL_FLAG_SSL					= '${FLAG_SSL}';
	
	var IS_LOGIN 						= '${s_userid}' != "" ? true : false;
	var PAGE_TAG 						= {};
	var GLOBAL_LEVELCD					= '${s_levelcd}';
</script>


<script type="text/javascript"> 
	
	
	function gotomain(f){
		location.href = GLOBAL_WEB_URL+"/front/main/main.do";
	}
	
	function gotologin(f){
		location.href = GLOBAL_SSL_URL+"/front/member/login.do";	
	}
	
</script>


