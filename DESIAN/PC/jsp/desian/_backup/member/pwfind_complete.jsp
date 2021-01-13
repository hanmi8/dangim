
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_header.jsp" %>

<script type="text/javascript">
function validSubmit(f){
	var sch_userid = $.trim($('#sch_userid').val());
	var user_pw = $.trim($('#user_pw').val());
	var user_pw_check = $.trim($('#user_pw_check').val());
	
	
	if (sch_userid == null || sch_userid == ""){
		alert("아이디 오류 입력해주세요");
		return false;
	}
			
	if (isEmptyVar(user_pw)) {
		alert("비밀번호를 입력해 주세요.");
		f.user_pw.focus();
		return false;
	}

	
	if (isEmptyVar(user_pw_check)) {
		alert("비밀번호 확인을 입력해 주세요.");
		f.user_pw_check.focus();
		return false;
	}
	
	if (user_pw != user_pw_check) {
		alert("비밀번호를 다시 한번 확인해 주세요.");
		f.user_pw_check.focus();
		return false;
	}
	
	switch (checkInvalidPw(sch_userid, user_pw, 6, 20)) {
		case 1:		alert("비밀번호는 아이디와 동일하게 사용할 수 없습니다."); return false;
		case 2:		alert("비밀번호는 영문 대/소문자, 숫자를 조합하여 6~20자리로 해주세요."); return false;
		case 3:		alert("비밀번호는 반복된 문자를 2회 이상 사용할 수 없습니다."); return false;
		case 4:		alert("비밀번호는 연속된 문자열(123 또는 abc 등)을 3자 이상 사용할수 없습니다."); return false;
	}
	
		
	$.ajax({
		url: GLOBAL_SSL_URL+'/front/member/pwchang_ajax.do',
		type: 'POST',
		data:{sch_userid : sch_userid, user_pw : user_pw},
		dataType:'json',
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	    async: false,
	    cache: false,
	    beforeSend: function(xhr){
			$('#loading').show().fadeIn('fast');
	    	  
			xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
	        xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
			xhr.setRequestHeader("Progma","no-cache");
		},
		complete:function(){
			$('#loading').fadeOut();
		},      
		error: function(xhr, status, err) {
			
			if (xhr.status == 401) {
	            alert("401 Unauthorized");
			} else if (xhr.status == 403) {
	            alert("403 Forbidden");
			} else {
	            alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.");
			}		        
		},
		success: function(data) {
			
			if (data != null || data.result != null){
				if (data.result == "OK"){
	    			
	    			alert("비밀번호 변경이 완료 되었습니다.");
	    			var f = document.Frm;
	    			f.target = "_self";
	    			f.action = "/front/member/login.do";
	    			f.submit();
	    			
	    		}else{
	    			
	    			alert( data.message );
	    		}
	    	 }else{
	    		 alert(data.message);
	    	 }
		}			
	}); // $.ajax
}


function gotoLogin(f){

	location.replace(GLOBAL_SSL_URL+"/front/member/login.do");
}


$(function(){
	var user_pw = $('#user_pw');
	var user_re_pw = $('#user_pw_check');
	  		  
	user_pw.focus(function(){
		UserPwCheck();
	}); 
	user_pw.blur(function(){
		UserPwCheck();
	});

	user_re_pw.focus(function(){
		UserPwCheck();
	}); 
	user_re_pw.blur(function(){
		UserPwCheck();
	});		
});

//비밀번호 일치체크
function UserPwCheck(){
	var user_pw = $('#user_pw').val();
	var user_re_pw = $('#user_pw_check').val();
	
	if (user_pw == '' || user_re_pw == ''){
		$('#pwmsg1').html("");
		$('#pwmsg2').html("");
	}else if (user_pw == user_re_pw){
		$('#pwmsg1').html("* 비밀번호 일치");
		$('#pwmsg2').html("");
	}else{
		$('#pwmsg1').html("");
		$('#pwmsg2').html("* 비밀번호가 일치하지 않습니다.");
	}
}
</script>

<!-- container -->
<form name="Frm" method="post" >
	<input type="hidden" id="sch_userid"  name="sch_userid" value="${sch_userid}" />
	
	<!-- container -->
	<div class="container">
		<div class="subContent">
			<h3 class="sec_title member">비밀번호 재설정</h3>

			<!-- gray_box -->
			<div class="gray_box type01">
				<!-- findForm -->
				<div class="findForm2">
					<p class="setTitle">
						임시 비밀번호로 로그인 하셨습니다.<br />
						보안을 위하여 비밀번호를 새로 설정해 주세요.
					</p>
					<div class="mt40">
						<span class="title">아이디(이메일)</span>
						<div class="info id">${sch_userid}</div>
					</div>
					<div>
						<span class="title">신규 비밀번호</span>
						<div class="info">
							<input type="password" id="user_pw" name="user_pw" class="width_50 type01" />
							<span class="text01 ml10">6~20자 영문, 숫자, 특수기호 사용 가능</span>
						</div>
					</div>
					<div>
						<span class="title">비밀번호 확인</span>
						<div class="info">
							<input type="password" id="user_pw_check" name="user_pw_check" class="width_50 type01" />
							<span class="red ml10" id="pwmsg2"></span>
							<span class="blue ml10" id="pwmsg1"></span>
						</div>
					</div>
				</div>
				<!-- //findForm -->
			</div>
			<!-- //gray_box -->

			<!-- btnArea -->
			<div class="btnArea">
				<button type="button" class="fillType" onClick="validSubmit(this);">확인</button>
			</div>
			<!-- //btnArea -->

		</div>
	</div>
	<!-- //container -->
</form>


<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_footer.jsp" %>