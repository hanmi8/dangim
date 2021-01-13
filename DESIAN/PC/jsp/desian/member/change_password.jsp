<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="CmTagLib" uri="/WEB-INF/taglib/CmTagLib.tld"%>
<%@ taglib prefix="cfn" uri="/WEB-INF/taglib/CmFunction.tld"%>

<!DOCTYPE html>

<head>
	<meta charset="utf-8" />
	<title>비밀번호 변경</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />	
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=no">
	<!-- FontAwesome Icons -->
	<link rel="stylesheet" href="/resources/common/core/3rd/font-awesome/css/font-awesome.min.css">
	
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery-1.11.3.min.js"></script>

	<script type="text/javascript" src="/resources/front/pc/desian/member/js/common.js"></script>
	<script type="text/javascript" src="/resources/front/pc/desian/member/js/misc.js"></script>

<script type="text/javaScript" language="javascript">

function pf_UpdatePwd(){
		if($('#oldPassword').val() == ""){
			alert("현재 비밀번호를 입력 하십시오.");
			$('#oldPassword').focus();
			return;
		}	
		if($('#newPassword').val() == ""){
			alert("신규 비밀번호를 입력 하십시오.");
			$('#newPassword').focus();
			return;
		}	
		if($('#newPassword2').val() == ""){
			alert("비밀번호 확인을 입력 하십시오.");
			$('#newPassword2').focus();
			return;
		}	
	
        if($('#oldPassword').val() == $('#newPassword').val()) {
          alert("종전 패스워드와 동일하게 변경할 수 없습니다.");
          return;
        }
        if($('#newPassword').val() != $('#newPassword2').val()){
        	alert("newPassword와 newPassword2가 동일하지 않습니다."); 
            return;
        }
        
        var chkpwval =  checkInvalidPw('${userId}', $('#newPassword').val(), 8, 15 );
        if ( chkpwval == '1' ){
        	alert("아이디와 비밀번호가 동일합니다"); 
        	return;
        }
        
		if ( chkpwval == '2' ){
			alert("비밀번호는 영문 숫자 특수문자을 포함한 8 ~ 15자리로 가능합니다.(특수문자는 필수 포함)"); 
			return;
		}
		if ( chkpwval == '3' ){
			alert("동일문자를 3번 이상 사용할 수 없습니다."); 
			return;
		}
		if ( chkpwval == '4' ){
			alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다."); 
			return;
		}
		if ( chkpwval == '5' ){
			alert("특수문자가 1자리이상 포함되어야 하며, 특수문자는 !@$%^&* 만 허용합니다"); 
			return;
		}
		
		
        var oldPassword = $('#oldPassword').val();
        var newPassword = $('#newPassword').val();
        var newPassword2 = $('#newPassword2').val();
        
        $.ajax({
  	      url :  '/front/member/UserPasswordUpdt.do',
  	      type: 'POST',
  	      data: {oldPassword : oldPassword, newPassword : newPassword, newPassword2 : newPassword2 },
  	      dataType: 'json',
  	      timeout: 10000,
  	      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
  	      async: false,
  	      cache: false,
  	      beforeSend: function(xhr){ 
  	            xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
  	            xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
  	            xhr.setRequestHeader("Progma","no-cache");
  	       },     
  	      error: function(xhr, status, err) {
  	        
  	        if(xhr==null) {
  	          //세션이 종료된 경우 재로그인 화면 Display(2015.03.27 KYY)
  	          if(typeof(mytop.OpenReLogin)!="undefined") {
  	            _X.MsgBox('세션이 종료되어 로그인 화면으로 이동합니다.');
  	            mytop.OpenReLogin();
  	          }
  	        } else {
  	          if (xhr.status == 401) {
  	            alert("401 Unauthorized");
  	          } else if (xhr.status == 403) {
  	            alert("403 Forbidden");
  	          } else {
  	            _X.MsgBox("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.");
  	          }
  	        }
  	      },
  	      success: function(data) {    	  
  	    	 if (data.result == "OK"){
  	    		 alert("변경이 완료 되었습니다.");
  	    		
  	    		parent.$("#findmodal").dialog("close");
  	    		
  	    	 }else{
  	    		 alert(data.message );
  	    	 }
  	      }

  	  });
        
	//document.UpdtForm.submit();
    
}

</script>
<style>
table {
    margin-bottom:50px;
}
 
table tr .title {
    background:#0d6fa9;
    color:#ffff;
    /* font-weight: normal; */
	font-size: 12px;
    padding:6px; 
    width:130px;
	text-align: center;
}
 
table tr .text {
    padding-left:5px;
}
table tr .text input {
    padding-left:5px;
    width: 233px;
	height: 20px;
}
</style>

</head>
<body>
<noscript>자바스크립트를 지원하지 않는 브라우저에서는 일부 기능을 사용하실 수 없습니다.</noscript>    
<div style="width:400px;height:210px;">
	<div style="height:32px;padding-left:5px;padding-top:4px;">
		<span style="font-weight:bold;color:#7F7F7F;"><i class="fa fa-unlock-alt aria-hidden=true fa-2x"></i><!--사용자 암호변경--></span>
	</div>
<form name="UpdtForm" method="post" >
	<table>
		<caption></caption>
		<colgroup>
			<col width="130px"/>
			<col width="250px"/>
		</colgroup>
		<tbody>
	        <tr>
	            <td class="title"><i class="fa fa-user-o" aria-hidden="true"></i>&nbsp;&nbsp;<span>사용자 아이디</span></td>
	            <td class="text"><input name="emplyrId" id="emplyrId" title="사용자아이디" type="text" size="40" value="${userId}"  maxlength="20" readonly/></td>
	        </tr>
	        <tr>
	            <td class="title"><i class="fa fa-unlock" aria-hidden="true"></i>&nbsp;&nbsp;<span >현재 비밀번호</span></td>
	            <td class="text"><input name="oldPassword" id="oldPassword" title="이전 비밀번호" type="password" size="40" value=""  maxlength="100" /></td>
	        </tr> 
	        <tr>
	            <td class="title"><i class="fa fa-lock" aria-hidden="true"></i>&nbsp;&nbsp;<span >신규 비밀번호</span></td>
	            <td class="text"><input name="newPassword" id="newPassword" title="신규 비밀번호" type="password" size="40" value=""  maxlength="100" /></td>
	        </tr>     
	        <tr>
	            <td class="title"><i class="fa fa-check-square-o" aria-hidden="true"></i>&nbsp;&nbsp;<span>비밀번호 확인</span></td>
	            <td class="text"><input name="newPassword2" id="newPassword2" title="비밀번호 확인" type="password" size="40" value=""  maxlength="100" 
	            	   onKeyDown="javascript:if (event.keyCode == 13) { pf_UpdatePwd(); }" /></td>
	        </tr>
	        <tr style="height:35px;">
	            <td colspan=2 align=center><span style="color: #0000ff; font-size: 15px;">&nbsp;<i class="fa fa-info-circle"></i>&nbsp;8~15자리 영문 대,소,숫자,특수문자 4가지 혼용</span></td>       
	        </tr> 
		</tbody>
	</table>
</form>

</div>
							
</body>
</html>

